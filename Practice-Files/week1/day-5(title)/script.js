/**
 * Create the function to pull in a sentence string that returns a string with each word starting with a capital letter and the rest being lower case.
 *
 *
 */

let str =
  "daily practice is very useful to remember key concepts in javascript.";

const capitaliseFirstletter = (str) => {
  // Step 1 - convert the string into an array of indivdual words in lower case. We split at the space between words.

  let words = str.toLowerCase().split(" ");
  //console.log(words);
  //console.log(words[0][0]);
  //console.log(words[4][0]);

  // Step 2 - loop through each word in the array, pull out the 1st character, capitalise it, then add back the rest of the words.

  // So this loop is [resetting the value of words[i]] to a capitalised first letter and then remaining characters from the slice starting at the 2nd letter

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");

  // Step 3 - this returns the array but we need to return the string so we use the join() method at the space. The .join basically takes an array of words and creates a string for each element with a space in between.
};

console.log(capitaliseFirstletter(str));

// Another example of the .join method:

let joinExample = ["The", "weather", "is", "very", "cold", "today."];
console.log(joinExample.join(" "));

// So we are taking an array and joining up the words to create the string.
