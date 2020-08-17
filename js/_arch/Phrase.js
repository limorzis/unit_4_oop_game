/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
	constructor(phrase) {
		this.phrase = `${phrase}`.toLowerCase()
	}
	addPhraseToDisplay() {
		const ul = document.querySelector('ul');

		const phraseLetters = this.phrase.toString().split('');

		phraseLetters.forEach(letter => {
			let li = document.createElement("LI");
			// li.className = "hide"
			li.textContent = `${letter}`;
				if (letter === ' ') {
					li.setAttribute('class', 'space');
				} else {
					li.setAttribute('class', `hide letter ${letter}`);
				}
			ul.appendChild(li);
			// console.log(li)
		}) 
	}

	/**
	 * Checks if passed letter is in phrase
	 * @param (string) letter - Letter to check
	 */
	checkLetter(selectedLetter) {
		if (game.activePhrase.phrase.includes(selectedLetter)) {
			console.log('it matches whhaaaat')
			showMatchedLetter()
		} else {
			console.log('awkward. not a match')
		}
	}
	

	/**
	 * Displays passed letter on screen after a match is found
	 * @param (string) letter - Letter to display
	 */
	showMatchedLetter() {
		// select all of the letter DOM elements that have a CSS class name that matches the selected letter 
		let matchingKeys = document.querySelectorAll(`.${clickedLetterValue}`);
		console.log(matchingKeys) 

		// replace each selected element's `hide` CSS class with the `show` CSS class.
		matchingKeys.forEach(key => 
			key.className = `show letter ${key.textContent}`)
	}
}



// let ul = document.createElement("UL");
// let testing = "heyyyyyyy";
// let li = document.createElement("LI")
// li.className = "show";
// li.className += " letter";
// li.innerHTML = `${testing}`;
// ul.appendChild(li)
// testing.forEach(testing => ul.appendChild(li))

// document.getElementById("phrase").appendChild(ul);


// function addPhraseToDisplay(phrase) {
// 	// let currentPhrase = "party"
// 	// let currentPhrase = `${phrase}` 

// 	str.split(`${phrase}`).map(a => 
// 		let li = document.createElement("LI")
// 		li.className = "hide"
// 		li.innerHTML = `${a}`
// 		ul.appendChild(li)
// 		);

// 	let ul = document.createElement("UL");
// 	let li = document.createElement("LI")
// 	li.className = "hide";
// 	currentPhrase.forEach(char => { 
// 		li.innerHTML = char;
// 		ul.appendChild(li)
// 	}
// 	); 		
// };




// function addPhraseToDisplay(phrase) {
// 	let phraseArray = split(phrase)
// 	let letters = phrase
// 		.map(a => let listCode `<li class="hide letter">${a}</li>`)
// 		.foreach(a => let li = document.createElement("LI").innerHTML = a)
// 		.foreach(li => ul.appendChild(li))
		// let li = document.createElement("LI")
		// li.className = "hide"
		// li.innerHTML = `${a}`
		// ul.appendChild(li)
		// );
	// }

// let phrase = "oh hey now"
// let phraseArray = []
// phraseArray = phrase.split()
// ("oh hey now").forEach(char => {
// 	console.log(char); 
// }); 
// console.log(phraseArray)


// let result = 'buhnanas';
// // let li = document.createElement("LI")
// let listOfLetters = result.split("''")
// 	.forEach(letter => {let li = document.createElement("LI").innerHTML = `${letter}`}
// );

// console.log(listOfLetters)

// addPhraseToDisplay("pizza")


		// let li = document.createElement("LI")
		// li.className = "hide";
		// li.innerHTML = `${letter}`;
		// testing.forEach(letter => 
		// 	ul.appendChild(li))