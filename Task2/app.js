class SpecialArray {
  constructor(array) {
    this.array = array;
  }

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

// Case-1:
const array1 = new SpecialArray(["D", "D", "D", "4", "4", "A", "R"]);
console.log(array1.tripleSequences());

// Case-2:
const array2 = new SpecialArray(["5", "5", "5", "0", "7", "E", "E", "E"]);
console.log(array2.tripleSequences());

// Case-3:
const array3 = new SpecialArray(["T", "T", "T", "0", "G", "K", "K", "K", "K"]);
console.log(array3.tripleSequences());

// Case-4:
const array4 = new SpecialArray(["B", "4", "4", "F", "F", "2"]);
console.log(array4.tripleSequences());
