import { useState, useEffect } from "react";
import axios from "axios";
const useQuizData = () => {
	const [quizData, setQuizData] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get("/api/quizzes");
				setQuizData(response.data.quizes);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return quizData;
};

export { useQuizData };
