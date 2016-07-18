exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	console.log(data,"dirName", dirName);
  	var array = [];
  	function break(list){
  		for(var key in list){
    		if(typeof list[key] !== "string"){
    			break(list[key]);
    		}
    		else{
    			if(list[key].split(".",list[key].length-1)===dirName){
  			array.push(list[key]);
    			}
    		}
    		return array;
    	}
    }
  	return break(data);
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
