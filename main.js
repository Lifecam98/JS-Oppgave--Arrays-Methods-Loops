const myArray = ["apple", "banana", "cherry", "date", "eggplant"];

//1.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "for-loop"
for (let index = 0; index < 10; index++) {
	console.log(index + 1);
}

//2.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "while loop"
let index = 0;
while (index < 10) {
	console.log(index + 1);
	index++;
}

//3.--------------------------------------------------------------------------------------
// Print each item in myArray using a "for loop".
for (const item of myArray) {
	console.log(item);
}

//4.--------------------------------------------------------------------------------------
// Using the myArray.push() method, add "mango" to the end of myArray.
//print myArray using a for... of loop.
myArray.push("mango");
for (const item of myArray) {
	console.log(item);
}
//5.--------------------------------------------------------------------------------------
//Using the myArray.splice() method, remove "cherry" from myArray
// print the result using myArray.foreach()
myArray.splice(2, 1);
myArray.forEach((item) => console.log(item));

//6.--------------------------------------------------------------------------------------
// Using the .shift() and .pop() method, remove the first and last item from myArray.
//print the result
myArray.shift();
myArray.pop();
for (const item of myArray) {
	console.log(item);
}

// 7.--------------------------------------------------------------------------------------
// create a variable and assign it the content of myArray as a string using .join().
let arrayString = myArray.join(" ");
// print your variable.
console.log(arrayString);
//BONUS - See if you can make the items be seperated by a space

//8--------------------------------------------------------------------------------------
//Create a function that takes a number as an argument and returns that number squared.
// call your function by using a valid argument
function numberSquared(number) {
	return number * number;
}
console.log(numberSquared(5));

//9.--------------------------------------------------------------------------------------
//Using the "%" (modulo) operator complete the function,
// it should take "number" as an argument and return "even" if its even and "odd" if its odd.
function oddOrEven(number) {
	if (number % 2 === 0) {
		return "even";
	} else {
		return "odd";
	}
}
//call your function by using one of the options below.
// oddOrEven(prompt());
// oddOrEven(5);
console.log(oddOrEven(5));

//10.--------------------------------------------------------------------------------------
//write a function that prints the fibbonacci sequence for the number passed into it
// HINT! fibbonacchi =
//  c = a + b;
//  a = b;
//  b = c;
function Fibbonacci(number) {
	let a = 0;
	let b = 1;
	let c;

	console.log(a);
	console.log(b);

	for (let i = 0; i < number - 2; i++) {
		c = a + b;
		a = b;
		b = c;
		console.log(c);
	}
}

Fibbonacci(10);

//11.--------------------------------------------------------------------------------------
//BONUS!Implement fizzbuzz, if a number is divisible by 3: Fizz, if a number is divisible by 5: Buzz, if the number is divisible by both 3 and 5, FizzBuzz
// https://www.geeksforgeeks.org/fizz-buzz-implementation/
function fizzbuzz(number) {}

fizzbuzz();

//12.--------------------------------------------------------------------------------------
//SUPERBONUS - we have not talked about recursion yet, but here is a fun one to try.
//recursion is when a function calls itself.
//Complete the function so that it returns the factorial of a number. Factorial (n!) is the product of all whole numbers between 1 and n
//example: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
	if (n === 0) return 1;
	return; /// din kode her
}
console.log(factorial(5));
