# Curried functions

> These are the functions that take multiple parameters but one at a time.

> They are created via higher order function.

> Basically curried functions are those which return a sequence of functions

> For example:

```TS

const generateGreeting = (ocassion) => (relationship) => (name) => {
  console.log(`My dear ${relationship} ${name}. Hope you have a great ${ocassion}`)
}

```

> Here the generateGreeting function takes a string as argument and returns a function that also takes a string as argument and again returns a function that also takes a string as argument and logs a string.

> This process of taking arguments and returning functions sequentially is called currying.
