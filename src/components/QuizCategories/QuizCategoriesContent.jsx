import { CreateQuiz, Quizzes } from ".";
const QuizCategoriesContent = () => {
	return (
		<main className="main">
			<section className="mx-10">
				<CreateQuiz />
				<Quizzes />
			</section>
		</main>
	);
};
export { QuizCategoriesContent };
