// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  var answer = []; // 정답을 담아줄 배열
  let progress_1 = []; // 작업의 완료율과 속도를 한번에 담아줄 배열
  for (let idx = 0; idx < progresses.length; idx++) {
    // 입력받은 작업 순회
    progress_1.push([progresses[idx], speeds[idx]]); // 작업의 완료율과 속도를 하나의 요소로 담아준다.
  }
  while (progress_1.length !== 0) {
    // 완료율과 속도가 담겨진 배열의 요소가 없을때까지 반복
    progress_1.map((el) => {
      // 완료율과 속도가 담겨진 배열 순회
      el[0] += el[1]; // 루프가 한번 돌때마다(하루가 지날때마다) 속도만큼 작업의 완료율 증가
    });
    let stack = 0; // 몇번째 작업인지 표시할 변수
    if (progress_1[stack][0] >= 100) {
      // 작업의 완료율이 100%가 넘어서 배포 준비가 되었다면,
      while (progress_1[stack] && progress_1[stack][0] >= 100) {
        // stack번째 작업이 존재하고, 해당 작업률이 100%가 넘었다면,
        stack++; // 다음 작업 탐색
      }
      answer.push(stack); // 정답에 stack번째 작업까지 (배포가 완료된 작업의 갯수만큼) 한번에 추가
      progress_1.splice(0, stack); // 완료되서 정답 배열에 추가된 작업은 splice를 통해 삭제
    }
  }
  return answer; // 하루에 배포가 완료된 작업의 갯수를 담아준 배열 리턴
}
