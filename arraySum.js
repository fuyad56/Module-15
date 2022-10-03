// var numbers = [ 55, 54, 65, 58, 45, 52, 45, 41, 45];
// var sum = 0;
// for( var i = 0; i < numbers.length; i++){
//     var element = numbers[i];
//     sum = sum + element;
// }
// console.log("Total of the numbers: ", sum);


function getArraySum(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i ++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [55, 45, 65, 48, 75, 45, 41, 42, 41, 41, 45, 45, 47];
var result = getArraySum(numbers);
console.log(result);