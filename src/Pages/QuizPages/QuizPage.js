import React, { useEffect, useState } from 'react'
import './quizpage.css'
import { useParams } from 'react-router-dom'
import { handleGetApi } from '../../Utils/getRequests'
import { Question } from './Components/Question'
import { useQuiz } from '../../Context/quiz-context'
import { Link } from 'react-router-dom'

const QuizPage = () => {
    const { quizId } = useParams()
    const [questionsData, setQuestionsData] = useState(false)
    const { questions, quizAnswer } = questionsData
    const quizHeading = questionsData?.quizName?.split(':')[1].toUpperCase()
    const { setSelectedQuiz, optionsSelected } = useQuiz()
    const [quizScore, setQuizScore] = useState('0')
    const [showSubmitBtn, setShowSubmitBtn] = useState(true)
    const [timeLeft, setTimeLeft] = useState(10)
    const [showModal, setShowModal] = useState(false)



    const handleQuizSubmit = () => {
        setShowSubmitBtn(false)
        quizAnswer.forEach((correctAnswer, index) => {
            if (optionsSelected[index] === correctAnswer) {
                setQuizScore(prev => parseInt(prev) + 1)
                console.log("press f")
            }
        })
    }

    const handleModalScoreClick = () => {
        setShowSubmitBtn(false)
        setShowModal(false)
        handleQuizSubmit()
    }



    useEffect(() => {

        (async () => {
            const { data, error } = await handleGetApi(`/api/quiz/${quizId}`)
            console.log(data)
            if (data) {
                setQuestionsData(data?.quiz)
                setSelectedQuiz(data?.quiz?._id)
            } else {
                console.log(error)
            }
        })()
        const timer =
            timeLeft > 0 && setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        timeLeft <= 1 && setShowModal(true)
        return () => clearInterval(timer);
    }, [timeLeft])

    return (
        <div className="content-container">
            <div className="quiz-timer">
                <p className="md-title violet-txt bold">TIME LEFT : <span className="orange-txt">00:{timeLeft}</span></p>
            </div>
            {showModal && <div className="modal-wrapper">
                <div className="modal-container">
                    <div className="modal-title">
                        <h4 className="rg-title">
                            Time Is Up!
                        </h4>
                    </div>
                    <p className="sm-p mg-t-20">
                        Nice try 😀 but you've used up your time.
                    </p>
                    <div className="modal-btn-wrapper mg-t-20">
                        <Link to="/">
                            <button className="btn secondary-outlined-btn modal-btn">
                                Back to Home
                            </button>
                        </Link>
                        <button onClick={handleModalScoreClick} className="btn primary-btn solid">
                            See Score
                        </button>
                    </div>
                </div>
            </div>
            }


            {questionsData &&
                <div>
                    <header className="quiz-title center-items">
                        <h1 className="lg-title new-font gradient-font center-txt"> {quizHeading}</h1>
                    </header>

                    <div className="quiz-page">
                        {questions.map(quest => <Question props={quest} key={quest.questionNumber} correctOptions={quizAnswer} submitBtnVisible={showSubmitBtn} />)}
                        {showSubmitBtn && <button id="btn-quiz-submit" onClick={handleQuizSubmit} className="btn primary-btn solid btn-quiz-sbmt">Get Your Scores</button>}
                        {!showSubmitBtn && <div>
                            <p className="rg-p score center-txt bold">Your quiz score: {quizScore}</p>
                            <Link to="/score" className="rg-p violet-txt bold link-respage center-txt">View Your Score
                                page</Link>
                        </div>}
                    </div>
                </div>
            }
        </div>
    )
}

export { QuizPage }