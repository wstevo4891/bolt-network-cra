// Example of using .reduce()

const letters = ["r", "e", "d", "u", "x"];

const joinString = (string, arrayItem) => {
  return string + arrayItem;
};

const word = letters.reduce(joinString, "");

console.log(word);
