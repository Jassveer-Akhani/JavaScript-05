// Chapter 17-20


//Q1

// var arr = [[],[],[],[]];



//Q2


// var arr2 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

// for (var i = 0; i < arr2.length; i++) {
//         document.write(arr2[i][j] + " ");
//     document.write("<br>")
// }


//Q3


// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>")
// }


//Q4

// var table = prompt("Enter any table number");
// var tablelen = prompt("Enter table length");

// for(var i =1; i <= tablelen;i++){
// document.write(table + "x" + i + "=" + table * i + "<br>")
// }


//Q5

// var fruits = ['apple', 'banana', 'mango', 'orange','strawberry'];

// for(var i= 0;i< fruits.length;i++){
//     document.write(fruits[i] + "<br>")
//     for(var j =i ;j <= i;j++){
//     document.write("Element at " + i + " index is " + fruits[i] + "<br>")
// }
// }


//Q6


// document.write("<h3>Counting</h3>");


// for(var i = 1; i<= 15;i++){
//     document.write(i + ",")
// }

// document.write("<h3>Reverse Counting</h3>");


// for(var i = 15; i>= 1;i--){
//     document.write(i + ",")
// }


// document.write("<h3>Even</h3>");


// for(var i = 0; i<= 20;i=i+2){
//     document.write(i + ",")
// }

// document.write("<h3>Odd</h3>");


// for(var i = 1; i< 20;i=i+2){
//     document.write(i + ",")
// }

// document.write("<h3>Series</h3>");


// for(var i = 2; i<= 20;i=i+2){
//     document.write(i + "k" + ",")
// }



//Q7


// var items = ['Cake', 'Apple pie', 'Cookie', 'Chips', 'Patties'];
// var bakery = prompt("Welcome to XYZ Bakery.What do you want to order Sir/Madam?");
// var upp = bakery.slice(0,1).toUpperCase();
// var low = bakery.slice(1).toLowerCase();
// var join = upp + low;

// match =false;
// for(var i =0 ;i<items.length;i++){
//     if(join === items[i]){
//         match = true;
//         alert(`Cookie is available a index ${i} in our bakery`)
// break
//     }

// }
// if(!match){
//     alert('We are sorry,This item is not available in our bakery')
// }


//Q8


// var larnum = [24, 53, 78, 91, 12];
// var largest = larnum[0];

// document.write("Array items:" + larnum + "<br><br>")

// for (var i = 0; i < larnum.length; i++) {
//     if (larnum[i] > largest) {
//         largest = larnum[i];
//     }
// }
// document.write("The largest number is" + largest + "<br>");



//Q9


// var larnum = [24, 53, 78, 91, 12];
// var smallest = larnum[0];

// document.write("Array items:" + larnum + "<br><br>")

// for (var i = 0; i < larnum.length; i++) {
//     if (larnum[i] < smallest) {
//         smallest = larnum[i];
//     }
// }
// document.write("The Smallest number is" + smallest + "<br>");


//Q10

//Method1

// for(var i =1;i<=20;i++){
//     document.write(5 * i + ",")
// }


//Method2

// for(var i =5;i<=100;i=i+5){
//     document.write(i + ",")
// }