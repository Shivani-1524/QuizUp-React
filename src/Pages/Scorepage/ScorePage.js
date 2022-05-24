import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import './scorepage.css'

const ScorePage = () => {
    return (
        <div>
            <Navbar />
            {/* <lottie-player className="result-gif" src="https://assets4.lottiefiles.com/packages/lf20_qpxqycif.json"
        background="transparent" speed="2" autoplay>
    </lottie-player> */}
            <div className="result-container center-items light-txt">
                <h1 className="lg-title new-font gradient-font">YOUR SCORE IS 5</h1>
                <div className="stats-container">
                    <p className="md-title new-font center-txt light-grey-txt">Valorant Quiz Stats </p>
                    <p className="md-title mg-t-10 stat">Correct answers <span className="green-txt">3</span></p>
                    <p className="md-title stat">Wrong answers <span className="red-txt">2</span> </p>
                </div>
                <a href="../index.html" className="mg-t-20 light-grey-txt">Go Back to Home</a>
            </div>
            <button className="fab pos-abs bottom-left">
                <i className="fa fa-solid fa-share"></i>
            </button>
        </div>
    )
}

export { ScorePage }