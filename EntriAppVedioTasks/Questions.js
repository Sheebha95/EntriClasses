// //1.Sum of Natural Numbers
// const naturalNumberSum=(num)=>{
//     let sum=0;
//     for(let i=0;i<=num;i++){
//         sum=sum+i;
//     }
//     console.log("Sum of "+num + " Natural Numbers is " +sum)
// }
// return naturalNumberSum(5)

// //2. Factorial of a Number

// const factorial=(num)=>{
//     let fact=1, i;
//     for(i=1;i<=num;i++){
//     fact=fact*i; 
//     // console.log(fact)
//     }
//     console.log("factorial of "+num+" is "+fact)

// }
// return factorial(5)

// //3. Fibonacci Sequence
// const fibonacciSequence=(num)=>{
//     let first=0, second=1, next,i;
//     // console.log(first)
//     // console.log(second)
//     for(i=0;i<num;i++){
//         next=first+second;
//         console.log(next)
//         first=second
//         second=next
//     }
//     // console.log(next)

// }
// return fibonacciSequence(7)

// //4. Print Multiplication Table

// const multiplicationTable=(num)=>{
//     let i;
//     for(i=1;i<=10;i++){
//         // console.log(`${num} x ${i} = ${num*i}`)
//         console.log(num + " x " + i+" = "+num*i)
//     }
// }
// return multiplicationTable(5)

// //5. Reverse a String

// const reversedString=(str)=>{
//     let revStr="",i;
//     for(i=str.length-1; i>=0; i--){
//         revStr=revStr+str[i]
//     }
//     console.log(revStr)

// }
// return reversedString("hello")

// //6. Prime Number Check

// const primeNumber=(n)=>{
//     let num=true, i
//     for(i=2;i<=n/2;i++){
//         if(n%i===0)
//             num=false
//             break
       
//     }
//     if(num===true){
//         console.log(n+ " is a Prime")
//     }else{
//         console.log(n+ " is a not Prime")
//     }
    

// }
// return primeNumber(10)


// //7. Count Digits in a Number

// const countDigits=(num)=>{
//     let count=0, temp=num
//     for(i=0;i<=temp.length;i++){
//         if(temp!==0){
//             count++
//             temp=math.floor(temp/10)
//         }
//     }
//     console.log(count)

// }
// return countDigits(12345)

// //8. Print Pattern

// const printPattern=(num)=>{
//     let pattern="",i,j, spaces
//     for(i=1;i<=num;i++){
//         for(j=1;j<=i;j++){
//             spaces=" ".repeat(num-i)
//             pattern=" * ".repeat(i)
           
//         }
//         console.log(spaces+pattern)  
//     }

// }
// return printPattern(5)

// //9. Find Largest Element in an Array

// const largestElementArray=()=>{
//     const number=[7,2,9,11,5]
//     let i, large=[]
//     for(i=0;i<number.length;i++){
//         if(number[i]>large){
//             large=number[i]
//         }
//     }
//     console.log(`The largest number in this [${number}] is ${large}`)
// }
// return largestElementArray()

// //10. Reverse an Array

// const reverseArray=()=>{
//     const number=[7,2,9,11,5]
//     let i, reverse=[]
//     for(i=number.length-1;i>=0;i--){
//         reverse.push(number[i])
//         }
//     console.log(`The reverse array is ${reverse}`)
// }
// return reverseArray()


// //1. Reverse a String

// const stringReverse=(str)=>{
//     let string="",i,rev
//     for(i=str.length-1;i>=0;i--){
//         rev=str.charAt(i)
//         // console.log(rev)
//         string=string+rev
        
//     }
//     console.log(string)

// }
// return stringReverse("Hello")


// //2. Find the Maximum Number in an Array


// const findMax=()=>{
//     const number=[3,7,1,9,5]
//     let i, max=[]
//     for(i=0;i<number.length;i++){
//         if(number[i]>max){
//             max=number[i]
//         }
//     }
//     console.log(`The largest number in this [${number}] is ${max}`)
// }
// return findMax()


// //3. Count the Occurrences of a Character in a String

// const charString=(str)=>{
//     let char="m",i,count=0,ch
//     for(i=0;i<=str.length;i++){
//         if(str[i]==char){
//             count=count+1
//         }
//     }
//     console.log(count)
// }
// return charString("Pmrmogrammingm")

// //4. Remove Duplicates from an Array

// const removeDuplicates=()=>{
//     let input=[1,2,2,3,4,4,5]
//     let output=[]
//     for(i of input){
//         if(!(output.includes(i))){
//             output.push(i)
//         }
//     }
//     console.log(output)
// }
// return removeDuplicates()
    

// //5. Check for Palindrome

// const isPalindrome=(str)=>{
//     let i,j=str.length-1
//     for(i=0;i<=str.length;i++){
//         if(str[i]!==str[j]){
//             return false
//         }
//         else{
//             j=j-1
            
//         }
//     }
//     return (console.log(`${str} is Palindrome`))

// }
// return isPalindrome("madam")


// //4. Merge Two Sorted Arrays

// const mergeArrays=()=>{
//     let arr1=[1,3,5]
//     let arr2=[2,4,6]
//     let output=[],i,j,k
//     for(i of arr1){
//         output.push(i)
//         // console.log(output)
           
//         }
//     for(j of arr2){
//             output.push(j)
//             // console.log(output)
                
//     }
        
//    console.log(output.sort())
// }
// return mergeArrays()

// //7. capitalizeFirstLetter
// const capitalizeFirstLetter=(str)=>{
//     First=str.charAt(0)
//     console.log(First.toUpperCase()+str.slice(1))

// }
// return capitalizeFirstLetter("hello world")


// //8. countWords

// const countWords=(str)=>{
//     let state=str.split(" "), count=0
//     console.log(state)
//     for(let i=0;i<state.length;i++){
//         count=count+1
//     }
//     console.log(count)
    
// }
// return countWords("This is a sample sentence")

// //9. reverseWords

// const reverseWords=(str)=>{
//     let str1=str.split(" ")
//     console.log(`Thr reverse Words are ${str1[1]} ${str1[0]}`)

// }
// return reverseWords("hello world")


// //10. removeVowels

//     const removeVowels=(str)=>{
//         let al = [ 'a', 'e', 'i', 'o', 'u',  
//         'A', 'E', 'I', 'O', 'U' ]; 
//     let result = ""; 

//     for(let i = 0; i < str.length; i++)  
//     { 
   
//     if (!al.includes(str[i])) 
//     { 
//      result += str[i]; 
//     } 
//     } 
//         console.log(result)

//     }
//     return removeVowels("Hello, how are you?")

// //11. isAnagram

// const isAnagram=()=>{
//     let str1="how"
//     let str2="who",i
//     for(i=0;i<=str1.length;i++){
       
//             if(!(str1[i]!=str2[i])){
//                 return true
//             }
//             else{
//                 return false
//             }
        
//     }
//     console.log("true")
// }
// return isAnagram()

// //12. sumArray

// const sumArray=()=>{
//     let arr1=[1,2,3,4,5,9],i,sum=0
//     for(i=0;i<arr1.length;i++){
//         // console.log(sum)
//         sum=sum+arr1[i]
//         // console.log(sum)

//     }
//     console.log(`The sum of the array is ${sum}`)
// }
// return sumArray()

// //13. find Minimum in the array

// const findMin=()=>{
//     let arr1=[3,14,2,5], i,min
//     for (i=0;i<arr1.length;i++){
//             if(!(min<arr1[i])){
//                 min=arr1[i]

//             }
//     }
//     console.log(min)

// }
// return findMin()

// //14. findAverage

// const findAverage=()=>{
//     let arr1=[10,20,30,40,50],i, sum=0,avg
//     for(i=0;i<arr1.length;i++){
//         sum=sum+arr1[i]
//         avg=sum/arr1.length
//     }
//     console.log(`The Average of the array is ${avg}`)
// }
// return findAverage()

// //15. rotateArray

// const rotateArray=()=>{
//     let arr1=[1,2,3,4,5,9,0,22], i, rotate=[]
//     for(i=arr1.length-1;i>0;i--){
//         // console.log(arr1[i])
//         rotate.push(arr1[i])
//         // console.log(rotate)
//     }
//       console.log(rotate)  
// }
// return rotateArray()

// //17. findIndex

// const findIndex=(element)=>{
//     let arr1=[1,2,3,4,5,3,4,12,5], i
//     for(i=0;i<arr1.length;i++){
//         if(element==arr1[i])
//         {
//             console.log(i)
//         }
//     }
    
// }
// return findIndex(12)

// //18. filterEvenNumbers

// const filterEvenNumbers=()=>{
//     let arr1=[1,2,3,4,5,6,8,2,4,40],i,even=[]
//     for(i=0;i<arr1.length;i++){
//         if(arr1[i]%2==0){
//             even.push(arr1[i])
//         }
//     }
//     console.log(even)
// }
// return filterEvenNumbers()

//19. findDuplicates

const findDuplicates=()=>{
    let input=[1,2,2,3,4,4,5]
    let output=[], i, j
    for(i=0;i<input.length;i++){
        for(j=i+1;j<input.length;j++){
            if(input[i]==input[j]){
                if(output.includes(input[i])){
                    output.push(input[i])
                    console.log(output)
            }

            }
           
    }
    }
    console.log(output)

}
return findDuplicates()



