function sha256ToMatrix(sha256Hash) {
  // Ensure the input is a valid SHA-256 hash (64 hexadecimal characters).
  if (!/^[0-9a-fA-F]{64}$/.test(sha256Hash)) {
    throw new Error("Invalid SHA-256 hash format.");
  }
  
  // Initialize an 8x8 matrix as an array of arrays.
  const matrix = Array.from({length: 8}, () => Array(8).fill(0));
  
  // Convert each hexadecimal character to a 4-bit binary string and fill the matrix.
  for (let i = 0; i < sha256Hash.length; i++) {
    const hexChar = sha256Hash[i];
    const hexValue = parseInt(hexChar, 16);
    matrix[Math.floor(i/8)][i%8] = hexValue;
  }
  
  return matrix;
}

function matrixToSha256(matrix) {
  // Ensure that the input is a valid 8x8 matrix.
  if (!matrix || !Array.isArray(matrix) || matrix.length !== 8) {
    throw new Error("Invalid matrix format. It should be an 8x8 matrix.");
  }

  // Initialize an empty string to store the hexadecimal representation of the hash.
  let sha256Hash = '';

  // Convert the binary values in the matrix to hexadecimal characters.
  for (let i = 0; i < 8; i++) {
    if (matrix[i].length !== 8) {
      throw new Error("Invalid matrix format. Each row should have 8 elements.");
    }
    for(let j = 0; j < 8; j++) {
      sha256Hash += matrix[i][j].toString(16);
    }
  }

  // Ensure the resulting string is 64 characters long.
  // if (sha256Hash.length !== 64) {
  //   throw new Error("Invalid matrix format. The resulting hash should have 64 characters.");
  // }

  return sha256Hash;
}

module.exports = {sha256ToMatrix, matrixToSha256}