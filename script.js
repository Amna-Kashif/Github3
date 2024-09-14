//  CHAP:  USER INPUT & CONDITIONAL STATEMENT



// 1)  Prompt the user to enter the name of the city

// let city = prompt("Enter your city name:");

// // Check if the city entered is "Karachi"
// if (city == "karachi") {
//     alert("Welcome to the city of lights");
// } else {
//     alert("Welcome to " + city);
// }




// 2) Prompt the user to enter their gender
// let gender = prompt("Enter your gender:");

// // Check the gender and display the appropriate message
// if (gender ==  "male") {
//     console.log(`Good Morning Sir`);
    
// } else if  (gender == "female") {
//     console.log(`Good Morning Ma'am`);
// }  else {
//     console.log(`Incorrect input...`);
    
// }


// 3)  Prompt the user to enter the color of the traffic signal
// let signalColor = prompt("Enter the color of the traffic signal (Red/Yellow/Green):");

// // Check the color and display the appropriate message
// if (signalColor === "red") {
//     console.log(`Must stop`);
// } else if (signalColor === "yellow") {
//     console.log(`Ready to move`);
// } else if  (signalColor === "green") {
//     console.log(`Move now`);
// } else {
//     console.log(`Incorrect input..`);
    
// }


// 4)   Prompt the user to enter the remaining fuel in the car (in litres)
// let remainingFuel = +prompt("Enter the remaining fuel in your car (in litres):")

// // Check if the remaining fuel is less than 0.25 litres

// if (remainingFuel <  0.25) {
//     alert(`Refill the fuel in your car`)
// } else {
//     alert(`You have enough fuel`);
// }


// 5)  Run the statement below to check whether alert would displayed or not:

// a

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// } else {
//     alert("your condition is false")
// }

// b

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// } else {
//     alert("your condition for variable b is false")
// }


// c

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// } else if (c === 13){
//     alert("condition 2 is true");
// } else if (++c < 14){
//     alert("condition 3 is true");
// } else if(c === 14){
//     alert("condition 4 is true");
// } else {
//     alert("your condition for variable c is false")
// }

// d

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// } else {
//     alert("The cost doesn't equal");
// }


// e

// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }

// f

// if("car" < "cat"){
//     alert("car is smaller than cat");
// } else {
//     alert("car is greater than cat");
// }


// 6  MARKSHEET

// Prompt the user to enter total marks and marks obtained in three subjects
// let totalMarks = +prompt("Enter total marks for all subjects:");
// let marksSubject1 = +prompt("Enter obtained marks for Subject 1:");
// let marksSubject2 = +prompt("Enter obtained marks for Subject 2:");
// let marksSubject3 = +prompt("Enter obtained marks for Subject 3:");

// // Calculate total obtained marks and percentage
// let totalObtainedMarks = marksSubject1 + marksSubject2 + marksSubject3;
// let percentage = (totalObtainedMarks / totalMarks) * 100;

// // Compute the grade and remarks based on percentage
// let grade, remarks;

// if (percentage >= 80) {
//     grade = "A+";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else if (percentage >= 50) {
//     grade = "C";
//     remarks = "Satisfactory";
// } else {
//     grade = "Fail";
//     remarks = "Sorry, you need to work harder";
// }

// // Display the results in the browser
// document.write("<h2>MARKSHEET:</h2>");
// document.write("<table border='1' style='border-collapse: collapse; width: 50%; text-align: left;'>");
// document.write("<tr><th>Total Marks</th><td>" + totalMarks + "</td></tr>");
// document.write("<tr><th>Marks Obtained</th><td>" + totalObtainedMarks + "</td></tr>");
// document.write("<tr><th>Percentage</th><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("<tr><th>Grade</th><td>" + grade + "</td></tr>");
// document.write("<tr><th>Remarks</th><td>" + remarks + "</td></tr>");
// document.write("</table>");


// 7   check the guess is correct or not


// Prompt the user to guess the secret number
// let userGuess = +prompt("Enter secret number:")

// // Store a secret number 
// let secretNumber = 10; 
// let closestGreater = secretNumber + 1;

// // Check if the user's guess is correct
// if (userGuess === secretNumber) {
//     alert(` 'Bingo! Correct Answer `); 
// } else if (userGuess === closestGreater ) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Wrong guess, Try again!")
// }



// 8 check whether the given number is divisible by 3.

// Prompt the user to enter a number
// let number = +prompt("Enter a number to check if it's divisible by 3:");

// // Check if the number is divisible by 3
// if (number % 3 === 0) {
//     alert(`The number ${number} is divisible by 3`);
// } else {
//     alert(`The number ${number} is not divisible by 3`);
// }



// 9 Check given input is an even number or an odd number.

// let userInput = +prompt("Enter any number:");

// if (userInput % 2 == 0) {
//     console.log(`${userInput} is even`);
// } else {
//     console.log(`${userInput} is odd`);
// }


// 10   TEMPERATURE INPUT


// Prompt the user to enter the temperature
// let temperature = +prompt("Enter the temperature:");

// // Show a message based on the temperature
// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("It is quite cold today.");
// }



// 11   CALCULATOR

// Prompt the user to enter the first number
// let firstNumber = +prompt("Enter the first number:");

// // Prompt the user to enter the second number
// let secondNumber = +prompt("Enter the second number:");

// // Prompt the user to enter the operation (+, -, *, /, %)
// let operation = prompt("Enter the operation (+, -, *, /, %):");

// // Declare a variable to store the result
// let result;

// // Perform the calculation based on the operation
// if (operation === "+") {
//     result = firstNumber + secondNumber;
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
// } else if (operation === "/") {
//     // Check if secondNumber is not zero to avoid division by zero error
//     if (secondNumber !== 0) {
//         result = firstNumber / secondNumber;
//     } else {
//         result = "Error: Division by zero!";
//     }
// } else if (operation === "%") {
//     // Check if secondNumber is not zero to avoid division by zero error in modulus operation
//     if (secondNumber !== 0) {
//         result = firstNumber % secondNumber;
//     } else {
//         result = "Error: Division by zero!";
//     }
// } else {
//     result = "Error: Invalid operation!";
// }

// // Display the result to the user
// alert(`The result of ${firstNumber} ${operation} ${secondNumber} is: ${result}`);








