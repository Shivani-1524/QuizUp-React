import React, { useState, useEffect } from 'react'
import { useQuiz } from '../../../Context/quiz-context'

const Question = ({ props, submitBtnVisible, correctOptions }) => {
    const { options, question, questionNumber } = props
    const { quizDispatch, quizState } = useQuiz()
    const [correctAnsCount, setCorrectAnsCount] = useState(1)
    const [wrongAnsCount, setWrongAnsCount] = useState(1)
    let count = 0
    console.log("options: ", options)
    //NOT SURE WHY THE CONSOLE.LOGS ARE PRINTING LIKE THAT

    const getColorClass = (index) => {
        count++;
        console.log('hi', count, index)
        // if (submitBtnVisible) {
        //     if (quizState?.optionsSelected[questionNumber - 1] == correctOptions[questionNumber - 1] && index == quizState?.optionsSelected[questionNumber - 1]) {
        //         quizDispatch({ type: 'SET_QUIZ_STATS', payload: 'correct' })
        //         // setCorrectAnsCount(prev => prev + 1)
        //         // console.log("CORRECT")
        //         return 'green-bg'
        //     }
        //     if (quizState?.optionsSelected[questionNumber - 1] != correctOptions[questionNumber - 1] && index == quizState?.optionsSelected[questionNumber - 1]) {
        //         quizDispatch({ type: 'SET_QUIZ_STATS', payload: 'wrong' })
        //         // setWrongAnsCount(prev => prev + 1)
        //         console.log("wrong")
        //         return 'red-bg'
        //     }
        //     else return 'grey-bg'
        // }

        // switch (index) {
        //     case 0: return 'first'
        //     case 1: return 'second'
        //     case 2: return 'third'
        //     default: return ''
        // }
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
                    console.log("potato", index, option)
                    const colorClass = getColorClass(index)
                    const inputLabelLink = `q${questionNumber}-op${index}`
                    return <div key={index}>
                        {/* <li className={`${colorClass} solid option`}>
                            <input type="radio" id={inputLabelLink} name={`q${questionNumber}-ans`} />
                            <label onClick={() => handleOptionClick(index)} htmlFor={inputLabelLink}>{option}</label>
                        </li> */}
                    </div>
                })}
            </ul>
        </div>
    )
}

export { Question }