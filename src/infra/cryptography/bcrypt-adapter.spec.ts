import bcrypt, { hash } from 'bcrypt';
import { BcryptAdapter } from './bcrypt-adapter';

jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return new Promise((resolve) => resolve('hash'));
  },
}));

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct value', async () => {
    const sut = new BcryptAdapter(12);
    const hashSpy = jest.spyOn(bcrypt, 'hash');
    await sut.encrypt('anyValue');
    expect(hashSpy).toHaveBeenCalledWith('anyValue', 12);
  });
  test('Should return a hash on sucess', async () => {
    const sut = new BcryptAdapter(12);
    const hash = await sut.encrypt('anyValue');
    expect(hash).toBe('hash');
  });
});
