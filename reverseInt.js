// 5. Take a 5 digits of number from user and print it in reverse order. e.g input: 12345 Output: 54321

const prompt=require('prompt-sync')()
var reverseNumber=0, count=0
let number = parseInt(prompt("Input number: "))
while(number > 0){
    reverseNumber = (reverseNumber*10) + parseInt(number%10) 
    number = parseInt(number /10);
    count++
}
if(count == 5){
    console.log("Reversed integer: "+reverseNumber)
}
else {
    console.log("This is not a 5 digit number")
}