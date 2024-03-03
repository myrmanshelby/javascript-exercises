const sumAll = function (start, stop) {
  let sum = 0;
  if (
    start < 0 ||
    stop < 0 ||
    typeof start != "number" ||
    typeof stop != "number"
  ) {
    return "ERROR";
  }
  if (start > stop) {
    let temp = start;
    start = stop;
    stop = temp;
  }
  for (let i = start; i <= stop; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
