/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App */

class Phrase {
	constructor(phrase) {
		this.phrase = `${phrase}`.toLowerCase()
	}
	addPhraseToDisplay() {
		const phraseLetters = this.phrase.toString().split('');
		phraseLetters.forEach(phraseLetter => {
			let li = document.createElement("LI");
			li.textContent = `${phraseLetter}`;
				if (phraseLetter === ' ') {
					li.setAttribute('class', 'space');
				} else {
					li.setAttribute('class', `hide letter ${phraseLetter}`);
				}
			document.querySelector('ul').appendChild(li);
		}) 
	}

	// Checks if passed letter is in phrase
	checkLetter(letter) {
		if (game.activePhrase.phrase.includes(letter.textContent)) {
			console.log(`User correctly guessed ${letter.textContent}`)
			letter.classList.add('chosen')
			this.showMatchedLetter(letter)
			game.checkForWin()
		} else {
			console.log(`User incorrectly guessed ${letter.textContent}`)
			letter.classList.add('wrong')
			game.removeLife();
		}
	}
	
	// Find all the letters in the phrase matching the user's guess and change the class to 'show' 
	showMatchedLetter(letter) {
		let matchingKeys = document.querySelectorAll(`.${letter.textContent}`);
		console.log(`Number of matches: ${matchingKeys.length}`) 
		matchingKeys.forEach(matchingKey => {
			matchingKey.classList.remove('hide')
			matchingKey.classList.add('show')
		})
	}
}

