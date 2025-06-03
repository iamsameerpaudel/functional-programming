# Immutability

> In TS primitives are not mutable, meaning once assignes the values cannot be modified.

> Primitives like numbers, strings etc are not mutable

> For example:

```TS

let string : string = 'sameer';

string += ' paudel';

console.log(string)

//Output: sameer paudel

```

> The output is 'sameer paudel' but the original string 'sameer' has not changes to the new string.

> what happens here is that a new copy of the string is created when we added ' paudel' to the string. instead of modifying the first string TS creates a copy with ' paudel' in it.

> so the ' paudel' was not added to 'sameer' instead new string 'sameer paudel' was created

> this happens because the variable doesn't hold the reference but just the value. so modification to the value without memory reference is not possible so a new value is created 

### Mutable 

> Array, Objects in TS are mutable

> when a variable holda an array, it holds the memory reference of the array and when any changes are made in the array the changes are made in the memory reference so creating a whole new instance is not needed.

> for example:

```TS

let array : number[] = [1,2,3]
array.push(4)

//new array = [1,2,3,4]

```

> Here a new copy is not created instead the new value is pushed in the same array.


## Concept of immutability in functional programming

> It says that we should not mutate an array or an object, instead we should create a copy with the intended changes

```TS
const cartProducts = [
  {
    "name": "Nintendo Switch",
    "price": 320.0,
    "currency": "EUR"
  },
  {
    "name": "Play station 4",
    "price": 350.0,
    "currency": "USD"
  }
]
cartProducts.forEach((product) => {
  const currencySign = product.currency === 'EUR' ? '€' : '$'
  product.price = `${product.price} ${currencyName}`
})
let total = 0
cartProducts.forEach((product) => {
  total += product.price
})
console.log(total)

//Output: 0320 €350 $
```
> This is not the intended result. 

> Mutating arrays or objects can bring about unintended results. It's best to not mutate them and rather create a copy with the changes we need

> The above code be made better:

```TS
const cartProducts = [
  {
    "name": "Nintendo Switch",
    "price": 320.0,
    "currency": "EUR"
  },
  {
    "name": "Play station 4",
    "price": 350.0,
    "currency": "USD"
  }
]
const productsWithCurrencySign = cartProducts.map((product) => {
  const currencyName = product.currency === 'EUR' ? 'euros' : 'dollars'
  return {
    ...product,
    priceWithCurrency: `${product.price} ${currencyName}`
  }
})
let total = 0
cartProducts.forEach((product) => {
  total += product.price
})
console.log(total)

//Output: 670
```

## Why?

> Mutability can cause unintended side effects because it makes changes directly in the memory reference.

> It can cause errors in change detection as since the values are not changing the variables may not change when making update to the array / object because the change is being made in the memory not in the variable 

> In library or frameworks like React where state management is crucial, this mutability can cause errors in state management as we need to know about the changes.
