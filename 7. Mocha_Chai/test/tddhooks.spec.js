const {add, sub,mul,div} = require('../src/app')
// const expect = require('chai').expect


let expect;

(async ()=> {

    const chai = await import ('chai');  //importing chai explicitly
    expect = chai.expect;

})();



const {suite, test, suiteSetup,suiteTeardown,setup, teardown } =require('mocha')

suite('TDD hooks', ()=>{
    suiteSetup(()=>{
        console.log('one suitesetup')
    });

    suiteTeardown(()=>{
        console.log('one suiteTeardown')
    });

    setup(()=>{
        console.log('one Setup')
    });

    teardown(()=>{
        console.log('one Teardown')
    });


    // test case

    test('add(7,3) should return 10', ()=>{
        console.log('one test')
    });


})