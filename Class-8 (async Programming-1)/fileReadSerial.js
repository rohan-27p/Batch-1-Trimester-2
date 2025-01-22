const fileSystem = require("fs");

// read a file

console.log("start");

// Asynchronously but serial

fileSystem.readFile("f1.txt", cb1);



function cb1(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("This is file1 -> " + data);

    fileSystem.readFile("f2.txt", cb2);
  }
}
function cb2(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("This is file2 -> " + data);
    fileSystem.readFile("f3.txt", cb3);
  }
}

function cb3(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("This is file3 -> " + data);

  }
}

console.log("end");
