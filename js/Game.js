/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
	constructor(missed) {
		this.missed = 0;
		this.phrases = [
			{phrase: 'It is what it is'},
			{phrase: 'I am who I am'},
			{phrase: 'Whatever happens happens'},
			{phrase: 'A deal is a deal'},
			{phrase: 'Rules are rules'},
			{phrase: 'Business is business'}];
		this.activePhrase = 'null';
		this.gameWon = false;
	}

	// Begins game by hiding the overlay, selecting a random phrase, and displaying it
	startGame() {
		document.getElementById('overlay').style.display = 'none';
		const randomPhrase = game.getRandomPhrase();
		this.activePhrase = new Phrase(randomPhrase.phrase);
		this.activePhrase.addPhraseToDisplay();
	}

	// Selects and returns random phrase from phrases property
	getRandomPhrase() {
		const random = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[random];
	}

	// Carries out all the steps when user types or clicks a key
	handleInteraction(letter) {
		if (game.activePhrase.checkLetter(letter)) {
			letter.classList.add('chosen')
			game.activePhrase.showMatchedLetter(letter)
			game.checkForWin()
		} else {
			letter.classList.add('wrong')
			game.removeLife();
		}
	}

	// Checks if all letters are revealed by checking that there are no hidden letters
	checkForWin() {
		let hiddenLetters = document.querySelectorAll(".hide");
		if (hiddenLetters.length === 0) {
			this.gameWon = true;
			this.gameOver()
		}
	}

	// Replace a liveHeart.png with a lostHeart.png. Record number of lives lost. Display gameOver on 5th try
	removeLife() {
		document.querySelectorAll("img")[this.missed].src="images/lostHeart.png"
		if (this.missed === 4) {
			this.gameWon = false;
			this.gameOver()
		} 
		this.missed += 1;	
	}

	// Check if gameWon is true and display the winning or losing overlay
	gameOver() {
		const overlay = document.getElementById('overlay')
		const gameOverMessage = document.getElementById("game-over-message")
		overlay.style.display = 'flex'
		if (this.gameWon){
			gameOverMessage.textContent = `Well done, ${game.activePhrase.phrase}!`
			overlay.className = 'win'
			button.innerHTML = 'Play Again'
		} else {
			gameOverMessage.textContent = 'You lost. Try again?'
			overlay.className = 'lose'
			button.innerHTML = 'Try Again'
		}
		document.querySelectorAll('.key').forEach((key) => {
			key.disabled = true
		})
	}

	reset() {
		document.querySelector('ul').innerHTML='';
		document.querySelectorAll('.key').forEach((key) => {
			key.disabled = false
			key.classList.remove('wrong')
			key.classList.remove('chosen')
		})
		document.querySelectorAll("img").forEach((img) => {
			img.src="images/liveHeart.png"
		})
		this.missed = 0;
	}

}

