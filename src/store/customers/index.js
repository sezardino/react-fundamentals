const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
const REMOVE_LAST_CUSTOMER = "REMOVE_LAST_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";

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
export const addManyCustomersActionCreator = (customers) => ({
  type: ADD_MANY_CUSTOMERS,
  payload: customers,
});

export const fetchCustomers = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => dispatch(addManyCustomersActionCreator(json)));
};

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
    case ADD_MANY_CUSTOMERS: {
      return { ...state, customers: [...state.customers, ...action.payload] };
    }
    default: {
      return state;
    }
  }
};
