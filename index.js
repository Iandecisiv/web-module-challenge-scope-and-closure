// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter uses an outer function scope while the other uses a global scope for its count variable
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * the first one uses an outermost function closure while the second one gives a global function closure, the count variable for the second is outside the function and has no nesting function
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * The first one is perferable if the variable being intitialized is only being used within the function, while the second one is perferable if the variable being enclosed is being used in multiple places outside the function
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  let max = 2;
  let min = 0;
  let result = Math.floor(Math.random() * (max - min + 1)) + min;
  // console.log(result);
  return result;

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

// function finalScore(inning, number_of_innings){

//   let home_score = 0;
//   let away_score = 0;

//   for(let i = 0; i < number_of_innings; i++){
//     home_score += inning;

//   }

//   for(let i = 0; i < number_of_innings; i++){
//     away_score += inning;

//   }     
//   return {"Home": home_score, "Away": away_score};

// }

function finalScore(inning, number_of_innings){

  let home_score = 0;
  let away_score = 0;

  for(let i = 0; i < number_of_innings; i++){
    home_score += inning();
    away_score += inning();

  }     
  return {"Home": home_score, "Away": away_score};

}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(inning, number_of_innings) {
  let home_score = 0;
  let away_score = 0;

  for(let i = 0; i < number_of_innings; i++){
    home_score += inning();
    away_score += inning();
     let inning_number = i + 1;
     console.log(inning_number + "th " + "inning: " + home_score + " - " + away_score);
  }
  console.log("Final Score: "+ home_score +" - " +away_score);
}

// scoreboard(inning, 12);
