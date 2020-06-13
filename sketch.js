var database;
var voter, form, start1;
var canvas;
var voterCount = 0;
var gameState = 0;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();


  start1 = new Start();
  start1.getState();
  

  form = new Form();
  form.display();
  voter = new Voter();
  voter.getCount();

}

function draw() {
  background("lightblue");  
 
}



