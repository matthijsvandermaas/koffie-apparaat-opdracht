const { add, toHave } = require('../index.js');
const expect = require("expect");
// import {expect} from '@jest/globals';


test('Optellen van twee getallen', () => {

  // Arrange
  const num1 = 5;
  const num2 = 10;

  // Act
  const result = add(num1, num2);

  // Assert
  expect(result).toBe(15); // Verwacht dat het resultaat 15 is (5 + 10)
});

// test('Bevat "@"', () => {
//   // Act
//   const result = toHave();
//
//   // Assert
//   expect(result).toContain("@"); // Verwacht dat het resultaat de "@" bevat
// });

