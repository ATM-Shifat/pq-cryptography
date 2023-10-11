function matrixMultiplication(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;
  
    if (colsA !== matrixB.length) {
      throw new Error('Matrix dimensions are not suitable for multiplication');
    }
  
    const result = new Array(rowsA);
  
    for (let i = 0; i < rowsA; i++) {
      result[i] = new Array(colsB);
      for (let j = 0; j < colsB; j++) {
        result[i][j] = 0;
        for (let k = 0; k < colsA; k++) {
          result[i][j] += matrixA[i][k] * matrixB[k][j];
        }
        result[i][j] = Math.round(result[i][j])
      }
    }
  
    return result;
}

function matrixEqual(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;
  
    if (colsA !== matrixB.length) {
      throw new Error('Matrix dimensions are not suitable for multiplication');
    }
  
    const result = new Array(rowsA);
  
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
        if(matrixA[i][j] !== matrixB[i][j]){
            return false;
        }
      }
    }
  
    return true;
}

  
module.exports = {matrixMultiplication, matrixEqual}