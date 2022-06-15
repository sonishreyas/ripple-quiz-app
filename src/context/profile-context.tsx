import React, { createContext, useContext, useState } from "react";
import { useGetAvatarsData } from "../custom-hooks";
import { ProfileCtxType } from "./types";

const ProfileContext = createContext<ProfileCtxType | null>(null);

const ProfileProvider = ({ children }: {children: React.ReactNode}) => {
	const [profileActiveTab, setProfileActiveTab] = useState("Profile");
	const avatarsData = useGetAvatarsData();
	return (
		<ProfileContext.Provider
			value={{ profileActiveTab, setProfileActiveTab, avatarsData }}
		>
			{children}
		</ProfileContext.Provider>
	);
};

const useProfile = () => useContext(ProfileContext);

export { useProfile, ProfileProvider };
