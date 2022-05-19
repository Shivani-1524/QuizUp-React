import { createContext, useContext, useState } from "react"

const QuizContext = createContext()

const QuizProvider = ({ children }) => {
    const [selectedQuiz, setSelectedQuiz] = useState('default');
    const [optionsSelected, setOptionsSelected] = useState({});
    return (
        <QuizContext.Provider value={{ selectedQuiz, setSelectedQuiz, optionsSelected, setOptionsSelected }}>
            {children}
        </QuizContext.Provider>
    )

}

const useQuiz = () => useContext(QuizContext)

export { useQuiz, QuizProvider }