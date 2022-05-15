import { CreateQuiz, Quizzes, CategoriesLoader } from ".";
import { useQuiz } from "../../context";
import { useState, useEffect } from "react";
const QuizCategoriesContent = () => {
	const [loader, setLoader] = useState(true);
	const { quizState } = useQuiz();
	useEffect(
		() => (quizState.quizzes.length ? setLoader(false) : setLoader(true)),
		[quizState]
	);
	return (
		<main className="main">
			<section className="mx-10">
				{!loader && <CreateQuiz />}
				{!loader && <Quizzes />}
				{loader && <CategoriesLoader />}
			</section>
		</main>
	);
};
export { QuizCategoriesContent };
