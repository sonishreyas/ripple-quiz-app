import { JoinGame, CreateGame } from "./";
import { useState } from "react";
const HomeTabs = () => {
	const [activeTab, setActiveTab] = useState("Join");
	const tabClickhandler = (activeTabName) => setActiveTab(activeTabName);

	return (
		<section className="quiz-tabs p-10 m-10">
			<article className="horizontal-tabs-container flex-column flex-wrap flex-gap-1 b-radius-2 p-5">
				<article className="horizontal-tabs-btn-container flex-row flex-grow-1 justify-content-center align-center">
					<button
						className={`tabs-btn p-5 flex-row flex-grow-1 justify-content-center align-center ${
							activeTab === "Join" ? "horizontal-tabs-btn-active" : ""
						}`}
						onClick={() => tabClickhandler("Join")}
					>
						Join a Game
					</button>
					<button
						className={`tabs-btn p-5 flex-row flex-grow-1 justify-content-center align-center ${
							activeTab === "Create" ? "horizontal-tabs-btn-active" : ""
						}`}
						onClick={() => tabClickhandler("Create")}
					>
						Create a Game
					</button>
				</article>

				{activeTab === "Join" && (
					<div className="horizontal-tabs-content">
						<JoinGame />
					</div>
				)}
				{activeTab === "Create" && (
					<div className="horizontal-tabs-content">
						<CreateGame />
					</div>
				)}
			</article>
		</section>
	);
};

export { HomeTabs };
