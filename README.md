# Tic Tac Toe Game

This is a simple tic tac toe game that runs in the command line.

Game Description:

- The game is made up of a square grid with 9 portions.
  Each portion represents a slot on which a symbol can be place, either an X or an O.

The game rules are simple;
A player wins when his/her symbol is placed in a manner in which a straight line
can be drawn to cross over the three symbols.

---

This game should allow two players to compete.
In a later time, we will allow the computer to make decisions.

---

- My game design

  - The game contains a list of 3 lists. This is so as to form a square array with
    3 rows and 3 columns, each intersection of row and column having a special
    index number ranging from 1-9.

  - The gameplay is done in turns. When player 1 has played, it is player 2's turn.
  - Player 1 is automatically "X" as symbol while player 2 is assigned the "O".
  - The player's entry is a number between 1 & 9, the slot where his/her symbol is placed.
  - If a slot is empty, then it is represented a "\_".
  - The game ends when either of the following happens;
    - A player wins
    - There is no possibility of winning
    - The program crashes, is interrupted or closed.

## How do we know if a player has won ?

The `has_player_won()` function returns a boolean or a string. It returns a boolean enforced to False if there is no player who has won yet.
On the other hand, it will return the winning player if a player has won.

```py
# checks if a player has won
    # we are going to use the condition above
    # we will check the leading diagonals and a cross manner
    # we will know if a player (and which player) has won if
    # we can form a straight line with 3 consecutive symbols on the grid
    # if at a certain point, a symbol fails to be the same,
    # we stop checking and move on

    # How do we know a vertical or a horizontal is formed ?
    # This is pretty tricky
    # After thinking a little, I came up with the idea that
    # If we have 3 points whose _i_ value is the same, then it forms a horizontal line -> a win
    # In the case of 3 points with equal _j_ values, then it forms a vertical line -> still a win
    # For diagonals, it is much trickier

    # chech if player won along diagonals
    # the winning slot coordinates are
    # - [(0,0), (1,1), (2,2)] or [(0,2), (1,1), (2, 0)]

    # checking along the first diagonal
```

## Plans

My future plan are to

- Add the computer as a second player in case you have no friend to play it with
- Create an online web-based multiplayer tic-tac-toe game with a leaderboard.
- Train an unbeatable Tic Tac Toe AI ;)
