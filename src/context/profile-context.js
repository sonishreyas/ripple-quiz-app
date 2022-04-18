import { createContext, useContext, useState } from "react";
import { useGetAvatarsData } from "../custom-hooks";

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
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
