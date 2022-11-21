const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;
const GAME_START = '다리 건너기 게임을 시작합니다.';
const PLZ_BRIDGE_LENGTH = '다리의 길이를 입력해주세요.';
const PLZ_MOVE_POSITION = '이동할 칸을 선택해 주세요. (위: U, 아래: D)';
const TOTAL_RESULT = '최종 결과 출력';
const GAME_RESULT_CHECK = '게임 성공 여부 : ';
const TOTAL_TRY_COUNT = '총 시도한 횟수 : ';
const RETRY_OR_QUIT = '게임을 다시 시도할지 여부를 입력하세요. (재시도: R, 종료: Q)';

exports.Console = Console;
exports.GAME_START = GAME_START;
exports.PLZ_BRIDGE_LENGTH = PLZ_BRIDGE_LENGTH;
exports.PLZ_MOVE_POSITION = PLZ_MOVE_POSITION;
exports.TOTAL_RESULT = TOTAL_RESULT;
exports.GAME_RESULT_CHECK = GAME_RESULT_CHECK;
exports.TOTAL_TRY_COUNT = TOTAL_TRY_COUNT;
exports.RETRY_OR_QUIT = RETRY_OR_QUIT;
