/**
 * Reducer function to handle questionzes state
 * @param {Object} questionState State values of questionzes
 * @param {*} questionzesAction The changed state
 * @returns Updated state into questionState
 */
const questionReducer = (questionState, { type, payload }) => {
	switch (type) {
		case "SET_QUIZ_ID":
			return {
				...questionState,
				quizId: payload.quizId,
			};
		case "SELECT_NEW_ANSWER":
			return {
				...questionState,
				questions: { ...questionState.questions, ...payload.questions },
			};
		case "UPDATE_SCORE":
			return {
				...questionState,
				score: questionState.score + payload.score,
			};
		case "RESET":
			return {
				...questionState,
				quizId: "",
				questions: {},
				score: 0,
			};
		default:
			return questionState;
	}
};

export { questionReducer };
