// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12951

// 런타임 에러가 나는 코드..
// function solution(s) {
//   var answer = []; // 대소문자 변환을 마친 문자열을 담아줄 정답 배열
//   const words = s.split(" "); // 입력받은 문자열을 배열로 변환
//   for (let word of words) {
//     // 배열 순회
//     let change = ""; // 변환한 분자열을 담아줄 문자열 선언
//     change += word[0].toUpperCase(); // 첫번째 글자를 대문자로 변환
//     change += word.slice(1, word.length).toLowerCase(); // 나머지는 소문자로 변환
//     answer.push(change); // 변환한 단어를 정답 배열에 추가
//   }
//   return answer.join(" "); // 변환을 마친 단어들을 담긴 배열을 문자열로 변환 후 리턴
// }

console.log(solution("3people unFollowed me"));

// 다른사람 풀이를 참고한 코드

function solution(s) {
  s = s.toLowerCase(); // 입력받은 문자열을 전부 소문자로 변환
  var answer = s
    .split(" ") // 배열로 변환
    .map((s) => {
      // map으로 순회
      let arr = s.split(""); // 각 단어를 다시 배열로 변환
      if (arr[0] != null) {
        // 단어의 첫번째 글자가 값이 있다면
        arr[0] = arr[0].toUpperCase(); // 대문자로 변환
      }
      return arr.join(""); // 다시 문자열로 변환
    })
    .join(" "); // map으로 각 단어 순회가 끝나면 다시 문자열로 변환
  return answer; // 만들어준 문자열 리턴
}
