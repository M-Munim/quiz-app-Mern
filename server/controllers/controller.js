import Questions from '../models/questionSchema.js'
import Results from '../models/resultSchema.js'
import questions, { answers } from '../database/data.js'

// get all questions
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

export async function insertQuestions(req, res) {
    try {
        // Assuming questions and answers are defined somewhere in your code
        const data = await Questions.insertMany({ questions, answers });
        res.json({ msg: "Data Saved Successfully...!", data });
    } catch (error) {
        res.json({ error: error.message });
    }
}

// delete all questions
export async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany();
        res.json({ msg: "Deleted Successfully :)" })
    } catch (error) {
        res.json({ error })
    }
}

// RESULT:



// get all Result
export async function getResult(req, res) {
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

/** post all result */
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achieved } = req.body;
        if (!username || !result) {
            throw new Error('Data Not Provided...!');
        }

        const data = await Results.create({ username, result, attempts, points, achieved });

        res.json({ msg: "Result Saved Successfully...!", data });
    } catch (error) {
        res.json({ error: error.message });
    }
}

// delete all questions
export async function dropResult(req, res) {
    try {
        await Results.deleteMany();
        res.json({ msg: "Result Deleted " })
    } catch (error) {
        res.json({ error })
    }
}