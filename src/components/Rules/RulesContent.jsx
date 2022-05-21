import { Link } from "react-router-dom";
import { useQuestion, useQuiz } from "../../context";

const RulesContent = () => {
	const { rulesData } = useQuiz();
	const { questionState } = useQuestion();
	console.log(questionState);
	return (
		<main className="main">
			<section className="p-5 my-5 flex-column justify-content-center align-center">
				<h1 className="p-2 my-2 mx-0 text-center text-bold">Rules</h1>
				<ol>
					{rulesData.length &&
						rulesData.map(({ _id, rule }) => (
							<li className="p-5 m-5" key={_id}>
								{rule}
							</li>
						))}
					<li className="no-list flex-row justify-content-center align-center flex-gap-1 flex-wrap w-100 h-auto my-10 py-10">
						<Link
							to={`/quizzes`}
							className="no-link-decoration rules-modal-btn outline-btn p-5 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1 flex-grow-1"
						>
							Back
						</Link>
						<Link
							to={`/quiz/${questionState.quizId}`}
							className="no-link-decoration rules-modal-btn primary-btn p-5 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1 flex-grow-1"
						>
							Accept
						</Link>
					</li>
				</ol>
			</section>
		</main>
	);
};
export { RulesContent };
