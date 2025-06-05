import readline from "readline";
import { fromEvent } from "rxjs";
import { switchMap } from "rxjs/operators";

const db: string[] = ['sameer', 'strange', 'steve', 'tony', 'peter', 'william', 'stephen', 'peter']
const fakeSearch = (query: string): Promise<string[]> => {
	return new Promise(resolve => {
		resolve(db.filter(item => item.toLowerCase().startsWith(query.toLowerCase())))
	})
}
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
console.log("Type to search: ");
fromEvent<string>(rl, 'line').pipe(
	switchMap(query => fakeSearch(query.trim()))
).subscribe(results => {
	console.clear();
	console.log('Suggestions:');
	results.length
		? results.forEach(item => console.log(item))
		: console.log('Nothing found')
	console.log('\nKeep typing');
});
