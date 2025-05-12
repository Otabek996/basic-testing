// Uncomment the code below and write your tests
// import { getBankAccount } from '.';

import { getBankAccount } from './index';
import {
  InsufficientFundsError,
  TransferFailedError,
  SynchronizationFailedError,
} from './index';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const result = getBankAccount(100);
    expect(typeof result).toBe('object');
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => getBankAccount(100).withdraw(200)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', () => {
    expect(() => getBankAccount(100).transfer(300, getBankAccount(50))).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const BankAccount = getBankAccount(100);
    expect(() => BankAccount.transfer(50, BankAccount)).toThrow(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    const balance = 100;
    const deposit = 100;
    const result = getBankAccount(balance).deposit(deposit).getBalance();
    expect(result).toBe(balance + deposit);
  });

  test('should withdraw money', () => {
    const balance = 100;
    const withdraw = 50;
    const result = getBankAccount(balance).withdraw(withdraw).getBalance();
    expect(result).toBe(balance - withdraw);
  });

  test('should transfer money', () => {
    const balance = 100;
    const transferAmount = 50;
    const bankOne = getBankAccount(balance);
    const bankTwo = getBankAccount(balance);
    const result = bankOne.transfer(transferAmount, bankTwo).getBalance();
    expect(result).toBe(balance - transferAmount);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const account = getBankAccount(100);
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(42);
    await expect(account.fetchBalance()).resolves.toBe(42);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(100);
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(80);
    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(80);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(100);
    jest.spyOn(account, 'fetchBalance').mockResolvedValue(null);
    await expect(account.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
