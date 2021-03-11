// Pair Programming w/ Ievgen, Violet, Caden

const transpose = function(matrix) {
    let newMatrix = [];
  
    for (let i = 0; i < matrix[0].length; i++) {
      newMatrix.push([]);
    }
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        newMatrix[j].push(matrix[i][j]);
      }
    }
    return newMatrix;
  };
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    // console.log(horizontalJoin);
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    // console.log(verticalJoin);
    for (let c of verticalJoin) {
        if (c.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch