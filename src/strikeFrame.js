var Frame = require('./frame');

function StrikeFrame(){

}

StrikeFrame.prototype = new Frame();

StrikeFrame.prototype.score = function(){
  // we should check if the next frame is a strike ... need isStrike method???
  var next = this.nextFrame();
  if(next.roll1 === undefined || next.roll2 === undefined){
    return 0;
  }
  return 10 + this.nextFrame().roll1 + this.nextFrame().roll2;
};

module.exports = StrikeFrame;