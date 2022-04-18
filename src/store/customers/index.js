const defaultState = {
  customers: [],
};

export const customers = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER": {
      return { ...state, customers: [...state.customers, action.payload] };
    }
    case "REMOVE_CUSTOMER": {
      const customers = state.customers.filter(
        (customer) => customer.id !== action.payload.id
      );

      return { ...state, customers };
    }
    case "REMOVE_LAST_CUSTOMER": {
      const customers = [...state.customers];
      customers.pop();
      return { ...state, customers };
    }
    default: {
      return state;
    }
  }
};
