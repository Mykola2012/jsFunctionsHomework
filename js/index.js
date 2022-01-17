console.group("Task 0");

/**
 * Work age check
 * @param {Number} age user age
 * @returns Boolean
 */
function isWorkingAgePerson(age) {
  if (age >= 16 && age <= 65) {
    return true;
  } else {
    return false;
  }
}

console.log(isWorkingAgePerson(20));
console.log(isWorkingAgePerson(4));
console.log(isWorkingAgePerson(88));

console.groupEnd();

console.group("Task 2");

function checkMultiplicity(number1, number2) {
  if (number1 % number2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4));

console.groupEnd();

console.group("Task 3");

const triangleCheck = function (a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
};

console.log(triangleCheck(10, 10, 10));
console.log(triangleCheck(10, 30, 10));
console.log(triangleCheck(40, 10, 10));

console.groupEnd();

console.group("Task 4");

/**
 * Calculating the area of a triangle or rectangle
 * @param {Number} a figure side size
 * @param {Number} b figure side size
 * @param {Namber} c figure side size
 * @returns figure area calculation
 */
const calcArea = function (a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    p = (a + b + c) / 2;
    return (s = Math.sqrt(p * (p - a) * (p - b) * (p - c)));
  } else if (c === undefined) {
    return (s = a * b);
  }
};

console.log(calcArea(15, 10, 12));
console.log(calcArea(20, 30));

console.groupEnd();
