const { GAME_START, Console } = require('./Constant');
const OutputView = {
  printStart() {
    Console.print(`${GAME_START}`);
  },

  printMap() {},

  printResult() {},
};

module.exports = OutputView;
