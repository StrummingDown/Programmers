// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/77885

// 시간 복잡도에서 문제가 있는 코드 ..
function solution(numbers) {
  function f(x) {
    if (x % 2 === 0) return x + 1;
    const change = x.toString(2);
    let cnt = 0;
    let len;
    while (true) {
      len = 0;
      cnt++;
      let change_1 = (x + cnt).toString(2);
      const diffrence = change_1.length - change.length;
      len +=
        diffrence +
        change_1
          .slice(diffrence)
          .split("")
          .filter((el, i) => el !== change[i]).length;
      if (len <= 2) return x + cnt;
    }
  }
  var answer = [];
  for (let i of numbers) answer.push(f(i));
  return answer;
}
