var Frame = require('../src/frame');

describe('Frame',function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('has a zero score by default', function(){
    expect(frame.score()).toEqual(0);
  });

  it('should be able to play a frame',function(){
    frame.playFrame(3,4);
    expect(frame.score()).toEqual(7);
  });

  it('should have an undefined next frame by default',function(){
    expect(frame.nextFrame()).toBeUndefined();
  });
});