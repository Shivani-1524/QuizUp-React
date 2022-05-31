const initQuizStats = {
    selectedQuiz: '',
    attemptedQuizStats: [],
    optionsSelected: {},
    quizScore: { correctAns: '0', incorrectAns: '0', unanswered: '0' }
}

const quizReducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_SELECTED_QUIZ':
            return { ...state, selectedQuiz: payload }
        case 'SET_ATTEMPTED_QUIZ':
            return { ...state, attemptedQuizStats: { ...state.attemptedQuiz, [payload]: 1 } }
        case 'SET_OPTIONS_SELECTED':
            const { selectedOpt, optKey } = payload
            return { ...state, optionsSelected: { ...state.optionsSelected, [optKey]: selectedOpt } }
        case 'SET_CORRECTANS':
            return { ...state, quizScore: { ...state.quizScore, correctAns: parseInt(state.quizScore.correctAns) + 1 } }
        case 'SET_WRONGANS':
            return { ...state, quizScore: { ...state.quizScore, incorrectAns: parseInt(state.quizScore.incorrectAns) + 1 } }
        case 'SET_NOANS':
            return { ...state, quizScore: { ...state.quizScore, unanswered: parseInt(state.quizScore.unanswered) + 1 } }
        case 'CLEAR_DATA':
            return { ...initQuizStats, attemptedQuiz: state.attemptedQuiz }
        default:
            return state
    }
}

export { quizReducer, initQuizStats }