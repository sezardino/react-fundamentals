export enum UsersActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE",
}

export interface UsersState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export interface FetchUsersAction {
  type: UsersActionTypes.FETCH_USERS;
}

export interface FetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

export interface FetchUsersFailureAction {
  type: UsersActionTypes.FETCH_USERS_FAILURE;
  payload: string;
}

export type UsersAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;
