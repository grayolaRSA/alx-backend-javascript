export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const idMap = array.map((student) => student.id);

  return idMap;
}
