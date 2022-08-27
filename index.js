function isPalindrome(word) {
  // Write your algorithm here
  
    // iterate from the beginning of the string to the middle of the string
    for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
      // compare the letter we're iterating over to the corresponding letter at the end of the string
      const endIndex = word.length - 1 - startIndex;
      if (word[startIndex] !== word[endIndex]) {
        // if the letters don't match, return false
        return false;
      }
    }
  
    // if we reach the middle, and all the letters match, return true
    return true;
  }


/* 
  Add your pseudocode here
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
  if the letters don't match, return false
  if we reach the middle, and all the letters match, return true
*/

/*
  The function checks whether a string  is palindrome or not
  The for loop iterates from the beginning of the string to the middle of the string
  in each iteration we are comparing the current letter to the corresponding letter at the end of the string
  if the letters don't match return false and exit the function, else return true 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
