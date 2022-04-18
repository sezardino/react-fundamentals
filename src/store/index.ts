import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { bank as BankReducer } from "./bank";
import { customers as CustomersReducer } from "./customers";
import { users as UsersReducer } from "./users";

const rootReducer = combineReducers({
  bank: BankReducer,
  customers: CustomersReducer,
  users: UsersReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
