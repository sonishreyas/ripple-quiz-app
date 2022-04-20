import { createContext, useContext } from "react";
import {
	useGetCategoriesData,
	useGetRulesData,
	useQuizData,
} from "../custom-hooks";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
	const categoriesData = useGetCategoriesData();
	const quizData = useQuizData();
	const rulesData = useGetRulesData();
	return (
		<QuizContext.Provider value={{ categoriesData, quizData, rulesData }}>
			{children}
		</QuizContext.Provider>
	);
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
