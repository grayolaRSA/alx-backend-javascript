export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city);

  const updatedStudents = studentsInCity.map((student) => {
    const newGrade = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
    if (newGrade) {
      return {
        ...student,
        grade: newGrade.grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });

  return updatedStudents;
}
