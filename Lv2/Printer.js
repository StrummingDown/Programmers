// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/42587

// priorrities의 같은 우선순위를 어떻게 구별할지 생각을 안하고 짠 코드...
// function solution(priorities, location) {
//   var answer = 0;
//   let max = 0;

//   for (let priority of priorities) {
//     max = Math.max(max, priority);
//   }
//   let index = priorities.indexOf(max);

//   let priorities_1 = priorities.slice(index, priorities.length);
//   let priorities_2 = priorities.slice(0, index);
//   for (let el of priorities_2) {
//     priorities_1.push(el);
//   }
//   let target = priorities[location];
//   let location_index = priorities_1.indexOf(target);
//   //   console.log(priorities_1);
//   console.log(location_index);
//   //   if (location === index) {
//   //     return location;
//   //   }
//   //   else{

//   //   }
//   return answer;
// }

// 문제 이해를 잘못해서 또 삽질한 코드 ...
function solution(priorities, location) {
  var answer = 0;
  let max = 0;

  let list = priorities.map((el, idx) => ({
    idx,
    value: el,
  }));

  for (let priority of list) {
    max = Math.max(max, priority.value);
  }

  let index = priorities.indexOf(max);

  while (index) {
    let move = list.shift();
    list.push(move);
    index--;
  }

  answer = list.findIndex((el) => el.idx === location);

  return answer + 1;
}

function solution(priorities, location) {
  var answer = 0;

  let cnt = 0;
  let list = priorities.map((el, idx) => ({
    idx,
    value: el,
  }));
  let copy = list.slice();

  for (let el of list) {
    const max = Math.max.apply(
      Math,
      list.map((i) => {
        return i.value;
      })
    );
    for (let i = 1; i < copy.length; i++) {
      console.log(copy, location);
      if (copy[i].idx === location) {
        console.log("진입");
        let answer = copy.findIndex((el) => el.idx === location);
        return answer;
      } else if (el.value > max) {
        copy.shift();
      } else {
        let move = copy.shift();
        copy.push(move);
      }
      cnt++;
    }
  }
  // list.sort((a, b) => b.value - a.value);
  // console.log(list);
  // answer = list.findIndex((el) => el.idx === location);

  // for (let priority of list) {
  //   max = Math.max(max, priority.value);
  // }

  // let index = priorities.indexOf(max);

  // while (index) {
  //   let move = list.shift();
  //   list.push(move);
  //   index--;
  // }

  // answer = list.findIndex((el) => el.idx === location);

  // return answer + 1;
}
console.log(solution([1, 1, 9, 1, 1, 1], 0));
