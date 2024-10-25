// let a = 'a b c d';
// let b = a.replace(' ','-');

// console.log(b);
// console.log(a);
let input = "how are you today";
let output = "";

for (i = 0; i < input.length; i++) {
  if (input.charAt(i) === " ") {
    output += "-";
  } else {
    output += input.charAt(i);
  }
}

console.log(output);
