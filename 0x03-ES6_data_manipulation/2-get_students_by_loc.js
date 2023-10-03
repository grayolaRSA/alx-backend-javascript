export default function getStudentsByLocation(students, city) {
  const filterOutput = students.filter((student) => student.location === city);

  return filterOutput;
}
