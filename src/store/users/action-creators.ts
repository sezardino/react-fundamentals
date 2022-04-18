import axios from "axios";
import { Dispatch } from "react";
import { UsersAction, UsersActionTypes } from "./types";

export const fetchUsers = () => async (dispatch: Dispatch<UsersAction>) => {
  try {
    dispatch({ type: UsersActionTypes.FETCH_USERS });
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch({
      type: UsersActionTypes.FETCH_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: UsersActionTypes.FETCH_USERS_FAILURE,
      payload: "Error fetching users",
    });
  }
};
