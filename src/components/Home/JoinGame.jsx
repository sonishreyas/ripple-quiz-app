const JoinGame = () => {
	return (
		<article className="flex-row justify-content-center align-center flex-wrap p-5 b-radius-2 text-center ">
			<h2 className="text-bold m-2 my-5 w-100 h-auto">Join a game</h2>
			<sub className="homepage-subheading m-2 w-100 h-auto">
				Scan QR code or enter game PIN
			</sub>
			<input
				type="number"
				className="m-2 quiz-code w-100 h-auto"
				name=""
				id=""
				maxLength="1"
			/>
			<button className="primary-btn p-5 b-radius-2 m-2 text-bold w-100 h-auto my-5">
				Play
			</button>
		</article>
	);
};

export { JoinGame };
