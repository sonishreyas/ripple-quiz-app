import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useGetCategoriesData, useGetRulesData } from "../custom-hooks";
import { quizReducer } from "../reducers";
import { getQuizDataHandler } from "../utils";
import { QuizCtxType, QuizState } from "./types";
const defaultQuizState: QuizState = {
	quizzes: [],
	filterQuizData: [],
	newQuiz: {},
};
const QuizContext = createContext<QuizCtxType | null>(null);

const QuizProvider = ({ children }: {children: React.ReactNode}) => {
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
