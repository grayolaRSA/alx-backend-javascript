export default function getStudentsByLocation(students, city) {
  const filterOutput = students.filter((student) => student.city === city);
  return filterOutput;
}
