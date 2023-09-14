function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    if (word[word.length - 1 - i] !== word[i]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  Iterate through half of the string length
  Declare new variable with the letter that is the opposite side of string argument
  Check if new variable letter is the same as our argument on opposite end of the string
  If new letter variable !== word letter position, return false
*/

/*
  Add written explanation of your solution here
  Originally I thought I would iterate through the entire length then declare a new empty stirng
  Then I would set the end index letter and add the letters into the string until we get the word backwards
  However, I was receiving false for my cases and realized that the string was not being updated

  After, I peaked at the solutions then found a brilliant solution.
  The function iterates through half the string length then compares the letter at the endIndex with the
  startIndex letter of our string argument
  If the letters do not match, we do not have a palindrome
  If the letters do match, we return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("yobananaboy"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("coding"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("repaper"));


}

module.exports = isPalindrome;
