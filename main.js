const { matrixMultiplication, matrixEqual } = require("./matrixOperation");
const {sha256ToMatrix, matrixToSha256} = require("./sha256Matrix");
const math = require("mathjs");


const sha256Hash = "6e00cd562cc2d88e238dfb81d9439de7ec843ee9d0c9879d549cb1436786f975";
const matrix = sha256ToMatrix(sha256Hash);
const key = "66859b7ade4e68cb65041b88a7ad5214df71cdcfa27dff2efcc80a81e9ba5fa0"

const keyMatrix = sha256ToMatrix(key);
console.log(matrixToSha256(matrix))
const cipher = matrixMultiplication(keyMatrix, matrix)
const message = matrixMultiplication(math.inv(keyMatrix), cipher)

console.log(matrixEqual(matrix, message))
console.log(matrixToSha256(message) === sha256Hash)
