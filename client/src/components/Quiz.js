// ANSER PUSHED TO ARRAY

import React, { useEffect, useState } from 'react'
import Questions from './Questions';
import { MoveNextQuestion } from '../hooks/FetchQuestions';
import { MovePrevQuestion } from '../hooks/FetchQuestions';
import { PushAnswer } from '../hooks/setResult';

// redux store import
import { useSelector, useDispatch } from 'react-redux'

const Quiz = () => {
    const [check, setChecked] = useState(undefined)
    const state = useSelector(state => state)
    const { queue, trace } = useSelector(state => state.questions)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(state);
    })

    // Next Button event handler
    function onNext() {
        console.log("On next Click");
        if (trace < queue.length) {
            // update the trace value by one using MoveNextAction
            dispatch(MoveNextQuestion())
            dispatch(PushAnswer(check))
        }
    }

    function onChecked(check) {
        console.log(check);
        setChecked(check)
    }

    // Prev Button event handler
    function onPrev() {
        console.log("On onPrev Click");
        if (trace > 0) {
            // update the trace value by one using MoveNextAction
            dispatch(MovePrevQuestion())
        }
    }

    return (
        <div className="container">
            <h1 className="title text-light">
                Quiz Application
            </h1>

            {/* Display Questions */}
            <Questions onChecked={onChecked} />

            <div className="grid">
                <button className='btn prev' onClick={onPrev}>Prev</button>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}

export default Quiz