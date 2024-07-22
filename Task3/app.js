class SpecialArray {
  constructor(array) {
    this.array = array;
  }

  /*-----------------------------------Task-3 Functions----------------------------------- */

  areDiagonalsEqual() {
    let rightDiagonal = 0;
    let leftDiagonal = 0;
    for (let i = 0, j = this.array[i].length - 1; i < this.array.length; i++, j--) {
      leftDiagonal += this.array[i][i];
      rightDiagonal += this.array[j][i];
    }
    return leftDiagonal === rightDiagonal;
  }

  /*-----------------------------------Task-2 Functions----------------------------------- */

  // Method1: Solved using for loops only
  tripleSequences() {
    const sequences = [];
    for (let i = 0; i <= this.array.length - 3; i++) {
      this.checkNextThreeElements(i, sequences);
    }
    if (sequences.length === 0) return -1;
    return sequences;
  }
  checkNextThreeElements(index, arr) {
    let string = "" + this.array[index];
    for (let i = index; i < index + 2; i++) {
      if (this.array[i] === this.array[i + 1]) string += this.array[i + 1];
      if (string.length === 3) arr.push(string);
    }
  }

  // Method2: Solved using built-in functions and RegExp object
  tripleSequencesMethod2() {
    let string = this.array.join("");
    let sequences = [];
    const pattern = new RegExp("\\b([a-zA-Z0-9])\\1\\1+\\b");

    for (let i = 0; i <= string.length - 3; i++) {
      const threeElements = string[i] + string[i + 1] + string[i + 2];
      if (pattern.test(threeElements)) sequences.push(threeElements);
    }
    if (sequences.length === 0) return -1;
    return sequences;
  }
  /*-----------------------------------Task-1 Functions----------------------------------- */
  equilibriumIndices() {
    let indices = [];
    for (let i = 0; i < this.array.length; i++) {
      let rightSum = 0;
      let leftSum = 0;

      //Calculate right sum
      for (let j = i + 1; j < this.array.length; j++) {
        rightSum += this.array[j];
      }
      //Calculate left sum
      for (let j = i - 1; j >= 0; j--) {
        leftSum += this.array[j];
      }
      if (rightSum === leftSum) {
        indices.push(i);
      }
    }
    if (indices.length === 0) return -1;
    return indices;
  }
}

// Case-1: 10, 12
const array1 = new SpecialArray([
  [2, 2, 3, 5],
  [1, 1, 3, 4],
  [1, 4, 3, 4],
  [0, 2, 3, 4],
]);
console.log(array1.areDiagonalsEqual());

// Case-2: 5, 5
const array2 = new SpecialArray([
  [1, 2, 0, 0],
  [1, 1, 2, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 0],
]);
console.log(array2.areDiagonalsEqual());
