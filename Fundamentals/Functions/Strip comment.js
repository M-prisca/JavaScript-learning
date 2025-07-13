// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
//  Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(text, markers) {
  return text
    .split('\n') // Split the input into lines
    .map(line => {
      // For each line, find the position of the first marker (if any)
      for (let marker of markers) {
        const index = line.indexOf(marker);
        if (index !== -1) {
          line = line.slice(0, index); // Cut the line at the marker
        }
      }
      return line.trimEnd(); // Remove any trailing whitespace
    })
    .join('\n'); // Join the lines back together
}

var result = solution(
  "apples, pears # and bananas\ngrapes\nbananas !apples",
  ["#", "!"]
);

console.log(result);
// Output:
// apples, pears
// grapes
// bananas
