const requst = require('supertest');
const {app, server} = require('../app');    

describe ('GET/',() =>{

    it('should return 200 OK',  () => {
        const response = requst(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('i love you riya my soulmate');
    });
})
afterAll(() => {
    server.close();
})