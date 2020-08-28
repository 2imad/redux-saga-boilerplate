import { Types } from "../actions/users";
const INITIAL_STATE = {
  items: [],
};
const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_USERS_REQUEST:
      return {
        items: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default usersReducer;
