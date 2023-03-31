var players = ["red", "green", "yellow", "blue"];
var playerTurn = 0;
var playerPieces = {
  "red": [document.getElementById("r1")],
  "green": [document.getElementById("g1")],
  "yellow": [document.getElementById("y1")],
  "blue": [document.getElementById("b1")]
};

function rollDice() {
  var result = Math.floor(Math.random() * 6) + 1;
  document.getElementById("result").innerHTML = "You rolled a " + result;

  var pieces = playerPieces[players[playerTurn]];
  var movePiece = null;
  for (var i = 0; i < pieces.length; i++) {
    var piece = pieces[i];
    if (piece.classList.contains("home")) {
      if (result == 6) {
        piece.classList.remove("home");
        movePiece = piece;
        break;
      }
    } else {
      var cell =
