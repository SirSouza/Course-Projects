let choiceOptions = ["rock", "paper", "scissors"];



function getComputerChoice(computerChoice) {
	return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}


function getHumanChoice() {
	let humanChoice = prompt("What is your choice?");
	if (choiceOptions.includes(humanChoice.toLowerCase())) {
		console.log("Player choose:", humanChoice.toLowerCase());
	} else {
		alert("Invalid options");
	}
	return humanChoice.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		console.log("Draw - no points awarde");
		return "Draw";
	} else if (
		(humanChoice === "paper" && computerChoice === "rock") ||
		(humanChoice === "rock" && computerChoice === "scissors") ||
		(humanChoice === "scissors" && computerChoice === "paper")
	) {
		console.log(`Player won this round`);
		return "player";
	} else {
		console.log(`Computer won this round`);
		return "computer";
	}
}

function playGame() {
	let playerScore = 0;
	let computerScore = 0;
	let finalScore = 5;

	do {
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice(choiceOptions);
		console.log("Computer Selection:", computerSelection);

		const winner = playRound(humanSelection, computerSelection);
		if (winner === "player") {
			playerScore++;
			console.log(
				`Computer points: ${computerScore}\nPlayer Points: ${playerScore}`,
			);
		} else if (winner === "computer") {
			computerScore++;
			console.log(
				`Computer points: ${computerScore}\nPlayer Points: ${playerScore}`,
			);
		}
	} while (playerScore < finalScore && computerScore < finalScore);
	console.log("=========== GAME OVER ===========");

	if (playerScore === finalScore) {
		console.log(`player wins`);
	} else if ((computerScore = finalScore)) {
		console.log(`Computer wins`);
	}
}
	
playGame();



