import { Quizzes, CategoriesLoader } from ".";
import { useQuiz } from "../../context";
import { useState, useEffect } from "react";
const QuizCategoriesContent = () => {
	const [loader, setLoader] = useState<boolean>(true);
	const { quizState } = useQuiz();
	useEffect(
		() => {
			quizState?.quizzes?.length
				? setTimeout(() => setLoader(false), 100)
				: setLoader(true)
		},
		[quizState]
	);
	return (
		<main className="main">
			<section className="mx-10">
				{!loader && <Quizzes />}
				{loader && <CategoriesLoader />}
			</section>
		</main>
	);
};
export { QuizCategoriesContent };
