import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Main.css'
import { useDispatch } from 'react-redux'
import { setUserId } from '../redux/resultReducer'

const Main = () => {

    const inputRef = useRef(null);
    const dispatch = useDispatch();

    function startQuiz() {
        if (inputRef.current?.value) {
            dispatch(setUserId(inputRef.current?.value))
        }else{
            alert('Enter Your Name');
        }
    }
    return (
        <>
            <div className='container'>
                <h1 className='title text-light'>Your Daily Quiz Web App</h1>

                <ol>
                    <li>You will be asked 10 questions one after another.</li>
                    <li>5 points is awarded for the correct answer.</li>
                    <li>Each question has three options. You can choose only one option.</li>
                    <li>You can review and change answers before the quiz finish.</li>
                    <li>The result will be declared at the end of the quiz.</li>
                </ol>

                <form id='form'>
                    <input ref={inputRef} type="text" placeholder='Username *' className='userid' />
                </form>

                <div className='start'>
                    <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
                </div>
            </div>
        </>
    )
}

export default Main