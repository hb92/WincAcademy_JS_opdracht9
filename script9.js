//function declarations
/*function add(number1, number2) {
  return number1 + number2;
}
add(5, 6); // 11*/

function way1 (number1, number2){
    let sq1 = number1 * number1;
    let sq2 = number2 * number2;
    let sum = sq1 + sq2;
    let sumsq = sum * sum;
    return sumsq;  
};

console.log(way1(2,3));

//function expressions
/*const add = function (number1, number2) {
  return number1 + number2;
};

add(5, 6); // 11*/

const way2 = function(number1, number2) {
    let sq1 = number1 * number1;
    let sq2 = number2 * number2;
    let sum = sq1 + sq2;
    let sumsq = sum * sum;
    return sumsq;  
};
    
console.log(way2(3,4));


//arrow function
/*const add = (number1, number2) => {
  return number1 + number2;
};
add(5, 6); // 11*/

const way3 = (number1, number2) => {
    let sq1 = number1 * number1;
    let sq2 = number2 * number2;
    let sum = sq1 + sq2;
    let sumsq = sum * sum;
    return sumsq;
};

console.log(way3(4,5));