// 1. Generate 2 number randomly and ask user to input the sum of 2 numbers. If user inputs the correct sum, print message that is correct Ans and iterate it 5 times.
// After 5 iteration, show the total mark out of 5
// e.g. what is the sum of 12 and 8 ?

const prompt=require('prompt-sync')()
var firstNumber, secondNumber, givenSum, actualSum, count =0, iterator=1
while (iterator <=5) {
    firstNumber = Math.round(Math.random() * (100 - 1) + 1)
    secondNumber = Math.round(Math.random() * (100 - 1) + 1)
    actualSum = firstNumber + secondNumber;
    let givenSum=parseInt(prompt("what is the sum of "+firstNumber+" and "+secondNumber+" ? "))
    if(actualSum == givenSum){
        count++;
        console.log("Correct answer")
    }
    else {
        console.log("Incorrect answer")
    }
    iterator++;
    }

    console.log("Total Marks: "+count+" out of 5")

