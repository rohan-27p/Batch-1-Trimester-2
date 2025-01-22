const fileSystem = require('fs')

// read a file

console.log('start')

// This is synchronous

//  const data= fileSystem.readFileSync('f1.txt')

// console.log("This is file Data -> " + data)

// Asynchronously

fileSystem.readFile('f1.txt' , function(err , data){
    if(err){
        console.log(err)
    }
    else{
        console.log("This is file1 -> "+ data)
    }
})

fileSystem.readFile('f2.txt' , function(err , data){
    if(err){
        console.log(err)
    }
    else{
        console.log("This is file2 -> "+ data)
    }
})


fileSystem.readFile('f3.txt' , function(err , data){
    if(err){
        console.log(err)
    }
    else{
        console.log("This is file3 -> "+ data)
    }
})




console.log("end")



