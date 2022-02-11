// 2. User will input continuously numbers. Which numbers are divisible by 5, only print sum of them. Continue the program until user inputs -1 
// e.g. input: 1 5 9 6 10 12 15 output: 30

const prompt=require('prompt-sync')()
let userInput
var sum = 0
while(userInput != -1) {
     userInput=parseInt(prompt("Input number: "))
     if(userInput % 5 == 0) {
         sum+=userInput
     }
}
console.log("Sum: "+sum)
