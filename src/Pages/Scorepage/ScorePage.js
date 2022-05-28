import React, { useEffect } from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import './scorepage.css'
import Lottie from 'react-lottie';
import animationData from '../../Assets/lotties/game.json';
import { Link } from 'react-router-dom'
import { useQuiz } from '../../Context/quiz-context'
import { WhatsappShareButton, WhatsappIcon } from 'react-share'

const ScorePage = () => {
    const defaultOptions = {
        loop: true,
        speed: 1,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid meet"
        }
    };
    const { quizState, quizDispatch } = useQuiz()
    const quizTitle = quizState.selectedQuiz.split(':')[1].toUpperCase()
    const currentURL = window.location.href

    useEffect(() => {
        return () => {
            quizDispatch({ type: 'CLEAR_DATA' })
        }
    }, [])

    return (
        <div className="result-page">
            <Navbar />
            <div className="result-gif">
                <Lottie
                    options={defaultOptions}
                    height={450}
                    width={450}
                />
            </div>
            <div className="result-container center-items light-txt">
                <h1 className="lg-title new-font gradient-font">YOUR SCORE IS {quizState.quizScore.score}</h1>
                <div className="stats-container">
                    <p className="md-title new-font center-txt light-grey-txt">{quizTitle}</p>
                    <p className="md-title mg-t-10 stat">Correct answers <span className="green-txt">{quizState.quizScore.score}</span></p>
                    <p className="md-title stat">Wrong answers <span className="red-txt">{quizState.quizScore.wrongAns}</span> </p>
                </div>
                <Link to="/" className="mg-t-20 light-grey-txt">Go Back to Home</Link>
                <div className='pos-abs fab bottom-right'>
                    <WhatsappShareButton url={currentURL} title={`Hey checkout my score for the ${quizTitle}`}>
                        <WhatsappIcon size={37} iconFillColor="white" round={true}></WhatsappIcon>
                    </WhatsappShareButton>
                </div>
            </div>
        </div>
    )
}

export { ScorePage }