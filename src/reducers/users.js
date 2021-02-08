import { Types } from "../actions/users";
const INITIAL_STATE = {
  items: [],
};
const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        items: action.payload.items,
      };
    case Types.SET_UPDATE_USER:
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
        item: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default usersReducer;
