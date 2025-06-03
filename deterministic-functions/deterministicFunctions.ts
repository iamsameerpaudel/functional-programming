const calculateStudentReport = (marks:number[]):{total:number,average:number,grade:string} => {
  const total:number = marks.reduce((sum:number, mark:number):number => sum + mark, 0)
  const average:number = total / marks.length

  let grade:string = ''
  if (average >= 90) grade = 'A+'
  else if (average >= 80) grade = 'A'
  else if (average >= 70) grade = 'B'
  else if (average >= 60) grade = 'C'
  else if (average >= 50) grade = 'D'
  else grade = 'F'

  return {
    total,
    average,
    grade
  }
}
const result:{total:number,average:number,grade:string} = calculateStudentReport([85, 90, 78, 92])
console.log(result)
