import React, { useEffect, useState } from 'react'
import { handleGetStat } from '../../Utils/quizstats-requests'
import { Navbar } from '../../Components/Navbar/Navbar'

const ProfilePage = () => {
    const [profileData, setProfileData] = useState(false)
    // let arr;
    // profileData && arr.push(profileData)
    useEffect(() => {
        (async () => {
            const res = await handleGetStat()
            console.log(res)
            res.success ? setProfileData(res.data.userStats) : console.error(res.errorData)
            // res.success && console.log(profileData)
        })()
    }, [])

    const getScore = (statsData) => {
        return statsData.quizScores.correctAns * statsData.attemptCount
    }
    const getKnowledgeLevel = (statsData) => {
        let knowledgeVal = statsData.length - statsData.quizScores.unanswered
        if (knowledgeVal <= 0) {
            return 'Beginner Level'
        } else if (knowledgeVal > 2) {
            return 'Intermediate Level'
        } else return 'Advanced Level'
    }
    const getCoins = (statsData) => {
        return statsData.quizScores.correctAns * 10 - statsData.quizScores.wrongAns * 5
    }
    return (
        <div>
            <Navbar />
            <h1>ProfilePage</h1>
            {profileData && profileData.map((item) =>
                <div>{item.attemptCount}</div>
            )}
        </div>
    )
}

export { ProfilePage }