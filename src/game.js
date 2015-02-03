var Frame = require('./frame');
var StrikeFrame = require('./strikeFrame');
var SpareFrame = require('./spareFrame');

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
    var type = this._frameType(roll1, roll2);
    this.firstFrame = new type();
  }
  this.firstFrame.playFrame(roll1, roll2);
};

Game.prototype._frameType = function(roll1, roll2){
  if(roll1 === 10){
    return StrikeFrame;
  } else if((roll1+roll2) === 10){
    return SpareFrame;
  }
  return Frame;
};

module.exports = Game;