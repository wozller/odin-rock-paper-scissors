function computerPlay() {

    // Generate a random number (0, 1, or 2).
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0)
        return "Rock";
    if (randomNumber == 1)
        return "Paper";
    if (randomNumber == 2)
        return "Scissors";

} // End of computerPlay function.

function playRound(playerSelection, computerSelection) {

    let outcome = "";

    outcome += "Player played " + playerSelection + "\n";
    outcome += "Computer played " + computerSelection + "\n";

    switch (playerSelection) {

        case "Rock":

            if (computerSelection == "Rock")
                outcome += "Tie! Rock ties with Rock";
            else if (computerSelection == "Paper")
                outcome += "You Lose! Paper beats Rock";
            else if (computerSelection == "Scissors")
                outcome += "You Win! Rock beats Scissors";

            break;

        case "Paper":

            if (computerSelection == "Rock")
                outcome += "You Win! Paper beats Rock";
            else if (computerSelection == "Paper")
                outcome += "Tie! Paper ties with Paper";
            else if (computerSelection == "Scissors")
                outcome += "You Lose! Scissors beats Paper";

            break;

        case "Scissors":

            if (computerSelection == "Rock")
                outcome += "You Lose! Rock beats Scissors";
            else if (computerSelection == "Paper")
                outcome += "You Win! Scissors beat Paper";
            else if (computerSelection == "Scissors")
                outcome += "Tie! Scissors ties with Scissors";

            break;

    } // End of switch statement.

    outcome += "\n";

    return outcome;

} // End of playRound function.