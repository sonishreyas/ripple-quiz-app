import { useParams } from "react-router-dom";
import { useQuestion, useQuiz } from "../../context";
import { useState } from "react";
const QuizContent = () => {
	const { quizState } = useQuiz();
	const { questionState, questionDispatch } = useQuestion();
	const quizData = quizState.quizzes.length
		? quizState.quizzes.filter((item) => item._id === questionState.quizId)[0]
		: {};
	console.log(quizData.mcqs);
	const [questionIndex, setQuestionIndex] = useState(0);
	const handleNextQuestion = () => setQuestionIndex(questionIndex + 1);
	const handleCalculateScore = () => {};
	return (
		<main className="main">
			{Object.keys(quizData).length && (
				<section className="flex-column flex-gap-1 w-100 h-auto w-50">
					<h3 className="card-title text-bold p-5 my-2 text-cta-color text-center">
						{quizData.title}
					</h3>
					{
						<section key={quizData.mcqs[questionIndex]._id}>
							<section className="flex-row justify-content-space-between flex-gap-2">
								<h5 className="p-2">
									<i className="text-bold">Question:</i> {questionIndex + 1}/
									{quizData.mcqs.length}
								</h5>
								{/* <h5 className="p-2">
                    <i className="text-bold">Score:</i> -10
                  </h5> */}
							</section>
							<p className="text-bold p-2">
								{quizData.mcqs[questionIndex].question}
							</p>
							<ul className="stacked-list flex-column flex-gap-1 align-center w-100 h-auto">
								{quizData.mcqs[questionIndex].options.map((item) => (
									<li className="no-list w-100 h-auto">
										<article className="basic-card flex-row justify-content-center align-center flex-gap-1 flex-wrap p-5 b-radius-3 my-2 cursor-pointer w-100 h-auto">
											<h3>{item}</h3>
										</article>
									</li>
								))}
							</ul>
							<section className="flex-row justify-content-space-between">
								{questionIndex < quizData.mcqs.length - 1 ? (
									<div
										onClick={handleNextQuestion}
										className="rui-main-nav-links no-link"
									>
										Next <i className="fas fa-angle-right main-nav-icon"></i>
									</div>
								) : (
									<button
										onClick={handleCalculateScore}
										className="rui-main-nav-links no-link"
									>
										Finish Quiz
									</button>
								)}
							</section>
						</section>
					}
				</section>
			)}
		</main>
	);
};
export { QuizContent };
