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