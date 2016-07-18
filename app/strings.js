exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var counter = {};
  	var result = "";
  	if(amount == 0){
  		return "";
  	}
  	for(var i = 0; i < str.length; i++){
  		if(str.indexOf(str[i]) === i){
  			result += str[i];
  			counter[str[i]] = 1;
  		}
  		else if(counter[str[i]] < amount){
  			result += str[i];
  			counter[str[i]] += 1;
  		}
  		else if(counter[str[i]]===amount && str[i] !== str[i-1]){
  			result += str[i];
  			counter[str[i]] = 1;
  		}
  	}
  	return result;
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
  	var result = "";
  	for(var i = str.length-1; i >= 0; i--){
  		result += str[i];
  	}
  	return result;
  }
};
