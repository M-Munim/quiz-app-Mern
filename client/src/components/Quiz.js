import React, { useEffect, useState } from 'react'
import Questions from './Questions';
import { MoveNextQuestion } from '../hooks/FetchQuestions';
import { MovePrevQuestion } from '../hooks/FetchQuestions';
import { PushAnswer } from '../hooks/setResult';
import { Navigate } from 'react-router-dom'
// redux store import
import { useSelector, useDispatch } from 'react-redux'

const Quiz = () => {
    const [check, setChecked] = useState(undefined)
    const result = useSelector(state => state.result.result)
    const { queue, trace } = useSelector(state => state.questions)
    const dispatch = useDispatch()

    // Next Button event handler
    function onNext() {
        // console.log("On next Click");
        if (trace < queue.length) {
            // update the trace value by one using MoveNextAction
            dispatch(MoveNextQuestion())

            // insert new result in array
            if (result.length <= trace) {
                dispatch(PushAnswer(check))
            }
        }
        // reset value
        setChecked(undefined)
    }

    // Prev Button event handler
    function onPrev() {
        // console.log("On onPrev Click");
        if (trace > 0) {
            // update the trace value by one using MoveNextAction
            dispatch(MovePrevQuestion())
        }
    }

    function onChecked(check) {
        console.log(check);
        setChecked(check)
    }

    // finished exam after last question
    if (result.length && result.length >= queue.length) {
        return <Navigate to={'/result'} replace={true}></Navigate>
    }


    return (
        <div className="container">
            <h1 className="title text-light">
                Quiz Application
            </h1>

            {/* Display Questions */}
            <Questions onChecked={onChecked} />

            <div className="grid">
                {trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}

export default Quiz