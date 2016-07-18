exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	var result = fn.call(this, obj);
  	return result;
  },

  alterObjects: function(constructor, greeting) {

  },

  iterate: function(obj) {
  	var result = [];
  	for(var key in obj){
  		result.push(key +": " + obj[key]);
  	}
  	return result;
  }
};
