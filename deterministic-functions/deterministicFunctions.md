# Deterministic functions

> These are the functions that provide the same output given the input is same. No matter how many times the function is called it always provides the same output.

> For example:

```TS

function addTwoNumbers(a:number,b:number):number{
return a+b
}

```
> This function will always provide the same result no matter how many times it is repeated. This is a deterministic function.

> Deterministic functions makes the software's behaviour more predictable and the chances of bugs are minimized and also makes it easy to find errors.

# Non-deterministic functions

> We cannot use deterministic functions everywhere though, there are cases that the unpredictability is necessary, we can make use of non-deterministic functions in those cases.

> For example:

```TS

function randomNumberGenerator():number{

    return Math.random();

}

```

> This function will always output a random number. It is not predictable. 

> Carelessly using these functions can cause any errors and bugs. 

> But they can be useful in some scenarios i.e. generating PIN, ID, Passowrds etc. 

