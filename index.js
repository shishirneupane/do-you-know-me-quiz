const readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var highScores = [
  {
    name: "Ayush",
    score: 3,
  },
  {
    name: "Prakash",
    score: 1,
  },
  {
    name: "Tanay",
    score: 2,
  },
];

// ex13: put a list of questions together
var questions = [
  {
    question: "First Question - \n- Is my age greater than 20?: ",
    answer: "yes",
  },
  {
    question: "Second Question - \n- Is my hometown Bangalore?: ",
    answer: "no",
  },
  {
    question: "Third Question - \n- Where am I learning coding?: ",
    answer: "neogcamp",
  },
  {
    question: "Fourth Question - \n- Which college did I study at?: ",
    answer: "herald college kathmandu",
  },
  {
    question: "Fifth Question - \n- Which programming language do I use?: ",
    answer: "javascript",
  },
  {
    question: "Sixth Question - \n- What is my favorite food?: ",
    answer: "momo",
  }
];

// ex01 to ex04: do it all together
var username = readlineSync.question(chalk.cyanBright("\nWhat is your name? 🙂 : "));
var uppercaseUsername = username.charAt(0).toUpperCase() + username.slice(1);

function welcomeUser() {
  console.log(chalk.yellowBright.bold("\nWelcome '" + uppercaseUsername + "' to - DO YOU KNOW ME 'Shishir Neupane'? QUIZ.\n" + "\nLet's start the quiz!\n" + "------------------------------" + "\n"));
}

// ex14: club everything to make the game
function askQuestion(question, answer) {
  var userAnswer = readlineSync.question(chalk.cyanBright(question));
  console.log("You entered '" + userAnswer + "'.");
  // ex08: function to check the answer
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    rightAnswer();
  } else {
    wrongAnswer(answer);
  }
  console.log("Current score:", score);
  console.log(chalk.yellowBright('------------------------------\n'));
}

// ex06: increment score if the right answer
function rightAnswer() {
  console.log(chalk.green('Right answer 👍'));
  score++;
}

function wrongAnswer(correctAnswer) {
  console.log(chalk.redBright('Wrong answer 👎'));
  console.log("The correct answer is '" + correctAnswer + "'.");
}

function showScores() {
  congratulateOrTryAgain();
  console.log(chalk.yellow.bold("High scores of other players: "));
  for (var i = 0; i < highScores.length; i++) {
    console.log(chalk.yellowBright(highScores[i].name, ':', highScores[i].score));
  }
}

// ex15: print the final score to the user
function congratulateOrTryAgain() {
  if (score !== 0) {
    console.log(chalk.green("CONGRATULATIONS! You have scored '" + score + "'. 👏"));
    var userHasBeatenHighScore = hasUserBeatenHighScore();
    console.log(chalk.green('\n' + userHasBeatenHighScore) + chalk.yellowBright("------------------------------\n"));
  } else {
    console.log(chalk.redBright("TRY AGAIN! You have scored '" + score + "'.\n"));
    console.log(chalk.yellowBright("------------------------------\n"));
  }
}

// bonus homework: has the user beaten high score?
function hasUserBeatenHighScore() {
  var maxScore = 0;
  for (var i = 0; i < highScores.length; i++) {
    var currentHighScore = highScores[i].score;
    if (currentHighScore > maxScore) {
      maxScore = currentHighScore;
    }
  }
  if (score > maxScore) {
    return "CONGRATULATIONS AGAIN! You have broken the HIGH SCORE RECORDS. 👏\n" + 
    "Kindly, send me the screenshot of your score to update the scoreboard.\n";
  } else {
    return "";
  }
}

function playGame() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    askQuestion(currentQuestion.question, currentQuestion.answer);
  }
}

welcomeUser();
playGame();
showScores();
console.log(chalk.yellowBright("------------------------------\n") + chalk.cyanBright("\nThank you '" + uppercaseUsername + "' for playing this quiz game! ❤️\n"));


// // new section
// console.log('\n--------------New Section------------\n');

// // ex07: function to add two numbers
// add(12, 15);
// function add(numberOne, numberTwo) {
//   console.log('Adding two numbers:\n' + 'First number is ' + numberOne + ' and second number is ' + numberTwo);
//   var sum = numberOne + numberTwo;
//   console.log('The sum of ' + numberOne + ' and ' + numberTwo + ' is ' + sum + '.\n');
// }

// // ex09: print your name 5 times
// for (var i = 0; i < 5; i++) {
//   console.log('Loop Count ', i, ' -> ', uppercaseUsername, '\n');
// }

// // ex10: list grocery items to buy
// // ex11: print every item on the list
// var groceryList = ['milk', 'samosa', 'flowers', 'momo', 'pizza']
// console.log('\n' + groceryList[0], groceryList[2], groceryList[4], '\n');
// for (var i = 0; i < groceryList.length; i++) {
//   console.log(groceryList[i]);
// }


// // ex12: club info about a superhero together
// var batman = {
//   name: "batman",
//   power: "martial arts",
//   costumeColor: "black",
//   strength: 100,
//   stealth: 100,
// };

// var superman = {
//   name: "superman",
//   power: "flight",
//   costumeColor: "blue",
//   strength: 1000,
//   stealth: 10,
// };

// var spiderman = {
//   name: "spiderman",
//   power: "web swings",
//   costumeColor: "red",
//   strength: 50,
//   stealth: 200,
// };

// var thanos = {
//   name: "thanos",
//   power: "infinity stones",
//   costumeColor: "purple",
//   strength: 500,
//   stealth: 0,
// };

// var superheroArray = [batman, superman, spiderman, thanos];

// var positions = {
//   0: "First Superhero",
//   1: "Second Superhero",
//   2: "Third Superhero",
//   3: "Fourth Superhero",
// };

// for (var i = 0; i < superheroArray.length; i++) {
//   var currentHero = superheroArray[i];
//   console.log('\n' + positions[i]);
//   console.log('Name:', currentHero.name);
//   console.log('Power:', currentHero.power);
//   console.log('Costume Color:', currentHero.costumeColor);
//   console.log('Strength:', currentHero.strength);
//   console.log('Stealth:', currentHero.stealth);
// }
