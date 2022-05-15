import { createContext, useContext, useEffect, useReducer } from "react";
import { useGetCategoriesData, useGetRulesData } from "../custom-hooks";
import { quizReducer } from "../reducers";
import { getQuizDataHandler } from "../utils";
const defaultQuizState = {
	quizzes: [],
	newQuiz: {},
};
const QuizContext = createContext(defaultQuizState);

const QuizProvider = ({ children }) => {
	const categoriesData = useGetCategoriesData();
	const [quizState, quizDispatch] = useReducer(quizReducer, defaultQuizState);
	const rulesData = useGetRulesData();
	useEffect(() => getQuizDataHandler(quizDispatch), []);

	return (
		<QuizContext.Provider
			value={{ categoriesData, quizState, quizDispatch, rulesData }}
		>
			{children}
		</QuizContext.Provider>
	);
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
