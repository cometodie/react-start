const snackbar = (state = '', action) => {
    if (action.type === "SHOW_SNACKBAR") {
      let newState = Object.assign({}, state);
      newState = action.payload;
      return newState;
    }
    return state;
  };
  
  export default snackbar;
  