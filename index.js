// STRING MANIPULATION
//Reverse String

function reverseString(str) {
    let charArray = str.split("");
    
    let reversedArray = charArray.reverse();
    
    let reversedStr = reversedArray.join("");
    
    return reversedStr;
}
console.log(reverseString("I love GoMyCode"));

//Count Characters

function countChar(school) {
      return school.length;
}
console.log(countChar("GoMyCode is the best"))

//Capitalize Words

function capitalizeWords(sentence) {
    let words = sentence.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    return words.join(" ");
}

console.log(capitalizeWords("gomycode is the best"));


//ARRAY FUNCTION
//Find Maximum and Munimum
function findMinMax(arr) {
    if (arr.length === 0) {
        return { min: undefined, max: undefined };
    }
    
    let min = arr[0];
    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return { min, max };
}
let numbers = [8, 5, 10, 2, 6, -5, 0];
let result = findMinMax(numbers);
console.log(result); 

//Sum of Array
function addUp(x) {
	let sum = 0
	for (let n = x ; n > 0 ; n--){
		sum +=n
	}
	return sum
}
console.log(addUp(9));

//Filter Array
// Function that filters elements from an array based on a condition
function filterArray(arr, condition) {
    return arr.filter(condition);
}

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredNumber = filterArray(number, num => num % 2 !== 0);
console.log(filteredNumber);


// MATHEMATICAL FUUNCTION
// Factorial

function factorial(n) {
    //factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

let n = 5;
let goodResult = factorial(n);
console.log(factorial(n) );


//Prime Number Check
function test_prime(n){
    if (n===1) {return false;}
    else if(n === 2)
 {
     return true;
   }else
   {
     for(var x = 2; x < n; x++)
     {
       if(n % x === 0)
       {
         return false;
       }
     }
     return true;  
   }
 }
 
 console.log(test_prime(5));

//Fibonacci sequence
 function generateFibonacciSequence(limit) {
    // Initialize an array to store Fibonacci sequence
    let fibonacci = [];

    if (limit <= 0) {
        return fibonacci;
    }

    fibonacci.push(1);
    if (limit === 1) {
        return fibonacci;
    }
    fibonacci.push(1);
    if (limit === 2) {
        return fibonacci;
    }

    for (let i = 2; i < limit; i++) {
        let nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
        if (nextFibonacci <= limit) {
            fibonacci.push(nextFibonacci);
        } else {
            break;
        }
    }

    return fibonacci;
}

// Example usage:
let limit = 20;
let fibonacciSequence = generateFibonacciSequence(limit);
console.log(generateFibonacciSequence(limit));
