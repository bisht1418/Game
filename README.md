# Game
Created with CodeSandbox
https://game-swart-nine.vercel.app/


Description 
Create a 2 Player Game where the player to reach 10 wins.
Game Rules:
It's a 2 Player Mini Game
The game will have a counter with initital value zero.
Each player will have alternate turns.
In each turn player will have a choice to increment the counter by either 1 or 2.
Player to reach 10 wins.
Player 1 will go first by default.
Example of a Game
Counter : 0
Player 1 : Counter + 1 => 1
Player 2 : Counter + 2 => 3
Player 1: Counter + 2 => 5
Player 2: Counter + 1 => 6
Player 1: Counter + 1 => 7
Player 2: Counter + 2 => 9
Player 1: Counter + 1 => 10 (Player 1 Wins) ‌
Tasks / Functionalities to Implement
The app will have a counter with initital value set to 0
The app will also have a container that displays which player's turn it is.
It will display either Player 1 or Player 2.
By default Player 1 should go first.
The app will have two buttons to increment the counter.
One button will increment the counter by 1 (+1 button).
The other will increment the counter by 2 (+2 button).
Player in each turn can chose to increment the counter by either 1 or 2.
As each player will have alternate turns, each time the incement buttons are clicked, player turn should change.
When counter value is 9 the +2 button should be disabled and when theres a winner (counter value is 10) the +1 button should also be disabled.
The app will also have one winner-container that displays the winner when counter reaches 10.
The winner-container should display Still To Be Decided by default.
When counter reaches 10 it should display either Player 1 or Player 2
The app will have a reset game button.
This button will reset all values to default and reset the game.
