import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
	{
		_id: 1007,
		firstName: "Adarsh",
		lastName: "Balika",
		email: "admin@gmail.com",
		password: "123456",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: "4ea212a8-c0d7-11ec-9d64-0242ac120002",
		firstName: "test",
		lastName: "test",
		email: "test@gmail.com",
		password: "test123",
		avatar:
			"https://raw.githubusercontent.com/sonishreyas/ripple-quiz-app/dev/src/backend/assets/avatars/1.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
