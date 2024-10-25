const word = "banana";
let countOfVowels = 0;
let countOfConsonants = 0;

for (i = 0; i < word.length; i++) {
  if (
    word.charAt(i).toLowerCase() === "a" ||
    word.charAt(i).toLowerCase() === "e" ||
    word.charAt(i).toLowerCase() === "i" ||
    word.charAt(i).toLowerCase() === "o" ||
    word.charAt(i).toLowerCase() === "u"
  ) {
    countOfVowels += 1;
  } else {
    countOfConsonants += 1;
  }
}

console.log(countOfVowels);
console.log(countOfConsonants);

