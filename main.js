const { HashMatrix } = require("./hashMatrix");
//const {sha256ToMatrix, matrixToSha256} = require("./sha256Matrix");
const math = require("mathjs");



// const sha256Hash = "6e00cd562cc2d88e238dfb81d9439de7ec843ee9d0c9879d549cb1436786f975";

// const hashMatrix1 = new HashMatrix({sha256Hash: sha256Hash});
// const hashMatrix2 = new HashMatrix({matrix: hashMatrix1.matrix})

// const hashMatrix3 = hashMatrix1.matrixMultiplication(hashMatrix2)

// console.log(hashMatrix3.sha256Hash)

const sha256Hash = "6e00cd562cc2d88e238dfb81d9439de7ec843ee9d0c9879d549cb1436786f975";
const matrix = new HashMatrix({sha256Hash: sha256Hash});

const key = "66859b7ade4e68cb65041b88a7ad5214df71cdcfa27dff2efcc80a81e9ba5fa0"
const keyMatrix = new HashMatrix({sha256Hash: key});

const cipher = keyMatrix.matrixMultiplication(matrix)
// const message = keyMatrix.matrixMultiplication(cipher)

// console.log(matrixOperation.matrixEqual(matrix, message))
// console.log(matrixOperation.matrixToSha256(message) === sha256Hash)
