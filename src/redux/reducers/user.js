 const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.payload;

    default:
      return {};
  }
};

export default userReducer;