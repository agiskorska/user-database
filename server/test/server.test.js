const request = require('supertest');
const server = require('../app');

describe("USER API", () => {
    let api;
let data = [
    {
        "id": 1,
        "first_name": "Noni",
        "last_name": "Macartney",
        "email": "nmacartney0@prnewswire.com",
        "gender": "Female",
        "ip_address": "50.186.148.10"
        },
        {
        "id": 2,
        "first_name": "Basil",
        "last_name": "Dearn",
        "email": "bdearn1@webs.com",
        "gender": "Male",
        "ip_address": "236.108.201.189"
        },
        {
        "id": 3,
        "first_name": "Maryrose",
        "last_name": "Raubenheim",
        "email": "mraubenheim2@businessinsider.com",
        "gender": "Non-binary",
        "ip_address": "154.22.120.29",
        }
];
    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () =>
            console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('Gracefully stopping test server');
        api.close(done);
    });


    it('responds to get / with status 200', (done) => {
        request(api)
        .get('/')
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.length).toBeGreaterThan(3);
            expect(res.body[0].email).toBe('nmacartney0@prnewswire.com')
        })
        .expect(200, done);
    });
    it('responds to get /home with status 200', (done) => {
        request(api)
        .get('/home')
        .expect("Content-Type", /json/)
        .expect((res) => {
            expect(res.body.length).toBeGreaterThan(3);
            expect(res.body[0].email).toBe('nmacartney0@prnewswire.com')
        })
        .expect(200, done);
    });

    it('responds to /newuser with status 201', (done) => {
        const mockData = {
            first_name: "Aggie",
            last_name: "Skra",
            email: "skora@businessinsider.com",
            gender: "Non-binary",
            ip_address: "154.22.999.29"
        }
        request(api)
        .post('/newuser')
        .expect('Content-Type', /json/)
        .send(mockData)
        .expect(201)      
        .expect((res) => {
            console.log(res.body)
            expect(res.body.email).toBe(mockData.email)

          })
        .end((err, res) => {
        if (err) return done(err);
        return done();
        });
    })
})