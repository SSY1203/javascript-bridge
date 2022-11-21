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

    Console.print(`${upBridge}\n${downBridge}\n`);
  },

  addUpBridgeResult(bridge, current, index) {
    let result = '';
    result += index === 0 ? '' : '|';
    if (current === 'U') {
      bridge.userPosition[index] === bridge.bridge[index] ? (result += ' O ') : (result += ' X ');
    } else {
      result += '   ';
    }
    return result;
  },

  addDownBridgeResult(bridge, current, index) {
    let result = '';
    result += index === 0 ? '' : '|';
    if (current === 'D') {
      bridge.userPosition[index] === bridge.bridge[index] ? (result += ' O ') : (result += ' X ');
    } else {
      result += '   ';
    }
    return result;
  },

  printResult(bridge) {
    Console.print(`${TOTAL_RESULT}\n`);
    this.printMap(bridge);
    Console.print(`${GAME_RESULT_CHECK}${bridge.gameSuccessCheck()}\n`);
    Console.print(`${TOTAL_TRY_COUNT}${bridge.tryCount}`);
  },
};

module.exports = OutputView;
