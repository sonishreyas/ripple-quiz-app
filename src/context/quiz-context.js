import { createContext, useContext } from "react";
import { useGetCategoriesData, useQuizData } from "../custom-hooks";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
	const categoriesData = useGetCategoriesData();
	const quizData = useQuizData();
	return (
		<QuizContext.Provider value={{ categoriesData, quizData }}>
			{children}
		</QuizContext.Provider>
	);
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
