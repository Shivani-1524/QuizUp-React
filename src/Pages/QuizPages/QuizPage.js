import React, { useEffect, useState, useRef, useCallback } from 'react'
import './quizpage.css'
import { useParams } from 'react-router-dom'
import { handleGetApi } from '../../Utils/get-requests'
import { Question } from './Components/Question'
import { useQuiz } from '../../Context/quiz-context'
import { Link, useNavigate } from 'react-router-dom'
import { TimerModal } from './Components/TimerModal'
import { Timer } from './Components/Timer'
import { handlePostStat } from '../../Utils/quizstats-requests'

const QuizPage = () => {

    const { quizState, quizDispatch } = useQuiz()
    const [quizSubmit, setQuizSubmit] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const { quizId } = useParams()
    const [questionsData, setQuestionsData] = useState(false)
    const { questions, quizAnswer } = questionsData
    const quizHeading = questionsData?.quizName?.split(':')[1].toUpperCase()
    const valueRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        valueRef.quizState = quizState;
    }, [quizState])

    const handleQuizSubmit = () => {
        setQuizSubmit(true)
        quizAnswer.forEach((correctAnswer, index) => {
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

    const wrapperSetModalState = (val) => {
        setShowModal(val)
    }

    useEffect(() => {
        (async () => {
            const { data, error } = await handleGetApi(`/api/quiz/${quizId}`)
            if (data) {
                setQuestionsData(data?.quiz)
                quizDispatch({ type: 'SET_SELECTED_QUIZ', payload: { quizName: data?.quiz?.quizName, quizId: data?.quiz?._id } })
            } else {
                console.log(error)
            }
        })()
        return async () => {
            const currentQuizStat = {
                quizScores: { ...valueRef.quizState.quizScore },
                quizId: { ...valueRef.quizState.selectedQuiz }
            }
            const res = await handlePostStat(currentQuizStat)
            !res?.success && console.error(res?.errorData)
        }
    }, [])




    return (
        <div className="content-container">
            <button onClick={() => {
                navigate('/', { replace: true })
            }} className='btn secondary-btn solid btn-quitquiz'>Quit Game</button>
            {!showModal && <Timer quizSubmit={quizSubmit} showModalValue={showModal} wrapperSetModalState={wrapperSetModalState} />}
            {showModal && <TimerModal handleQuizSubmit={handleQuizSubmit} showModalValue={showModal} wrapperSetModalState={wrapperSetModalState} />}
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
                            <Link to={"/score"} replace className="rg-p violet-txt bold link-respage center-txt">View Your Score
                                page</Link>
                        </div>}
                    </div>
                </div>
            }
        </div>
    )
}

export { QuizPage }
