//-------------------- CHAPTER 5 --------------------//


// Task 1

// var num1=parseFloat(prompt("Enter number 1"))
// var num2=parseFloat(prompt("Enter number 2"))
// var sum = num1+num2
// document.write("The sum of " +num1+ " and " +num2+ " is " +sum)


// Task 2

// var num1=parseFloat(prompt("Enter number 1"))
// var num2=parseFloat(prompt("Enter number 2"))
// var op =prompt("Enter Operator")
// if (op=="+"){
//     var sum = num1+num2
//     document.write("The Sum of "+ num1 +" and " +num2 +" is " +sum+"<br><br><br>")
// }

// else if(op=="-"){
//     var sub = num1-num2
//     document.write("The Subtract of "+ num1 +" and " +num2 +" is " +sub+"<br><br><br>")
// }
// else if(op=="*"){
//     var mul = num1*num2
//     document.write("The Multiply of "+ num1 +" and " +num2 +" is " +mul+"<br><br><br>")
// }
// else if(op=="/"){
//     var div = num1/num2
//     document.write("The Division of "+ num1 +" and " +num2 +" is " +div+"<br><br><br>")
// }
// else if(op=="%"){
//     var mod = num1%num2
//     document.write("The Modulus of "+ num1 +" and " +num2 +" is " +mod +"<br><br><br>")
// }
// else{
//     document.write("Give Number First")
// }



// Task 3

// var a
// document.write("Value after variable declaration is: " +a+ "<br>")
// var a=5
// document.write("Initial Value: " +a+ "<br>")
// a= ++a
// document.write("Value after increment is:" +a+ "<br>")
// a= a+7
// document.write("Value after addition is:" +a+ "<br>")
// a= --a
// document.write("Value after decrement is:" +a+ "<br>")
// a= a%3
// document.write("The remainder is :" +a+ "<br>")


// Task 4

// var ticket=prompt("Enter Ticket Quantity")
// document.write("Total cost to buy "+ticket +" tickets to a movie is " +ticket*600 +"PKR")



// Task 5

// var Table =prompt("Enter Number")
// document.write(" Table of " +Table+ "<br>"+"<br>"  )
// document.write(Table+" x "+1+ " = " + Table*1)
// document.write("<br>"+Table+" x "+2+ " = " + Table*2)
// document.write("<br>"+Table+" x "+3+ " = " + Table*3)
// document.write("<br>"+Table+" x "+4+ " = " + Table*4)
// document.write("<br>"+Table+" x "+5+ " = " + Table*5)
// document.write("<br>"+Table+" x "+6+ " = " + Table*6)
// document.write("<br>"+Table+" x "+7+ " = " + Table*7)
// document.write("<br>"+Table+" x "+8+ " = " + Table*8)
// document.write("<br>"+Table+" x "+9+ " = " + Table*9)
// document.write("<br>"+Table+" x "+10+ " =" + Table*10)



// Task 6

// var cel = parseInt(prompt("Enter Celcius"))
// var res = (cel* 9/5)+32
// document.write(res+"<sup>o</sup>")

// var fer = parseInt(prompt("Enter Fahrenheit"))
// var res1 = (fer-32)*5/9
// console.log(res1)



// Task 7

// var shirt=650
// var Pant=500
// var ship=100
// var quantity_s=prompt("Enter shirt quantity")
// var quantity_t=prompt("Enter Pant quantity")

// document.write("<h2>Shopping Cart</h2>")
// document.write("Price of Shirt is " +shirt +"<br>")
// document.write("Quantity of Shirt is " +quantity_s+"<br>")
// document.write("Price of Pant is " +Pant +"<br>")
// document.write("Quantity of Pant is " +quantity_t +"<br>")
// document.write("Shipping Charges is " +ship +"<br><br>")
// document.write("Total cost of your order is " +((shirt*quantity_s) + (Pant*quantity_t) +ship))



// Task 8

// var total_marks =parseInt( prompt("Enter Your Total Marks"))
// var obtained_marks =parseInt( prompt("Enter Your Obtained Marks"))


// document.write ("Percentage = " +(obtained_marks/total_marks*100))



// Task 9

// var us_dollar= parseInt(prompt("Enter how many US dollar do you have "))
// var saudi_rials= parseInt(prompt("Enter how many Saudi rials do you have "))
// document.write("Total Cruncy in PKR is : " +(us_dollar*224.61 + saudi_rials*59.76))



// Task 10

// var inp = parseInt(prompt("Enter Number"))
// var res = (((inp+5)*10)/2)
// console.log(res)



// Task 11

// document.write("<h1>Age Claculator</h1>");
// var curryear = 2022;
// var birthyear = 2003;
// var age1 = (curryear-birthyear);
// var age2 = (curryear-birthyear)-1;
// document.write("Current Year : " +curryear);
// document.write("<br/>");
// document.write("Birth Year "+birthyear);
// document.write("<br/>");
// document.write("Your Age Is :" + age1 +" or "+ age2);




// Task 12

// var Radius= parseInt(prompt("Enter Radius"))
// var circum = 2*3.142*Radius
// var area =parseFloat ((Radius*Radius) *3.142)
// document.write("<h1>The Geometrizer</h1>"+ "<br>"+"The Radius = " +Radius+ "<br>")
// document.write("The Circumference = " +circum+ "<br>")
// document.write("The Area = " +area)



// Task 13

// var age =parseInt(prompt("Enter Your Age"))
// var max_age =parseInt(prompt("Enter Your Maximum Age"))
// var amount =parseInt(prompt("Enter Amount of Snaks per day"))

// document.write("Favourate snaks = Choclate "+"<br>")
// document.write("Current Age = " +age+"<br>")
// document.write("Maximum Age = " +max_age+"<br>")
// document.write("Amount of choclate per day = " +amount+"<br>")
// document.write("You will need " + (((max_age-age)*365)*amount) +" to last you until the ripe old age of"+max_age)