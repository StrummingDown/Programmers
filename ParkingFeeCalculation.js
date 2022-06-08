// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/92341

// 시간계산을 분으로 변환하지 않고 바로 하려고 했다가 삽질만 한 흔적 ..
function solution(fees, records) {
  var answer = [];
  let cars = {};
  let times = [];
  for (let el of records) {
    state = el.split(" ");
    if (!cars[state[1]]) {
      cars[state[1]] = { time: 0, num: state[1] };
    }
    cars[state[1]].type = state[2];
    if (state[2] === "OUT") {
      let hour = parseInt(state[0].split(":")[0]) - parseInt(cars[state[1]].getIn.split(":")[0]);
      let min;
      if (parseInt(state[0].split(":")[1]) < parseInt(cars[state[1]].getIn.split(":")[1])) {
        min = -(parseInt(state[0].split(":")[1]) - parseInt(cars[state[1]].getIn.split(":")[1]));
      } else {
        min = parseInt(state[0].split(":")[1]) - parseInt(cars[state[1]].getIn.split(":")[1]);
      }

      let total = hour * 60 + min;
      console.log(total);
    }
    cars[state[1]].getIn = state[0];
  }
  console.log(cars);
  return answer;
}

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
);

// function howMuch(fees, m) {
//   if (fees[0] >= m) {
//     return fees[1];
//   } else {
//     return fees[1] + Math.ceil((m - fees[0]) / fees[2]) * fees[3];
//   }
// }

// console.log(howMuch([180, 5000, 10, 600], 334));
