// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  let answer = 1; // 스파이가 입을 수 있는 복장의 수
  let obj = {}; // 복장의 부위 별 가짓수를 담아주기 위한 객체
  for (let i = 0; i < clothes.length; i++) {
    // 입력받은 2차원 배열을 순회
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1; // key로 복장의 종류, value로 복장의 이름을 할당 (key가 빈값일때는 1을 할당, 이미 존재한다면 해당 값이 1더해주기)
  }

  for (let key in obj) {
    // 위에서 담긴 복장의 부위별 객체 순회
    answer *= obj[key]; // 복장의 부위별 갯수를 전부 곱해준다.
  }

  return answer - 1; // 반드시 하나의 복장은 착용해야 하므로 아무것도 입지 않은 경우 하나를 뺀 값을 리턴
}

console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);

// 예시
// headgear : 2
// eyewear : 1

// 입을 수 있는 경우의 수
// headgear     eyewear
//    a            -
//    -            a
//    b            -
//    b            a
//    a            b

// 입을 수 있는 경우의 수는 총 5개이다.
// headgear의 종류는 2개이고 eyewear의 종류는 1개이다.
// 해당 부위의 옷을 착용하지 않는 경우도 있기 때문에, 각 부위에 1씩 더해준 뒤 곱한다.
// 3 * 2 = 6
// 모든 경우의 수는 6이지만, 최소 하나의 부위는 입어야 하므로 전부 입지 않은 경우의 수 1를 빼준것이 답이된다.
// 따라서 5.
