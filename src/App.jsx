import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import { Home, Authentication, QuizCategories, Profile } from "./pages";
import { Header, Footer } from "./components";
import { RequireAuth } from "./utils";
function App() {
	return (
		<div className="grid-areas-3-rows">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth" element={<Authentication />} />
				<Route path="/quizzes" element={<QuizCategories />} />
				<Route
					path="/profile"
					element={
						<RequireAuth>
							<Profile />
						</RequireAuth>
					}
				/>
			</Routes>
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
