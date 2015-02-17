function Frame(){
  this.roll1 = undefined;
  this.roll2 = undefined;
  this.next = undefined;
}

Frame.prototype.nextFrame = function(){
  return this.next;
};

Frame.prototype.score = function(){
  if(this.roll1 === undefined){
    return 0;
  }
  return this.roll1 + this.roll2;
};

Frame.prototype.playFrame = function(roll1, roll2){
  if(this.roll1 === undefined){
    this.roll1 = roll1;
    this.roll2 = roll2;
  } else {
    this._playOnNextEmptyFrame(roll1, roll2);
  }
};

Frame.prototype._playOnNextEmptyFrame = function(roll1, roll2){
  var current = this._findCurrentFrame();
  current.next = new Frame();
  current.next.playFrame(roll1,roll2);
};

Frame.prototype._findCurrentFrame = function(){
  var frame = this;
  var current = frame;
  while(frame !== undefined){
    current = frame;
    frame = frame.nextFrame();
  }
  return current;
};

module.exports = Frame;