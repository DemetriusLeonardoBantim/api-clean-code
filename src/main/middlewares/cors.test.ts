import request from 'supertest'
import app from '../config/app'

describe('CORS middleware', () => {
  test('Should enable CORS', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })
    await await request(app)
      .get('/test_body_parser')
      .expect('acess-constroll-allow-origin', '*')
      .expect('acess-constroll-allow-methods', '*')
      .expect('acess-constroll-allow-headers', '*')
  })
})
