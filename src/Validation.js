class Validation {
  bridgeSizeCheck(size) {
    if (size < 3 || size > 20) {
      throw Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
    if (isNaN(size)) {
      throw Error('[ERROR] 숫자를 입력해주세요.');
    }
    return;
  }

  moveBridgePositionCheck(position) {
    if (position !== 'U' && position !== 'D') {
      throw Error('[ERROR] U 또는 D를 입력해주세요.');
    }
    return;
  }
}

module.exports = Validation;
