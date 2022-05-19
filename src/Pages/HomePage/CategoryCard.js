import React from 'react'
import { Link } from "react-router-dom"

const CategoryCard = ({ props }) => {
  const { quizImg, quizName, quizAnswer, _id } = props
  const quizNameSplit = quizName.split(':')
  const questionsNum = quizAnswer.length
  return (
    <Link to={`/quiz/${_id}`}>
      <div className="card ver-lg-card dark-bg light-txt">
        <div className="img-container">
          <img className="img-resp" src={quizImg} alt={quizNameSplit[1] + "Category"} />
        </div>
        <div className="text-card">
          <p className="sm-title bold">{quizName}</p>
          <p className="xsm-p light-txt">{questionsNum} Questions</p>
        </div>
      </div>
    </Link>
  )
}

export { CategoryCard }