import { TypedUseSelectorHook } from "react-redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from ".";
import * as UsersActionCreators from "./users/action-creators";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(UsersActionCreators, dispatch);
};
