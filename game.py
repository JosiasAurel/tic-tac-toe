
"""
A Tic Tac Toe game that runs in the command line - by Josias Aurel

Game Description:
- The game is made up of a square grid with 9 portions.
Each portion represents a slot on which a symbol can be place, either an X or an O.

The game rules are simple;
A player wins when his/her symbol is placed in a manner in which a straight line
can be drawn to cross over the three symbols.

----
This game should allow two players to compete.
In a later time, we will allow the computer to make decisions.

----
- My game design
    - The game contains a list of 3 lists. This is so as to form a square array with
    3 rows and 3 columns, each intersection of row and column having a special
    index number ranging from 1-9.

    - The gameplay is done in turns. When player 1 has played, it is player 2's turn.
    - Player 1 is automatically "X" as symbol while player 2 is assigned the "O".
    - The player's entry is a number between 1 & 9, the slot where his/her symbol is placed.
    - If a slot is empty, then it is represented a "_".
    - The game ends when either of the following happens;
        - A player wins
        - There is no possibility of winning
        - The program crashes, is interrupted or closed.
"""

import typing as T

HasWon = T.NewType("HasWon", bool or str)

game_grid: T.List[T.List[str]] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

player_1: str = "X"
player_2: str = "O"
winner: bool = False
winning_player: str = None
finished_game: bool = False


def clean_grid() -> T.List[T.List[int]]:

    new_grid: T.List[T.List[int]] = []
    j = 0
    for i in range(3):
        new_grid.append([])
        for j_ in range(3):
            # print(j)
            j += 1
            new_grid[i].append(j)

    return new_grid


def insert_symbol(index: int, player: int = 0) -> None:
    player_1 = "X"
    player_2 = "O"

    # we will test every case of the player's control
    if index == 1:
        if type(game_grid[0][0]) != str:
            game_grid[0][0] = player_1 if player == 0 else player_2
        else:
            pass
    elif index == 2:
        if type(game_grid[0][1]) != str:
            game_grid[0][1] = player_1 if player == 0 else player_2
        else:
            pass
    elif index == 3:
        if type(game_grid[0][2]) != str:
            game_grid[0][2] = player_1 if player == 0 else player_2
        else:
            pass
    elif index == 4:
        if type(game_grid[1][0]) != str:
            game_grid[1][0] = player_1 if player == 0 else player_2
        else:
            pass
    elif index == 5:
        if type(game_grid[1][1]) != str:
            game_grid[1][1] = player_1 if player == 0 else player_2
        else:
            pass
    elif index == 6:
        if type(game_grid[1][2]) != str:
            game_grid[1][2] = player_1 if player == 0 else player_2
        else:
            pass
    elif index == 7:
        if type(game_grid[2][0]) != str:
            game_grid[2][0] = player_1 if player == 0 else player_2
        else:
            pass
    elif index == 8:
        if type(game_grid[2][1]) != str:
            game_grid[2][1] = player_1 if player == 0 else player_2
        else:
            pass
    elif index == 9:
        if type(game_grid[2][2]) != str:
            game_grid[2][2] = player_1 if player == 0 else player_2
        else:
            pass
    else:
        print("Unknown command")


basis = 0


def print_game_grid() -> None:
    for row in game_grid:
        for slot in row:
            print(slot, end=" ")
        print("")


def has_player_won() -> HasWon:
    global winner
    global player_1
    global player_2
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

    player_1_positions: T.List[tuple] = []
    player_2_positions: T.List[tuple] = []

    for i, row in enumerate(game_grid):
        for j, slot in enumerate(row):
            if slot == player_1:
                player_1_positions.append((i, j))
            elif slot == player_2:
                player_2_positions.append((i, j))
            else:
                pass

    # chech if player won along diagonals
    # the winning slot coordinates are
    # - [(0,0), (1,1), (2,2)] or [(0,2), (1,1), (2, 0)]

    # checking along the first diagonal
    try:
        player_1_positions.index((0, 0))
        player_1_positions.index((1, 1))
        player_1_positions.index((2, 2))
        return player_1
    except:
        pass

    # checking along the second diagonal
    try:
        player_2_positions.index((0, 2))
        player_2_positions.index((1, 1))
        player_2_positions.index((2, 0))
        return player_2
    except:
        pass

    player_1_xs = []
    player_1_ys = []
    player_2_xs = []
    player_2_ys = []

    for i in player_1_positions:
        player_1_xs.append(i[0])
        player_1_ys.append(i[1])

    for i in player_2_positions:
        player_2_xs.append(i[0])
        player_2_ys.append(i[1])

    # player 1
    for i in player_1_xs:
        if player_1_xs.count(i) >= 3:
            return player_1
        else:
            pass
    for i in player_1_ys:
        if player_1_ys.count(i) >= 3:
            return player_1
        else:
            pass
    # player 2
    for i in player_2_xs:
        if player_2_xs.count(i) >= 3:
            return player_2
        else:
            pass
    for i in player_2_ys:
        if player_2_ys.count(i) >= 3:
            return player_2
        else:
            pass

    return False


player_turn = True
while True:
    print_game_grid()
    player_move = int(input("Enter your next move : "))
    winner_exists = has_player_won()

    if player_turn == 1 and winner_exists == False:
        insert_symbol(player_move)
    elif player_turn == 0 and winner_exists == False:
        insert_symbol(player_move, 1)
    else:
        print(f"Winner is {winner_exists} ")
        break

    player_turn = not player_turn


"""  
Finally I am soo happy I finished making this game it was so painful to struggle
and make this game for my first time without being able to Google but ultimately I will
say making this game alone was a win for me.

I have coded such stuff in Python for almost a year and making this game was helpful
to test if I still remember the basics of the language.
I managed to learn some new things along the way so it was great.

I am happy I managed to even come up with a trick to check if the player wins without having
to write long lines of code (The previous code when I left this last night was ugly and confusing).

There is probably a cleaner way of building this game which I might not know about yet 
but this is a good way to refresh the basic concepts.
I encourage anyone getting this code to make it even better... and share it ;)
"""
