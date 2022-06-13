import {
	Home,
	Authentication,
	QuizCategories,
	Profile,
	Rules,
	AddQuiz,
	Quiz,
	Result,
} from "pages";
import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "routes";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/auth" element={<Authentication />} />
			<Route element={<RequireAuth />}>
				<Route path="/quiz/add" element={<AddQuiz />} />
				<Route path="/quizzes" element={<QuizCategories />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/rules" element={<Rules />} />
				<Route path="/result" element={<Result />} />
				<Route path="/quiz/:quizId" element={<Quiz />} />
			</Route>
		</Routes>
	);
};

export { AppRoutes };
