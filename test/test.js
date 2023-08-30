const assert = require('chai').assert;
const expect = require('chai').expect
const myFunc = require('../controllers/func')

describe('testing sayHello', function(){
    it('sayHello should return hello',function(){
        let result = myFunc.sayHello.say
        assert.equal(result,'hello')
    })
    it('sayHello should return type string', function(){
        let result = myFunc.sayHello.say
        assert.typeOf(result, 'string')
    })
})

describe('testing showText', function(){
    it('showText should return Welcome cards app', function(){
        let result = myFunc.showText()
        assert.equal(result, 'Welcome cards app')
    })
})

describe('testing sort array', function(){
    it('sort array should return the array sorted', function(){
        let arr = [4,3,5,2,6]
        let result = myFunc.sortArr(arr)
        let expectResult = [6,5,4,3,2]
        expect(result).to.deep.equal(expectResult)
    })
})