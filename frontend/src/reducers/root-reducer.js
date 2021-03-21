const initState = {
  mobiles: localStorage.getItem("cart")
    ? (JSON.parse(localStorage.getItem("cart"))).mobiles
    : [],
};

const rootReducer = (state = initState, action) => {
  if (action.type === "ADD_TO_CART") {
    let updatedState = [];
    if (state.mobiles.find((mobile) => mobile.id === action.mobile.id)) {
      updatedState = state.mobiles.map((mobile) => {
        if (mobile && mobile.id === action.mobile.id) {
          mobile.quantity = mobile.quantity + action.mobile.quantity;
        }
        return mobile;
      });
    } else {
      updatedState = [...state.mobiles, action.mobile];
    }

    const newState = {
      ...state,
      mobiles: updatedState,
    };
    localStorage.setItem("cart", JSON.stringify(newState));

    return newState;
  }
  return state;
};

export default rootReducer;
