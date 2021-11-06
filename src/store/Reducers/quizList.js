const INITIAL_STATE = {
  quizList: ["General Knowledge", "Sports", "Web Development", "World Affairs"],
  quizIndex: 0
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "selectQuiz":
      return {
        ...state,
        quizIndex: action.quizIndex
      }
    default:
      return state;
  }
}

export default reducer;