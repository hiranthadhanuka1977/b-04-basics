// Javascript Scopes
var isConditional = true;


// Global Scope


// Blocked Scope
{
    var c = 55;
    let a = 10;
    const b = 20;
    console.log("1::", a, b, c);
}

//console.log("2::", a, b, c);
//console.log ("3::", c);


// Function Blocked Scope   
function myFunction() {
    let d = 5000;
    return d;
}

// console.log("4::", myFunction());

// Conditional Blocked Scope
if (isConditional === true) {
    var message1 = "Hello, World!";
    console.log("5::", message1);
}

// console.log("5::", message1);

function addTwoNumbers(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 + num2;
}

console.log("6::", addTwoNumbers(5, 10));
console.log("7::", addTwoNumbers("5", "10"));