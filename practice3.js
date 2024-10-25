let input = "i have booked appointment on friday for eye checkup";
let output = input.split(" ");

let longestWord = "";

for (i = 0; i < output.length; i++) {
  if (output[i].length > longestWord.length) {
    longestWord = output[i];
  }
}

console.log(longestWord);
