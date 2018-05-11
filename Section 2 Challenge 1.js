/* john and a friend invented a simple game where the player with the highest value of his height (in centeimeters) plus five times his ages wings (what a silly game:)

1. create variables for the heights and ages of the two friends and assign them some values. 
2. calculate their scores
3. decide who wins and print the winner to the console. include the score in the sting that you piutput to the console. dont forget that there can be a draw (both players with the same score).
4. Extra: add the third player and now decide who wins.
*/

/*
var height1 = 1, age1 = 3;
var height2 = 2, age2 = 1;
var height3 = 1, age3 = 4;

var score1 = height1 + 5*age1;
var score2 = height2 + 5*age2;
var score3 = height3 + 5*age3;

if (score1 > score2 && score1 > score3){
    console.log('player one wins');
}
else if (score2 > score1 && score2 > score3){
    console.log('player two wins');
}
else if (score3 > score1 && score3>score2){
    console.log('player three wins');
}

*/

var heights = [1,2,1];
var ages = [3,2,3];
var scores = [];
var i; 
var j;
for (i = 0; i < 3; i++){
    scores.push((heights[i]+5*ages[i]));
    //console.log((heights[i]+5*ages[i]));
}

var win = [true,true,true];
for(i = 0; i < 3; i++){
    for (j = 0; j < 3 ; j++){
        if((i != j) && (scores[i] < scores[j])){
            win[i] = false  
        }
    }
}
//console.log(win);
var message = "the winner is/are:"
var oneWinner = true;

for (i = 0;i<3;i++){
    if(win[i] === true && oneWinner === true){
        oneWinner = false;
        message = message + ' player ' + (i+1);
    }
    else if (win[i] === true && oneWinner === false){
        message = message + ', player' + (i+1);
    }
}
console.log(message);

