import { UsersAction, UsersActionTypes, UsersState } from "./types";

const defaultState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const users = (
  state = defaultState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        users: action.payload,
      };
    case UsersActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
