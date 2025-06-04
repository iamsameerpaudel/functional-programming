
const Identity = value => ({
    flatMap: fn => fn(value),
    valueOf: () => value
})


Identity.of = val => Identity(val)

const upperCase = str => Identity.of(str.toUpperCase())
const lowerCase = str => Identity.of(str.toLowerCase())

let res = Identity("SaMeEr").flatMap(upperCase)
console.log(res.valueOf()) //SAMEER
res = res.flatMap(lowerCase)
console.log(res.valueOf()) //sameer

