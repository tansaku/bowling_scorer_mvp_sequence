var Frame = require('./frame');

function SpareFrame(){

}

SpareFrame.prototype = new Frame();

SpareFrame.prototype.score = function(){
  if(this.nextFrame().roll1 === undefined){
    return 0;
  }
  return 10 + this.nextFrame().roll1;
};



module.exports = SpareFrame;