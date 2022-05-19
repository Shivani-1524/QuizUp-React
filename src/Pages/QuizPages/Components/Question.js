import React, { useEffect } from 'react'
import { useQuiz } from '../../../Context/quiz-context'

const Question = ({ props }) => {
    const { options, question, questionNumber, clickedSubmit, correctOptions } = props
    const { setOptionsSelected } = useQuiz()
    const getColorClass = (index) => {
        switch (index) {
            case 0: return 'first'
            case 1: return 'second'
            case 2: return 'third'
            default: return ''
        }
    }
    const handleOptionClick = (index) => {
        setOptionsSelected(prev => ({ ...prev, [questionNumber - 1]: index }))
    }
    (() => {
        if (clickedSubmit === false) console.log("PODI MOMMYYY")
    })()
    return (
        <div className="quiz-container">
            <p className="rg-title new-font bold mb-20">Question {questionNumber}.</p>
            <p className="md-title question mb-20 ml-20"> {question}</p>
            <ul className="options pos-rel dark-txt mg-t-40">
                {options.map((option, index) => {
                    const colorClass = getColorClass(index)
                    const inputLabelLink = `q${questionNumber}-op${index}`
                    return <div key={index}>
                        <li className={`${colorClass} solid`}>
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