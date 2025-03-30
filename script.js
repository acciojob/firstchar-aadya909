function firstChar(text) {
  for (let char of text) {
    if (char !== ' ') {
      return char;
    }
  }
  return '';
}

// Test cases
console.log(firstChar(' Rosa Parks ')); // 'R'
console.log(firstChar(' Hello World ')); // 'H'
console.log(firstChar(' ')); // ''
console.log(firstChar('')); // ''

// Do not change the code below
// Uncomment the following line to show the prompt popup
 const text = prompt("Enter text:");
alert(firstChar(text));

