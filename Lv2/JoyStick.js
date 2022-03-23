function solution(name) {
  var answer = 0;
  let count = 0;

  let spell = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let spellR = spell.split("").sort().reverse().join("");

  for (let i = 0; i < name.length; i++) {
    let idx = spell.indexOf(name[i]);
    let idxR = spellR.indexOf(name[i]);

    if (idx <= 13) {
      count += idx;
    } else if (idx > 13) {
      count += idxR + 1;
    }
  }

  let nf = name.slice(1);
  let nb = name.slice(1);

  while (nf[nf.length - 1] === "A") {
    nf = nf.replace(/\A$/, "");
  }

  while (nb[0] === "A") {
    nb = nb.replace(/^\A/, "");
  }

  count += Math.min(nf.length, nb.length);
  console.log(nf, nb);
  return count;
}
console.log(solution("BBBBAAAAAB"));
