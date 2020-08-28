import { takeEvery, call, fork } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

// worker saga function
function* getUsers() {
  let result = yield call(api.getUsers);
  console.log(result);
  try {
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
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
