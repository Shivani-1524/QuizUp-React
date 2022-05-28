const initQuizStats = {
    selectedQuiz: '',
    attemptedQuiz: {},
    optionsSelected: {},
    quizScore: { score: '0', wrongAns: '0' }
}

const quizReducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_SELECTED_QUIZ':
            return { ...state, selectedQuiz: payload }
        case 'SET_ATTEMPTED_QUIZ':
            return { ...state, attemptedQuiz: { ...state.attemptedQuiz, [payload]: 1 } }
        case 'SET_OPTIONS_SELECTED':
            const { selectedOpt, optKey } = payload
            return { ...state, optionsSelected: { ...state.optionsSelected, [optKey]: selectedOpt } }
        case 'SET_QUIZ_SCORE':
            return { ...state, quizScore: { ...state.quizScore, score: parseInt(state.quizScore.score) + 1 } }
        // case 'SET_QUIZ_STATS':
        //     console.log('ugh')
        //     switch (payload) {
        //         case 'correct':
        //             console.log("dips corect")
        //             return { ...state, quizScore: { ...state.quizScore, correctAns: 100 } }
        //         case 'wrong':
        //             console.log("dips wrong")
        //             return { ...state, quizScore: { ...state.quizScore, wrongAns: 50 } }
        //         default:
        //             return state
        //     }
        case 'SET_QUIZ_WRONGANS':
            return { ...state, quizScore: { ...state.quizScore, wrongAns: parseInt(state.quizScore.wrongAns) + 1 } }
        case 'CLEAR_DATA':
            return { ...initQuizStats, attemptedQuiz: state.attemptedQuiz }
        default:
            return state
    }
}

export { quizReducer, initQuizStats }