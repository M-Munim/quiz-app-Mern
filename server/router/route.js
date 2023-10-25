import { Router } from "express"
const router = Router();

import * as controller from '../controllers/controller.js'

// Questions route Api
// router.get('/questions', controller.getQuestions)
// router.post('/questions', controller.insertQuestions) 

// To not repeat code we will chain above code as
router.route('/questions')
    .get(controller.getQuestions)
    .post(controller.insertQuestions)
    .delete(controller.dropQuestions)

// Questions route Api
router.route('/result')
    .get(controller.getResult)
    .post(controller.insertResult)
    .delete(controller.dropResult)

export default router;