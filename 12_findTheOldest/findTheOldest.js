const findTheOldest = function (arr) {
  let oldestPerson;
  let oldestAge = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentAge;
    if (!arr[i].yearOfDeath) {
      currentAge = new Date().getFullYear() - arr[i].yearOfBirth;
    } else {
      currentAge = arr[i].yearOfDeath - arr[i].yearOfBirth;
    }

    if (currentAge > oldestAge) {
      oldestAge = currentAge;
      oldestPerson = arr[i];
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
