import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import { Home, Authentication, QuizCategories, Profile, Rules } from "./pages";
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
				<Route path="/rules/:quizId" element={<Rules />} />
			</Routes>
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
