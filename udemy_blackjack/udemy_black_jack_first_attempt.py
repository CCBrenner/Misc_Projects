"""
Black Jack

Coded by Collyn Christopher Brenner over the span of 3 weeks as a 2nd Milestone Project for a Udemy 2021 Python Course
Coded with minimal assistance from the aid material as distinct from the source material
Coded in the Jupyter Lab enviroment created by Anaconda (which explains the lack of line breaks in certain points of the code during gameplay when using command prompt)
The first project Collyn has ever coded using object-oriented programming (asside from Alice which is a nerfed beginner-version of Java)
2/11/21
"""

import random

suits = ["Spades", "Hearts", "Clubs", "Diamonds"]
ranks = ["Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King","Ace"]
values = {"Two":2, "Three":3, "Four":4, "Five":5, "Six":6, "Seven":7, "Eight":8, "Nine":9, "Ten":10, "Jack":10, "Queen":10, "King":10, "Ace":0}

class Card:
    
    def __init__(self,suit,rank):
        
        self.suit = suit
        self.rank = rank
        self.value = values[rank]
        
    def __str__(self):
        
        return f"{self.rank} of {self.suit}"


class Deck:
    
    def __init__(self):
        self.all_cards = []
        for suit in suits:
            for rank in ranks:
                self.all_cards.append(Card(suit,rank))
                
    def __str__(self):
        return "A deck of cards."
    
    def hit(self):
        return self.all_cards.pop(0)
    
    def shuffle(self):
        random.shuffle(self.all_cards)


class Table:
    
    def __init__(self):
        self.player_name = ''
        self.computer_hand = []
        self.player_hand = []
        self.bankroll_player = 100
        self.bankroll_computer = 0
        self.wager = 0
        
    def __str__(self):
        return "A table where cards can be placed."
        
    def ask_name(self):
        self.player_name = input("Who do we have playing tonight?")
        
    def ask_bet(self):
        while True:
            bet = input(f"How much would you like to wager on this game? ")
            if bet.isdigit():
                bet = int(bet)
                if bet > self.bankroll_player:
                    print("Sorry, you don't have that much to wager.")
                elif bet <= self.bankroll_player:
                    self.wager = bet
                    self.bankroll_player -= bet
                    break
                
    def dealout(self, winner):
        if winner == "dealer":
            print(f"You give your wager of {self.wager} to the dealer to add to his bankroll.\n")
            self.bankroll_computer += self.wager
            self.wager = 0
            print(f"You now have {self.bankroll_player} dollar(s) in your bankroll. The dealer has accrued {self.bankroll_computer} dollar(s) in his bankroll.\n")
        elif winner == "player":
            print(f"\nYou just doubled your wager of {self.wager} to {self.wager*2} and added it to your bankroll!\n")
            self.bankroll_player += self.wager*2
            self.wager = 0
            print(f"You now have {self.bankroll_player} dollar(s) in your bankroll! The dealer has accrued a total of {self.bankroll_computer} dollar(s) in his bankroll.\n")
        
    def display_table_player_turn(self):
        print("Here's what's on the table at the moment...\n\n")
        print(f"For the dealer: {self.computer_hand[0]} ({self.computer_hand[0].value} point(s)) and one other card that for now is unknown until his turn.\n\n")
        print(f"And for you {self.player_name}...\n")
        x = 0
        for card in self.player_hand:
            print(f'Card no. {x+1}: {self.player_hand[x]} ({self.player_hand[x].value} point(s)).\n')
            x += 1
                  
    def display_table_computer_turn(self):
        
        print("Here's what's on the table at the moment...\n\n")
        print(f"For the dealer...\n")
        y = 0
        for card in self.computer_hand:
            print(f'Card no. {y+1}: {self.computer_hand[y]} ({self.computer_hand[y].value} point(s)).\n')
            y += 1
        print(f"\nAnd for you {self.player_name}...\n")
        x = 0
        for card in self.player_hand:
            print(f'Card no. {x+1}: {self.player_hand[x]} ({self.player_hand[x].value} point(s)).\n')
            x += 1
            
    def hit_player(self,card):
        self.player_hand.append(card)
        
    def hit_computer(self,card):
        self.computer_hand.append(card) 
            
    def ace_check_player(self):
        x = 0
        another = ''
        for card in self.player_hand:
            while card.value == 0:
                ace_answer = input(f"You got an {another}Ace! Would you like to count it as a 1 or an 11? ")
                print('')
                if ace_answer == '1':
                    self.player_hand[x].value = 1
                    another = 'ANOTHER '
                    break
                elif ace_answer == '11':
                    self.player_hand[x].value = 11
                    another = 'ANOTHER '
                    break
            x += 1
            
    def ace_check_computer(self, current_player_score, current_computer_score):
        
        # computer AI exists here
        
        for card in self.computer_hand:
                if card.value == 0:

                    # dealer/computer AI
                    if current_computer_score + 11 > current_player_score and current_computer_score <= 10:
                        self.computer_hand[x].value = 11
                        return "dealer_win"
                    
                    elif current_computer_score == current_player_score:
                        self.computer_hand[x].value = 1
                        return "dealer_win"
                    
                    elif current_computer_score > 10:
                        self.computer_hand[x].value = 1
                        
                    else:
                        import random
                        choice = random.randint(0,2)
                        if choice == 0:
                            self.computer_hand[x].value = 1
                        else:
                            self.computer_hand[x].value = 11
                    
                    print(f"\nThe dealer drew an Ace and decided to make it count as {self.computer_hand[x].value} point(s).\n")
                    self.display_table_computer_turn()
                
    
    def sum_score_player(self):
        
        x = 0
        
        for cards in range(0, len(self.player_hand)):
            x += self.player_hand[cards].value
            
        return x
    
    def sum_score_computer(self):
        
        x = 0
        
        for cards in range(0, len(self.computer_hand)):
            x += self.computer_hand[cards].value
            
        return x
    
    def win_check(self, dealer_win, player_score, computer_score):
        
        if computer_score > 21 or player_score == 21:
            return True
        elif player_score < computer_score or player_score > 21 or dealer_win == "dealer_win":
            return False

    
def black_jack():

    """
    Variables that change the game status from Player's turn:
    dealer_turn, player_win, dealer_win (lattermost variable: internal to Dealer's turn)
    """

    from IPython.display import clear_output


    # Begin Game While Loop (for replayability)

    game_on = True
    game_number = 1

    while game_on:


        # Initializing Variables and Objects

        dealer_current_score = 21
        dealer_win = False
        player_turn = True
        dealer_turn = False
        the_deck = Deck()
        the_deck.shuffle() 

        if game_number == 1:
            the_table = Table() 
        else:            
            the_table.player_hand = []
            the_table.computer_hand = []

        the_table.hit_player(the_deck.hit())
        the_table.hit_computer(the_deck.hit())
        the_table.hit_player(the_deck.hit())
        the_table.hit_computer(the_deck.hit())


        # Game Introduction

        if game_number == 1:

            print("Welcome to Black Jack!\n\n(Beat the dealer without going Bust!)\n")

            the_table.ask_name()

            clear_output()
            print(f"Well {the_table.player_name}, I hope you're ready. You've got {the_table.bankroll_player} dollar(s) in your bankroll at the moment.\n\nThe dealer currently has {the_table.bankroll_computer} dollar(s) in his bankroll.\n")
            # print("Here are the point dealouts: Number cards = number amount, Face cards = 10 points, Ace = 11 points or 1 point - you decide.\n")
            print('[For the purposes of this game we will not be using actions such as "Insurance", "Split", and "Double Down".]\n\n[The actions you can use will be "Hit" and "Stay".]\n')
            print(input("Are you ready to start the game? "))

            clear_output()
            print(f"Dope. First, there is the matter of your wager.\n\nLike I said, you've got {the_table.bankroll_player} dollar(s) in your bankroll.\n")

        else:

            # for player replay

            print(f"Welcome to another game of Black Jack {the_table.player_name}!\n\n(Beat the dealer without going Bust!)\n")

            print(f"I hope you're ready for another round. You've got {the_table.bankroll_player} dollar(s) in your bankroll at the moment.\n\nSo far the dealer has accumulated {the_table.bankroll_computer} dollar(s) to his bankroll.\n")
            # print("Here are the point dealouts: Number cards = number amount, Face cards = 10 points, Ace = 11 points or 1 point - you decide.\n")

            print(input("Are you ready to start the game? "))

            clear_output()
            print(f"Dope. First, there is the matter of your wager.\n\nYou've currently got {the_table.bankroll_player} dollar(s) in your bankroll.\n")

        the_table.ask_bet()  
        clear_output()
        print(f"You wager {the_table.wager} dollar(s) that you'll best the dealer in this game of Black Jack.\n")
        print("Alright, Let's play some Black Jack!\n\n")


        # Begin Player's Turn

        # display table and ace check
        
        if the_table.player_hand[0].value == 0 or the_table.player_hand[1].value == 0:
            the_table.display_table_player_turn()
            the_table.ace_check_player()
            clear_output()

        # win_checking the player's starting cards

        player_current_score = the_table.sum_score_player()
        if the_table.win_check(dealer_win, player_current_score, dealer_current_score):
            dealer_turn = False
            player_win = True
            player_turn = False
        elif the_table.win_check(dealer_win, player_current_score, dealer_current_score) == False:
            dealer_turn = False
            player_win = False
            how_it_ended = "you went Bust."
            
        if player_current_score > 21:
            dealer_turn = False
            player_turn = False
            player_win = False
            how_it_ended = "you went Bust."

        while player_turn:

            the_table.display_table_player_turn()

            # player interaction

            while True:
                action = input("Would you like to  Hit  or  Stay  ?").lower()
                if action == 'hit':
                    the_table.hit_player(the_deck.hit())
                    break
                elif action == 'stay':
                    player_turn = False
                    dealer_turn = True
                    break
            the_table.ace_check_player()

            # game status calculations

            player_current_score = the_table.sum_score_player()
            if the_table.win_check(dealer_win, player_current_score, dealer_current_score):
                dealer_turn = False
                player_win = True
                break
            elif player_current_score > 21:
                dealer_turn = False
                player_win = False
                how_it_ended = "you went Bust."
                break

            clear_output()

        # End Player's Turn


        clear_output()
        print(f"{the_table.player_name}, you ended your turn with a total of {player_current_score} points.\n")


        # Begin Dealer's Turn

        if dealer_turn:
            dealer_current_score = 0

            print("Now it's the dealer's turn.\n\n")

            the_table.display_table_computer_turn()

            the_table.ace_check_computer(player_current_score, dealer_current_score)
            dealer_current_score = the_table.sum_score_computer()
            print(f'\nThe dealer currently has {dealer_current_score} points.\n')

            if the_table.win_check(dealer_win, player_current_score, dealer_current_score):
                dealer_turn = False
                player_win = True
            elif the_table.win_check(dealer_win, player_current_score, dealer_current_score) == False:
                dealer_turn = False
                player_win = False
                how_it_ended = f"the dealer beat your score: \n\n{the_table.player_name} : {player_current_score}\n\nDealer : {dealer_current_score}"

            while dealer_turn:

                the_table.hit_computer(the_deck.hit())
                print('The dealer decides to Hit.\n')
                print(input('(Hit Enter inside the textbox to continue.)'))

                clear_output()
                the_table.display_table_computer_turn()

                the_table.ace_check_computer(player_current_score, dealer_current_score)
                dealer_current_score = the_table.sum_score_computer()
                print(f'\nThe dealer currently has {dealer_current_score} points.\n')

                if the_table.win_check(dealer_win, player_current_score, dealer_current_score) == False:
                    dealer_turn = False
                    player_win = False
                    how_it_ended = f"the dealer beat your score: \n\n{the_table.player_name} : {player_current_score}\n\nDealer : {dealer_current_score}"
                    break
                elif dealer_current_score > 21:
                    dealer_turn = False
                    player_win = True
                    break
                elif player_current_score == 21:
                    clear_output()
                    print(f"Dang {the_table.player_name}, you scored a 21! You beat the dealer!")


        # Game Conclusion - congrats + wager dealings

        if player_win == True:
            dealer_current_score = the_table.sum_score_computer()
            print(f"\nCongrats on the win {the_table.player_name}! You beat the dealer.\n\n{the_table.player_name} : {player_current_score}\n\nDealer : {dealer_current_score}")
            the_table.dealout("player")
        else:
            print(f"\nSorry, it looks like {how_it_ended}\n")
            the_table.dealout("dealer")

        # Ask "Replay?"
        while True:
            if the_table.bankroll_player == 0:
                print(f"It looks like you lost all your cash. The dealer goes home with {the_table.bankroll_computer} dollar(s).\n\nThanks for playing!\n\nGAME OVER")
                game_on = False
                break
            else:
                replay = input("Would you like to play again? ").lower()
                if replay == "yes" or replay == "y":
                    game_number += 1
                    clear_output()
                    break
                elif replay == "no" or replay == "n":
                    game_on = False
                    break
                    
black_jack()