function fiftyToHundred(oneToFifty:() => void):void{
	oneToFifty()
	for(let i=50;i<=100;i++){
		console.log(i)
	}
}

function oneToFifty():void{
	for(let i=1;i<50;i++){
		console.log(i)
	}
}

fiftyToHundred(oneToFifty)
