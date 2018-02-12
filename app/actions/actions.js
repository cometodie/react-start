export const addUser = user => {
  return {
    type: "ADD_USER",
    payload: user
  };
};

export const getUsers = () => dispatch => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://demo0819111.mockable.io/api/users", false);
  xhr.send();

  if (xhr.status == 200) {
    dispatch({ type: "GET_USERS", payload: JSON.parse(xhr.responseText) });
  }
};
