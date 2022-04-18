import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "TV Series",
		description: "Quizes based on TV Series",
	},
	{
		_id: uuid(),
		categoryName: "Sports",
		description: "Quizes based on Sports",
	},
	{
		_id: uuid(),
		categoryName: "Science",
		description: "Quizes based on Science",
	},
];
