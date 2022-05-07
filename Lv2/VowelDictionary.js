// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  const obj = {
    // 해당 문자까지 도달하기 위한 순서를 담은 객체
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  const plus = [781, 156, 31, 6, 1]; // 각 자리수가 바뀔때까지 걸리는 횟수
  return word.split("").reduce((acc, ch, idx) => acc + obj[ch] * plus[idx] + 1, 0); // 입력받은 문자열을 배열로 변환한 뒤
  // reduce 함수로 순회하며 각 문자열까지 도달하기 위한 횟수를 다 더해준 뒤 리턴
}

console.log(solution("EIO"));
