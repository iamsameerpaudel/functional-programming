const generateMessage = (occasion:string) => (year:number,month:number,day:number) => {
console.log(`Your ${occasion} is on: ${year}/${month}/${day}`)
}

const Dates = [
	{
		Occasion:"Wedding",
		Year: 2026,
		Month: 12,
		Day: 20
	},
	{
		Occasion: "Birthday",
		Year: 2026,
		Month: 1,
		Day: 22
	},
	{
		Occasion: "Anniversary",
		Year: 2027,
		Month: 7,
		Day: 30
	},
	{
		Occasion: "Exam",
		Year: 2026,
		Month: 6,
		Day: 10 
	}
]

Dates.forEach(date =>{
	const message = generateMessage(date.Occasion)
	message(date.Year,date.Month,date.Day)
})
