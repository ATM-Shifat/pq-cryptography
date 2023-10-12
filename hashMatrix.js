class HashMatrix{

  constructor({sha256Hash = "", matrix = []}){

    if(sha256Hash.length === 64 && matrix.length === 0){
      this.sha256Hash = sha256Hash
      this.matrix = this.sha256ToMatrix(sha256Hash)
    }
    else if(matrix.length === 8 && sha256Hash.length === 0){
      this.sha256Hash = this.matrixToSha256(matrix)
      this.matrix = matrix
    }
    else if(matrix.length === 0 && sha256Hash.length === 0){
      this.sha256Hash = sha256Hash
      this.matrix = matrix
    }
    else {
      throw new Error("Invalid initialization of value")
    }
    
  }

  sha256ToMatrix(sha256Hash) {
    // Ensure the input is a valid SHA-256 hash (64 hexadecimal characters).
    if (!/^[0-9a-fA-F]{64}$/.test(sha256Hash)) {
      throw new Error("Invalid SHA-256 hash format.");
    }
    
    const matrix = Array.from({length: 8}, () => Array(8).fill(0));
    
    // Convert each hexadecimal character to a 4-bit binary string and fill the matrix.
    for (let i = 0; i < sha256Hash.length; i++) {
      const hexChar = sha256Hash[i];
      const hexValue = parseInt(hexChar, 16);
      matrix[Math.floor(i/8)][i%8] = hexValue;
    }
    
    return matrix;
  }
  
  matrixToSha256(matrix) {
    // Ensure that the input is a valid 8x8 matrix.
    if (!matrix || !Array.isArray(matrix) || matrix.length !== 8) {
      throw new Error("Invalid matrix format. It should be an 8x8 matrix.");
    }
  
    // Initialize an empty string to store the hexadecimal representation of the hash.
    let sha256Hash = "";
  
    // Convert the binary values in the matrix to hexadecimal characters.
    for (let i = 0; i < 8; i++) {
      if (matrix[i].length !== 8) {
        throw new Error("Invalid matrix format. Each row should have 8 elements.");
      }
      for(let j = 0; j < 8; j++) {
        sha256Hash += matrix[i][j].toString(16);
      }
    }
    
    console.log(sha256Hash)
    console.log(sha256Hash.length)
    // Ensure the resulting string is 64 characters long.
    if (sha256Hash.length !== 64) {
      throw new Error("Invalid matrix format. The resulting hash should have 64 characters.");
    }
  
    return sha256Hash;
  }
  

  matrixMultiplication( matrixB) {
    const rowsA = this.matrix.length;
    const colsA = this.matrix[0].length;
    const colsB = matrixB.matrix[0].length;
  
    if (colsA !== matrixB.matrix.length) {
      throw new Error('Matrix dimensions are not suitable for multiplication');
    }
  
    const result = new Array(rowsA);
  
    for (let i = 0; i < rowsA; i++) {
      result[i] = new Array(colsB);
      for (let j = 0; j < colsB; j++) {
        result[i][j] = 0;
        for (let k = 0; k < colsA; k++) {
          result[i][j] += this.matrix[i][k] * matrixB.matrix[k][j];
        }
        result[i][j] = Math.round(result[i][j])
      }
    }
    
    console.log(result)

    resultMatrix = new HashMatrix({matrix: result})

    return resultMatrix
  }


  matrixEqual(matrixB) {
      const rowsA = this.matrix.length;
      const colsA = this.matrix[0].length;
      const colsB = matrixB.matrix[0].length;
    
      if (colsA !== matrixB.matrix.length) {
        throw new Error('Matrix dimensions are not suitable for multiplication');
      }
    
      for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
          if(this.matrix[i][j] !== matrixB.matrix[i][j]){
              return false;
          }
        }
      }
    
      return true;
  }

  

}

  
module.exports = {HashMatrix}