import React from 'react'
import './homepage.css'
import { Navbar } from '../../Components/Navbar/Navbar'


const HomePage = () => {
    return (
        <div>
            <Navbar />
            <section className="quiz-header">
                <div className="desc-card">
                    <h1 className="rg-title white-txt">QuizUp</h1>
                    <p className="sm-p light-txt mg-t-10">Play Quiz Games with your friends and remember to follow rule number
                        three. These Quiz categories are based around video games to help you learn the lore of each game
                        better. Test your attentiveness to game lore through these quizzes. </p>
                </div>
                <div className="rules-card">
                    <h1 className="rg-title white-txt">Rules</h1>
                    <ol className="styled-list light-txt mg-t-10">
                        <li>One point for every correct answer</li>
                        <li>No negative points for the wrong answer</li>
                        <li>Make sure to have fun while you play ;) </li>
                    </ol>
                </div>
            </section>
        </div>
    )
}

export { HomePage }