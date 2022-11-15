const initialData = {
  list: [],
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_USER":
      const { id, password, remember, username } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            password: password,
            remember: remember,
            username: username,
          },
        ],
      };

    case "DELETE_USER":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      console.log(action.id, "action id");
      return {
        ...state,
        list: newList,
      };

    case "EDIT_USER":
      const neList = state.list.map((elem) =>
        elem.id !== action.payload?.id ? elem : action.payload
      );
      return {
        ...state,
        list: neList,
      };

    default:
      return state;
  }
};

export default todoReducer;
