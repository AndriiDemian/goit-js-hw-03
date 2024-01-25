function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray);
  
    if (maxLength > 0) {
      return newArray.slice(0, maxLength);
    } else {
      return [];
    }
}



// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   return maxLength > 0 ? newArray.slice(0, maxLength) : [];
// }


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
