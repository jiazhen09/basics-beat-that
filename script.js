// Beat that:
// 1. There are 2 players and players take turns.
// 2. When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
// 3. The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
// 4. After both players have rolled and chosen dice order, the player with the higher combined number wins

var rollTheDice = function (){
  var diceRoll1 = Math.ceil(Math.random()*6)
  var diceRoll2 = Math.ceil(Math.random()*6)
  var result = [diceRoll1, diceRoll2]
  console.log(result)
  return result;
}

var playerRollsDice = function (firstChoice){
  var diceroll = rollTheDice();
  var firstDice;
  var secondDice;

  if (firstChoice == "first dice"){
    firstDice = diceroll[0]
    secondDice = diceroll[1]
  }

  else {
    firstDice = diceroll[1]
    secondDice = diceroll[0]
  }
  return `${firstDice}${secondDice}`
  }
// return ${firstDiceOrder} + the other number in the array not called out (ideally)

var winner = function (player1Choice, player2Choice){
var player1Result = Number(playerRollsDice(player1Choice))
var player2Result = Number(playerRollsDice(player2Choice))

if (player1Result > player2Result){
return `Player 1 won, ${player1Result} over ${player2Result}.`
}
else if (player1Result == player2Result){
  return  `It's a draw of ${player1Result}.`
}
else {return `Player 2 won, ${player2Result} over ${player1Result}.`
}
console.log(winner)
}

// if Person1 > Person 2, return "Person 1 won, Person 1's dice over Person 2's dice",
// else if Person 1 = Person 2, return "Draw, Person 1's dice = Person 2's dice",
// else  "Person 2 won, Person 2's dice over Person 1's dice",

