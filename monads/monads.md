# Monads

> Monads are special type of functors that provide a flatmap.

> Monads not only allows to apply a function but also chain operations that return the same kind of container 

> Flatmap extracts value from the wrapped context.

> Monads are useful in composing type lifting functions.

> For example:

```TS
const Identity = value => ({
    flatMap: fn => fn(value),
    valueOf: () => value
})


Identity.of = val => Identity(val)

const upperCase = str => Identity.of(str.toUpperCase())
const lowerCase = str => Identity.of(str.toLowerCase())

let res = Identity("SaMeEr").flatMap(upperCase) //type Liting function composition
console.log(res.valueOf()) //SAMEER
res = res.flatMap(lowerCase) // type lifting function composition
console.log(res.valueOf()) //sameer

```
> Here uppercase and lowerCase are typpelifting functions, monads allow to compose them

> This solves a major issue of functors of not being able to compose typeLifting functions.
