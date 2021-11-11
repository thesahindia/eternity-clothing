const INITIAL_STATE = {
  isFetching: false,
  collections: null,
  errorMessege: undefined,
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_COLLECTIONS_START":
      return { ...state, isFetching:true};
    case "FETCH_COLLECTIONS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case "FETCH_COLLECTIONS_FAILURE":
      return { ...state, isFetching: false, errorMessege:action.payload };
    default:
      return state;
  }
};

export default collectionReducer;
