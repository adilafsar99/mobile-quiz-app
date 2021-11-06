const INITIAL_STATE = {
  
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "createResult":
      return {
        score: action.score,
        userChoices: action.userChoices,
        skipped: action.skipped,
        correctChoices: action.correctChoices,
        wrongChoices: action.wrongChoices,
      }
    default: 
      return state;
  }
}

export default reducer;