const fileSystem = require('fs')

// read a file

const data= fileSystem.readFileSync('f1.txt')

console.log("This is file Data -> " + data)

