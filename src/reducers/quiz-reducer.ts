import { QuizState, QuizActionType } from "context";
/**
 * Reducer function to handle quizzes state
 * @param {Object} quizState State values of quizzes
 * @param {*} quizzesAction The changed state
 * @returns Updated state into quizState
 */
const quizReducer = (quizState: QuizState, action: QuizActionType) => {
	switch (action.type) {
		case "ADD_NEW_QUIZ":
			return {
				...quizState,
				quizzes: [...quizState.quizzes, ...action.payload.quiz],
			};
		case "REMOVE_QUIZ":
			return {
				...quizState,
				quizzes: [...action.payload.quizzes],
			};
		case "GET_QUIZ":
			return {
				...quizState,
				quizzes: [...action.payload.quizzes],
				filterQuizData: [...action.payload.filterQuizData],
			};
		case "FILTER_QUIZ_DATA":
			return {
				...quizState,
				filterQuizData: [...action.payload.filterQuizData],
			};
		case "NEW_QUIZ":
			return {
				...quizState,
				newQuiz: { ...quizState.newQuiz, ...action.payload.newQuiz },
			};
		case "RESET_FORM":
			return {
				...quizState,
				newQuiz: {
					title: "",
				},
			};

		case "RESET":
			return {
				...quizState,
				newQuiz: {},
			};
		default:
			return quizState;
	}
};

export { quizReducer };
