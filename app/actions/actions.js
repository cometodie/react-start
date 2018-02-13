export const addUser = user => {
  return {
    type: "ADD_USER",
    payload: user
  };
};

export const getUsers = () => dispatch => {
  dispatch({ type: "TOGGLE_LOADING", payload: true});
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://demo0819111.mockable.io/api/users", false);
  xhr.send();

  if (xhr.status == 200) {
    dispatch({ type: "GET_USERS", payload: JSON.parse(xhr.responseText) });
    setTimeout(() => {
      dispatch({ type: "TOGGLE_LOADING", payload: false});
    }, 1000);
  }
};

export const setLoading = status => {
  console.log("exec");
  return {
    type: "TOGGLE_LOADING",
    payload: status
  }
}