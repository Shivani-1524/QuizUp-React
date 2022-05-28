import React from 'react'
import { Link } from 'react-router-dom'

const TimerModal = ({ handleScoreClick, quizId }) => {
    return (
        <div className="modal-wrapper">
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
                    <button onClick={handleScoreClick} className="btn primary-btn solid">
                        See Score
                    </button>
                </div>
            </div>
        </div>
    )
}

export { TimerModal }