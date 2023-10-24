import React, { useEffect } from 'react'
import '../styles/Result.css'
import { Link } from "react-router-dom"
import Resultable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { attempts_Number, earnpoints_Number, flag_Result } from '../helper/helper'

// Import Actions
import { resetAllAction } from '../redux/questionReducer'
import { resetResultAction } from '../redux/resultReducer'

const Result = () => {
  const dispatch = useDispatch()
  const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state)

  useEffect(() => {
    console.log(flag);
  })

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result)
  const earnPoints = earnpoints_Number(result, answers, 10)
  const flag = flag_Result(totalPoints, earnPoints)

  function onRestart() {
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>
        Quiz Application
      </h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className='bold'>Munim </span>
        </div>

        <div className="flex">
          <span>Total Quiz Points : </span>
          <span className='bold'>{totalPoints || 0}</span>
        </div>

        <div className="flex">
          <span>Total Questions : </span>
          <span className='bold'>{queue.length || 0}</span>
        </div>

        <div className="flex">
          <span>Total Attempts : </span>
          <span className='bold'>{attempts || 0}</span>
        </div>

        <div className="flex">
          <span>Total Earn Points : </span>
          <span className='bold'>{earnPoints || 0}</span>
        </div>

        <div className="flex">
          <span>Quiz Result </span>
          <span style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
        </div>
      </div>

      <div className="start">
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>

      {/* result table */}
      <div className="container">
        <Resultable />
      </div>
    </div>
  )
}

export default Result