// // 2. Implement a JavaScript function called calculateArea that takes two parameters (length and width) and returns the area of a rectangle.


// Ans:  

const calculateArea = (length,width)=>{
    let area = length*width
    console.log(area)

}
return calculateArea(20, 40)


// 1. Write a JavaScript function called findMax that takes an array of numbers as input and returns the maximum number in the array.
// Ans: 

const findMax=()=>{
        const number=[3,7,1,9,5]
        let i, max=[]
        for(i=0;i<number.length;i++){
            if(number[i]>max){
                max=number[i]
            }
        }
        console.log(`The largest number in this [${number}] is ${max}`)
    }
    return findMax()

// 2. Implement a function called reverseString that takes a string as input and returns the reversed string.

// Ans:

const reversedString=(str)=>{
        let revStr="",i;
        for(i=str.length-1; i>=0; i--){
            revStr=revStr+str[i]
        }
        console.log(revStr)
    
    }
    return reversedString("Sekhar")


// 3. Create an object called person with properties name, age, and gender. Write a function called printPerson that takes the person object as input and prints their details.

// Ans: 
    const printPerson=()=>{
        let person={name:"Pujitha", 
                    age:21, 
                    gender:"female"}

        console.log(`The person details are Name: ${person.name}, Age: ${person.age}, Gender: ${person.gender} `)

    }
    return printPerson()
    



// 4. Develop a JavaScript function called countVowels that takes a string as input and returns the number of vowels in the string.

// Ans: 

const countVowels=(str)=>{
            let al = [ 'a', 'e', 'i', 'o', 'u',  
            'A', 'E', 'I', 'O', 'U' ]; 
        let count=0; 
    
        for(let i = 0; i < str.length; i++)  
        { 
       
        if (!al.includes(str[i])) 
        { 
         count +=1; 
        } 
        } 
            console.log(`The count of the ${str} is ${count}`)
    
        }
        return countVowels("Sheeba")

// 5. Implement a function called reverseArray that takes an array as input and returns a new array with the elements reversed. (Example: Input: [1, 2, 3], Output: [3, 2, 1])

// Ans: 

    const reverseArray=()=>{
        const number=[1,2,3]
        let i, reverse=[]
        for(i=number.length-1;i>=0;i--){
            reverse.push(number[i])
            }
        console.log(`The reverse array is [${reverse}]`)
    }
    return reverseArray()

// 6. Write a function called isPalindrome that takes a string as input and returns true if the string is a palindrome, false otherwise.

// Ans: 

    const isPalindrome=(str)=>{
        let i,j=str.length-1
        for(i=0;i<=str.length;i++){
            if(str[i]!==str[j]){
                return false
            }
            else{
                j=j-1
                
            }
        }
        return (console.log(`${str} is Palindrome`))
    
    }
    return isPalindrome("level")

