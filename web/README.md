# Multiplay Tic-Tac-Toe web

This is the web version of my tic-tac-toe game.
This version is going to be an online multiplayer version of the game so you can play with friends.

## How it will work

The game will contain a grid on which you can place a symbol of type O or X depening on which player you are.
The game grid will be the visual host of the current game play state.
The game play state will be share between the two players involved with near real-time speed via periodic requests to the API via POST & GET or websockets (depeding on the platform/hardware available).

The final state of the game and steps with which it was arrived will be saved at the end of each game session.
The game sessions will be share-able to enable peers to enjoy the game.
A user can join as a player or as a viewer during the entire game session.

## Why is the game play data saved

I plan to train a machine learning model good at Tic Tac Toe game and therefore, game play data is needed for the model to learn from.
In future when a basic version of the model is created, the platform should allow a single player to enjoy the game in a player vs AI session.
