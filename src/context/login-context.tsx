import React, { useReducer, createContext, useContext } from "react";
import { loginReducer } from "../reducers";
import { LoginState, LoginCtxType } from "./types";
const defaultLoginState: LoginState = {
	email: "",
	password: "",
	focus: { email: false, password: false },
};

const LoginContext = createContext<LoginCtxType | null>(null);

const LoginProvider = ({ children }: {children: React.ReactNode}) => {
	const [loginState, loginDispatch] = useReducer(
		loginReducer,
		defaultLoginState
	);

	return (
		<LoginContext.Provider value={{ loginState, loginDispatch }}>
			{children}
		</LoginContext.Provider>
	);
};

const useLogin = () => useContext(LoginContext);

export { useLogin, LoginProvider };
