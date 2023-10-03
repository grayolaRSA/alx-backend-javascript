import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  const sum = getListStudentIds(students)
    .reduce((accumulator, student) => accumulator + student, 0);
  return sum;
}
