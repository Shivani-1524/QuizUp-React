import React, { useEffect, useState } from 'react'
import './homepage.css'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer.js'
import { CategoryCard } from './CategoryCard'
import { handleGetApi } from '../../Utils/getRequests'
import { useQuiz } from '../../Context/quiz-context'


const HomePage = () => {
    const [quizData, setQuizData] = useState(false)
    const { quizDispatch } = useQuiz()
    useEffect(() => {
        quizDispatch({ type: 'CLEAR_DATA' });
        (async () => {
            const { data, error } = await handleGetApi("/api/quizzes")
            data ? setQuizData(data.quizzes) : console.log(error)
        })()
    }, [])
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
            <section className="quiz-content">
                <h1 className="md-title new-font">Categories</h1>
                <div className="quiz-cards mg-t-30">
                    {quizData && quizData.map(item => <CategoryCard key={item._id} props={item} />)}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export { HomePage }