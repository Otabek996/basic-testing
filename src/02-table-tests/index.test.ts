// Uncomment the code below and write your tests
/* import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    // continue cases for other actions    
]; */

import { simpleCalculator, Action } from './index';

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  const tests = [
    {
      name: 'should add two numbers',
      inputs: { a: 1, b: 2, action: Action.Add },
      expected: 3,
    },
    {
      name: 'should subtract two numbers',
      inputs: { a: 2, b: 1, action: Action.Subtract },
      expected: 1,
    },
    {
      name: 'should multiply two numbers',
      inputs: { a: 2, b: 2, action: Action.Multiply },
      expected: 4,
    },
    {
      name: 'should divide two numbers',
      inputs: { a: 2, b: 2, action: Action.Divide },
      expected: 1,
    },
    {
      name: 'should exponentiate two numbers',
      inputs: {
        a: 1,
        b: 1,
        action: Action.Exponentiate,
      },
      expected: 1,
    },
    {
      name: 'should return null for invalid action',
      inputs: { a: 2, b: 2, action: 'Test' },
      expected: null,
    },
    {
      name: 'should return null for invalid arguments',
      inputs: { a: 'Test', b: 2, action: Action.Add },
      expected: null,
    },
  ];

  tests.forEach(({ name, inputs, expected }) => {
    test(name, () => {
      const result = simpleCalculator(inputs);
      expect(result).toBe(expected);
    });
  });
  // Consider to use Jest table tests API to test all cases above
});
