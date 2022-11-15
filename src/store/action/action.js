export const addUser = ({ id, password, remember, username }) => {
  return {
    type: "ADD_USER",
    payload: {
      id: new Date().getTime().toString(),
      password: password,
      remember: remember,
      username: username,
    },
  };
};

export const deleteUser = (id) => {
  console.log(id, "deleteuser id ");
  return {
    type: "DELETE_USER",
    id,
  };
};

export const editUser = (data, id) => {
  return {
    type: "EDIT_USER",
    key: id,
    payload: data,
  };
};
