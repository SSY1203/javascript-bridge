const { GAME_START, Console } = require('./Constant');
const OutputView = {
  printStart() {
    Console.print(`${GAME_START}\n`);
  },

  printMap() {},

  printResult() {},
};

module.exports = OutputView;
