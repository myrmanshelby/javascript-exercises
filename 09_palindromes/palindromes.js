const palindromes = function (word) {
  const wordArray = word
    .toLowerCase()
    .split("")
    .filter((item) => !"!(),.;:/? ".includes(item));

  const forwardWord = wordArray.join("");
  const reverseWord = wordArray.reverse().join("");
  return forwardWord === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
