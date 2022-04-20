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
// function solution(priorities, location) {
//   var answer = 0;
//   let max = 0;

//   let list = priorities.map((el, idx) => ({
//     idx,
//     value: el,
//   }));

//   for (let priority of list) {
//     max = Math.max(max, priority.value);
//   }

//   let index = priorities.indexOf(max);

//   while (index) {
//     let move = list.shift();
//     list.push(move);
//     index--;
//   }

//   answer = list.findIndex((el) => el.idx === location);

//   return answer + 1;
// }

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

// 테스트 케이스 3개를 틀리는데 추후 수정이 필요하다 ..
// 입력받은 lcoation이 마지막까지 남아있을때 리턴을 안해줘서 이 사단이 났다.
// 정답이지만 코드 리팩토링을 통해 줄여야겠다 !!
function solution(priorities, location) {
  if (priorities.length === 1) {
    return 1;
  }
  let cnt = 0;
  let list = priorities.map((el, idx) => ({
    idx,
    value: el,
  }));
  let copy = list.slice();

  for (let el of list) {
    for (let i = 1; i < copy.length; i++) {
      let max = Math.max.apply(
        Math,
        copy.map((i) => {
          return i.value;
        })
      );
      console.log(copy, max);
      let check = copy.filter((el) => el.value === copy[0].value);

      if (copy[0].value >= max && check.length < 2) {
        if (copy[0].idx === location && copy[0].value >= max) {
          return cnt + 1;
        }
        copy.shift();
        cnt++;
      } else if (copy[0].idx === location && copy[0].value >= max) {
        return cnt + 1;
      } else if (copy[0].value >= max) {
        copy.shift();
        cnt++;
      } else {
        let move = copy.shift();
        copy.push(move);
      }
    }
  }
  return cnt + 1;
}
console.log(solution([1, 1, 3], 1));
