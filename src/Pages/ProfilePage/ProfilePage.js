import React, { useEffect, useState } from 'react'
import { handleGetStat } from '../../Utils/quizstats-requests'
import { Navbar } from '../../Components/Navbar/Navbar'
import { FontAwesomeIcon, faCircleUser } from '../../Assets/icons/icons'
import './profilepage.css'

const ProfilePage = () => {
    const [profileData, setProfileData] = useState(false)
    const [userStatsResult, setUserStatsResult] = useState(false)

    useEffect(() => {
        (async () => {
            const res = await handleGetStat()
            console.log(res)
            if (res?.success) {
                setProfileData(res.data.userStats)
                setUserStatsResult(res.data.userStats.reduce(getUserCalcStats, { coins: 20, knowledgeLevel: 0, score: 0 }))
            } else {
                console.error(res?.errorData)
            }
        })()
    }, [])

    const getUserCalcStats = (acc, curr) => {
        return {
            ...acc,
            score: acc.score + parseInt(curr.quizScores.correctAns) * parseInt(curr.attemptCount),
            knowledgeLevel: acc.knowledgeLevel + parseInt(curr.quizScores.correctAns) + parseInt(curr.quizScores.incorrectAns) - parseInt(curr.quizScores.unanswered),
            coins: acc.coins + ((parseInt(curr.quizScores.correctAns) * 10) - (parseInt(curr.quizScores.incorrectAns) * 7))
        }
    }

    return (
        <div >
            <Navbar />
            <div className='profile-content'>
                <h1 className='center-txt mg-t-50'>Your Profile</h1>
                <div className='user-card flex-row'>
                    <FontAwesomeIcon icon={faCircleUser} className="user-thumbnail" />
                    <div className='flex-row profile-txt'>
                        <div>
                            <p>Username: </p>
                            <p>Email:</p>
                            <p>Quizes attempted: </p>
                        </div>
                        <div className='bold'>
                            <p>Pablo Kashyp</p>
                            <p>pablokash@gmail.com</p>
                            {profileData && <p>{profileData.length}</p>}
                        </div>
                    </div>
                </div>
                {profileData &&
                    <div className='card-stat-container flex-row mg-t-50'>
                        <div className="card-stat violet-bg">
                            <p className='stat-txt'>{userStatsResult.score} 🎯</p>
                            <p className='center-txt'>Overall Score</p>
                        </div>
                        <div className="card-stat black-bg">
                            <p className='stat-txt'>{userStatsResult.knowledgeLevel} 🧠</p>
                            <p className='center-txt'>Knowledge Level</p>
                        </div>
                        <div className="card-stat yellow-bg">
                            <p className='stat-txt'>{userStatsResult.coins} 💰</p>
                            <p className='center-txt'>Coins Collected</p>
                        </div>
                    </div>
                }
                <div className='stats-rules-container'>
                    <h1 className='center-txt'>How Do These QuizStats Work?</h1>
                    <div>
                        <ul className="styled-list list-style-none mg-t-20">
                            <li>The <span className='bold'>overall score</span> is calculated based on the number of attempts you've given for each topic and on the correct answers </li>
                            <li>Your <span className='bold'>knowledge level</span> is deducted based on the number of questions you've skipped</li>
                            <li>Every Player starts off with <span className='bold'>20 coins</span> and is increased and decreased with the number of correct or wrong answers</li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    )
}

export { ProfilePage }