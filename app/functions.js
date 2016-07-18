exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    var result = fn.apply(this, arr);
    return result;
  },

  speak: function(fn, obj) {
    var result = fn.call(obj);
    return result;
  },

  functionFunction: function(str) {

  },

  makeClosures: function(arr, fn) {
    arr.forEach(function(random,idx){
      arr[idx] = fn.apply(random);
    });
    return arr;
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(a,b){return a+b});
  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
