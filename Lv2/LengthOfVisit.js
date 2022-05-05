// 문제 링크
// https://programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
  let move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] }; // 각각의 명령어가 해당하는 움직임을 담아둔 객체
  let now = [0, 0]; // 현재 위치
  let route = new Set(); // 중복값을 제거하기 위한 세트 데이터 타입 선언

  for (let dir of dirs) {
    // 입력받은 좌표 문자열 순회
    let nowX = now[0] + move[dir][0]; // X좌표 이동
    let nowY = now[1] + move[dir][1]; // Y좌표 이동

    if (nowX > 5 || nowX < -5 || nowY > 5 || nowY < -5) continue; // 좌표 평면을 벗어나는 구간이라면 루프 스킵

    route.add("" + now[0] + now[1] + nowX + nowY); // 시작점 좌표와 도착점 좌표를 추가
    route.add("" + nowX + nowY + now[0] + now[1]); // 반대의 경우도 있기 떄문에 좌표를 반대로 해서 다시 추가
    console.log(route);
    now = [nowX, nowY]; // 현재 위치 할당
  }

  return route.size / 2; // 루프가 끝나고 구해진 route의 길이를 리턴하는데, 같은 경로를 두개씩 넣었으므로 반으로 나눈 길이 리턴
}

console.log(solution("ULURRDLLU"));
