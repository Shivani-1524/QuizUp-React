import React from 'react'
import { useQuiz } from '../../../Context/quiz-context'

const Question = ({ props, submitBtnVisible, correctOptions }) => {
    const { options, question, questionNumber } = props
    const { quizDispatch, quizState } = useQuiz()
    const getColorClass = (index) => {
        if (submitBtnVisible) {
            if (quizState.optionsSelected[questionNumber - 1] == correctOptions[questionNumber - 1] && index == quizState.optionsSelected[questionNumber - 1]) {
                return 'green-bg'
            }
            if (quizState.optionsSelected[questionNumber - 1] != correctOptions[questionNumber - 1] && index == quizState.optionsSelected[questionNumber - 1]) {
                return 'red-bg'
            }
            else return 'grey-bg'
        }
        switch (index) {
            case 0: return 'first'
            case 1: return 'second'
            case 2: return 'third'
            default: return ''
        }
    }
    const handleOptionClick = (selectedOptIndex) => {
        quizDispatch({ type: 'SET_OPTIONS_SELECTED', payload: { selectedOpt: selectedOptIndex, optKey: questionNumber - 1 } })
    }

    return (
        <div className="quiz-container">
            <p className="rg-title new-font bold mb-20">Question {questionNumber}.</p>
            <p className="md-title question mb-20 ml-20"> {question}</p>
            <ul className="options pos-rel dark-txt mg-t-40">
                {options.map((option, index) => {
                    const colorClass = getColorClass(index)
                    const inputLabelLink = `q${questionNumber}-op${index}`
                    return <div key={index}>
                        <li className={`${colorClass} solid option`}>
                            <input type="radio" id={inputLabelLink} name={`q${questionNumber}-ans`} />
                            <label onClick={() => handleOptionClick(index)} htmlFor={inputLabelLink}>{option}</label>
                        </li>
                    </div>
                })}
            </ul>
        </div>
    )
}

export { Question }