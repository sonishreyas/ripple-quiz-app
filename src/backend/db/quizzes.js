import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
	{
		_id: "4ea20038-c0d7-11ec-9d64-0242ac120002",
		title: "Game of Thrones",
		totalScore: 50,
		description: "Take a quiz on the seven kingdom of westeros.",
		imageURL:
			"https://raw.githubusercontent.com/sonishreyas/ripple-quiz-app/dev/src/backend/assets/images/bbt.png",
		mcqs: [
			{
				_id: uuid(),
				question: "Who is the youngest of Ned Stark’s children?",
				options: ["Arya", "Sansa", "Rickon", "Bran"],
				answer: "Rickon",
			},
			{
				_id: uuid(),
				question: "Which of the following is NOT one of Daenerys's dragons?",
				options: ["Viserion", "Rhegal", "Aegon", "Drogon"],
				answer: "Aegon",
			},
			{
				_id: uuid(),
				question:
					"Which of the following kingdoms is, on average, furthest south?",
				options: ["The Riverlands", "The Vale", "Drone", "The Reach"],
				answer: "Drone",
			},
			{
				_id: uuid(),
				question: "What is the sigil of house Baratheon?",
				options: ["Stag", "Unicorn", "Rose", "Moon"],
				answer: "Stag",
			},
			{
				_id: uuid(),
				question:
					"Which of these characters never served as hand to a king (or queen)?",
				options: [
					"Jorah Mormont",
					"Ned Stark",
					"Ser Davos Seaworth",
					"Tyrion Lannister",
				],
				answer: "Jorah Mormont",
			},
		],
		catergoryName: "TV Series",
		createdBy: "4ea212a8-c0d7-11ec-9d64-0242ac120002",
	},
	{
		_id: "4ea21104-c0d7-11ec-9d64-0242ac120002",
		title: "Game of Thrones",
		totalScore: 50,
		description: "Take a quiz on the seven kingdom of westeros.",
		imageURL:
			"https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/series.png",
		mcqs: [
			{
				_id: uuid(),
				question: "Who is the youngest of Ned Stark’s children?",
				options: ["Arya", "Sansa", "Rickon", "Bran"],
				answer: "Rickon",
			},
			{
				_id: uuid(),
				question: "Which of the following is NOT one of Daenerys's dragons?",
				options: ["Viserion", "Rhegal", "Aegon", "Drogon"],
				answer: "Aegon",
			},
			{
				_id: uuid(),
				question:
					"Which of the following kingdoms is, on average, furthest south?",
				options: ["The Riverlands", "The Vale", "Drone", "The Reach"],
				answer: "Drone",
			},
			{
				_id: uuid(),
				question: "What is the sigil of house Baratheon?",
				options: ["Stag", "Unicorn", "Rose", "Moon"],
				answer: "Stag",
			},
			{
				_id: uuid(),
				question:
					"Which of these characters never served as hand to a king (or queen)?",
				options: [
					"Jorah Mormont",
					"Ned Stark",
					"Ser Davos Seaworth",
					"Tyrion Lannister",
				],
				answer: "Jorah Mormont",
			},
		],
		catergoryName: "TV Series",
		createdBy: "default",
	},
];
