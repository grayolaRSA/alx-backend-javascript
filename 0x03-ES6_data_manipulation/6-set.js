export default function setFromArray(Array) {
  const mySet = new Set();

  for (const element of Array) {
    mySet.add(element);
  }

  return mySet;
}
