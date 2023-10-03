import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(students, city, newGrades) {
  // Get students in the specified city
  const studentsInCity = getStudentsByLocation(students, city);

  // Map through the students to update their grades
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
