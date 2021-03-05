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


    let numN =  parseInt(prompt("please input a number", ""), 10);
    for(let i = 1; i <= 12; i++) {

        // multiply i with number
        const result = i * numN;
    
        // display the result
        console.log(`${numN} * ${i} = ${result}`);
    }
//---------------------------------------------------------------------------------------------
