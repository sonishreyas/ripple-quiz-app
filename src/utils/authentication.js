import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";
const RequireAuth = ({ children }) => {
	const location = useLocation();
	return JSON.parse(localStorage.getItem("user"))?.token ? (
		children
	) : (
		<Navigate to="/auth" state={{ from: location }} replace />
	);
};
/**
 *
 * @param e Element
 * @param location useLocation()
 * @param navigate useNavigation()
 */
const loginHandler = (e, location, navigate, loginState, authDispatch) => {
	e.preventDefault();
	const loginInfo = { email: loginState.email, password: loginState.password };
	(async () => {
		try {
			const response = await axios.post(`/api/auth/login`, loginInfo);
			// saving the user data in the localStorage
			const user = {
				token: response.data.encodedToken,
				firstName: response.data.foundUser.firstName,
				lastName: response.data.foundUser.lastName,
				email: response.data.foundUser.email,
				avatar: response.data.foundUser.avatar,
				_id: response.data.foundUser._id,
			};
			authDispatch({
				type: "UPDATE_USER",
				payload: user,
			});
			localStorage.setItem("user", JSON.stringify(user));
			navigate("/quizzes");
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 *
 * @param e Element
 * @param location useLocation()
 * @param navigate useNavigation()
 */
const registerHandler = (
	e,
	location,
	navigate,
	registerState,
	authDispatch
) => {
	e.preventDefault();
	const registerInfo = {
		firstName: registerState.firstName,
		lastName: registerState.lastName,
		email: registerState.email,
		password: registerState.password,
		avatar: registerState.avatar,
	};
	(async () => {
		try {
			const response = await axios.post(`/api/auth/signup`, registerInfo);

			// saving the encodedToken in the localStorage
			const user = {
				token: response.data.encodedToken,
				firstName: response.data.createdUser.firstName,
				lastName: response.data.createdUser.lastName,
				email: response.data.createdUser.email,
				avatar: response.data.createdUser.avatar,
				_id: response.data.createdUser._id,
			};
			authDispatch({
				type: "UPDATE_USER",
				payload: user,
			});
			localStorage.setItem("user", JSON.stringify(user));
			navigate("/quizzes");
		} catch (error) {
			console.log(error);
		}
	})();
};

/**
 * Remove data from habits
 * @param element
 * @param {string} videoId videoId to remove from habits
 * @param {string} token encodedToken of user
 * @param {function} habitsDispatch Reducer function
 */
const updateUserHandler = (element, userData, authDispatch, authState) => {
	element.preventDefault();
	(async () => {
		try {
			const response = await axios.post(
				`/api/user`,
				{ userData: userData },
				{
					headers: {
						Accept: "*/*",
						authorization: JSON.parse(localStorage.getItem("user"))?.token,
					},
				}
			);
			localStorage.setItem(
				"user",
				JSON.stringify({ ...authState, ...userData })
			);
			authDispatch({
				type: "UPDATE_USER",
				payload: {
					...userData,
				},
			});
		} catch (error) {
			console.log(error);
		}
	})();
};

const setValueHandler = (e, field, type, loginDispatch) => {
	const fieldValue = { type: type, payload: {} };
	fieldValue.payload[field] = e.target.value;
	loginDispatch(fieldValue);
};

const setTestHandler = (loginDispatch) =>
	loginDispatch({
		type: "TEST_CREDENTIAL",
		payload: { email: "test@gmail.com", password: "test123" },
	});

const setFocusHandler = (field, value, type, loginDispatch, focusReset) => {
	focusReset[field] = value;
	loginDispatch({ payload: { focus: focusReset }, type: type });
};
export {
	RequireAuth,
	loginHandler,
	registerHandler,
	setValueHandler,
	setTestHandler,
	setFocusHandler,
	updateUserHandler,
};
