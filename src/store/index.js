import { createStore, combineReducers } from "redux";

import { bank as BankReducer } from "./bank";

const rootReducer = combineReducers({
  bank: BankReducer,
});

export const store = createStore(rootReducer);
