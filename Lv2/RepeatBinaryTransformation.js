// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  const answer = [0, 0]; // 정답을 담아줄 배열  [이진 변환 횟수, 변환 과정에서 제거된 모든 0의 갯수]
  while (true) {
    const change = s
      .split("") // 문자열을 배열로 바꿔주고
      .filter((el) => el === "1").length; // 1인것만 배열에 할당해서 해당 배열의 길이를 change에 할당
    answer[1] += s
      .split("") // 위와 마찬가지로 배열로 변환한뒤
      .filter((el) => el === "0").length; // 0인 요소들만 남은 배열의 길이를 루프가 돌때마다 추가해준다.
    answer[0] += 1; // 루프가 돌면 변환 횟수 +1
    if (change.toString(2).length === 1) {
      // s의 길이가 1개라면, (s가 1이 되었다면,)
      return answer; // 반복문을 돌면서 담긴 answer 리턴
    }

    s = change.toString(2); // 위 과정을 거쳐 1이 남은 문자열을 이진수로 변환해서 재할당
  }
}

console.log(solution("110010101001"));
