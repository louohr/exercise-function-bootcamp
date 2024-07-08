// sten, sax, påse using functions
let player1Wins = 0;
let player2Wins = 0;
let roundsPlayed = 0;

function playRound(roundNumber) {
  alert("Runda " + roundNumber);

  // fråga användaren
  let player1Choice = prompt("Spelare 1: Välj sten, sax, eller papper").toLowerCase();
  let player2Choice = prompt("Spelare 2: Välj sten, sax, eller papper").toLowerCase();

  return determineWinner(player1Choice, player2Choice);
}

function determineWinner(choice1, choice2) {
  if (choice1 === choice2) {
    // samma val blir oavgjort
    alert("Det är oavgjort!");
    return "draw";
  } else if (
    (choice1 === "sten" && choice2 === "sax") ||
    (choice1 === "sax" && choice2 === "papper") ||
    (choice1 === "papper" && choice2 === "sten")
  ) {
    alert("Spelare 1 vinner denna runda!");
    return "player1";
  } else {
    alert("Spelare 2 vinner denna runda!");
    return "player2";
  }
}

function updateScores(winner) {
  if (winner === "player1") {
    player1Wins++;
  } else if (winner === "player2") {
    player2wins++;
  }
}

function announceFinalWinner() {
  if (player1Wins > player2Wins) {
    alert("Spelare 1 vinner!");
  } else if (player2wins > player1Wins) {
    alert("Spelare 2 vinner!");
  } else {
    alert("Det är oavgjort!");
  }
}

// Main game loop
while (roundsPlayed < 3) {
  roundsPlayed++;
  let winner = playRound(roundsPlayed);
  updateScores(winner);
}

announceFinalWinner();
