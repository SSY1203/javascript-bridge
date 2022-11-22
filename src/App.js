const OutputView = require('./OutputView');
const InputView = require('./InputView');
class App {
  play() {
    this.gameStart();
  }

  gameStart() {
    OutputView.printStart();
    InputView.readBridgeSize();
  }
}

module.exports = App;
