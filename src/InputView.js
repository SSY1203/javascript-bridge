const BridgeGame = require('./BridgeGame');
const { Console, PLZ_BRIDGE_LENGTH } = require('./Constant');
const bridge = new BridgeGame();
const InputView = {
  readBridgeSize() {
    Console.readLine(`${PLZ_BRIDGE_LENGTH}\n`, size => {
      bridge.setBridge(size);
    });
  },

  readMoving() {},

  readGameCommand() {},
};

module.exports = InputView;
