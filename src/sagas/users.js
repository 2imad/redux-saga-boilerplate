import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

// worker saga function
function* getUsers() {
  try {
    let {
      data: { data },
    } = yield call(api.getUsers);
    yield put(actions.getUsersSuccess({ items: data }));
  } catch (error) {
    console.log(error);
  }
}

// watcher saga function:  watches a specific redux action and acts upon that action
function* watchGetUsersRequest() {
  // takes action and worker function
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}
// fork creates a child process to enable parallel processing.
const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;
