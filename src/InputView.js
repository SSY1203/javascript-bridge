const BridgeGame = require('./BridgeGame');
const { Console, PLZ_BRIDGE_LENGTH, PLZ_MOVE_POSITION } = require('./Constant');
const OutputView = require('./OutputView');
const bridge = new BridgeGame();
const InputView = {
  readBridgeSize() {
    Console.readLine(`${PLZ_BRIDGE_LENGTH}\n`, size => {
      bridge.setBridge(size);
      this.readMoving();
    });
  },

  readMoving() {
    Console.readLine(`\n${PLZ_MOVE_POSITION}\n`, position => {
      bridge.move(position);
      OutputView.printMap(bridge);
      if (bridge.gameSuccessCheck()) {
        OutputView.printResult(bridge);
      }
    });
  },

  readGameCommand() {},
};

module.exports = InputView;
