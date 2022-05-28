import React, { useEffect, useState } from 'react'
import './quizpage.css'
import { useParams } from 'react-router-dom'
import { handleGetApi } from '../../Utils/getRequests'
import { Question } from './Components/Question'
import { useQuiz } from '../../Context/quiz-context'
import { Link } from 'react-router-dom'
import { TimerModal } from './Components/TimerModal'
import { Timer } from './Components/Timer'

const QuizPage = () => {

    const { quizState, quizDispatch } = useQuiz()
    const [quizSubmit, setQuizSubmit] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const { quizId } = useParams()
    const [questionsData, setQuestionsData] = useState(false)
    const { questions, quizAnswer } = questionsData
    const quizHeading = questionsData?.quizName?.split(':')[1].toUpperCase()

    const handleQuizSubmit = () => {
        setQuizSubmit(true)
        quizAnswer.forEach((correctAnswer, index) => {
            console.log(quizState.optionsSelected[index])
            if (quizState.optionsSelected[index] === correctAnswer) {
                quizDispatch({ type: "SET_CORRECTANS" })
            }
            else if (quizState.optionsSelected[index] === undefined) {
                quizDispatch({ type: "SET_NOANS" })
            }
            else if (quizState.optionsSelected[index] !== correctAnswer) {
                quizDispatch({ type: "SET_WRONGANS" })
            }
        })
    }

    const handleModalScoreClick = () => {
        setShowModal(false)
        handleQuizSubmit()
    }

    useEffect(() => {
        (async () => {
            const { data, error } = await handleGetApi(`/api/quiz/${quizId}`)
            console.log(data)
            if (data) {
                setQuestionsData(data?.quiz)
                quizDispatch({ type: 'SET_SELECTED_QUIZ', payload: data?.quiz?.quizName })
            } else {
                console.log(error)
            }
        })()

    }, [])


    return (
        <div className="content-container">
            <Timer quizSubmit={quizSubmit} setShowModal={setShowModal} />
            {showModal && <TimerModal handleScoreClick={handleModalScoreClick} />}
            {questionsData &&
                <div>
                    <header className="quiz-title center-items">
                        <h1 className="lg-title new-font gradient-font center-txt">{quizHeading}</h1>
                    </header>
                    <div className="quiz-page">
                        {questions.map(quest => <Question props={quest} key={quest.questionNumber} correctOptions={quizAnswer} submitBtnVisible={quizSubmit} />)}
                        {!quizSubmit && <button id="btn-quiz-submit" onClick={handleQuizSubmit} className="btn primary-btn solid btn-quiz-sbmt">Get Your Scores</button>}
                        {quizSubmit && <div>
                            <p className="rg-p score center-txt bold">Your quiz score: {quizState.quizScore.correctAns}</p>
                            <Link to={"/score"} className="rg-p violet-txt bold link-respage center-txt">View Your Score
                                page</Link>
                        </div>}
                    </div>
                </div>
            }
        </div>
    )
}

export { QuizPage }
