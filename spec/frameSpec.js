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

  it('should create next frame when already played',function(){
    frame.playFrame(3,4);
    frame.playFrame(6,3);
    expect(frame.nextFrame()).not.toBeUndefined();
    expect(frame.nextFrame().score()).toEqual(9);
  });

  it('should create next next frame when already played',function(){
    frame.playFrame(3,4);
    frame.playFrame(6,3);
    frame.playFrame(1,2);
    expect(frame.nextFrame().nextFrame()).not.toBeUndefined();
    expect(frame.nextFrame().nextFrame().score()).toEqual(3);
  });
});