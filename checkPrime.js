
// 4. Check if a number is prime or not. Do it without using array

const prompt=require('prompt-sync')()
let number = parseInt(prompt("Input number: "))
var sqrt=Math.floor(Math.sqrt(number))
var prime
for(var iterator=2; iterator<sqrt+1; iterator++) { 
    if(number % iterator == 0) {
            prime = false;
            break;
        }
}

if((prime == false)||number == 1){
    console.log(number+" is not a prime number")
}
else {
    console.log(number+" is a prime number")
}