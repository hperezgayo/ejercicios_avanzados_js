function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1
}

console.log(`Tirada de un dado de 6 caras: ${rollDice(6)}`)
console.log(`Tirada de un dado de 12 caras: ${rollDice(12)}`)
console.log(`Tirada de un dado de 20 caras: ${rollDice(20)}`)
console.log(`Tirada de un dado de 100 caras: ${rollDice(100)}`)
