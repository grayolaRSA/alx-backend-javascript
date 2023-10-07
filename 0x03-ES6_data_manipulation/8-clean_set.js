export default function (set, startString) {
  if (startString === '') {
    return ' ';
  }

  const filteredValues = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length));

  return filteredValues.join('-');
}
