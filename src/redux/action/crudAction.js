export const ADD_NOTE = (data) => {
  return {
    type: "ADD",
    payload: data,
  };
};

export const VIEW_NOTE = () => {
  return {
    type: "VIEW",
  };
};
export const DELETE_NOTE = (id) => {
  return {
    type: "DELETE",
    payload: id
  };
};
