import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Demetrius',
        password: '123',
        email: 'demetrius@email.com',
        passwordConfirmation: '123',
      })
      .expect(200)
  })
})
