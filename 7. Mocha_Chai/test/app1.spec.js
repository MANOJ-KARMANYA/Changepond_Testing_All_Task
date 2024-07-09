const {areaofcircle} = require('../src/app1')

const {suite, test} = require('mocha')
// const expect = require('chai').expect


let expect;

(async ()=> {

    const chai = await import ('chai');  //importing chai explicitly
    expect = chai.expect;

})();



//1. BDD - 'describe' and 'it'

describe('scuite 1', ()=>{
    it('areaofcircle(1) should return 3.14', ()=>{
        expect(areaofcircle(1)).to.be.equal(3.141592653589793);
    })
})


// 2. constect and specify

context('scuite 1', ()=>{
    specify('areaofcircle(1) should return 3.14', ()=>{
        expect(areaofcircle(1)).to.be.equal(3.141592653589793);
    })
})


// 3. TDD

suite('scuite 1', ()=>{
    test('areaofcircle(1) should return 3.14', ()=>{
        expect(areaofcircle(1)).to.be.equal(3.141592653589793);
    })
})

