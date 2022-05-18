import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './quizpage.css'
import { useParams } from 'react-router-dom'

const QuizPage = () => {
    const { quizId } = useParams()
    const [questionsData, setQuestionsData] = useState(false)
    useEffect(() => {
        (async () => {
            const res = await axios.get(`/api/quiz/${quizId}`)
            setQuestionsData(res.data)
        })()
    }, [])
    return (
        <div className="content-container">
            {/* <div className="quiz-timer">
                <p className="md-title violet-txt bold">TIME LEFT : <span id="timer-txt" className="orange-txt">00:30</span></p>
            </div>
            <div className="modal-wrapper" id="modal-wrapper">
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
                        <a href="../index.html">
                            <button className="btn secondary-outlined-btn modal-btn" id="modal-btn-cancel">
                                Back to Home
                            </button>
                        </a>
                        <button id="time-up-submit modal-btn-ok" className="btn primary-btn solid">
                            See Score
                        </button>
                    </div>
                </div>
            </div> */}

            <header className="quiz-title center-items">
                <h1 className="lg-title new-font gradient-font center-txt">VALORANT QUIZ</h1>
            </header>

            <div className="quiz-page">

                <button id="btn-quiz-submit" className="btn primary-btn solid btn-quiz-sbmt">Get Your Scores</button>
                <div>
                    <p className="rg-p score center-txt bold">Your quiz score: </p>
                    <a href="../Result/result.html" className="rg-p violet-txt bold link-respage center-txt">View Your Score
                        page</a>
                </div>
            </div>
        </div>
    )
}

export { QuizPage }