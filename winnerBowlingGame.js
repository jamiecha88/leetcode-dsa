/*
You are given two 0-indexed integer arrays player1 and player2, that represent the number of pins that player 1 and player 2 hit in a bowling game, respectively. The bowling game consists of n turns, and the number of pins in each turn is exactly 10. Assume a player hit xi pins in the ith turn. The value of the ith turn for the player is:

2xi if the player hit 10 pins in any of the previous two turns.
Otherwise, It is xi.
The score of the player is the sum of the values of their n turns.

RETURN
1 if the score of player 1 is more than the score of player 2,
2 if the score of player 2 is more than the score of player 1, and
0 in case of a draw.

EXAMPLE 1
Input: player1 = [4,10,7,9], player2 = [6,5,2,3]
Output: 1
Explanation: The score of player1 is 4 + 10 + 2*7 + 2*9 = 46.
The score of player2 is 6 + 5 + 2 + 3 = 16.
Score of player1 is more than the score of player2, so, player1 is the winner, and the answer is 1.

EXAMPLE 2
Input: player1 = [3,5,7,6], player2 = [8,10,10,2]
Output: 2
Explanation: The score of player1 is 3 + 5 + 7 + 6 = 21.
The score of player2 is 8 + 10 + 2*10 + 2*2 = 42.
Score of player2 is more than the score of player1, so, player2 is the winner, and the answer is 2.

EXAMPLE 3
Input: player1 = [2,3], player2 = [4,1]
Output: 0
Explanation: The score of player1 is 2 + 3 = 5
The score of player2 is 4 + 1 = 5
The score of player1 equals to the score of player2, so, there is a draw, and the answer is 0.

Constraints:
n == player1.length == player2.length
1 <= n <= 1000
0 <= player1[i], player2[i] <= 10
*/

let isWinner1 = function(player1, player2) {
    //question: why is sliding window necessary here anyway if we need to know if there is a 10 in array in every turn?
};



//-----------------------------------------
var isWinner2 = function(player1, player2) {
    //check array lengths (cannot be empty)
    //check if any items are between 0-10

    //let game = array length (determine number of turns)
    //use for loop to check each element if 10...
        //use if/else statement (if i >= 10, then double every number AFTER)...do something like this? -> 2*arr[i]
    //add everything together from above calculation...
    //how do I run this with two arrays? (using i, j and another variable?)
    //return winner
};

//xi
//"x subscript i"
//"i is the specific turn # in game; So x1 would be turn number 1"

//2xi
//After the first strike (all pins are knocked down), then multiply every value after that turn by 2

//sum of turns for each player is calculated.
//player with highest num is slidthe winner
//returns 1, 2, or 0 (tie)

//constraints: both players' arrays must be same length, array cannot be empty or over 1000 turns, valid point values are 0-10 (inclusive)