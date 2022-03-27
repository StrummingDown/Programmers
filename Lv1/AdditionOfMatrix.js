// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  var answer = []; // 정답을 담아줄 배열

  for (let el = 0; el < arr1.length; el++) {
    // arr1과 arr2의 길이는 같으므로 arr1의 길이만큼 순회
    let element = []; // 이차원 배열의 요소들을 묶어줄 배열 (루프가 돌때마다 빈배열로 초기화)
    for (let num = 0; num < arr1[0].length; num++) {
      // arr1의 요소또한 배열이므로, 순회
      element.push(arr1[el][num] + arr2[el][num]); // arr1과 arr2의 같은 인덱스의 합을 element에 추가
    }
    answer.push(element); // 위에서 더해준 요소들의 합 묶음을 정답 배열에 추가
  }
  return answer; // 합을 구한 이차원 정답 배열 리턴
}

console.log(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);
