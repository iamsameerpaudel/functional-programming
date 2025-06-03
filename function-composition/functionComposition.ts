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
console.log(increment_then_toString(5))

console.log(numberToString(increment(5)))
