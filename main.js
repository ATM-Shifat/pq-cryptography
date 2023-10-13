const { MatrixOperation } = require("./matrix-operations");


const matrixOperation = new MatrixOperation()

const sha256Hash = "6e00cd562cc2d88e238dfb81d9439de7ec843ee9d0c9879d549cb1436786f975";
const matrix = matrixOperation.sha256ToMatrix(sha256Hash)

const key = "66859b7ade4e68cb65041b88a7ad5214df71cdcfa27dff2efcc80a81e9ba5fa0"
const keyMatrix = matrixOperation.sha256ToMatrix(key)
const cipher = matrixOperation.matrixMultiplication(keyMatrix, matrix)

const keyMatrixInv = matrixOperation.matrixPower(keyMatrix, -1)
const message = matrixOperation.matrixMultiplication(keyMatrixInv, cipher)

console.log(matrixOperation.matrixEqual(matrix, message))
console.log(matrixOperation.matrixToSha256(message) === sha256Hash)
