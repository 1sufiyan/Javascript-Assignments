//-------------------- Chapter 6-9 --------------------//


// Task 1
// var a = 10
// document.write("Result: " +"<br>"+"The Value of a is : " +a+"<br><br>")
// document.write("------------------------------"+"<br><br>")

// document.write("The Value of ++a is : " + ++a +"<br>")
// document.write("Now the Value of a is : " +a+"<br><br><br>")

// document.write("The Value of a++ is : " + a+"<br>")
// document.write("Now the Value of a is : " + ++a +"<br><br><br>")

// document.write("The Value of --a is : " + --a+"<br>")
// document.write("Now the Value of a is : " +a+"<br><br><br>")

// document.write("The Value of a-- is : " + a+"<br>")
// document.write("Now the Value of a is : " + --a +"<br><br><br>")



// Task 2
// var a = 2
// var b = 1
// document.write("a is : "+ a +"<br>"+ "b is : "+ b +"<br>")
// document.write("Result is : ")
// console.log( --a)
// console.log( --a - --b)
// console.log(--a - --b + ++b)
// document.write( --a - --b + ++b + b--)



// Task 3
// var a = prompt("Enter Your Name")
// alert("Welcome " + a)



// Task 4
// var Table = parseInt(prompt("Enter Number"))
// if(isNaN(Table)){
// document.write(5+" x "+1+ " = " + 5*1)
// document.write("<br>"+5+" x "+2+ " = " + 5*2)
// document.write("<br>"+5+" x "+3+ " = " + 5*3)
// document.write("<br>"+5+" x "+4+ " = " + 5*4)
// document.write("<br>"+5+" x "+5+ " = " + 5*5)
// document.write("<br>"+5+" x "+6+ " = " + 5*6)
// document.write("<br>"+5+" x "+7+ " = " + 5*7)
// document.write("<br>"+5+" x "+8+ " = " + 5*8)
// document.write("<br>"+5+" x "+9+ " = " + 5*9)
// document.write("<br>"+5+" x "+10+ " =" + 5*10)
// }
// else{
    
// document.write("Table of " +Table+ "<br>"+"<br>" )
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
// }



// Task 5
// var eng = parseInt(prompt("Enter English Marks"))
// if(eng>0 && eng<100){
//     var urdu = parseInt(prompt("Enter Urdu Marks"))
//     if(urdu>0 && urdu<100){
//         var math = parseInt(prompt("Enter Math Marks"))
//         if(math>0 && math<100){
//             var res = eng+urdu+math
//             var per = parseFloat((res/300)*100)

//             document.write("<Table>")
//             document.write("<tr><th>Subjects</th>")
//             document.write("<th>Total Marks</th>")
//             document.write("<th>Obtained Marks</th>")
//             document.write("<th>Percentage</th></tr>")
            
            
//             document.write("<tr><th>English</th>")
//             document.write("<th>100</th>")
//             document.write("<th>"+eng+"</th>")
//             document.write("<th>"+eng+"%</th></tr>")


//             document.write("<tr><th>Urdu</th>")
//             document.write("<th>100</th>")
//             document.write("<th>"+urdu+"</th>")
//             document.write("<th>"+urdu+"%</th></tr>")


//             document.write("<tr><th>English</th>")
//             document.write("<th>100</th>")
//             document.write("<th>"+math+"</th>")
//             document.write("<th>"+math+"%</th></tr>")


//             document.write("<tr><th>        </th>")
//             document.write("<th>300</th>")
//             document.write("<th>"+res+"</th>")
//             document.write("<th>"+per+"%</th></tr>")
//             document.write("</Table>")


//         }
//         else{
//             alert("Enter Correct Marks of Maths")
//         }
//     }
//     else{
//         alert("Enter Correct Marks of Urdu")
//     }
// }
// else{
//     alert("Enter Correct Marks of English")
// }