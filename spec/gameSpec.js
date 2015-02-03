var Game = require('../src/game');

describe('Game',function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('has a zero score by default', function(){
    expect(game.score()).toEqual(0);
  });

  it('should be able to play a frame',function(){
    game.playFrame(3,4);
    expect(game.score()).toEqual(7);
  });

  it('should be able to play a second frame',function(){
    game.playFrame(6,2);
    game.playFrame(3,4);
    expect(game.score()).toEqual(15);
  });

  it('should be able to play a third frame',function(){
    game.playFrame(6,2);
    game.playFrame(3,4);
    game.playFrame(1,2);
    expect(game.score()).toEqual(18);
  });

  it('should be able to correctly score a spare',function(){
    game.playFrame(6,4);
    game.playFrame(3,4);
    expect(game.score()).toEqual(20);
  });

  it('should be able to correctly score a strike',function(){
    game.playFrame(10,0);
    game.playFrame(3,4);
    expect(game.score()).toEqual(24);
  });

});