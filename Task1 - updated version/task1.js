class SpecialArray {
  constructor(array) {
    this.array = array;
  }

  getEquilibriumPointIndices() {
    let indices = [];
    for (let i = 1; i < this.array.length - 1; i++) {
      let rightSum = 0;
      let leftSum = 0;

      // Calculate right sum
      for (let j = i + 1; j < this.array.length; j++) {
        rightSum += this.array[j];
      }
      // Calculate left sum
      for (let j = i - 1; j >= 0; j--) {
        leftSum += this.array[j];
      }
      if (rightSum === leftSum) {
        indices.push(i);
      }
    }
    if (indices.length !== 0) return indices;
    else return -1;
  }
}

// Case Test1: Output Should be: [2].
let specialArray1 = new SpecialArray([5, 1, 4, 6]);
let eqIndices1 = specialArray1.getEquilibriumPointIndices();
console.log(eqIndices1);

// Case Test2: Output Should be: [1, 4].
let specialArray2 = new SpecialArray([1, -3, 0, 4, -5, 4, 0, 1, -2, -1]);
let eqIndices2 = specialArray2.getEquilibriumPointIndices();
console.log(eqIndices2);

// Case Test3: Output Should be: [1, 4].
let specialArray3 = new SpecialArray([1, -3, 0, 4, -5, 4, 0, 1, -2, -1]);
let eqIndices3 = specialArray3.getEquilibriumPointIndices();
console.log(eqIndices3);

// Case Test4: Output Should be: -1, because there are no equilibrium indices.
let specialArray4 = new SpecialArray([1, 4, 6, 9, 0, 2]);
let eqIndices4 = specialArray4.getEquilibriumPointIndices();
console.log(eqIndices4);
