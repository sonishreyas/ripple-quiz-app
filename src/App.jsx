import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import {
	Home,
	Authentication,
	QuizCategories,
	Profile,
	Rules,
	AddQuiz,
	Quiz,
} from "./pages";
import { Header, Footer } from "./components";
import { RequireAuth } from "./utils";
function App() {
	return (
		<div className="grid-areas-3-rows">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth" element={<Authentication />} />
				<Route
					path="/quizzes"
					element={
						<RequireAuth>
							<QuizCategories />
						</RequireAuth>
					}
				/>
				<Route
					path="/profile"
					element={
						<RequireAuth>
							<Profile />
						</RequireAuth>
					}
				/>
				<Route
					path="/quiz/add"
					element={
						<RequireAuth>
							<AddQuiz />
						</RequireAuth>
					}
				/>
				<Route path="/rules" element={<Rules />} />
				<Route path="/quiz/:quizId" element={<Quiz />} />
			</Routes>
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
