// 3. Find factorial from given user input

const prompt=require('prompt-sync')()
let number = parseInt(prompt("Input number: "));
if (number === 0) {
    console.log("The factorial of "+number+" is 1.");
}
else {
    let factorial = 1;
    for (iterator = 1; iterator <= number; iterator++) {
        factorial *= iterator;
    }
    console.log("The factorial of "+number+" is "+factorial);
}