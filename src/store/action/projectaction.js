export const addUser = ({ id, Sname, Fname, DFB, State, gender }) => {
  console.log(Sname, "adduese Sname");
  return {
    type: "ADD_USER",
    payload: {
      id: new Date().getTime().toString(),
      Sname: Sname,
      Fname: Fname,
      DFB: DFB,
      State: State,
      gender: gender,
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
