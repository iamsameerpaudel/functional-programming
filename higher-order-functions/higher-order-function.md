# Higher order functions

> These are the functions that either take one or more functions as input parameters or return a function as output.

> This helps to add functionalities in the execution of original function.

> For example:

```TS 

function fiftyToHundred(oneToFifty:()=>void):void{
oneTofity()
for(let i = 50;i<=100;i++){
console.log(i)
    }
}

function oneToFifty():void{
for(let i=0;i<50;i++){
console.log(i)
    }
}
```

> The function fiftyToHundred is a higher order function because it takes the function oneToFifty as an input parameter.

> Higher order functions make code cleaner and reusable.

> Some popular usecases are: map(), filter(), reduce(), forEach() etc. These all take function as input.
