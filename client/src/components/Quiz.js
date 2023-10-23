import React, { useEffect } from 'react'
import Questions from './Questions';

// redux store import
import { useSelector } from 'react-redux'

const Quiz = () => {
    const state = useSelector(state => state)

    useEffect(() => {
        console.log(state);
    })

    // Next Button event handler
    function onNext() {
        console.log("On next Click");
    }

    // Prev Button event handler
    function onPrev() {
        console.log("On onPrev Click");
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