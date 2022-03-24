// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  var answer = []; // 정답을 담아줄 배열

  for (let i = 0; i < numbers.length; i++) {
    // 입력받은 배열의 길이만큼 순회
    let sum = 0; // 요소를 더한 값을 저장해 줄 변수
    for (let j = 1; j < numbers.length; j++) {
      // 요소를 더하기 위해 i+1 번째 요소부터 순회
      if (i !== j) {
        // 인덱스가 다를때만
        sum = numbers[i] + numbers[j]; // 요소를 더해준다.
        answer.push(sum); // 더한 값을 배열에 추가
      }
    }
  }
  answer = new Set(answer); // set데이터 타입으로 배열의 충복값 제거
  answer = Array.from(answer); // 다시 배열로 데이터 타입 변환
  answer.sort((a, b) => a - b); // 오름차 순 정렬
  return answer; // 정답 배열 리턴
}

// console.log(solution([2, 1, 3, 4, 1]));
