const chai =  require('chai')
const chaiHttp =  require('chai-http')
const request =  require('supertest');
const should = chai.should();
const expect = require('chai').expect;

const server = require('../app');

chai.use(chaiHttp);
describe("News API",()=>{
    it("Get Trending News API property",()=>{
        const res = request(server)
        .get('/trending/in')
        expect(res.method).to.equal('GET');  
    })
    it("Get Category News API property",()=>{
        const res = request(server)
        .get('/category/business')
        expect(res.method).to.equal('GET'); 
    })
    it("Get search News API property",()=>{
        const res = request(server)
        .get('/search/covid')
        expect(res.method).to.equal('GET'); 
    })
    it("Get Trending News API ",()=>{
        chai.request(server)
        .get('/trending/in')
        .end((err,res)=>{
            res.should.have.status(200);
        });
    })
    it("Get Category News API",()=>{
        chai.request(server)
        .get('/category/business')
        .end((err,res)=>{
            res.should.have.status(200);
        });
    })
    it("Get search News API",()=>{
        chai.request(server)
        .get('/search/covid')
        .end((err,res)=>{
            res.should.have.status(200);
        });
    })
})