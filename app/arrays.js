exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var result = -1;
    for(var i = 0; i < arr.length; i++){
      if(arr[i]===item && result === -1){
        result = i;
      }
    }
    return result;
  },

  sum: function(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++){
      total += arr[i];
    }
    return total;
  },

  remove: function(arr, item) {
    var array = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] !== item){
        array.push(arr[i])
      }
    }
    return array;
  },

  removeWithoutCopy: function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i]=== item){
         arr.slice(i,i+1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    for(var i = 0; i < arr2.length; i++){
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count: function(arr, item) {
    var counter =0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i]===item){
        counter += 1;
      }
    }
    return counter;
  },

  duplicates: function(arr) {
    var dup = [];
    for(var i = 0; i < arr.length; i++){
      if(arr.indexOf(arr[i]) !== i){
        if(dup.indexOf(arr[i])===-1){
          dup.push(arr[i]);
        }
      }
    }
    return dup;
  },

  square: function(arr) {
    var array = [];
    for(var i = 0; i < arr.length; i++){
      array.push(arr[i]*arr[i])
    }
    return array;
  },

  findAllOccurrences: function(arr, target) {
    var dup = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === target){
        dup.push(i);
      }
    }
    return dup;
  }
};
