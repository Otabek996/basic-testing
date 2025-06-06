// Uncomment the code below and write your tests
// import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';

import {
  resolveValue,
  throwError,
  throwCustomError,
  rejectCustomError,
} from './index';
import { MyAwesomeError } from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const result = resolveValue('Test');
    expect(result).toBeInstanceOf(Promise);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const errorText = 'Test error';
    expect(() => throwError(errorText)).toThrow(errorText);
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });
});
