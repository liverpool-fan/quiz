var canva;
var gameState = 0
var contestantCount, database,quiz,question,contestantCount

function setup(){
  canvas = createCanvas(850,400);
  
  quiz = new Quiz()
  quiz.getState()
  quiz.start()

  database = firebase
}


function draw(){
  background("pink");

  
}
