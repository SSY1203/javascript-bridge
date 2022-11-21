class Validation {
  bridgeSizeCheck(size) {
    if (size < 3 || size > 20) {
      throw Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
    return;
  }
}

module.exports = Validation;
