
var isPalindrome = require('../isPalindrome');

var expect = require('chai').expect;

describe('-> isPalindrome(str)', function() {
  
  context('with a palindrome argument', function() {
    it('should return true', function() {
      expect(isPalindrome("anitalavalatina")).to.equal(true)
    })
  })
  
  context('with non palindrome argument', function() {
    it('should return false', function() {
      expect(isPalindrome("hola")).to.equal(false)
    })
  })

  context('with non-string argument', function() {
    it('should throw type error <<isPalindrome() expects only a String>>', function() {
      expect(function() {
        isPalindrome(12321)
      }).to.throw(TypeError, 'isPalindrome() expects only a String')
    })
  })

  context('without arguments', function() {
    it('should throw error <<isPalindrome() needs a String parameter>>', function() {
      expect(function() {
        isPalindrome()
      }).to.throw(Error, 'isPalindrome() needs a String parameter')
    })
  })

  context('with multiple arguments', function() {
    it('should throw error <<isPalindrome() can only handle one argument>>', function() {
      expect(function() {
        isPalindrome("hola", "baab")
      }).to.throw(Error, 'isPalindrome() can only handle one argument')
    })
  })
  
})