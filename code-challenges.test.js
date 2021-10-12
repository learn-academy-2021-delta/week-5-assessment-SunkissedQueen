// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//Pseudocode..I will try to keep it up here, but I talk so much...so know that I tried.
// Create a test using this template.
// describe("", () => {
//   test("", () => {
//     expect().toEqual()
//   })
// })
// Describe function will have a name of the function "uMissingOut"
// It will have the description of what the function does "takes in a string and returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0"
// Expect will have the function call and the expected result as the coded message

// a) Create a test with expect statements using the variables provided.
describe("uMissingOut", () => {
  test("takes in a string and returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
    var secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    var secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    var secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(uMissingOut(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(uMissingOut(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(uMissingOut(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})
// I got the FAILure!!! The song "I Got the Power" just came to my mental space. Alright Jest theme song.

// b) Create the function that makes the test pass.

// Maintain the structure of the function and refactor as necessary
// const uMissingOut = (string) =>{
//   return string
// }
// Trying to get the green light. Make this test PASS.
// declare the function with the name and arrow syntax, argument will be a string
// convert 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0
// ***1st try*** split into an array and switch as stated then join...less key strokes. see how much can be provided in return...need to review how to call upon a character...will use .map to iterate and look at values. If doesn't work...I will review the replace method again...because I think it only works on arrays.
// return the coded message

// const uMissingOut = (string) =>{
//   return string.split(" ").map((value) =>{
//     if(value==="a"){
//             return "4"
//         } else if(value==="e"){
//                 return "3"
//             } else if(value==="i"){
//                     return "1"
//                 } else if(value==="o"){
//                         return "0"
//                     } else {
//                         return value
//         }
//     } ).join("")
// }
//---->Nothing was changed... I love arrays and map so much that I was determined to use it...however, I am glad I didn't write that long code correctly...because it made me go back to see that replace can be used with a string. Calm down, Charlean! Researching the replace on a string again because the below only changes the first occurence
// const uMissingOut = (string) =>{
//   return string.replace("a", 4)
// }
// Dot notation is splendid! Have to see how to include the capital and lower case. g means global. gi means case-insenstive

const uMissingOut = (string) =>{
  return string.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0)
}

// Now I understand that the jest will test the function without my calling out the function. Cool! I didn't realize that because the first introduction was with console.log after our code so I thought we had to include it pass the variables. The lightbulb is shining as well as the Minty Green PASS banner.


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// Describe function will have a name of the function "likeRuby"
// It will have the description of what the function does "takes in an array of words and a single letter and returns all the words that contain that particular letter"
// Expect will have the function call and the expected result as the words that contain that particular letter

// a) Create a test with expects statement using the variable provided.

describe("likeRuby", () => {
  test("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
  var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
  var letterA = "a"
  // Expected output: ["Apple", "Banana", "Orange"]
  var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
  var letterE = "e"
  // Expected output: ["Cherry", "Blueberry", "Peach"]
    expect(likeRuby(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(likeRuby(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

//Failing with the best of them.

// b) Create the function that makes the test pass.

// Red needs to meet Green. Revisiting my Ruby method and translate it to JS.
// Conditional that determines if a value is in the string and will filter it out the array. Researching the syntax for including a value
// def got_it(array, string)
//   #need to iterate across array and look at the values
//   array.select do |value|
//   #returns words that contain a particular letter
//     value.include? string
//   end
// end
//Had to go back and update the testing code...didn't pass the two arguments. The code below was not returning anything. Researching how to find characters in an array of words...looking through array methods js
// const likeRuby = (array, string) => {
//   return array.filter(value =>{
//     value.includes(string)
//   })
// }

const likeRuby = (array, string) => {
  return array.filter(value => value.toLowerCase().indexOf(string.toLowerCase()) !== -1)
}
//GREEN from the research. I did pretty good on converting my ruby method to js...however, I needed indexOf for the array... as well as the `!== -1`. Got to research the need for that to have a successful test.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// Describe function will have a name of the function "handFull"
// It will have the description of what the function does "takes in an array of 5 numbers and determines whether or not the array is a full house"
// Expect will have the function call and the expected result as true or false

// a) Create a test with expect statements using the variable provided.

describe("handFull", () => {
  test("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
    var hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    var hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    var hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    expect(handFull(hand1)).toEqual(true)
    expect(handFull(hand2)).toEqual(false)
    expect(handFull(hand3)).toEqual(false)
  })
})
//It feels so good to FAIL.

// b) Create the function that makes the test pass.
//That PASS really takes its time. Here we go.
// Declare the function fullHouse to pass its argument as an array
// The method will use tenary to see if two conditions are meet 3 values the same, 2 values are the same. Also saw an every() array method in the research on number 2...tests to see if all elements in an array pass a test...sounds like a boolean to me
// Output will be either true or false

// const handFull = (array) =>{
//   return array.every(value =>
//   value[0]===value[1]?)
// } ----> started getting confused how to store the counts of each matching value...Fisher Yates or that Tupperware technique of storing things look good right about now. Research. Found a method...Object.values() It arranges the values of an object (array) based on its key (index)) Used empty array to store the amount of matching values in the array with a for loop for iteration. Then a holder for the new array was declared and conditions set for the possible ways to match the condition.

const handFull = (array) => {
  let cardMatch = []
  for(let i of array){
    cardMatch[i] = (cardMatch[i] || 0) + 1;
  }
  let card = Object.values(cardMatch);
  if((card[0] === 2 && card[1] === 3) || (card[1] === 2 && card[0] === 3)){
    return true;
  }
  return false;
}

//Minty Green PASS banner
