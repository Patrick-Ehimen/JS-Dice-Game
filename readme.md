# Dice Game

This is a simple game of dice where two players take turns rolling a dice. The player who scores 100 points or more first, wins the game.

## Features

- Modern JavaScript implementation using ES6 syntax
- Clean and well-structured code with proper commenting
- Best practices followed for performance optimization

## Game Rules

1. At the start of the game, both players have a score of 0.
2. Players take turns rolling a dice by clicking the "Roll Dice" button.
3. The number rolled on the dice is added to the current player's score.
4. If a player rolls a 1, their current score becomes 0 and their turn ends.
5. If a player rolls any number other than 1, their current score is added to their total score.
6. The player can choose to "Hold" their score by clicking the "Hold" button, which will add their current score to their total score and end their turn.
7. The game ends when a player reaches a total score of 100 or more.

## Usage

To run the game, simply download or clone the repository and open the index.html file in your web browser. Alternatively, you can also visit the live demo hosted at [https://jscriptdice-game.netlify.app/].

## Code

The game is implemented using HTML, CSS and JavaScript. The JavaScript code selects HTML elements and adds event listeners to the buttons. The `init` function initializes the game state, and the `switchPlayer` function switches the active player. The `btnRoll` event listener generates a random number between 1 and 6 and updates the current player's score. The `btnHold` event listener adds the current player's score to their total score and checks if the game has ended. The `btnNew` event listener resets the game to its initial state.

## Feedback

If you have any suggestions or feedback, please feel free to create an issue or pull request on the GitHub repository. Your contributions are highly appreciated.
