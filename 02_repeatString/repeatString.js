const repeatString = function (repeatedString, timesRepeated) {
  let returnString = "";
  if (timesRepeated < 0) {
    return "ERROR";
  }
  for (let i = 0; i < timesRepeated; i++) {
    returnString += repeatedString;
  }
  return returnString;
};

// Do not edit below this line
module.exports = repeatString;
