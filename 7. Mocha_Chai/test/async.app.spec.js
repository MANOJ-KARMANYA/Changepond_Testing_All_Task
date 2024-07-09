// const expect = require('chai').expect
const axios = require('axios')

let expect;

(async ()=>{
    const chai = await import ('chai');
    expect = chai.expect;
}) ();

describe('async test suite', ()=>{

    
    it('Promised based way', function(){

        return axios.get('https://reqres.in/api/users?page=2').then(res=>{
            expect(res.data.data[1].email).to.be.equal('lindsay.ferguson@reqres.in')
            expect(res.data.data[1].id).to.be.equal(8)
            expect(res.data.data[1].first_name).to.be.equal('Lindsay')
            expect(res.data.data[1].last_name).to.be.equal('Ferguson')

        })


    })

    it('done based way', (done)=>{
        axios.get('https://reqres.in/api/users?page=2').then(res=>{
            expect(res.data.data[0].email).to.be.equal('michael.lawson@reqres.in')
            done()
        }).catch(err =>{
            done(err)
        })
        
    })
    
    it('async await based way', async()=>{
        const res = await axios.get('https://reqres.in/api/users?page=2')
            expect(res.data.data[0].email).to.be.equal('michael.lawson@reqres.in')
    
    
        
    })



})


