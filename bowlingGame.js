class bowlingGame {
  constructor() {
    this._rolls = []
    this._currentRoll = 0
  }

  roll(pins) {
    this._rolls[this._currentRoll++] = pins
  }

  score() {
    var score = 0, frameIndex = 0

    for (var frame = 0; frame < 10; frame++) 
    {
      if (strike.call(this, frameIndex)) 
      {
        score += 10 + strikeBonus.call(this, frameIndex)
        frameIndex++
      } 
      else if (spare.call(this, frameIndex)) 
      {
        score += 10 + spareBonus.call(this, frameIndex)
        frameIndex += 2
      } 
      else 
      {
        score += balls.call(this, frameIndex)
        frameIndex += 2
      }
    }

    return score
  }
}

function balls(frameIndex) {
  return this._rolls[frameIndex] + this._rolls[frameIndex+1];
}

function spareBonus(frameIndex) {
  return this._rolls[frameIndex + 2];
}

function strikeBonus(frameIndex) {
  return this._rolls[frameIndex+1] + this._rolls[frameIndex+2];
}

function strike(frameIndex) {
  return this._rolls[frameIndex] == 10
}

function spare(frameIndex) {
  return this._rolls[frameIndex] + this._rolls[frameIndex+1] == 10
}
