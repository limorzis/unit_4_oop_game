/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// START A GAME
const button = document.getElementById("btn__reset")
button.addEventListener('click', function() {
	game = new Game()
	game.reset()
	game.startGame()
	console.log(`The phrase is: "${game.activePhrase.phrase}"`);
	game.handleInteraction()
});






