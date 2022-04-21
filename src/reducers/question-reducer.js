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
		case "REMOVE_question":
			return {
				...questionState,
				questionzes: [...payload.questionzes],
			};
		case "GET_question":
			return {
				...questionState,
				questionzes: [...payload.questionzes],
			};
		case "NEW_question":
			return {
				...questionState,
				newquestion: { ...questionState.newquestion, ...payload.newquestion },
			};
		case "RESET_FORM":
			return {
				...questionState,
				newquestion: {
					title: "",
				},
			};

		case "RESET":
			return {
				...questionState,
				newquestion: {},
			};
		default:
			return questionState;
	}
};

export { questionReducer };
