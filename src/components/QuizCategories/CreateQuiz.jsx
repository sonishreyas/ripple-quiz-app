import { useAuth, useQuestion, useQuiz } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import { removeQuizHandler } from "../../utils";
const CreateQuiz = () => {
	const navigate = useNavigate();
	const { quizState, quizDispatch } = useQuiz();
	const { questionDispatch } = useQuestion();
	const { authState } = useAuth();
	const myQuizData = quizState.quizzes.filter(
		(item) => item.createdBy === authState._id
	);
	const handleDeleteQuiz = (e, _id) => removeQuizHandler(e, _id, quizDispatch);
	const handleSetQuizId = (_id) => {
		questionDispatch({ type: "SET_QUIZ_ID", payload: { quizId: _id } });
		navigate("/rules");
	};
	return (
		<div className="m-5 p-5 ">
			<section className="quiz-container flex-row justify-content-space-between align-center p-7 w-100 flex-wrap">
				<h2 className="text-bold">My Quiz</h2>
				<Link
					to="/quiz/add"
					className="no-link-decoration outline-btn p-5 b-radius-2 mx-5 my-0 text-bold icon-text-btn flex-row justify-content-center align-center flex-gap-1 address-btn"
				>
					<span>
						<i className="fas fa-plus"></i>
					</span>
					<p className="btn-text">Add new quiz</p>
				</Link>
			</section>
			<section className="flex-row flex-wrap justify-align-center align-center flex-gap-2">
				{myQuizData.length ? (
					myQuizData.map(({ _id, title, description, imageURL }) => (
						<article
							key={_id}
							className="card vertical card-shadow p-5 b-radius-2 mt-10"
						>
							<section className="card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2">
								<img
									src={imageURL}
									alt="Quiz topic image"
									className="card-image b-radius-2 mt-2"
								/>
							</section>
							<section className="card-content p-5 pb-0 text-center">
								<h3 className="card-title text-bold p-5 my-2 text-cta-color">
									{title}
								</h3>
								<p className="card-category my-2">{description}</p>
							</section>
							<section className="flex-row flex-gap-1 justify-content-center align-center w-100">
								<button
									onClick={() => handleSetQuizId(_id)}
									className="no-link-decoration primary-btn p-5 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1 flex-grow w-100 h-auto text-tertiary-color"
								>
									Play
								</button>
								<button
									className="outline-btn p-5 b-radius-2 text-bold flex-row justify-content-center align-center flex-gap-1 my-5 flex-grow w-100 h-auto"
									onClick={(e) => handleDeleteQuiz(e, _id)}
								>
									Delete Quiz
								</button>
							</section>
							<i className="fas fa-share-alt b-radius-circle card-dismiss-btn m-3 p-1"></i>
						</article>
					))
				) : (
					<h3 className="p-5 m-5 text-center">You can add your own Quiz.</h3>
				)}
			</section>
		</div>
	);
};

export { CreateQuiz };
