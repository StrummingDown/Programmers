// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  let answer = []; // 정답을 담아줄 배열
  for (let i = 0; i < n; i++) {
    // 입력받은 n이 곧 요소의 길이이므로 n만큼 순회
    const arr1_1 = arr1[i].toString(2).padStart(n, 0); // 2진법으로 바꿔주고 빈 자리를 0으로 채워주기
    const arr2_1 = arr2[i].toString(2).padStart(n, 0);

    let map_row = ""; // 벽인지 공백인지 담아줄 문자열
    for (let j = 0; j < n; j++) {
      // 문자열의 문자들을 순회
      if (arr1_1[j] === "1" || arr2_1[j] === "1") {
        // 2진법으로 전환한 두 배열중 하나라도 1이 있다면,
        map_row += "#"; // 벽(#)이므로 #추가
      } else {
        // 1이 없다면,
        map_row += " "; // 공백 추가
      }
    }
    answer.push(map_row); // 해독한 지도 한줄을 정답 배열에 추가
  }
  return answer; // 전부 해독한 지도 리턴
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);

// **padStart와 padEnd
// 좌우에 특정한 문자열로 입력받은 길이만큼 채워주는 기능
// padStart(10,*) => 길이가 10이 될떄까지 문자열의 왼쪽부터 *을 추가해준다.
// padEnd(10,*) => 길이가 10이 될떄까지 문자열의 오른쪽부터 *을 추가해준다.
