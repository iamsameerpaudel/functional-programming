var calculateStudentReport = function (marks) {
    var total = marks.reduce(function (sum, mark) { return sum + mark; }, 0);
    var average = total / marks.length;
    var grade = '';
    if (average >= 90)
        grade = 'A+';
    else if (average >= 80)
        grade = 'A';
    else if (average >= 70)
        grade = 'B';
    else if (average >= 60)
        grade = 'C';
    else if (average >= 50)
        grade = 'D';
    else
        grade = 'F';
    return {
        total: total,
        average: average,
        grade: grade
    };
};
var result = calculateStudentReport([85, 90, 78, 92]);
console.log(result);
