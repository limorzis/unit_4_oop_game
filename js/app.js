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
});

// If user clicks a letter on the keyboard, disable that button and proceed with the game
document.querySelector("#qwerty").addEventListener('click', (e) => {
	let target = event.target;
	if (target.tagName === 'BUTTON') {
		letter = target;
		letter.disabled = true;
		game.handleInteraction(letter)
	}
})

// If user types a key, disable the corresponding button and proceed with the game
document.addEventListener('keyup', (e) => {
	document.querySelectorAll(".key").forEach((key) => {
		const letter = key;
		if (key.textContent === e.key && key.disabled === false) {
			game.handleInteraction(letter)
			letter.disabled = true;
		} else if (key.textContent === e.key && key.disabled === true) {
			console.log('Already guessed that letter')
		}
	})
})





