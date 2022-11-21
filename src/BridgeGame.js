const BridgeMaker = require('./BridgeMaker');
class BridgeGame {
  #bridge;

  constructor() {
    this.#bridge = [];
  }

  setBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  move() {}

  retry() {}

  get bridge() {
    return this.#bridge;
  }
}

module.exports = BridgeGame;
