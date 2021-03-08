//a program that asks the user for their name and greets them with their name
/*
function greetUser() {
const myName = "Alice & Bob";
alert ("Welcome " + myName + "!");
} ;

greetUser();
*/
//-----------------------------------------------------------------------------------------
//a program that asks the user for a number n and prints the sum of the numbers 1 to n
/*
function sumOfNumbers(){
    let numN = prompt("input a number", "");
    const parsee = parseInt(numN, 10);
    let total = 0;
    for (let b = 1; b <= parsee; b++){
        total += b;
    } 
   return total;
};
document.body.innerHTML = sumOfNumbers();
*/

//--------------------------------------------------------------------------------------------
//Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
/*
function sumOfMultiples(){
    let numN =  parseInt(prompt("please input a number", ""), 10);
    let total = 0;
 for (let b = 0; b <= numN; b++){
    if(b % 3 === 0|| b % 5 === 0){
        total += b;
    }
 }
 return total;
};
document.body.innerHTML = sumOfMultiples();
*/
//------------------------------------------------------------------------------------
//Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.
/*
function sumOrProduct(){
    let numN =  parseInt(prompt("please input a number", ""), 10);
    if(confirm("do you want addition?") === true){
        let total = 0;
        for (let b = 1; b <= numN; b++){
            total += b; 
        } 
        return total;
    }
    else if(confirm("do you want multiplication?") === true){
      let total = 1;
    for (let b = 1; b <= numN; b++){
        total *= b;
    } 
    return total;
    }  
    
};
document.body.innerHTML = sumOrProduct();
*/
//---------------------------------------------------------------------------------------------
//Write a program that prints a multiplication table for numbers up to 12.

/*
    let numN =  parseInt(prompt("please input a number", ""), 10);
    for(let i = 1; i <= 12; i++) {

        // multiply i with number
        const result = i * numN;
    
        // display the result
        console.log(`${numN} * ${i} = ${result}`);
    }
    */
//---------------------------------------------------------------------------------------------
//Write a program that prints all prime numbers.
/*
const lowNum =  parseInt(prompt("please input a number", ""), 10);
const highNum = parseInt(prompt("please input a number", ""), 10);

console.log(`The prime numbers between ${lowNum} and ${highNum} are:`);

for (let i = lowNum; i <= highNum; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
 // if number greater than 1 and not divisible by other numbers
 if (i > 1 && flag == 0) {
    console.log(i);
}
}
console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
*/

//--------------------------------------------------------------------------------
//Write a program that prints the next 20 leap years.
var year = prompt("please input a year to find out the next 20 leap years");
var counter = 20;
//can have two arguments, first is the year entered by user
//second is how many leap years to display
function leapyear(years, num) {
    //convert years to integer
    years = parseInt(years);
    //cache reference to original number of leap years to be shown
    //for use in return statement
    var origNum = num;
    //add 1 to years just in case current year is leap year
    years++;
    //this string will hold all of the leap years
    var leapYears = '';
    //while num is above 0
    while (num > 0) {
        //if years is a multiple of 4 and years is not evenly divisible by 100
        //or years is evenly divisible by 100 and evenly divisible by 400
        //it is a leap year
        if (years % 4 === 0 && (years % 100 !== 0 || ( years % 100 === 0 && years % 400 === 0))) {
            //if at the last year
            if (num === 1) {
                //add a period to end
                leapYears += years + ".";
            }
            else {
                //otherwise, add a comma and space for other years
                leapYears += years + ", ";
            }
            //increase years
            years++;
            //decrease num
            num--;
        } 
        else {
            //if not a multiple of 4, just add to years
            years++;
        }
    }
    //returns sentence after while loop is done
    return "The next " + origNum + " leap years are " + leapYears;
}

//console.log(leapyear(year, counter));
//or
alert(leapyear(year, counter));
//-------------------------------------------------------------------------------------
/*
Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.
*/