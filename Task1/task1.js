class ArrayOperations {
  constructor() {}

  getNiceIndices(array) {
    let result = [];
    for (let index = 1; index < array.length - 1; index++) {
      let elementBefore = array[index - 1];
      let elementAfter = array[index + 1];
      if (elementBefore === elementAfter) result.push(index);
    }
    return result;
  }
}

let object = new ArrayOperations();

let result = object.getNiceIndices([1, 4, 1, 3, 1, 2]);

console.log(result); // Output Should be: [1, 3]
