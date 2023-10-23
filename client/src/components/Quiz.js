import React, { useEffect } from 'react'
import Questions from './Questions';
import { MoveNextQuestion } from '../hooks/FetchQuestions';
import { MovePrevQuestion } from '../hooks/FetchQuestions';

// redux store import
import { useSelector, useDispatch } from 'react-redux'

const Quiz = () => {
    // const trace = useSelector(state => state.questions.trace)
    const { queue, trace } = useSelector(state => state.questions)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(trace);
    })

    // Next Button event handler
    function onNext() {
        console.log("On next Click");
        if (trace < queue.length) {
            // update the trace value by one using MoveNextAction
            dispatch(MoveNextQuestion())
        }
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
            <Questions />

            <div className="grid">
                <button className='btn prev' onClick={onPrev}>Prev</button>
                <button className='btn next' onClick={onNext}>Next</button>
            </div>
        </div>
    )
}

export default Quiz