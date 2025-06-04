# Functors

> Functors are the abstractions that wraps a value in it's context and provides a way to map over the value. 

> This mapping applies a function to the value and returns value of the same context.

> For example:

```TS

const Identity = value => ({
  map: fn => Identity(fn(value)),
  valueOf: () => value
})

```
> Identity here is a abstract context. It takes a value and returns an object wrapped with it's context. It provids a map method and a vlueOf method to the value.

> The map method takes a function as argument and executes the function with the value as parameter and finally returns a object wrapped by the same Identity so that the returned value also has the same context.

> Other methods also can be provided to the identity context.

> This facilitates function composition and function chaining.

```TS
const double = (x) => {
  return x * 2
}

const plusTen = (x) => {
  return x + 10
}

const num = 10
const doubledPlus10 = Identity(num) //The argument 10 now has the wrapper of the Identity. It has the map and valueOf method.
  .map(double)  // Since doubledPlus10 also now has the same context map can be used again
  .map(plusTen) //the same here again the same context is returned and map can be used again

console.log(doubledPlus10.valueOf()) // Output: 30

```

