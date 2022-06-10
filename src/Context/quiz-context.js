import { createContext, useContext, useReducer } from "react";
import { quizReducer, initQuizStats } from "../Reducer/quiz-reducer";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
    // const [selectedQuiz, setSelectedQuiz] = useState('default');
    // const [optionsSelected, setOptionsSelected] = useState({});
    // const [quizScore, setQuizScore] = useState('0');
    // const [attemptedQuiz, setAttemptedQuiz] = useState('')
    const [quizState, quizDispatch] = useReducer(quizReducer, initQuizStats);
    return (
        <QuizContext.Provider value={{ quizState, quizDispatch }}>
            {children}
        </QuizContext.Provider>
    );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
