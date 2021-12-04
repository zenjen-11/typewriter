// First sample has enclosed sentence as provided in assignment.
const sentence = "Hello, from Lighthouse Labs! \n";

let delay = 0;
const increment = 300;
for (const char of sentence) {
    setTimeout(() => {
        process.stdout.write(char);
    }, delay);
    delay += increment;
} 


// Second sample with any input string
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