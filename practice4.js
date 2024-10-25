const input = "swiss";
let count = 0;

for (i = 0; i < input.length; i++) {
  count = 0;
  for (j = 0; j < input.length; j++) {
    if (input.charAt(i) === input.charAt(j)) {
      count += 1;
    }
  }
  if (count === 1) {
    console.log(input.charAt(i));
    break;
  }
}
if (count > 1) {
  console.log("Non-Repeating Character not found");
}
