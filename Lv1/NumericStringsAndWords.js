// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/81301

// 나의풀이.. 길다..
function solution(s) {
  var answer = ""; // 정답을 담아줄 문자열
  let nums = ""; // 숫자를 칭하는 문자열을 담아줄 문자열
  let strs = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; // 0~9 까지의 숫자를 문자로 담아준 배열
  for (let i of s) {
    // 입력받은 문자열 순회
    if (!isNaN(Number(i))) {
      // 숫자로 변환이 가능하다면, (숫자라면,)
      answer += i; // 그대로 정답 문자열에 추가
    } else {
      // 숫자로 변환이 불가능하다면, (문자라면,)
      nums += i; // 0~9까지를 나타내는 철자가 완성될떄까지 담아준다.
      for (let j = 0; j < strs.length; j++) {
        // 위에서 만들어준 숫자를 칭하는 문자열 배열 순회
        if (nums === strs[j]) {
          // 문자열이 완성이 되서 숫자를 칭한다면,
          answer += String(j); // 해당 인덱스 (인덱스가 곧 해당 숫자)를 정답 문자열에 추가
          nums = ""; // 완성이 됬으므로 다시 빈 문자열로 초기화해서 다음 문자를 받는다.
        }
      }
    }
  }
  return Number(answer); // 전부 순회했다면 완성된 정답 문자열을 숫자로 리턴
}

// 참신한 다른 사람의 풀이..
function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; // 숫자를 칭하는 문자열 배열
  var answer = s; // 입력받은 문자열을 그대로 정답에 할당

  for (let i = 0; i < numbers.length; i++) {
    // 위에서 선언한 배열 순회
    let arr = answer.split(numbers[i]); // 숫자를 칭하는 문자열로 쪼개고,
    answer = arr.join(i); // 해당 인덱스로 다시 결합..
  }

  return Number(answer); // 만들어진 정답을 숫자로 리턴
}

// console.log(solution("2three45sixseven"));
