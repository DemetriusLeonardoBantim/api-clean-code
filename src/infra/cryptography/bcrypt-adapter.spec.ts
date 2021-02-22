import bcrypt from 'bcrypt';
import { BcryptAdapter } from './bcrypt-adapter';

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct value', async () => {
    const sut = new BcryptAdapter(12);
    const hashSpy = jest.spyOn(bcrypt, 'hash');
    await sut.encrypt('anyValue');
    expect(hashSpy).toHaveBeenCalledWith('anyValue', 12);
  });
});
