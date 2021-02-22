import { EmailValidatorAdapter } from './email-validator';
import validator from 'validator';
import { isTemplateTail } from 'typescript';

jest.mock('validator', () => ({
  isEmail(): boolean {
    return true;
  },
}));

describe('EmailValidator Adpter', () => {
  test('Should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter();
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false);
    const isValid = sut.isValid('invalid_email@email.com');
    expect(isValid).toBe(false);
  });
  test('Should return true if validator returns false', () => {
    const sut = new EmailValidatorAdapter();
    const isValid = sut.isValid('valid_email@email.com');
    expect(isValid).toBe(true);
  });
});
