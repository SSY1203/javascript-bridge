const { Console, PLZ_BRIDGE_LENGTH, PLZ_MOVE_POSITION, RETRY_OR_QUIT } = require('./Constant');
const OutputView = require('./OutputView');
const Validation = require('./Validation');
const BridgeGame = require('./BridgeGame');
const validator = new Validation();
const bridge = new BridgeGame();
const InputView = {
  readBridgeSize() {
    Console.readLine(`\n${PLZ_BRIDGE_LENGTH}\n`, size => {
      validator.bridgeSizeCheck(size);
      bridge.setBridge(size);
      this.readMoving();
    });
  },

  readMoving() {
    Console.readLine(`${PLZ_MOVE_POSITION}\n`, position => {
      validator.moveBridgePositionCheck(position);
      bridge.move(position);
      OutputView.printMap(bridge);
      if (bridge.gameSuccess()) {
        OutputView.printResult(bridge);
      } else if (bridge.isPlaying) {
        this.readMoving();
      } else {
        this.readGameCommand();
      }
    });
  },

  readGameCommand() {
    Console.readLine(`${RETRY_OR_QUIT}\n`, selection => {
      validator.retryOrQuitInputCheck(selection);
      if (selection === 'R') {
        bridge.retry();
        this.readMoving();
      } else if (selection === 'Q') {
        OutputView.printResult(bridge);
      }
    });
  },
};

module.exports = InputView;
