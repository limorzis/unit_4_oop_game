/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let missed = 0;

// START A GAME
const button = document.getElementById("btn__reset")
button.addEventListener('click', function() {
	game = new Game()
	game.startGame()
	console.log(`${game.activePhrase.phrase}`);
	console.log(game.activePhrase.phrase);
	// let activePhrase = `${game.activePhrase.phrase}`


function checkLetter() {
	if (game.activePhrase.phrase.includes(letter.textContent)) {
		console.log('it matches whhaaaat')
		letter.className = "chosen"
		showMatchedLetter()
		checkForWin()
	} else {
		console.log('awkward. not a match')
		letter.className = "wrong"
		removeLife();
	}
}

let gameWon = false;

function removeLife() {
	let liveHearts = document.querySelectorAll("img");
	liveHearts[missed].src="images/lostHeart.png"
	if (missed != 4) {
		console.log('you got another letter wrong')
		console.log(missed)
	} else {
		liveHearts[missed].src="images/lostHeart.png"
		gameWon = false;
		gameOver()
	}
	missed += 1;	
}

function showMatchedLetter() {
	// select all of the letter DOM elements that have a CSS class name 
	// that matches the selected letter 
	let matchingKeys = document.querySelectorAll(`.${letter.textContent}`);
	console.log(matchingKeys) 

	// replace each selected element's `hide` CSS class with the `show` CSS class.
	matchingKeys.forEach(matchingKey => 
		matchingKey.className = `show letter ${matchingKey.textContent}`)
}

function checkForWin() {
	//This method checks to see if the player has revealed all of the letters in the active phrase.
	let hiddenLetters = document.querySelectorAll(".hide");
	if (hiddenLetters.length === 0) {
		console.log('uh i think you just won')
		gameWon = true;
		gameOver()
	}
}


function gameOver() {
	if (gameWon === false){
		document.getElementById('overlay').style.display = 'block';
		document.getElementById("game-over-message").textContent = "EEk. Try again?"
		document.getElementById("overlay").className = "lose"
	} else if (gameWon === true) {
		document.getElementById('overlay').style.display = 'block';
		document.getElementById("game-over-message").textContent = "Woooooo!"
		document.getElementById("overlay").className = "win"

	}
}



let selectedLetter = 'null';
let selectedKey = 'null';
let keys = document.querySelectorAll(".key")

keys.forEach((key) => {
	key.addEventListener('click', (e) => {
		selectedLetter = key.textContent;
		console.log(selectedLetter);
		letter = key;
		letter.disabled = true;

		checkLetter(letter)
		
	})
})	


	document.addEventListener('keyup', (e) => {
		// selectedLetter = key.textContent;
		// console.log(selectedLetter);

		letter = document.querySelector(`.${e.key}`);
		console.log(letter)
		// letter.disabled = true;
		// checkLetter(letter)
		
	})


document.addEventListener('keyup', (e) => {
	selectedLetter = e.key;
	console.log(selectedLetter)

	checkLetter(selectedLetter)
})
});








// lives[0].innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">`
// document.querySelectorAll(".tries").className += " active"








