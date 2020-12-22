function test1(arr){
    var minimum = Math.min.apply(Math, arr);
    var maximum = Math.max.apply(Math, arr);
    console.log("min is " + minimum + "max is" + maximum);
} 
var arr = new Array(1,2,3,4,5); test1(arr)