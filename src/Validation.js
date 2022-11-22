const { Console } = require('./Constant');

const Validation = {
  bridgeSizeCheck(size) {
    try {
      if (size < 3 || size > 20 || isNaN(size)) {
        throw Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
      }
    } catch (e) {
      Console.print(e);
      return true;
    }
    return true;
  },

  moveBridgePositionCheck(position) {
    try {
      if (position !== 'U' && position !== 'D') {
        throw Error('[ERROR] U 또는 D를 입력해주세요.');
      }
    } catch (e) {
      Console.print(e);
      return true;
    }
    return true;
  },

  retryOrQuitInputCheck(selection) {
    try {
      if (selection !== 'R' && selection !== 'Q') {
        throw Error('[ERROR] R 또는 Q를 입력해주세요.');
      }
    } catch (e) {
      Console.print(e);
      return true;
    }
    return true;
  },
};

module.exports = Validation;
