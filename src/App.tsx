import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import { AppRoutes } from "./routes";
function App() {
	return (
		<div className="grid-areas-3-rows">
			<Header />
			<AppRoutes/>
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
