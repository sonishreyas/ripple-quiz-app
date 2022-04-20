import axios from "axios";
/**
 * Add video data to quiz
 * @param {*} element
 * @param {Object} videoData video to be added in quiz
 * @param {string} token encodedToken of user
 * @param {function} quizDispatch Reducer function
 */
const addNewQuizHandler = (element, quizData, quizDispatch) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(
				`/api/quizzes`,
				{ quiz: quizData },
				{
					headers: {
						Accept: "*/*",
						authorization: JSON.parse(localStorage.getItem("user"))?.token,
					},
				}
			);
			quizDispatch({
				type: "ADD_NEW_QUIZ",
				payload: {
					quiz: response.data.quizes.slice(-1),
				},
			});
			quizDispatch({
				type: "NEW_QUIZ_VALUE",
				payload: {
					newQuiz: "",
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Remove data from quiz
 * @param element
 * @param {string} videoId videoId to remove from quiz
 * @param {string} token encodedToken of user
 * @param {function} quizDispatch Reducer function
 */
const removeQuizHandler = (element, quizId, quizDispatch) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.delete(`/api/quiz/${quizId}`, {
				headers: {
					Accept: "*/*",
					authorization: JSON.parse(localStorage.getItem("user"))?.token,
				},
			});
			quizDispatch({
				type: "REMOVE_QUIZ",
				payload: {
					quizzes: response.data.quizzes,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Retrieve quiz data
 * @param element
 * @param {string} token encodedToken of user
 * @param {function} quizDispatch Reducer function
 */
const getQuizDataHandler = (quizDispatch) => {
	(async () => {
		try {
			const response = await axios.get(`/api/quizzes`);
			quizDispatch({
				type: "GET_QUIZ",
				payload: {
					quizzes: response.data.quizes,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

export { addNewQuizHandler, getQuizDataHandler, removeQuizHandler };
