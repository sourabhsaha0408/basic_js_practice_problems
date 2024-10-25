const input = "apple banana apple orange banana banana";
const arrInput = input.split(" ");
let wordFrequency = 0;
let count = 0;
let mostFrequentWord;

for (i = 0; i < arrInput.length; i++) {
  for (j = i + 1; j < arrInput.length; j++) {
    if (arrInput[i] === arrInput[j]) {
      count += 1;
    }
  }
  if (count > wordFrequency) {
    mostFrequentWord = arrInput[i];
    wordFrequency = count;
  }
  count = 0;
}
console.log(mostFrequentWord);
