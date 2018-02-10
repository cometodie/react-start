const initialState = [
  { name: "Jon", age: 12 },
  { name: "Sanny", age: 20 },
  { name: "Rose", age: 18 }
];

const users = (state = initialState, action) => {
  if (action.type === "ADD_USER") {
    return [...state, action.payload];
  }
  return state;
};

export default users;
