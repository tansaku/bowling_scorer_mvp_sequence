var Frame = require('./frame');

function Game(){
  this.runningScore = 0;
  this.firstFrame = undefined;
}

Game.prototype.score = function(){
  var frame = this.firstFrame;
  while(frame !== undefined){
    this.runningScore += frame.score();
    frame = frame.nextFrame();
  } 
  return this.runningScore;
};

Game.prototype.playFrame = function(roll1, roll2){
  if(this.firstFrame === undefined){
    this.firstFrame = new Frame();
  }
  this.firstFrame.playFrame(roll1, roll2);
};

module.exports = Game;