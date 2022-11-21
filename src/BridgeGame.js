const BridgeMaker = require('./BridgeMaker');
class BridgeGame {
  #bridge;
  #userPosition;
  #tryCount;
  #isPlaying;

  constructor() {
    this.#bridge = [];
    this.#userPosition = [];
    this.#tryCount = 1;
    this.#isPlaying = true;
  }

  setBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  gameSuccess() {
    if (this.#bridge.length === this.#userPosition.length) {
      return true;
    }
    return false;
  }

  gameSuccessCheck() {
    if (JSON.stringify(this.#bridge) === JSON.stringify(this.#userSelection)) {
      return '성공';
    }
    return '실패';
  }

  move(position) {
    if (this.#bridge[this.#userPosition.length] !== position) {
      this.#isPlaying = false;
    }
    this.#userPosition.push(position);
  }

  get bridge() {
    return this.#bridge;
  }

  get userPosition() {
    return this.#userPosition;
  }

  get tryCount() {
    return this.#tryCount;
  }

  get isPlaying() {
    return this.#isPlaying;
  }

  retry() {
    this.#isPlaying = true;
    this.#tryCount += 1;
  }
}

module.exports = BridgeGame;
