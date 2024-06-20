import { Router } from "express";
import {
    getQuiz,
    handleQuizStep,
    quizAiPrompt,
} from "../controllers/quiz.js";

const router = Router();

router.get("/", getQuiz);
router.post("/handleQuizStep", handleQuizStep); 
router.post("/AIresults", quizAiPrompt);


export default router;
