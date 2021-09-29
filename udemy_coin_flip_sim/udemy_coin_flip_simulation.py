"""
Copied and pasted from coin_flip_simulation.ipynb (5/7/21)
"""


def coin_flip_sim():
    # 0. Initialize code (imports and functions)

    from random import random
    from collections import Counter

    def flipper(amt):

        seq = []

        for n in range(amt):
            seq.append(round(random()))

        return seq

    def counter(seq):

        winners = Counter(seq)

        heads = winners[0]
        tails = winners[1]

        return heads, tails

    def events_display(seq):
        for n, ind in enumerate(seq):
            if ind == 0:
                print('\tFlip # ' + str(n + 1) + ' is a win for: Heads')
            elif ind == 1:
                print('\tFlip # ' + str(n + 1) + ' is a win for: Tails')

    # 1. Ask if they would like to flip a coin: y or n

    start = ''
    while start != 'n' or start != 'y':
        start = input('Would you like to flip a coin? (y or n): ')
        if start == 'n':
            return False
        elif start == 'y':
            break

    # 2. Ask how many times would they like to flip it: integer

    while True:
        flips = input('How many times would you like to flip? (Please enter a number.) ')

        try:
            flips = int(flips)
            break
        except ValueError:
            print('\tSorry, that is not a number.')

    # 3. Run program using random()

    seq = flipper(flips)
    heads, tails = counter(seq)

    # 4. Print total results for heads and total results for tails

    print('\nHere are the results...\n')
    print('\tHeads won ' + str(heads) + ' times and tails won ' + str(tails) + ' times.')

    if heads > tails:
        print('\tHeads won!')
    elif tails > heads:
        print('\tTails won!')
    else:
        print('\tIt looks like it was a tie.')

    # 5. Print results for sequence of events (optional:
    # condense results that are same in a row with a special notation)

    print('\nHere is how it all went down:\n')
    events_display(seq)


coin_flip_sim()
