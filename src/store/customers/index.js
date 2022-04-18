const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
const REMOVE_LAST_CUSTOMER = "REMOVE_LAST_CUSTOMER";

export const addCustomerActionCreator = (customer) => ({
  type: ADD_CUSTOMER,
  payload: customer,
});
export const removeCustomerActionCreator = (id) => ({
  type: REMOVE_CUSTOMER,
  payload: id,
});
export const removeLastCustomerActionCreator = () => ({
  type: REMOVE_LAST_CUSTOMER,
});

const defaultState = {
  customers: [],
};

export const customers = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER: {
      return { ...state, customers: [...state.customers, action.payload] };
    }
    case REMOVE_CUSTOMER: {
      const customers = state.customers.filter(
        (customer) => customer.id !== action.payload
      );

      return { ...state, customers };
    }
    case REMOVE_LAST_CUSTOMER: {
      const customers = [...state.customers];
      customers.pop();
      return { ...state, customers };
    }
    default: {
      return state;
    }
  }
};
