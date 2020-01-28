import headermenu from "../apis/headermenu";

// eslint-disable-next-line import/prefer-default-export
export const fetchMenuitems = () => async dispatch => {
  const responce = await headermenu.get("/headermenu.json");
  dispatch({ type: "FETCH_MENUITEMS", payload: responce.data.headermenu });
};

export const selectItemMenu = id => {
  return {
    // Return an action
    type: "ITEMMENU_SELECTED",
    payload: id
  };
};
