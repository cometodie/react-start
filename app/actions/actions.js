var addUser = function(user) {
  return {
    type: "ADD_USER",
    payload: user
  };
};

export default { addUser };
