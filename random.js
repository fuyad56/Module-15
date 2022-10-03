var num = 2.12567997765564765;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
console.log(result);
console.log(result2);
console.log(result3);

var dice = Math.random() * 10;
console.log(dice);

var randomNum = Math.random() * 6;
var output = Math.round(randomNum);
console.log(output);

for (var i = 0; i < 10; i++) {
  var randomNum = Math.random() * 6;
  var output = Math.round(randomNum);
  console.log(output);
}
