const Validation = {
  bridgeSizeCheck(size) {
    if (size < 3 || size > 20 || isNaN(size)) {
      throw Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
    return true;
  },

  moveBridgePositionCheck(position) {
    if (position !== 'U' && position !== 'D') {
      throw Error('[ERROR] U 또는 D를 입력해주세요.');
    }
    return true;
  },

  retryOrQuitInputCheck(selection) {
    if (selection !== 'R' && selection !== 'Q') {
      throw Error('[ERROR] R 또는 Q를 입력해주세요.');
    }
    return true;
  },
};

module.exports = Validation;
