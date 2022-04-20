import { Link, useParams } from "react-router-dom";

const RulesContent = () => {
	const { quizId } = useParams();
	return (
		<main className="main">
			<section className="text-center p-5 my-5">
				<h3 className="p-2 my-2 mx-0 text-center">Rules</h3>
				<ol>
					<li className="p-5 m-5">
						A team gets 30 seconds to answer the question intended for it, and
						is awarded 20 points for answering it.
					</li>
					<li className="p-5 m-5">
						A team gets 30 seconds to answer the question intended for it, and
						is awarded 20 points for answering it.
					</li>
					<li className="p-5 m-5">
						A team gets 30 seconds to answer the question intended for it, and
						is awarded 20 points for answering it.
					</li>
					<li className="p-5 m-5 no-list">
						<Link
							to={`/quiz/${quizId}`}
							className="no-link-decoration rules-modal-btn primary-btn p-5 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1 flex-grow w-100 h-auto"
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
