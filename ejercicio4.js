function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
  return -1
}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

console.log(findArrayIndex(mainCharacters, 'Leia')) // 1
console.log(findArrayIndex(mainCharacters, 'Chewbacca')) // 3
console.log(findArrayIndex(mainCharacters, 'Yoda')) // -1
console.log(findArrayIndex(mainCharacters, 'Anakin')) // 5
console.log(findArrayIndex(mainCharacters, 'Rey')) // 4
