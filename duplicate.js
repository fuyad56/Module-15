// var name = [3, 6, 2, 2, 4, 5, 8, 5, 6, 1, 4, 5, 6, 5, 4,]
// var uniqueName = [];
// for(var i = 0; i < name.length; i++){
//     var element = name[i];
//     var index = uniqueName.indexOf(element);
//     if(index == -1){
//         uniqueName.push(element);
//     }
// }
// console.log(uniqueName);

var number = [
  1, 2, 4, 5, 1, 5, 4, 1, 2, 4, 7, 1, 4, 5, 8, 4, 1, 2, 5, 9, 6, 5, 1, 1, 5, 5,
  2,
];
var uniqueNumber = [];
for (var i = 0; i < number.length; i++) {
  var element = number[i];
  var index = uniqueNumber.indexOf(element);
  if (index == -1) {
    uniqueNumber.push(element);
  }
}
console.log(uniqueNumber);
