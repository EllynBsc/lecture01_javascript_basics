const capitalize = (word) => {
  // first part of the word should be capitalized/uppercase
  const firstLetter = word[0].toUpperCase();
  // console.log(firstLetter);
  // second part of the word should be lowercase
  const remainder = word.substring(1).toLowerCase();
  // return the word capitalized
  return `${firsLetter}${remainder}`
  // return firsLetter + remainder

}

console.log(capitalize('humBeLINE'));


// I/O
// INPUT : 'DANIEL', 'martin', 'EliSA'
// OUTPUT: 'Daniel', 'Martin', 'Elisa'
