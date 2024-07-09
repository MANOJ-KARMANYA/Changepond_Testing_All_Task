// const expect = require('chai').expect
const axios = require('axios')

let expect;

(async ()=>{
    const chai = await import ('chai');
    expect = chai.expect;
}) ();

describe('retry test suite', function(){

    this.retries(1);
    it('Promised based way', function(){
        this.retries(2);
        return axios.get('https://reqres.in/api/users?page=2').then(res=>{
            expect(res.data.data[1].email).to.be.equal('lindsay.ferguson@reqres1.in')
            expect(res.data.data[1].id).to.be.equal(8)
            expect(res.data.data[1].first_name).to.be.equal('Lindsay')
            expect(res.data.data[1].last_name).to.be.equal('Ferguson')

        }).catch(err =>{
            console.error('Error during test:', err);
            throw err;
        })
        
    })
    
   
})


