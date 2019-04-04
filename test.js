const http = require('http');
const supertest = require('supertest');
const createApp = require('.');

describe('testing idea with supertest', () => {
  test('testing one app', done => {
    const app = supertest.agent(http.createServer(createApp().callback()));
    app
      .get('/routes/test')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual({test: 'very good'});
        done();
      });
  });

  test('testing one app', done => {
    const app = supertest.agent(http.createServer(createApp().callback()));
    app
      .get('/routes/test')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual({test: 'very good'});
        done();
      });
  });
});
