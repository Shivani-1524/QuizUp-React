import React from 'react'

const Question = ({ props }) => {
    const { } = { props }
    return (
        <div className="quiz-container">
            <p className="rg-title new-font bold mb-20">Question 3.</p>
            <p className="md-title question mb-20 ml-20"> What does Viper Not say?</p>
            <ul className="options pos-rel dark-txt mg-t-40">
                <li className="first solid">
                    <input type="radio" id="q3-op1" name="q3-ans" />
                    <label for="q3-op1">
                        Don’t Get In My Way</label>
                </li>
                <li className="second solid">
                    <input type="radio" id="q3-op2" name="q3-ans" />
                    <label for="q3-op2">
                        Welcome To My Zone</label>
                </li>
                <li className="third solid">
                    <input type="radio" id="q3-op3" name="q3-ans" />
                    <label for="q3-op3">
                        They call me a monster. Shall I prove them right?</label>
                </li>
            </ul>
        </div>
    )
}

export { Question }