exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var result = false;
    for(var i = 0; i < str.length; i++){
      if(!isNaN(parseInt(str[i]))){
        result = true;
      } 
    }
    return result;
  },

  containsRepeatingLetter: function(str) {
    var result = false;
    for(var i = 0; i < str.length; i++){
      if(str.indexOf(str[i]) !== i && isNaN(parseInt(str[i]))){
        result = true;
      }
    }
    return result;
  },

  endsWithVowel: function(str) {
    var vowel = "aeiou";
    var result = false;
    str = str.toLowerCase();
    for(var i = 0; i < vowel.length; i++){
      if(str[str.length-1]===vowel[i]){
      result = true;
      }
    }
    return result;
  },

  captureThreeNumbers: function(str) {
    var counter = 0;
    var result = "";
    for(var i = 0; i < str.length; i++){
      if(!isNaN(parseInt(str[i])) && counter < 3){
        result += str[i];
        counter += 1;
        if(result.length === 3){
          return result;
        }
        if(isNaN(parseInt(str[i+1]))){
          counter = 0;
          result = "";
        }
      }
      if(i === str.length-1 && result.length === 0){
        return false;
      }
    }
  },

  matchesPattern: function(str) {
    if(str.length == 12 && str[3] == "-" && str[7] == "-"){
      for(var i = 0; i < str.length; i++){
        if(isNaN(parseInt(str[i])) && i !== 3 && i !== 7){
          return false;
        }
      }
      return true;
    }
    return false;
  },

  isUSD: function(str) {
    //check if begin with $
    //check if ends with .00
    //check for "," position
    if(str[0]!=="$"){
      return false;
    }
    if(str.indexOf(".")!==str.length-3&&str.indexOf(".")!==-1){
      return false;
    }

    if(str.indexOf(".")===-1){
      str = str.slice(1);
    }
    else{
      str = str.slice(1,str.length-3);  
    }

    if(str[0]===","){
      return false;
    }
  
    var array = str.split(",");
    var dollar = array.reduce(function(acc,cur){
      acc += cur.length;
      return acc;
    },0);
    var parts = dollar%3===0? Math.floor(dollar/3):Math.floor(dollar/3)+1;
    if(array.length!==parts){
      return false;
    }
    else{
      for(var i = 0; i < array.length; i++){
          if(array[i].length!==3 && i!==0){
          return false;
        }
      }
    }
    return true;
  }
};
