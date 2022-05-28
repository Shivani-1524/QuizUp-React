import React, { useEffect, useState } from 'react'


const Timer = ({ setShowModal, quizSubmit }) => {
    const [timeLeft, setTimeLeft] = useState(10)
    useEffect(() => {
        const timer = quizSubmit === false && timeLeft > 0 && setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        timeLeft <= 1 && setShowModal(true)
        return () => clearInterval(timer);
    })
    return (
        <div className="quiz-timer">
            <p className="md-title bold">TIME LEFT : 00:{timeLeft}</p>
        </div>
    )
}

export { Timer }