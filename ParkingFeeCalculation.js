// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/92341

function solution(fees, records) {
  var answer = []; // 정답을 담아줄 배열
  let cars = {}; // 차들의 입출차 여부와 주차 시간, 마지막으로 입차한 시간을 담아줄 객체
  let order = []; // 차들의 번호판 순서대로 정렬해줄 배열

  for (let el of records) {
    state = el.split(" "); // 공백을 기준으로 탐색
    if (!cars[state[1]]) {
      // 입차한 적이 없는 차량이라면,
      cars[state[1]] = { time: 0, num: state[1] }; // 주차 시간 0분과 차량 번호판 저장
    }
    cars[state[1]].type = state[2]; // 차량의 입출차 여부를 type이라는 키로 저장
    if (state[2] === "OUT") {
      // 출차인 경우에는
      cars[state[1]].time += minute(state[0]) - minute(cars[state[1]].getIn); // 분으로 환산해주는 함수를 통해 시간 계산 후 해당 차량에 주차시간 할당
    }
    cars[state[1]].getIn = state[0]; // 차량의 마지막 입차 시간 저장
  }
  for (let car in cars) {
    // 입차만 하고 출차 정보가 없는 경우를 찾기 위해 차량 탐색
    if (cars[car].type === "IN") {
      // 차량이 입차인 경우
      cars[car].time += minute("23:59") - minute(cars[car].getIn); // 자동으로 23:59분에 출차처리이므로 시간계산한뒤 할당
    }
    order.push(car); // 차량의 번호판을 오름차 순으로 정렬해주기 위해 순서를 정렬해줄 배열에 더해준다
  }
  order.sort((a, b) => a - b); // 차량의 번호판 순서대로 오름차순으로 정렬

  for (let car of order) {
    // 정렬된 차량번호 탐색
    answer.push(howMuch(fees, cars[car].time)); // 정답 배열에 각 차량 주차요금 추가
  }
  return answer; // 정답 리턴
}

// 24시간 단위로 시간을 입력받으면 분으로 변환해주는 함수
function minute(time) {
  const [hour, min] = time.split(":");
  const total = Number(hour) * 60 + Number(min);
  return total;
}
// 주차 요금표와 시간을 입력받으면 요금이 얼만지 계산해주는 함수
function howMuch(fees, m) {
  if (fees[0] >= m) {
    return fees[1];
  } else {
    return fees[1] + Math.ceil((m - fees[0]) / fees[2]) * fees[3];
  }
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
