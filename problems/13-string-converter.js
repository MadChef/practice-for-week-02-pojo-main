/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  // Your code here
  let output = [];
  for (let i = 0; i < string.length; i++){
    if (output[string[i]] == undefined){
      output[string[i]] = 1;
    }else{
     // console.log([string[i]] + " exists " +output[string[i]]);
      output[string[i]] = output[string[i]] + 1;
   //   console.log(output[string[i]]);
    }
  }
  //  console.log(output);
  return output;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;
