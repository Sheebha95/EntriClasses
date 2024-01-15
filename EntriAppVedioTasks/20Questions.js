// //1.
// const truncateString=(text)=>{
//     console.log("1." + text.slice(0,4));
// }
// return truncateString("Robin Singh")

// //2.
// const abbrevName=(name)=>{
// let splitName=name.split(" ")
// console.log(splitName[0]+" "+splitName[1][0]+".")

// }
// return abbrevName("Robin Singh")

//3. 
    // const protectEmail=(mail)=>{
    // let splitMail=mail.split("@")
    // console.log(splitMail[0].slice(0,5)+"...@"+splitMail[1])
   
    // }
    // return protectEmail("robin_singh@example.com")

// //4.
//     const capitalize=(str)=>{
//     const cap=str.charAt(0);
//     console.log(cap.toUpperCase()+str.slice(1))

//     }
//     return capitalize("js string exercises")


// //5.
// const unCapitalize=(str)=>{
//     const cap=str.charAt(0);
//     console.log(cap.toLowerCase()+str.slice(1))

//     }
//     return unCapitalize("Js string exercises")

// //6. 
// const truncateTest=(string,_b)=>{
//     if(string.length>_b){
//         console.log(string.slice(0,_b)+"...")
//     }
//      console.log(string)
// }
// return truncateTest("This is a long sentence.",10)



// //7. 
// const truncateTest=(string,_b)=>{
//     if(string.length>_b){
//         console.log(string.slice(0,_b)+"...")
//     }
//      console.log(string)
// }
// return truncateTest("Short text.", 15)


// //8.

// const greetTimeOfDay=(time)=>{
//     if(time<=11 && time>=6)
//     {
//         console.log("8. Good Morning");
//     }else if(time<=17 && time>=12) {
//         console.log("8. Good Afternoon");
//     }else if(time<=23 && time>=18){
//         console.log("8. Good Evening");
//     }else{
//         console.log("8. Good Night")
//     }
// }
// return greetTimeOfDay(24)

// //9.

// const isLeapYear=(year)=>{
//     if(year%4===0 && year%100!==0 || year%400===0){
//         console.log(year+" Leap Year")
//     }else{
//         console.log(year+" Not a Leap Year")
//     }
// }
// return isLeapYear(2001)

// //10.
// const positiveNegativeZero=(num)=>{
//     if(num>0){
//         console.log(num+" is Positive")
//     }else if (num<0){
//         console.log(num+" is Negative")
//     }else{
//         console.log("Zero")
//     }
// }
// return positiveNegativeZero(0)

// //11. 
//     const calculateGrade=(score)=> {
//     if (score >= 90) {
//         console.log("A");
//     } else if (score >= 80) {
//         console.log("B");
//     } else if (score >= 70) {
//         console.log("C");
//     } else if (score >= 60) {
//         console.log("D");
//     } else {
//         console.log("F");
//     }
// }
// return calculateGrade(91)


// //12. 
// const evenOrOdd=(num)=> {
//     if (num % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }
// return evenOrOdd(9)

// //13.
//     const checkAge=(age)=> {
//         if (age >= 18 && age <= 65) {
//             console.log("Allowed");
//         } else {
//             console.log("Not allowed");
//         }
//     }
//     return checkAge(17)

// //14.
// const calculateTicketPrice=(age, isStudent)=>{
//     if (age < 18 || isStudent) {
//         console.log("Discounted price");
//     } else {
//         console.log("Regular price");
//     }
// }

// return calculateTicketPrice(25,false)

// //15.
// const validateUsername=(str)=>{
//  for(let i=0; i<str.length;i++){
//     let charCode=str.charAt(i)
//     if(!(charCode>=48 && charCode<=57) && !(charCode>=65 && charCode<=90) && !(charCode>=95 && charCode<=122)){
//         console.log("Flase")
//     }
        
//      }   
//      console.log("True")
// }
// return validateUsername("Sheeba123")

// //16.
// const selectColor=(color, isAvailable)=> {
//     if (isAvailable) {
//         if (color === "blue" || color === "green") {
//             console.log("Selected");
//         } else if (color === "red") {
//             console.log("Not available");
//         } else {
//             console.log("Invalid choice");
//         }
//     } else {
//         console.log("Color not available");
//     }
// }
// return selectColor("red", true)

// //17.

// const fruits = ["apple", "banana"];
// fruits.push("orange");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.unshift("grape");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// //18.
// const myStack = [];
// myStack.push(10);
// myStack.push(20);
// myStack.push(30);
// console.log(myStack);
// myStack.pop();
// console.log(myStack);
// myStack.push(40);
// console.log(myStack);

// //19.
// const myQueue = [];
// myQueue.push("a");
// myQueue.push("b");
// myQueue.push("c");
// console.log(myQueue);
// myQueue.shift();
// console.log(myQueue);
// myQueue.push("d");
// console.log(myQueue);

//20. 
const shoppingList = [];
shoppingList.push("eggs");
shoppingList.push("milk");
shoppingList.push("bread");
shoppingList.push("vegetables");
console.log(shoppingList);
shoppingList.splice(shoppingList.indexOf("bread"), 1);
console.log(shoppingList);


