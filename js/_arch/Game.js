/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
	constructor(missed) {
		this.missed = 0;
		this.phrases = [
			{phrase: 'phrase one goes something like this'},
			{phrase: 'i am phrase two'},
			{phrase: 'phrase three here whaaaat'},
			{phrase: 'four for four'},
			{phrase: 'five and over it'}];
		this.activePhrase = 'null';
	}

	/**
	 * Begins game by selecting a random phrase and displaying it to user
	 */
	startGame() {
		// hides the start screen overlay
		document.getElementById('overlay').style.display='none';
		//calls the getRandomPhrase() method
		const randomPhrase = game.getRandomPhrase();
		this.activePhrase = new Phrase(randomPhrase.phrase);
		//adds the phrase to the gameboad by calling the addPhraseToDisplay() method on the selected Phrase object
		this.activePhrase.addPhraseToDisplay();
	}

	/**
	* Selects random phrase from phrases property
	* @return {Object} Phrase object chosen to be used
	*/
	getRandomPhrase() {
		const random = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[random];
	}


	handleInteraction() {
		// Record the chosen letter
		let selectedLetter = 'null';
		let keys = document.querySelectorAll(".key")

		keys.forEach((key) => {
			key.addEventListener('click', (e) => {
				selectedLetter = key.textContent;
				console.log(selectedLetter);

				checkLetter(selectedLetter)
				showMatchedLetter()
				checkForWin()
			})
		})
		
		document.addEventListener('keyup', (e) => {
			selectedLetter = e.key;
			console.log(selectedLetter)

			checkLetter(selectedLetter)
			showMatchedLetter()
			checkForWin()
		})
	
		// phrase.checkLetter

		// phrase.showMatchedLetter

		// game.removeLife

		// game.checkForWin

		// game.gameOver
	}

	/**
	 * Increases the value of the missed property
	 * Removes a life from the scoreboard
	 * Checks if player has remaining lives and ends game if player is out
	 */
	removeLife() {
		this.missed += 1;
		let liveHearts = document.querySelectorAll("img[src='images/liveHeart.png']");
		let numberOfLives = liveHearts.length;
		if (numberOfLives != 0) {
			liveHearts[0].src="images/lostHeart.png"
		} else {
			let gameWon = false;
			gameOver()
		}
	}

	/**
	 * Checks for winning move
	 * @return {boolean} True if game has been won, false if game wasn't
	won */
	checkForWin() {
		//This method checks to see if the player has revealed all of the letters in the active phrase.
		let hiddenLetters = document.querySelectorAll(".hide");
		if (hiddenLetters.length === 0) {
			console.log('uh i think you just won')
			let gameWon = true;
			return gameWon;
		}
	}

	/**
	 * Displays game over message
	 * @param {boolean} gameWon - Whether or not the user won the game
	 */
	gameOver() {
		if (gameWon === false){
			document.getElementById('overlay').style.display = 'block';
			document.getElementById("game-over-message").textContent = "Woooooo!"
			document.getElementById("overlay").className = "win"
		} else if (gameWon === true) {
			document.getElementById('overlay').style.display = 'block';
			document.getElementById("game-over-message").textContent = "EEk. Try again?"
			document.getElementById("overlay").className = "lose"
		}
	}
}

