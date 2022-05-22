

// Declare three varibales in one statement=======================
var first,second,third;
first=1;
second=2;
third=3;

// alert("this is me " + second);



// Legal Varibales============================

var my_First; 
var third;
var myThird; //Its camelCase
var number1; //First one always should be letter


// Illegal Variables=============================


// var 69;  //Can't start with numbers
// var @first; //Special characters not allowed except underscore and dollar
// var mythird; //Always use camelCase
// var alert; //Can't use reserved keywords
// var fifth one; //Can't contain spaces


// Variables for strings===================================

var username;

var myName="Huzaifa Habib";

// Script for display hello world on alert box=============
var message;
message="Hello World";
// alert("" + message);


// Script for display student bio through multiple alert boxes=======

var age=19;
var collegeName="Ait";
var course="Web and Mobile application develpoment";

// alert("Welcome " + myName);
// alert("My age " + age);
// alert("My college " + collegeName);
// alert("My course name " + course);


// Program of fortune========================

var numberOfChildern=2;
var partnerName="xyz";
var geographicLocation="Pakistan";
var jobTitle="Software Engineer";

// alert("You will be a " +jobTitle + " in " + geographicLocation + " and married to " + partnerName + 
// " with " + numberOfChildern + " kids " );


// Variable for email=========================

var email="fake@gmail.com.";
// alert("My email address is " + email );


// Variable for book===========================

var book="A Smart Way To Learn JavaScript.";
// alert("I am trying to learn from the book " + book);


                        // Variables For Numbers=================================


// Variable called age===========

var age=19;
// alert("I am " + age + " years old. ")


// Program for online clothing store===================

var visitorName="Ali Khan";
var product="Shirts";
var quantity=5;

                        // Maths Expression==============================
// For addition===================
var x=3;
var y=5;
var sum=x+y;
// alert("The sum of 3 and 5 after addition is " + sum);

// For Subtraction=========================

var x=3;
var y=5;
var sum=x-y;
// alert("The sum of 3 and 5 after subtration is " + sum);

// For division====================
var x=3;
var y=5;
var sum=x/y;
// alert("The sum of 3 and 5 after division is " + sum);


// For Modulus======================

var x=3;
var y=5;
var sum=x%y;
// alert("Remainder of dividing 3 by 5 is " + sum);




// Maths Expression===============

var number=10;
console.log (++number);
console.log (7+number);
console.log (--number);
console.log (3/number);


// Script to store ticket price===================

var oneTicket=900;
var totalCostOfFiveTickets=5*oneTicket;
// alert("" + totalCostOfFiveTickets);


// Multiplication table of five===============

var a=5

console.log(5*1);
console.log(5*2);
console.log(5*3);
console.log(5*4);
console.log(5*5);
console.log(5*6);
console.log(5*7);
console.log(5*8);
console.log(5*9);
console.log(5*10);



                // Script for temperature converter======================


// var celcius=40;
// var f=20;
// console.log (conversion=celcius=(f-32)*5/9);



                // Program for shopping cart===========================


var priceOfItem1=200;
var priceOfItem2=300;
var orderQuantitiyOfItem1=10;
var orderQuantitiyOfItem2=5;
var shippingCharges=500;

var item1Cost=priceOfItem1*orderQuantitiyOfItem1;
var item2Cost=priceOfItem2*orderQuantitiyOfItem2;

var totalCost=item1Cost+item2Cost+shippingCharges;
// alert("Result " + totalCost);


                        //Program for marksheet==========================
                        
var totalMarks=1000;
var marksObtained=700;
var total=(marksObtained/totalMarks)*100;
// alert("Percentage is " + total);



                    // Program to convert currency in PKR====================

var oneDollar=104;
var tenDollar=10*oneDollar;
var oneRayal=29;
var twentyFiveRayal=25*oneRayal;

console.log (tenDollar+twentyFiveRayal);



                    // Program for airthmetic====================

var a=20
var expression=[(a+5)*10]/2;
console.log ([(a+5)*10]/2 )


                    // Prompt Script==============================

// var yourName=prompt("Please enter your name " , "Huzaifa");
// alert("Welcome " + myName);


// Table of any number=============================================

// var number=prompt("Please enter number of your choice to print its table till ten" , "5");

// document.write("<h1>" + number + " x 1 = " + number * 1 + "</h1>");
// document.write("<h1>" + number + " x 1 = " + number * 2 + "</h1>");
// document.write("<h1>" + number + " x 1 = " + number * 3 + "</h1>");
// document.write("<h1>" + number + " x 1 = " + number * 4 + "</h1>");
// document.write("<h1>" + number + " x 1 = " + number * 5 + "</h1>");
// document.write("<h1>" + number + " x 1 = " + number * 6 + "</h1>");
// document.write("<h1>" + number + " x 1 = " + number * 7 + "</h1>");
// document.write("<h1>" + number + " x 1 = " + number * 8 + "</h1>");
// document.write("<h1>" + number + " x 1 = " + number * 9 + "</h1>");
// document.write("<h1>" + number + " x 1 = " + number * 10 + "</h1>");


// Program to take city======================================================

// var city=prompt ("Please enter your city");

// if (city=="karachi" ) {
//     alert("Welcome To City Of Lights");   
// }



// else {
//     alert ("Welcome To The " + city);

// }
// var result=city.toLowerCase();



// Program for traffic lights===============================================

// var color=prompt("Please input color of road traffic signal") .toUpperCase();

// if (color == "red") {
//     alert("Vehicles Must Stop");
    
// }

// if (color == "yellow") {
//     alert("vehicles should get ready to move");
    
// }

// if (color == "green") {
//     alert("Vehicles Can Move Now");

// }



// Program for max age or current age===============================================

// var age=prompt("Write max age" );
// var age2=prompt("Write Your currnet age");

// if (age>=age2) {
//     alert("You Are Welcome");
    
// }

// else{
//     alert("You are aged and not welcome");
// }


// Program for take input of remaining fuel in your car================================

// var fuel=prompt("Please input remaining fuel in car (in litres)");

// if (fuel< "0.25ltr") {
//     alert(" Please refill the fuel in your car");
    
// }

// else{
//     alert("You are good to go,no need to refill your fuel");
// }



// Book Script================================================

// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }
// if (c === 13){
//  alert("condition 2 is true");
// }
// if (++c < 14){
//  alert("condition 3 is true");
// }
// if(c === 14){
//  alert("condition 4 is true");
// }


// Program for marksheet===============================================

// var marks1= parseInt (prompt("Write your marks in Maths"));
// var marks2= parseInt (prompt("Write your marks in Science"));
// var marks3=parseInt (prompt("Write your marks in English"));
// var result=(marks1 + marks2 + marks3);
// var totalMarks=300;

// document.write ("<h1>Mark Sheet</h1>")

// document.write("<h3> Total Marks : 300 </h3>")
// document.write ( "<h3> Marks Obtained  : "  + result + "</h3>");
// var percentage=result/totalMarks*100
// document.write ( "<h3> Percentage  : "  + percentage + "%" + "</h3>");

// if (percentage >= 80) {
//     document.write("<h3> Remakrs : A-One </h3> ");
//     document.write("<h3> Grade : Excellent  </h3> "); 
    
// }

// if (percentage >=70) {
//     document.write("<h3> Grade : A  </h3> "); 
//     document.write("<h3> Grade : Good  </h3> "); 
// }

// else if (percentage >=60) {
//     document.write("<h3> Grade : B  </h3> "); 
//     document.write("<h3> Remarks : You need to improve </h3> "); 
// }

// else {
//     document.write("<h3> Grade : Fail </h3> "); 
//     document.write("<h3> Grade : Sorry  </h3> "); 
// }



// Program for to implement checkout process of a shopping cart system for an e-commerce website====

// var item1=  (prompt("Enter Name Of Item 1 "));
// var item2=  (prompt("Enter Name Of Item 2 "));
// var price1=parseInt  (prompt("Enter Price Of Item 1 "));
// var price2=parseInt  (prompt("Enter Price Of Item 2 "));
// var quantity1=parseInt  (prompt("Enter Quantity Of Item 1 "));
// var quantity2=parseInt  (prompt("Enter Quantity Of Item 2 "));

// var shippingCharges=250;

// document.write( "<h2> " + "Price of " + item1  + " is " + price1 + "</h2>"  );
// document.write( "<h2> " + "Price of " + item2  + " is " + price2 + "</h2>"  );
// document.write( "<h2> " + "Quantity of " + item1  + " is " + quantity1 + "</h2>"  );
// document.write( "<h2> " + "Quantity of " + item2  + " is " + quantity2 + "</h2>"  );
// document.write( "<h2> " + "Shipping Charges " + shippingCharges  + "</h2>"  );


// var totalQuantity=quantity1+quantity2;
// var totalCost=price1+price2*totalQuantity;
// var discount=totalCost-0.1;

// document.write( "<h2>" + " totalCost of your order is "  + totalCost + "</h2>" )

// if (totalCost>2000) {
//     document.write( "<h2>"+ "Discounted Price is " + discount + "</h2>");

    
// }



// Program for Guess Game========================================================

// var random= 7;

// var guessNumber=prompt("Please Guess The Secret Number (ranging from 1 to 10)");

// if (guessNumber === "7" ) {
//     alert("Bingo! Correct answer.");
    
// }

// else if (guessNumber === "8") {
//     alert("Close enough to the correct answer.");
    
// }

// else{
//     alert("Your Guess Number Is Wrong Try Again!!");
// }





// a program to check whether the given number is divisible by 3.=============================

// var check=prompt("Enter the Number to check whether its divisible by 3 or not ")

// if (check / "3") {
//     alert("Yes Its divisible by 3.");
    
// }

// else{
//     alert ("No it's not.");
// }



// Program For Even And Odd=============================================

// var random=prompt("Please input number to check whether its odd or even" );
// if (random % "2" == 0) {
//     alert ("Its Even Number");
    
// }

// else{
//     alert("Its odd Number");
// }



// Program to check weather In Karachi======================================

// var temp=prompt("Enter the temperature in Karachi");

// if (temp>"40") {
//     alert("Its too hot outside.");
    
// }


    
// else if ( temp> "30") {
//     alert("The Weather Today is Normal");

// }

// else if ( temp> "20") {
//     alert(" Today's Weather is cool");

// }

// else if ( temp> "10") {
//     alert("OMG! Today’s weather is so Cool.");

// }




// // Program to create calculator=========================================================

// var _1=parseInt (prompt("Enter First Number"));
// var _2=parseInt (prompt("Enter Second Number"));
// var operation= (prompt("Enter Operations (+,-,/,*,%)"));

// // alert("The Result is " + _1 + operation +_2);

// var mul=_1 * _2;
// var div=_1 / _2;
// var add=_1 + _2;
// var min=_1 - _2;
// var mod=_1 % _2;
// console.log(mul)

// if (operation === "*") {

//     alert ("The Result is " + mul);
    
// }

// if (operation === "-") {

//     alert ("The Result is " + min);
    
// }

// if (operation === "/") {

//     alert ("The Result is " + div);
    
// }

// if (operation === "+") {

//     alert ("The Result is " + add);
    
// }

// if (operation === "%") {

//     alert ("The Result is " + mod);
    
// }




// Program To enter day name===================================================

// var day=prompt("Enter Day Name: ");

// if (day=="saturday"+"sunday") {
//     alert("Yay! It’s a holiday");
    
// }

// else{
//     alert("It’s a week day");
// }



// Program that takes input users score============================================


// var take=prompt("Please enter your score");

// if (take>"50") {
//     alert("You are passed.");
    
// }

// else{
//     alert ("Try again!");
// }



// Program To take 2 number For comparission======================================

var one= parseInt (prompt("Enter first number"));
var second=parseInt (prompt("Enter Second number"));

if (one>second) {
    alert( " The greater number between  " + one +" and " + second +" is " + one);
    
}

else if (one==second) {
    alert(one + " and " + second + " are equal.");
    
}

else{
    alert(" The greater number between  " + one + " and " + second +" is " + second);
}































   