// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/72410

// 문제 조건 충족만 하기위해 정리 없이 줄줄 써내려가서 길어진 코드... 다시 정리해서 깎아야겠다.
function solution(new_id) {
  var answer = ""; // 정답 문자열
  let word_list = "abcdefghijklmnopqrstuvwxyz0123456789-_."; // 조건에서 언급한 알파벳 소문자, 숫자, - _ . 기호들을 담아준 문자열
  let change_id = new_id.toLowerCase(); // 입력받은 문자열을 소문자로 변환
  let check = ""; // word_list에 포함된 문자만을 담아줄 문자열
  for (let i = 0; i < change_id.length; i++) {
    // 소문자로 변환된 문자열 순회
    check = word_list.includes(change_id[i]); // word_list에 존재하는 여부 확인
    if (check) {
      // 존재한다면,
      answer += change_id[i]; // 정답 문자열에 더해주기
    }
  }
  let answer2 = answer[0]; // "."이 중복되면 하나로 바꿔주기 위해 선언한 문자열
  for (let i = 1; i < answer.length; i++) {
    // 2단계 조건까지 필터링된 문자열 순회
    if (answer2[answer2.length - 1] === answer[i] && answer[i] === ".") {
      // 현재 순회하는 문자가 .이고 중복될 경우에는 아무것도 하지않는다.
    } else {
      // "."도 아니고 중복도 되지 않는다면,
      answer2 += answer[i]; // 해당 문자 정답 문자열에 추가
    }
  }

  if (answer2[0] === ".") {
    // 첫번쨰 요소가 "." 이면,
    answer2 = answer2.slice(1); // 제거
  }
  if (answer2[answer2.length - 1] === ".") {
    // 마지막 요소가 "." 이면,
    answer2 = answer2.slice(0, answer2.length - 1); // 제거
  }

  if (!answer2.length) {
    // 4단게 조건까지 필터링한 문자열이 빈 문자열이라면,
    answer2 += "a"; // "a"를 더해주기
  }
  if (answer2.length > 15) {
    // 길이가 15자를 초과한다면
    answer2 = answer2.slice(0, 15); // 15자까지 잘라주기

    if (answer2[answer2.length - 1] === ".") {
      // 위에서 15자까지 잘라낸 문자열의 마지막 요소가 "."이라면,
      answer2 = answer2.slice(0, answer2.length - 1); // "." 제거
    }
  }
  while (answer2.length < 3) {
    // 문자열의 길이가 3자 이하라면
    answer2 += answer2[answer2.length - 1]; // 마지막 요소를 3자 이상이 될때까지 추가
  }

  return answer2; // 7단계 조건까지 필터링된 문자열 리턴
}

solution("z-+.^.");
