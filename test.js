const strInput = function(str) {
  return str;
};
const sentence = "";

let delay = 0;
const increment = 300;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += increment;
}

strInput("test", 50);