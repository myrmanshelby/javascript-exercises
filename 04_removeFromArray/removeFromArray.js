const removeFromArray = function (compArray, ...removeValues) {
  let cleanArray = [];
  for (let i = 0; i < compArray.length; i++) {
    let keep = true;
    for (let j = 0; j < removeValues.length; j++) {
      if (compArray[i] === removeValues[j]) {
        keep = false;
      }
    }
    if (keep) {
      cleanArray.push(compArray[i]);
    }
  }
  return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;
