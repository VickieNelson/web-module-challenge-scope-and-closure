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
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *counter 1 is nested inside the counterMaker function so that entire formulations is then passes into counter 2 
 
 * 2. Which of the two uses a closure? How can you tell? counter 1 has a closure because the gates are closed on that process and can be passed onto counter2
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? counter 1 is preferable when needed only inside the purpose of the counter maker function, counter2 can be uses alone within the overal function but still pass in info from above it inside the function.
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(num) {
  let score = Math.random() * 2;
  //automatically runs 0-.9999 times 2

  score = Math.round(score);
  return score;
}

console.log(inning()); // num++ ????

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

//check all of the innings to view the scores for each inning
filter or pull out the score at that final num (9)
return an object that contains the final score for Home and Away teams

  // inning represents this code
  // let score = Math.random() * 2;
  //  score = Math.round(score);

*/ function finalScore(inning, num) {
  //this passes in the above function of inning, plus a parameter of num for the value of inning

  //this is variable that the information is passed to
  let homeTeam = [];
  let awayTeam = [];
  //total score stored as obj and const
  const totalScore = { Home: 0, Away: 0 };

  //for loop start at 1 represents inning number
  for (let i = 1; i <= num; i++) {

    //value at home set to 0
    let home = 0;

    let away = 0;

    //home and away = random inning function
    home = inning();
    away = inning();

    homeTeam.push(home);
    awayTeam.push(away);

  }

  //create home score varialble = home Team array reduced into one valu
  //total hhom scores being added together
  //score is the score being added to total score

  let homeScore = homeTeam.reduce((totalHome, score) => {
    return totalHome + score;
  }, 0);

  let awayScore = awayTeam.reduce((totalAway, score) => {
    return totalAway + score;
  }, 0);
  totalScore.Home = homeScore;
  totalScore.Away = awayScore;
  return totalScore;
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInnings(inning) {
  return {
    home: inning(),
    away: inning()
  };
};
//callback ining num variab

function scoreboard(getInnings, inning, num) {
  //for loop to iterate the times specified
  let homeTeam = 0;
  let awayTeam = 0;
  const results = [];

  for (let i = 1; i <= num; i++) {
    const currentinnings = getInnings(inning); //current inning random score
    homeTeam += currentinnings.home; //targets home obj and adds score
    awayTeam += currentinnings.away;
    results.push(`${i + 1} inning: ${currentinnings.away} - ${currentinnings.home}`)
  }

  if (homeTeam === awayTeam) { //if team ties
    results.push(`This game will require extra innings`)
  } //push final score
  else {
    results.push(`Final Score: ${awayTeam} - ${homeTeam}`)
  }
  //return results
  return results;
} // ends function
console.log(scoreboard(getInnings, inning, 9));
