import { useEffect, useState } from "react"
import data, { answers } from "../database/data"
import { useDispatch } from "react-redux"

// redux actions:
import * as Action from '../redux/questionReducer'

// fetch question hook to fetch api data and set value to store
export const useFetchQuestions = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null })

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));

        // async fun fetch backend data
        (async () => {
            try {
                let question = await data;
                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, apiData: { question, answers } }));

                    // dispatch an action
                    dispatch(Action.startExamAction({ question, answers }))
                } else {
                    throw new Error("No Question Available")
                }
            } catch (error) {
                setGetData(prev => ({ ...prev, isLoading: false }))
                setGetData(prev => ({ ...prev, serverError: error }))
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}

// Move action dispatch func
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction())
    } catch (error) {
        console.log(error);
    }
}

// prev action dispatch func
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction())
    } catch (error) {
        console.log(error);
    }
}