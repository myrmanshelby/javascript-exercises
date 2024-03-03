const reverseString = function (regular) {
  reversed = "";
  for (let i = regular.length - 1; i >= 0; i--) {
    reversed += regular[i];
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
