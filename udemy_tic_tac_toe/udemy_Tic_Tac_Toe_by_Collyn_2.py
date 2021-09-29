"""
This was copied and pasted from .ipynb file at this location (5/7/21):

C:\\Users\\Collyn B - VotP\\Desktop\\Professional\\Software Engineering\\udemy_python_course_2020\\
udemy_python_course_materials_2020\\udemy_python_course_materials_2020\\04-Milestone Project - 1\\
Tic_Tac_Toe_by_Collyn_2.ipynb

PEP8 improvements were implemented after copy/paste
"""


# "Display the game."
def display_board(position):
    print(' ' + position[1] + ' | ' + position[2] + ' | ' + position[3])
    print(' ' + position[4] + ' | ' + position[5] + ' | ' + position[6])
    print(' ' + position[7] + ' | ' + position[8] + ' | ' + position[9])


# "Who would like to be X and who would like to be O?""
def player_mark_choice():
    """
    OUTPUT something like
    player1, player2 = (Player_1 , Player 2)
    """

    mark = ''

    while mark != 'X' and mark != 'O':
        mark = input('Player 1: Would you like to play as X or O? ').upper()

    if mark == 'X':
        return 'X', 'O'
    else:
        return 'O', 'X'


# "Assign the marker to this position on the board.""
def place_marker(board, position, marker):
    board[position] = marker


# "Did somebody win?"
def win_check(board, mark):
    if ((board[1] == board[2] == board[3] == mark) or  # top row
            (board[4] == board[5] == board[6] == mark) or  # middle row
            (board[7] == board[8] == board[9] == mark) or  # bottom row
            (board[1] == board[4] == board[7] == mark) or  # left column
            (board[2] == board[5] == board[8] == mark) or  # middle column
            (board[3] == board[6] == board[9] == mark) or  # right column
            (board[1] == board[5] == board[9] == mark) or  # up-left diagonal
            (board[3] == board[5] == board[7] == mark)):  # up-right diagonal
        return True
    else:
        return False


# "Have all of the positions been taken?"
def full_board_check(board):
    if ' ' not in board:
        return True
    else:
        return False


# import random

# "Who shall go first? Doesn't matter but I want to be fair."
def order_choice():
    import random

    if random.randint(0, 1) == 0:
        return '1', 1
    else:
        return '2', 2


# "Was this position on the board already taken?"
def space_check(board, position):
    if board[position] == ' ':
        return True
    else:
        print('That position is already taken.')
        print('')
        display_board(board)
        print('')
        return False


# "Where would you like to put your mark?"
def player_position_choice(player):
    while True:
        choice = input('Player ' + player + ' : Choose a position from 1 to 9. ')
        if choice in ['1', '2', '3', '4', '5', '6', '7', '8', '9']:
            return int(choice)


# "How does the board placement work?/How do the controls work?"
def explain_board():
    print(' 1 | 2 | 3 ')
    print(' 4 | 5 | 6 ')
    print(' 7 | 8 | 9 ')
    print('')
    print("This is how the board is laid out. The number each player enters as their position will place their mark at "
          "the corresponding position on the board. The layout is like that of a phone's dial pad.")


# "Would you like to play again?"
def replay():
    answer = input('Would you like to play again?').upper()

    if answer == 'YES' or answer == 'Y':
        return True
    elif answer == 'NO' or answer == 'N':
        print('\nThank you for playing!\n\n(Created by Collyn Brenner 2021)')
        return False


def tic_tac_toe():
    # from IPython.display import clear_output

    the_board = ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    player_mark = ['#', '1', '2']

    # Start of game code
    while True:
        print('Welcome to Tic-Tac-Toe! (coded by Collyn Christopher Brenner)')
        print('')
        explain_board()
        print('')
        display_board(the_board)
        print('')
        player_mark[1], player_mark[2] = player_mark_choice()
        current_player_str, current_player_int = order_choice()
        print(f'With a flip of a coin it is decided that Player {current_player_str} will go first.')

        while True:
            choice = player_position_choice(current_player_str)
            if space_check(the_board, choice):
                place_marker(the_board, choice, player_mark[current_player_int])
                # clear_output()
                print('')
                display_board(the_board)
                print('')
                if win_check(the_board, player_mark[current_player_int]):
                    print(f'Player {current_player_int} has won the game as {player_mark[current_player_int]} !!!')
                    print('')
                    break
                elif full_board_check(the_board):
                    print('The board is full and it looks like we have a tie. Game Over.')
                    print('')
                    break
                else:
                    if current_player_str == '1':
                        current_player_str = '2'
                        current_player_int = 2
                    else:
                        current_player_str = '1'
                        current_player_int = 1
        if replay():
            # clear_output()
            the_board = ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
            player_mark = ['#', '1', '2']
            print('')
        else:
            break


tic_tac_toe()


"""
- decide to play
- draw the board
- choose who's going to be X and who's going to be O
- determine who goes first (normally X does)
- use pencil to mark location of each turn
- once someone has either three in a row OR the board is full, then the game ends
- choose whether to play again or not

- take turns placing your mars on the board
- you can't place your mark over someone else' mark
- you win by having three of your marks in a line either horizontally, vertically, or diagonally
- if the board fills up, you can't take another turn and the game is over; every game has a maximum of 9 turns
"""
