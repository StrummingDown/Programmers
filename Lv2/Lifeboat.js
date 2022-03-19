// function solution(people, limit) {
//   people.sort((a, b) => b - a);

//   let answer = 0;

//   while (people.length !== 0) {
//     let left = 0;
//     let right = people.length - 1;
//     console.log(people[left], people[right]);

//     if (people[left] + people[right] <= limit) {
//       people.splice(right, 1);
//       people.splice(0, 1);
//     } else {
//       people.splice(0, 1);
//     }
//     answer++;
//   }
//   return answer;
// }
solution([100, 80, 60, 60, 50, 40, 30, 20], 120);

function solution(people, limit) {
  var answer = 0;

  const sortedPeople = people.sort((a, b) => b - a);

  var first = 0;
  var second = sortedPeople.length - 1;
  while (first <= second) {
    if (sortedPeople[first] <= limit / 2) {
      answer += Math.ceil((second - first + 1) / 2);
      break;
    }
    answer++;
    if (sortedPeople[first] + sortedPeople[second] <= limit) {
      first++;
      second--;
    } else {
      first++;
    }
  }

  return answer;
}
