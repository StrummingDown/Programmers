// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  let arr_1 = arr.slice(); // 배열의 요소가 변해도 전부 순회하기 위해 복사
  for (let i = 0; i < arr_1.length; i++) {
    // 배열의 길이만큼 순회
    if (arr.length === 1) {
      // 배열에 요소가 1개뿐이라면,
      return arr[0]; // 리턴
    }
    let a = arr.pop(); // 배열의 맨 뒤부터 두 개씩 최소공배수를 구한다.
    let b = arr.pop();
    let lcm = getLCM(a, b); // 맨 뒤의 두 수 최소공배수 구하기
    arr.push(lcm); // 해당 최소공배수를 배열에 추가
  }
}
let getLCM = (num1, num2) => {
  // 최소공배수를 구하는 함수
  let lcm = 1; // 1부터 시작

  while (true) {
    // 조건이 참이 될때까지 반복
    if (lcm % num1 == 0 && lcm % num2 == 0) {
      // 증가하는 수가 입력받은 두 수로 전부 나눠진다면,
      break; // 반복문 탈출
    }
    lcm++; // 나눠지지 않는다면 +1
  }
  return lcm; // 최소공배수 리턴
};

console.log(solution([2, 6, 8, 14]));
