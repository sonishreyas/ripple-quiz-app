import { useState, useEffect } from "react";
import axios from "axios";

const useGetAvatarsData = () => {
	const [avatarsData, setAvatarsData] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(`/api/avatars`);
				setAvatarsData(response.data.avatars);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return avatarsData;
};

export { useGetAvatarsData };
