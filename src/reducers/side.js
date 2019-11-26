const initialState = {
  mode: "",
  csv: [],
  relation: []
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
    case "SET_RELATION":
      return {
        ...state,
        relation: action.relation
      };
    default:
      return state;
  }
}

export default side;
