// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/42839

function solution(numbers) {
  const arr = numbers.split(""); // 입력받은 수를 하나씩 쪼개서 배열로 만들어 준다.
  const answer = new Set(); // 준복된 숫자를 제거해주기 위해 Set 타입 사용

  // 입력받은 숫자로 만들 수 있는 모든 순열을 찾는 재귀 함수
  const getPermutation = (numsArray, fixedNum) => {
    if (numsArray.length) {
      // 입력받은 숫자 배열의 요소가 존재한다면,
      for (let i = 0; i < numsArray.length; i++) {
        // 해당 숫자 배열 순회
        const temp = numsArray.slice(); // 현재 요소를 제외한 숫자만 전달해주기 위해 숫자 배열 복사
        temp.splice(i, 1); // 숫자 배열에서 현재 요소 제거하기
        if (isPrime(parseInt(fixedNum + numsArray[i]))) {
          // 입력받은 숫자와 순회하는 현재 숫자의 조합이 소수라면.
          answer.add(parseInt(fixedNum + numsArray[i])); // 정답에 해당 숫자 추가
        }
        getPermutation(temp, fixedNum + numsArray[i]); // 현재 요소를 제외한 숫자 배열과 현재요소와 이전의 숫자를 조합으로한 두 개의 매개변수로 재귀 호출
      }
    }
  };
  getPermutation(arr, ""); // 위에서 선언해준 재귀 함수 첫 호출
  return answer.size; // 재귀 호출이 끝나고 answer에 담긴 소수의 갯수 리턴
}
const isPrime = (num) => {
  // 소수 여부를 판단하는 함수
  if (num < 2) return false; // 0,1 은 소수가 아니므로 false 리턴
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // 입력받은 숫자가 2부터 입력받은 숫자의 제곱근까지 한번이라도 나눠진다면 소수가 아니다.
    if (num % i === 0) return false; // 소수가 아니므로 false 리턴
  }
  return true; // 그렇지 않다면 소수가 맞으므로 true 리턴
};

console.log(solution("132"));
