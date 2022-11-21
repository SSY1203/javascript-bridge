const {
  GAME_START,
  Console,
  TOTAL_RESULT,
  GAME_RESULT_CHECK,
  TOTAL_TRY_COUNT,
} = require('./Constant');
const OutputView = {
  printStart() {
    Console.print(`${GAME_START}\n`);
  },

  printMap(bridge) {
    let upBridge = '[';
    let downBridge = '[';
    bridge.userPosition.map((current, index) => {
      upBridge += this.addUpBridgeResult(bridge, current, index);
      downBridge += this.addDownBridgeResult(bridge, current, index);
    });
    upBridge += ']';
    downBridge += ']';

    Console.print(`${upBridge}\n${downBridge}`);
  },

  addUpBridgeResult() {
    let result = '';
    result += index === 0 ? '' : '|';
    if (current === 'U') {
      bridge.userPosition[index] === bridge.bridge[index] ? (result += ' O ') : (result += ' X ');
    } else {
      result += '   ';
    }
    return result;
  },

  addDownBridgeResult() {
    let result = '';
    result += index === 0 ? '' : '|';
    if (current === 'D') {
      bridge.userSelection[index] === bridge.bridge[index] ? (result += ' O ') : (result += ' X ');
    } else {
      result += '   ';
    }
    return result;
  },

  printResult() {
    Console.print(`\n${TOTAL_RESULT}`);
    this.printMap(bridge);
    Console.print(`\n${GAME_RESULT_CHECK}${bridge.gameSuccessCheck()}`);
    Console.print(`${TOTAL_TRY_COUNT}${bridge.tryCount}`);
  },
};

module.exports = OutputView;
