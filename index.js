
var readlineSync = require("readline-sync");
var score = 0;

console.log("Welcome to this Quiz on Ancient Hindu Mytho Stories!");
console.log();
var userName = readlineSync.question("Please Type your Name? ");
console.log("Namaste, " + userName + "!");
console.log("Give atleast 5 answers correct to reach level 2.");
console.log("VIJAYI BHAVAH!");
console.log();

var levelOne1 = {
  question : "Who composed the first Ramayana? ",
  answer: "valmiki",
  option:["ved vyas", "tulsidas", "valmiki", "sant eknath"],
};
var levelOne2 = {
  question : "What was the name of bharat's mother who sent Ram to exile? ",
  answer: "kaikeyi",
  option: ["kaushalya", "kaikeyi", "suchitra", "sumitra"],
};
var levelOne3 = {
  question : "What was the name of Laxman's wife? ",
  answer: "urmila",
  option: ["urmila", "subhadra", "mandavi", "shrutakirti"],
};
var levelOne4 = {
  question : "What was the name of the forest in which shree Ram, Maata Sita and lakshman stayed during their exile? ",
  answer: "dandakaranya",
  option: ["panchavati", "chirakoot", "dandakaranya", "kishkindha"],
};
var levelOne5 = {
  question : "Who among the following was not the wife of King Dasharatha? ",
  answer: "suchitra",
  option: ["kaushalya", "suchitra", "sumitra", "kaikeyi"],
};
var levelOne6 = {
  question : "What was the name of the bow Shree Ram broke to marry Maata Sita in the svayamvar? ",
  answer: "pinaka",
  option: ["brahmastra", "bhargava", "sudarshan", "pinaka"],
};


var levelTwo1 = {
  question : "Who wrote Mahabharat? ",
  answer : "ved vyas",
  option : ["ved vyas", "eknath", "tulsidas", "valmiki"],
};
var levelTwo2 = {
  question : "For how many days the Kurukshetra war was fought? ",
  answer : "18",
  option : ["20", "21", "19", "18"],
};
var levelTwo3 = {
  question : "What was the name of nakul and sahadev's mother? ",
  answer : "madri",
  option : ["kunti", "madri", "gandhari", "devki"],
};
var levelTwo4 = {
  question : "During the crowning of Yudhishthira, who abused Lord Krishna 100 times? ",
  answer : "shishupala",
  option : ["bhishma", "karna", "dushasana", "shishupala"],
};
var levelTwo5 = {
  question : "What is name of Lord Krishna's chakra? ",
  answer : "sudarshan",
  option : ["vajra", "vasuki", "sudarshan", "vaishnav"],
};
var levelTwo6 = {
  question : "Who gave bhishma the boon of choosing the time of his death? ",
  answer : "shantanu",
  option : ["shantanu", "ganga", "satyavati", "krishna"],
};


var levelThree1 = {
  question : "King Daksha made how many of his daughters marry Chandradev? ",
  answer : "27",
  option : ["23", "27", "19", "14"],
};
var levelThree2 = {
  question : "Son of Hiranyakashipu, Prahalad was a devotee of? ",
  answer : "Lord Vishnu",
  option : ["Lord Shiva", "Brahma", "Lord Vishnu", "All of the above"],
};
var levelThree3 = {
  question : "What is the name of the snake who poisoned the water of yamuna and was defeated by shree Krishna?",
  answer : "Kaliya",
  option : ["Kaliya", "Vasuki", "Astika", "Manasa"],
};
var levelThree4 = {
  question : "What avatar Lord Vishnu took to save Dharti(earth) from submurging into the Sea? ",
  answer : "Varaha",
  option : ["Matsya", "Kurma", "Narasimha", "Varaha"],
};
var levelThree5 = {
  question : "Who was the Guru of Asuras? ",
  answer : "Shukracharya",
  option : ["Bharadvaja", "Kashyapa", "Vasistha", "Shukracharya"],
};
var levelThree6 = {
  question : "Ravana was a devotee of? ",
  answer : "Lord Shiva",
  option : ["Lord Shiva", "Lord Vishnu", "Lord brahma", "Maa Durga"],
};

var quizQAO = [levelOne1, levelOne2, levelOne3, levelOne4, levelOne5, levelOne6, levelTwo1, levelTwo2, levelTwo3, levelTwo4, levelTwo5, levelTwo6, levelThree1, levelThree2, levelThree3, levelThree4, levelThree5, levelThree6];

function play(question, answer) {
  var userAnswer = readlineSync.keyInSelect(khela.option, question);

  if (khela.option[userAnswer] === answer) {
    console.log("CORRECT!");
    score++;
  }else {
    console.log("INCORRECT!");
    console.log("The Right answer is " + khela.answer + ".");
  };
};

for(var i=0; i<6; i++) {
  var khela = quizQAO[i];
  play(khela.question, khela.answer)
};

console.log("Your total score is " + score + "!");

if(score >= 5) {
  console.log("You have succeeded to the 2ND Level!");
  console.log("");

  for(var i=6; i<12; i++) {
  var khela = quizQAO[i];
  play(khela.question, khela.answer)};

  if(score >= 10) {
  console.log("You have succeeded to the 3RD Level!");
  console.log("");

  for(var i=12; i<quizQAO.length; i++) {
  var khela = quizQAO[i];
  play(khela.question, khela.answer)};
  }else {
  console.log("You couldn't clear the 2ND Level!")
  };
  console.log("You scored " + score + "!");

}else {
  console.log("You couldn't clear the 1ST Level!");
  console.log("You scored " + score + "!");
};
