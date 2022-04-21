import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
	ThemeProvider,
	RegisterProvider,
	LoginProvider,
	AuthProvider,
	ProfileProvider,
	QuizProvider,
	QuestionProvider,
} from "./context";
// Call make Server
makeServer();
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ThemeProvider>
				<RegisterProvider>
					<LoginProvider>
						<AuthProvider>
							<ProfileProvider>
								<QuizProvider>
									<QuestionProvider>
										<App />
									</QuestionProvider>
								</QuizProvider>
							</ProfileProvider>
						</AuthProvider>
					</LoginProvider>
				</RegisterProvider>
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
