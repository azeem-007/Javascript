function gradeStudent(marks) {
    let grade;

    if (marks > 90) {
        grade = 'A';
    } else if (marks > 70) {
        grade = 'B';
    } else if (marks > 50) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    return grade;
}

// Example usage:
let studentMarks = 85;
let studentGrade = gradeStudent(studentMarks);
console.log(`Student's grade: ${studentGrade}`);
