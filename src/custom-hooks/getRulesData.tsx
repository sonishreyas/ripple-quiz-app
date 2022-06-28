import { useState, useEffect } from "react";
import axios from "axios";

const useGetRulesData = () => {
	const [rulesData, setRulesData] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(`/api/rules`);
				setRulesData(response.data.rules);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return rulesData;
};

export { useGetRulesData };
