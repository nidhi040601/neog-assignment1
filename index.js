const readlineSync = require('readline-sync');
const readline = require("readline");
const chalk  = require("chalk");

const username = readlineSync.question(chalk.blue("Hello!! Please tell us your good name? "));
console.log(`${chalk.yellowBright("\nNamaste")} 🙏 ${chalk.red.bold(username.toUpperCase())}.\n ${chalk.yellowBright("\nWelcome to the quiz")} 🥳 : ${chalk.red.bold("\"How much you know me?\"")}`);


console.log(chalk.magentaBright.bold(`
\n-------
LEVEL:1
-------\n`));
console.log(chalk.yellowBright(`Each question will be of one point.So, let's get started...
--------------------------------------------------------------
(Only answer in "a" or "b")\n\n`));


let levelOneScore = 0;
let levelTwoScore = 0;
let finalScore = 0;
let highScore = {
  name: "",
  score: 0
}

const levelOneQuestions = [
    {
      question: `What's my favorite flower?
      a. Lily
      b. Rose
    `,
     answer: 'b'
    },
    {
      question: `What’s my favorite song?
      a. Bade ache lagte h
      b. Channa Mereya
    `,
     answer: 'a'
    },
    {
      question: `What do I prefer salty or sweet food?
      a. Salty
      b. Sweet
    `,
     answer: 'a'
    },
    {
      question: `I prefer wearing shoes or sandals?
      a. Shoes
      b. Sandals
    `,
     answer: 'a'
    },
    {
      question: `What do I prefer mountains or beaches?
      a. Mountains
      b. Beaches
    `,
     answer: 'a'
    },
    {
      question: `What do I prefer icecream or brownies?
      a. Icecream
      b. Brownies
    `,
     answer: 'b'
    },
    {
      question: `Would I prefer having pet in future?
      a. Yes
      b. No
    `,
     answer: 'b'
    },
    {
      question: `Who taught me flying kite?
      a. Dad
      b. Kashyap
    `,
     answer: 'a'
    },
    {
      question: `Which festival do I like the most?
      a. Uttrayan
      b. Navratri
    `,
     answer: 'b'
    },
    {
      question: `What type of music I would prefer?
      a. Slow
      b. Pop
    `,
     answer: 'a'
    }  
];

const levelTwoQuestions =  [
    {
      question: `Which is my lucky number?
(Answer in numbers)
    `,
     answer: '19'
    },
    {
      question: `What would I choose? Money or love?
    `,
     answer: 'love'
    },
    {
      question: `What is my all time favorite flavor?
    `,
     answer: 'choclate'
    },
    {
      question: `What’s been the best year of my life so far?
    `,
     answer: '2016'
    },
    {
      question: `Do I believe in destiny?
    `,
     answer: 'no'
    },
];

function playLevelOne(question, answer){
  const userAns = readlineSync.question(chalk.blueBright(question));
  console.log(chalk.blueBright("\nYou answered: ") + chalk.magentaBright(userAns));
  if(answer === userAns.toLowerCase()){
    console.log(chalk.greenBright.bold("\nRight!😎🥳"));
    levelOneScore++;
  }else{
    console.log(chalk.red.bold('\nWrong!😟🤯'));
  }
  console.log(chalk.magentaBright(`\nYour score: ${levelOneScore} point`));
  console.log("\n----------------------------------\n\n");
}

function playLevelTwo(question, answer){
  const userAns = readlineSync.question(chalk.blueBright(question));
  console.log(chalk.blueBright("\nYou answered: ") + chalk.magentaBright(userAns));
  if(answer === userAns.toLowerCase()){
    console.log(chalk.greenBright.bold("\nRight!😎🥳"));
    levelTwoScore++;
  }else{
    console.log(chalk.red.bold('\nWrong!😟🤯'));
  }
  console.log(chalk.magentaBright(`\nYour score: ${levelTwoScore} point`));
  console.log("\n----------------------------------\n\n");
}


for(let i=0; i<levelOneQuestions.length; i++){
    playLevelOne(levelOneQuestions[i].question,levelOneQuestions[i].answer);  
}

console.log(chalk.magentaBright.bold(`\n
------------------------
LEVEL ONE SCORE: ${levelOneScore} POINTS
------------------------\n`));

if(levelOneScore > 6){
  console.log(chalk.yellowBright(`CONGRATS ${username}🥳🥳! You reached to LEVEL: 2
---------------------------------------------------------\n`));

  console.log(chalk.magentaBright.bold(`
\n-------
LEVEL:2
-------\n`));
console.log(chalk.yellowBright(`Each question will be of two point.So, let's get started...
--------------------------------------------------------------
(This level does't provide options)\n\n`));


  for(let i=0; i<levelTwoQuestions.length; i++){
      playLevelTwo(levelTwoQuestions[i].question,     levelTwoQuestions[i].answer);  
  }

  console.log(chalk.magentaBright.bold(`\n
------------------------
LEVEL TWO SCORE: ${levelTwoScore} POINTS
------------------------\n
BRAVO ${username}!!! You played very well.`));
}else{
  console.log(chalk.yellowBright(`SORRY ${username}😟! You need to know me more. So, can't send you to the LEVEL:2
--------------------------------------------------------------\n
BETTER LUCK NEXT TIME!\n`));
}

finalScore = levelOneScore + levelTwoScore;
console.log(chalk.magentaBright.bold(`\n
--------------------
FINAL SCORE: ${finalScore} POINTS
--------------------\n`));


if(highScore.score !== 0){
  console.log(chalk.yellowBright.bold(`\n
---------------------
HIGH SCORE:
NAME: ${highScore.name} POINTS
SCORE: ${highScore.score}
--------------------\n
Share me the screenshot if you have beaten the highscore.\n`));
}else{
  console.log(chalk.yellowBright.bold(`\n
---------------------
HIGH SCORE:
NAME: ${finalScore} POINTS
SCORE: ${username.toUpperCase()}
--------------------\n
Wohooo!! You created a High Score.
(But you were the first player🤭😅)
Share me the screenshot of your highscore.`));
}

//Resetng game scores;
finalScore = 0;
levelOneScore = 0;
finalScore = 0;