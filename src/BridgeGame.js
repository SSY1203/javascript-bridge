const BridgeMaker = require('./BridgeMaker');
class BridgeGame {
  #bridge;
  #userPosition;
  constructor() {
    this.#bridge = [];
    this.#userPosition = [];
  }

  setBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  move(position) {
    this.#userPosition.push(position);
  }

  retry() {}

  get bridge() {
    return this.#bridge;
  }
}

module.exports = BridgeGame;
