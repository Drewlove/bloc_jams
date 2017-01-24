// forEach loops through an array and calls a function on each element in the array

var forEach = function(arrayName, func){
    for(var i=0; i < arrayName.length; i++) {
        func(i);
    }
}