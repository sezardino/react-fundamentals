import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, combineReducers } from "redux";

import { bank as BankReducer } from "./bank";
import { customers as CustomersReducer } from "./customers";

const rootReducer = combineReducers({
  bank: BankReducer,
  customers: CustomersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
