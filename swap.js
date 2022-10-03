// var a = 5;
// var b = 7;
// console.log("Before swap: a =", a, "b =", b);
// var temp = a;
// a = b;
// b = temp;
// console.log("After swap: a =", a, "b =",b);


// var x = 5;
// var y = 7;
// x = x + y;
// y = x - y;
// x = x - y;
// console.log("after swap: x =", x, "y =", y);


// var p = 5;
// var q = 7;
// [p, q] = [q, p];
// console.log("after swap: p =", p, "q =", q);



var f = 10;
var h = 15;
var temp = f;
f = h;
h = temp;
console.log("Using Temp: f =", f, "h =", h);


var f = 10;
var h = 15;
f = f+ h;
h = f- h;
f = f- h;
console.log("Using Temp: f =", f, "h =", h);


var f = 10;
var h = 15;
[ f, h] = [f, h];
console.log("Using Temp: f =", f, "h =", h);