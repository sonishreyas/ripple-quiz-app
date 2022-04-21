import { createContext, useContext, useReducer } from "react";
import { questionReducer } from "../reducers";
const defaultQuestionState = {
	quizId: "",
	questions: [
		{
			_id: "",
			selectedAnswer: "",
			correctAnswer: "",
		},
	],
	score: 0,
};
const QuestionContext = createContext(defaultQuestionState);

const QuestionProvider = ({ children }) => {
	const [questionState, questionDispatch] = useReducer(
		questionReducer,
		defaultQuestionState
	);

	return (
		<QuestionContext.Provider value={{ questionState, questionDispatch }}>
			{children}
		</QuestionContext.Provider>
	);
};

const useQuestion = () => useContext(QuestionContext);

export { useQuestion, QuestionProvider };
