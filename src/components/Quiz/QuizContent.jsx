import { useParams } from "react-router-dom";
import { useQuestion, useQuiz } from "../../context";

const QuizContent = () => {
	const { quizState } = useQuiz();
	const { questionState, questionDispatch } = useQuestion();
	const quizData = quizState.quizzes.filter(
		(item) => item._id === questionState.quizId
	);
	return (
		<main class="main">
			<section class="flex-column flex-gap-1 w-100 h-auto w-50">
				<h3 class="card-title text-bold p-5 my-2 text-cta-color text-center">
					Game of Thrones
				</h3>
				<section class="flex-row justify-content-space-between flex-gap-2">
					<h5 class="p-2">
						<i class="text-bold">Question:</i> 1/5
					</h5>
					<h5 class="p-2">
						<i class="text-bold">Score:</i> -10
					</h5>
				</section>
				<p class="text-bold p-2">
					Who is the youngest of Ned Stark’s children?
				</p>
				<ul class="stacked-list flex-column flex-gap-1 align-center w-100 h-auto">
					<li class="no-list w-100 h-auto">
						<article class="basic-card flex-row justify-content-center align-center flex-gap-1 flex-wrap p-5 b-radius-3 my-2 cursor-pointer w-100 h-auto">
							<h3>Arya</h3>
						</article>
					</li>
					<li class="no-list w-100 h-auto">
						<article class="basic-card flex-row justify-content-center align-center flex-gap-1 flex-wrap p-5 b-radius-3 my-2 cursor-pointer w-100 h-auto">
							<h3>Sansa</h3>
						</article>
					</li>
					<li class="no-list w-100 h-auto">
						<article class="basic-card flex-row justify-content-center align-center flex-gap-1 flex-wrap p-5 b-radius-3 my-2 cursor-pointer w-100 h-auto">
							<h3>Rickon</h3>
						</article>
					</li>
					<li class="no-list w-100 h-auto">
						<article class="basic-card flex-row justify-content-center align-center flex-gap-1 flex-wrap p-5 b-radius-3 my-2 cursor-pointer w-100 h-auto">
							<h3>Bran</h3>
						</article>
					</li>
				</ul>
				<section class="flex-row justify-content-space-between">
					<a href="#" class="rui-main-nav-links no-link">
						<i class="fas fa-angle-left main-nav-icon"></i>
						Prev
					</a>
					<a
						href="https://ripple-quiz.netlify.app/pages/result/result.html"
						class="rui-main-nav-links no-link"
					>
						Next <i class="fas fa-angle-right main-nav-icon"></i>
					</a>
				</section>
			</section>
		</main>
	);
};
export { QuizContent };
