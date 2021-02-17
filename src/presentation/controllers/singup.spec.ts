import { SingUpController } from './singup';

describe('SignUp Controller', () => {
  test('Should return 400 if no name if provided', () => {
    const sut = new SingUpController();
    const httpRequest = {
      email: 'anyEmail@email.com',
      password: 'anyPassword',
      passwordConfirmation: 'anyPassword',
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
