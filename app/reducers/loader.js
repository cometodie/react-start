
const loading = (state = false, action) => {
  if (action.type === "TOGGLE_LOADING") {
    const newState = Object.assign({}, state);
    newState = action.payload;
    console.log(newState);
    console.log(state);
    console.log(action.payload);
    state = newState;
    return state;
  }
  return state;
};

export default loading;