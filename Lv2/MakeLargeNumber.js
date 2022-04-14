// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  var answer = ""; // 정답을 담아줄 변수
  let answerStack = [0]; // 가장 큰 수를 조합하기 위한 배열
  let deleteCount = 0; // 제거한 숫자 갯수 카운트

  for (let i = 0; i < number.length; i++) {
    // 입력받은 숫자 순회
    while (deleteCount < k && number[i] > answerStack[answerStack.length - 1]) {
      // 제거할 숫자 카운트가 입력받은 k보다 작고, 현재 i번째 숫자가 숫자 조합의 마지막 숫자보다 크다면
      answerStack.pop(); // 숫자 조합의 마지막 숫자 제거
      deleteCount++; // 제거한 숫자 카운트 +1
    }
    if (answerStack.length < number.length - k) {
      // k개를 뺀 배열의 길이가 조합하기 위한 배열의 길이와 같을때까지
      answerStack.push(number[i]); // 조합할 숫자 배열에 i번쨰 숫자 추가
    }
  }
  answer = answerStack.join(""); // 숫자가 담긴 배열을 문자열로 변환
  return answer; // 정답 문자열 리턴
}

// function solution(number, k) {
//   var answer = "";

//   let stack = [0];
//   //   while (stack.length <= number.length - k)
//   for (let i = 0; i < number.length; i++) {
//     if (stack[0] < number[i]) {
//       stack.shift();
//       stack.push(number[i]);
//     }
//   }
//   number = number.split("");
//   number = number.filter((el) => el !== stack[0]);

//   stack.push(number[0]);

//   for (let i = 0; i < number.length; i++) {
//     if (stack[stack.length - 1] < number[i]) {
//       stack.pop();
//       stack.push(number[i]);
//     }
//   }

//   return stack.join("");
// }

console.log(solution("1924", 2));
