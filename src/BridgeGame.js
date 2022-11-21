const BridgeMaker = require('./BridgeMaker');
class BridgeGame {
  #bridge;
  #userPosition;
  #tryCount;
  constructor() {
    this.#bridge = [];
    this.#userPosition = [];
    this.#tryCount = 1;
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
    this.#userPosition.push(position);
  }

  retry() {
    this.#tryCount += 1;
  }

  get bridge() {
    return this.#bridge;
  }
}

module.exports = BridgeGame;
