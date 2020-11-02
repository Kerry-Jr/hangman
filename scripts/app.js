const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game1



window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
 render()
});

const render = () => {
 
  // puzzleEl.textContent = game1.puzzle;
  puzzleEl.innerHTML = '';
  guessesEl.textContent = game1.statusMessage;
  

  game1.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement('span')
    letterEl.textContent = letter
    puzzleEl.appendChild(letterEl)
  })
  // console.log(game1.word.split(""))

//   const secretWord = game1.word.split("")

// secretWord.forEach((words) => {
//   const spanEl = document.createElement('span')
//   spanEl.textContent = words.split("")
//   puzzleEl.appendChild(spanEl)
// })

  // puzzleEl.appendChild(spanEl)
}


const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
  // console.log(game1)
  render()
}

// getPuzzle("2").then((puzzle) => {
//   console.log(puzzle)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getCurrentCountry().then((country) => {
//   console.log(country.name)
// }).catch((err) => {
//   console.log(err)
// })