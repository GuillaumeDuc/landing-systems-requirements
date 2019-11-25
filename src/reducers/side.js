const initialState = {
  mode: "",
  csv: ""
};

function side(state = initialState, action) {
  switch (action.type) {
    case "SET_MODE":
      return {
        ...state,
        mode: action.mode
      };
    case "SET_CSV":
      return {
        ...state,
        csv: action.csv
      };
    default:
      return state;
  }
}

export default side;
