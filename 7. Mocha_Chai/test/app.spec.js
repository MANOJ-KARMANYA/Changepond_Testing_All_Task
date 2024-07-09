const {add, sub,mul,div} = require('../src/app')
// const expect = require('chai').expect


let expect;

(async ()=> {

    const chai = await import ('chai');  //importing chai explicitly
    expect = chai.expect;

})();

// now you can use expect as before

//1. BDD - 'describe' and 'it'

describe('scuite 1', ()=>{
    it('add(2,3) should return 5', ()=>{
        expect(add(2,3)).to.be.equal(5);
    })
})


describe('scuite 2', ()=>{
    it('sub(5,3) should return 2', ()=>{
        expect(sub(5,3)).to.be.equal(2);
    })
})

describe('scuite 3', ()=>{
    it('mul(5,3) should return 15', ()=>{
        expect(mul(5,3)).to.be.equal(15);
    })
})

describe('scuite 4', ()=>{
    it('div(15,3) should return 5', ()=>{
        expect(div(15,3)).to.be.equal(5);
    })
})


