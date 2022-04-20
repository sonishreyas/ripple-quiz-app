/**
 * Reducer function to handle quizzes state
 * @param {Object} quizState State values of quizzes
 * @param {*} quizzesAction The changed state
 * @returns Updated state into quizState
 */
const quizReducer = (quizState, { type, payload }) => {
	switch (type) {
		case "ADD_NEW_QUIZ":
			return {
				...quizState,
				quizzes: [...quizState.quizzes, ...payload.quiz],
			};
		case "REMOVE_QUIZ":
			return {
				...quizState,
				quizzes: [...payload.quizzes],
			};
		case "GET_QUIZ":
			return {
				...quizState,
				quizzes: [...payload.quizzes],
			};
		case "NEW_QUIZ":
			return {
				...quizState,
				newQuiz: { ...quizState.newQuiz, ...payload.newQuiz },
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
