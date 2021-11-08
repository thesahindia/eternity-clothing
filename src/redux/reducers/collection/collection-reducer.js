const collectionReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_COLLECTIONS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default collectionReducer;
