const INITIAL_STATE = {
  isFetching: false,
  products: null,
  errorMessege: undefined,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_START":
      return { ...state, isFetching: true };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        products: action.payload,
      };
    case "FETCH_PRODUCTS_FAILURE":
      return { ...state, isFetching: false, errorMessege: action.payload };
    default:
      return state;
  }
};

export default productReducer;
