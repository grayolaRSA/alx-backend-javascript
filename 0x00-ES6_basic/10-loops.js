export default function appendToEachArrayValue(array, appendString) {
   const newArray = [];
   
    for (let x of array) {
newArray.push(appendString + x);
    }
  
   return newArray;
  }