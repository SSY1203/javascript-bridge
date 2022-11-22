const {
  GAME_START,
  Console,
  TOTAL_RESULT,
  GAME_RESULT_CHECK,
  TOTAL_TRY_COUNT,
} = require('./Constant');
const OutputView = {
  printStart() {
    Console.print(`${GAME_START}`);
  },

  printMap(bridge) {
    let [upBridge, downBridge] = this.getResult(bridge);
    upBridge += ']';
    downBridge += ']';

    Console.print(`${upBridge}`);
    Console.print(`${downBridge}\n`);
  },

  getResult(bridge) {
    let upBridge = '[';
    let downBridge = '[';
    bridge.userPosition.map((current, index) => {
      upBridge += this.addUpBridgeResult(bridge, current, index);
      downBridge += this.addDownBridgeResult(bridge, current, index);
    });
    return [upBridge, downBridge];
  },

  addUpBridgeResult(bridge, current, index) {
    let result = '';
    result += index === 0 ? '' : '|';
    if (current === 'U') {
      result += this.bridgeMatching(bridge, index);
    } else {
      result += '   ';
    }
    return result;
  },

  addDownBridgeResult(bridge, current, index) {
    let result = '';
    result += index === 0 ? '' : '|';
    if (current === 'D') {
      result += this.bridgeMatching(bridge, index);
    } else {
      result += '   ';
    }
    return result;
  },

  bridgeMatching(bridge, index) {
    return bridge.userPosition[index] === bridge.bridge[index] ? ' O ' : ' X ';
  },

  printResult(bridge) {
    Console.print(`${TOTAL_RESULT}`);
    this.printMap(bridge);
    Console.print(`${GAME_RESULT_CHECK}${bridge.gameSuccessCheck()}`);
    Console.print(`${TOTAL_TRY_COUNT}${bridge.tryCount}`);
  },
};

module.exports = OutputView;
