module.exports = function(str) {

  if(str == null){
    throw new Error('isPalindrome() needs a String parameter')
  }

  var args = Array.prototype.slice.call(arguments);
  if (args.length > 1){
    throw new Error('isPalindrome() can only handle one argument')
  }

  if (typeof str === 'string' || str instanceof String){
    return str == str.split("").reverse().join("") ? true : false;
  } else {
    throw new TypeError('isPalindrome() expects only a String')
  }

  }