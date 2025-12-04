// let x = 10;
// let y = 5;

// {
//  let z = x + y;
//  console.log(z);
// }

{
  var x = 1;
  {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

{
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

// // let num = 18

// // if (num > 0 ) {
// //     console.log(`${num} is positive`)
// // } else if (num < 0){
// //     console.log(`${num} is a negative`)
// // } else {console.log(`${num} is zero`)};

// let num = 18

// if (num > 100 && num >= 0) {
//     console.log(`${num} is positive and greater than 100`)
// } else if (num < 100 && num >= 0){
//     console.log(`${num} is positive but less than 100`)
// }

// let grade = 100

// if (grade < 55 ) {
//     console.log("F")
// } else if (grade < 69) {
//     console.log("D")
// } else if (grade < 79) {
//     console.log("C")
// } else if (grade < 89) {
//     console.log("B")
// } else {
//     console.log("A")
// };

let num1 = 13;
let num2 = 23;

let operand = '';

switch (operand) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  case "**":
    console.log(num1 ** num2);
    break;
  default:
    console.log("❌ Error: Not a valid Operand");
    break;
}