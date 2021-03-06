import { useState, useEffect } from "react";
import axios from "axios";
const useGetCategoriesData = () => {
	const [categoriesData, setCategoriesData] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get("/api/categories");
				setCategoriesData(response.data.categories);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return categoriesData;
};

export { useGetCategoriesData };
