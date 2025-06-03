# Function Composition in TS

> Function composition is the process of combining multiple functions to work together.

> suppose there is a function that takes a number as input and returns number as output, and another function that takes number as input and provides string as output. 

> Here we could combint those two functions. We can send the output of function1 as input to function2 and get result.

> for example: 

```TS
const increment = (input: number) : number =>{
	return input+1
}
const numberToString = (input:number):string => {
return input.toString()
}
const increment_then_toString = numberToString(increment(5)) 
console.log(increment_then_toString)

//output: '6'
```

> Here we are compositing the increment and the toString functions to work together. This could be done because the output given by the increment function was able to be passed as input to the toString function.

> We can generalise this even more, we can create a generic function that returns us a composite function

> for example:
```TS
const increment = (input: number) : number =>{
	return input+1
}
const numberToString = (input:number):string => {
return input.toString()
}
const compose = (x: any, y:any):any =>{
return (z:number):string => { return y(x(z))}
}
const increment_then_toString = compose(increment, numberToString)
console.log(increment_then_toString(5)) //Output: '6'
console.log(numberToString(increment(5))) //Output: '6'
```

> Here, the compose function is the generic function that returns us a composite function. 

> We can now use this generic function to compose more functions as well.

> functions being able to be composited like this is a very powerful feature of functional programming.
