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
function* createUser(action) {
  try {
    yield call(api.createUser, {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
    });
    yield call(getUsers);
  } catch (error) {
    console.log(error);
  }
}

function* deleteUser(action) {
  try {
    yield call(api.removeUser, action.payload.id.id);
    yield call(getUsers);
  } catch (error) {
    console.log(error);
  }
}
// watcher saga function:  watches a specific redux action and acts upon that action
function* watchGetUsersRequest() {
  // takes action and worker function
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* watchDeleteUserRequest() {
  yield takeLatest(actions.Types.DELETE_USER_REQUEST, deleteUser);
}

function* watchUsersCreateRequest() {
  yield takeLatest(actions.Types.CREATE_USERS_REQUEST, createUser);
}
// fork creates a child process to enable parallel processing.
const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchUsersCreateRequest),
  fork(watchDeleteUserRequest),
];

export default usersSagas;
