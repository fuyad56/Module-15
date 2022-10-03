var marks = [ 45, 50, 45, 47, 55, 20, 80, 91, 95, 55];
var max = marks[0];
for( var i = 0; i < marks.length; i ++){
    var element = marks[i];
    if( element > max){
        max = element;
    }
}
console.log("Highest value is: ", max);