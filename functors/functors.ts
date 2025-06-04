const arr = [1,2,3,4,5]
const newarr = arr.map((a)=>a*2)
console.log(newarr)
//Array as functor



//object as functor
const functor = (value)=> {
	return {
		map: (fn) => functor(fn(value)),
		valueOf: () => value,
		//Other methods here
	}
}

const fntr = functor('Sameer');
const uppr = fntr.map((val)=> val.toLowerCase() )
console.log(uppr.valueOf())


const fntr2 = functor([1,2,3,4,5,6,7,8,9])
const even = fntr2.map((val) => val.filter(i => i%2 == 0))
const odd =  fntr2.map((val) => val.filter(i => i%2 != 0))

console.log(even.valueOf())
console.log(odd.valueOf())
