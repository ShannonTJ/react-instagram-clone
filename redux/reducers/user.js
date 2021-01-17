const initialState = {
  currentUser: null,
};

//store state and update it when an action is received
export const user = (state = initialState, action) => {
  return {
    ...state,
    currentUser: action.currentUser,
  };
};
