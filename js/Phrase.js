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
		return this.phrase.includes(letter.textContent)
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

