const tomHeight = 0.2286
const jerryHeight = .1

const tomMass = 3.62874
const jerryMass = 0.045

let tomBmi = tomMass/(tomHeight * tomHeight)
let jerryBmi = jerryMass/(jerryHeight * jerryHeight)

console.log(tomBmi)
console.log(jerryBmi)

let tomHigherBmi = true;

console.log(`Is Tom's BMI higher than Jerry's? ${tomHigherBmi}`)