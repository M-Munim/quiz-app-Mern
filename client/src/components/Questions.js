import React, { useEffect } from 'react'
// , useState
import data from '../database/data';

const Questions = () => {

    // const [checked, setChecked] = useState(undefined)


    const question = data[0]
    useEffect(() => {
        // console.log(question);
    }, [])


    function onSelect() {
        // setChecked(false)
        // console.log("button changed");
    }
    return (
        <div className='questions'>
            <h2 className="text-light">
            {question.id} : {question.question}
            </h2>
            <ul key={question.id}>
                {
                    question.options.map((q, i) => (
                        <li key={i}>
                            <input type="radio" value={false} name='options' id={`q ${i}- option`}
                                onChange={onSelect} />

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