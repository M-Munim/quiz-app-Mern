import React, { useEffect } from 'react'

// redux store import
import { useSelector } from 'react-redux'

// custom hooks
import { useFetchQuestions } from '../hooks/FetchQuestions';

const Questions = ({ onChecked }) => {

    // const [checked, setChecked] = useState(undefined)
    const [{ isLoading, apiData, serverError }] = useFetchQuestions()

    const questions = useSelector(state => state.questions.queue[state.questions.trace])

    useEffect(() => {
        // console.log(questions);
    })

    function onSelect(i) {
        // console.log(i);
        onChecked(i)
        // setChecked(false)
        // console.log("button changed");
    }

    if (isLoading) return <h3 className='text-light'>isLoading </h3>
    if (serverError) return <h3 className='text-light'> {serverError || "Unknown Error"}</h3>

    return (
        <div className='questions'>
            <h2 className="text-light">{questions?.question}</h2>
            <ul key={questions?.id}>
                {
                    questions?.options.map((q, i) => (
                        <li key={i}>
                            <input type="radio" value={false} name='options' id={`q ${i}- option`}
                                onChange={() => onSelect(i)} />

                            <label htmlFor={`q ${i}- option`} className='text-primary'>{q}</label>
                            <div className="check"></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Questions