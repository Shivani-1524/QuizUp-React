import React, { useEffect, useState } from 'react'


const Timer = ({ showModalValue, quizSubmit, wrapperSetModalState }) => {
    const [timeLeft, setTimeLeft] = useState(30)
    useEffect(() => {
        const timer = quizSubmit === false && timeLeft > 0 && setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        timeLeft < 1 && wrapperSetModalState(true)
        return () => clearInterval(timer);
    })
    return (
        <div className="quiz-timer">
            <p className="md-title bold">TIME LEFT : 00:{timeLeft}</p>
        </div>
    )
}

export { Timer }