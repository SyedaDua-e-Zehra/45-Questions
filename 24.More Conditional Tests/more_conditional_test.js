//Tests for equality with string
console.log("equality Test with string:", "Apple" === "Apple");
//Tests for inequality with string
console.log("Inequality Test with string:", "Apple" != "orange");
// Tests using the lower case function
console.log(" Tests using the lower case function", "HELLO".toLowerCase() === "hello");
//Numerical tests involving equality
console.log("equality Test with numbers:", 25 === 25);
//Numerical tests involving inequality
console.log("Inequality Test with numbers:", 25 != 15);
// greater than test
console.log("Greater than test:", 10 > 5);
// less than test
console.log("less than test:", 5 < 10);
//greater than or equal to
console.log("Greater than or equal to test:", 10 >= 10);
//less than or equal to
console.log("less than or equal to test:", 5 <= 10);
//Tests using "and"  operators
console.log("And operator test:", 5 === 5 && 10 > 5);
//Tests using "or" operators
console.log("or operator test:", 5 === 5 || 10 < 5);
//Test whether an item is in a array
var color = ['red', 'green', 'blue'];
console.log("test\"green\"in the array: ", color.includes("green"));
//Test whether an item is not in a array
console.log('testing "yellow" is not in array: ', !color.includes("Yellow"));
