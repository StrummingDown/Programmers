function solution(p) {
  var answer = "";
  if (p === "") return "";

  console.log(three(p, answer));
  return answer;
}

console.log(solution("()))((()"));

function three(p, answer) {
  let count = 0;

  let checked = true;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      count++;
    }
    if (p[i] === ")") {
      count--;
    }
    if (count < 0) {
      checked = false;
    }
    if (count === 0) {
      let u = p.slice(0, i + 1);
      let v = p.slice(i + 1);
      if (checked) {
        answer += u;
        console.log("three안:", answer);
        return u + three(v, answer);
      }
    }
  }
}
