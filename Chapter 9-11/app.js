//-------------------- Chapter 9-11 --------------------//


// Task 1

// var city = prompt("Enter your City Name")
// alert("Welcome To city of lights")



// Task 2

// var gender = prompt("Enter your Gender")
// if(gender=="Male" || gender=="male"){
//     alert("Welcome Sir")
// }
// else{
//     alert("Welcome Ma'am")
// }



// Task 3

// var color = prompt("Enter Traffic Signal Color")
// var upper = color.toUpperCase()

// if(upper=="RED"){
//     document.write("<table style='border:1px solid red;'>")
//     document.write("<tr><th> "+color+" => ")
//     document.write(" Must Stop</th><tr>")
//     document.write("</table>")

// }
// else if(upper=="YELLOW"){
//     document.write("<table style='border:1px solid Yellow;'>")
//     document.write("<tr><th> "+color+" => ")
//     document.write(" Ready to Move</th><tr>")
//     document.write("</table>")
// }
// else if(upper=="GREEN"){
//     document.write("<table style='border:1px solid Green;'>")
//     document.write("<tr><th> "+color+" => ")
//     document.write(" Move Now</th><tr>")
//     document.write("</table>")
// }
// else{
//     alert("Enter Right Color Name")
// }



// Task 4

// var fuel = parseFloat(prompt("Enter Fuel Quantity"))
// if(fuel<0.25){
//     document.write("Please refill the fuel in your car")
// }
// else{
//     document.write("Fuel is good")
// }



// Task 5

// var a = 4;
// if (++a === 5){
//     alert("Given Condition of variable a is true ")
// }

// var b = 89;
// if (b++ === 90) {
//     alert("Given Condition of variable b is true ");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true")
// }
// // false
// if (c === 13) {
//     alert("condition 2 is true")
// }
// // true
// if (c === 14) {
//     alert("condition 4 is true");
//     // true
// }

// var matcost = 20000;
// var labcost = 2000;
// var totalCost = matcost + labcost;
// if (totalCost === labcost + matcost) {
//     alert("The cost is equal");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// var sub_1 = parseInt(prompt(" obtained Marks in first subject"));
// var sub_2 = parseInt(prompt(" obtained Marks in second subject"));
// var sub_3 = parseInt(prompt(" obtained Marks in third subject"));
// var max_marks = 300;
// var total_obt = (sub_1+sub_2) + sub_3 ;
// var obt_per = ((total_obt/max_marks)*100).toFixed(2);
// document.write("<h1>Marks Sheet</h1>");
// document.write("Total Marks :"+ max_marks +"<br/>");
// document.write("Marks Obtained :"+ total_obt +"<br/>");
// document.write("Percentage :"+ obt_per +"%"+"<br/>");
// if(obt_per >= 80){
//     document.write("Grade : A-one"+"<br/>");
//     document.write("Remarks : Excellent"+"<br/>");
// }else if(obt_per >= 70){
//     document.write("Grade : A"+"<br/>");
//     document.write("Remarks : Good"+"<br/>");
// }else if(obt_per >= 60){
//     document.write("Grade : B"+"<br/>");
//     document.write("Remarks : You need to improve"+"<br/>");
// }else if(obt_per < 60){
//     document.write("Grade : Fail"+"<br/>");
//     document.write("Remarks : Sorry"+"<br/>");
// }else{
//     document.write("invalid input"+"<br/>");
// }



//Task No : 6

// var ran_num =Math.random()*10;
// var guess  = random.tofixed();
// var user = parseInt(prompt("Guess a num between 1 TO 10 "));
// if (user == guess){
//     document.write("HURRY ! correct ")
// }
// else if (user+1 == guess){
//     document.write("close Enough")
// }
// else{
//     document.write(" ^_^ WRONG ANSWER ^_^")
// }



//Task No : 7

// var checkNum = parseInt(prompt("Enter Number : "));
// if (checkNum%3 == 0){
//     document.write("Number is divisible by 3");
// }else{
//     document.write("Number is not divisible by 3");
// }



//Task No : 8

// var checkEven = parseInt(prompt("WRITE A Number : "));
// if (checkEven % 2 == 0) {
//     document.write("Even");
// } else {
//     document.write("Odd");
// }



//Task No : 9

// var inpTemp = parseInt(prompt("Input temperature : "));
// if (inpTemp > 40){
//     document.write("too hot outside.");
// }else if (inpTemp > 30){
//     document.write("Normal Weather Today.");
// }else if (inpTemp > 20){
//     document.write("Todays Weather is good for walk.");
// }else if (inpTemp > 10){
//     document.write(" Today’s weather is so Cool . Stay Home ,Stay save ");
// }else{
//     document.write("Please Enter A Correct Temprature");
// }



//Task No : 10

// var firstNumber = parseInt(prompt("Enter First Number : "));
// var SecondNumber = parseInt(prompt("Enter Second Number : "));
// var operation = prompt("Enter Operator symbol Ex. '+','-','*','/','%' : ");
// if (operation == '+'){
//     document.write(firstNumber+SecondNumber);
// }else if (operation == '-'){
//     document.write(firstNumber-SecondNumber);
// }else if (operation == '*'){
//     document.write(firstNumber*SecondNumber);
// }else if (operation == '/'){
//     document.write(firstNumber/SecondNumber);
// }else if (operation == '%'){
//     document.write(firstNumber%SecondNumber);
// }else{
//     document.write("Invalid Input.")
// }