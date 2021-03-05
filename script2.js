//a program that asks the user for their name and greets them with their name
/*
function greetUser() {
const myName = "Alice & Bob";
alert ("Welcome " + myName + "!");
} ;

greetUser();
*/
//a program that asks the user for a number n and prints the sum of the numbers 1 to n

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


