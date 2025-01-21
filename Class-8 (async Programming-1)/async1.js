console.log("Start");

function test1() {
  console.log("I am test 1");
}

function test3() {
  console.log("I am test 3");
}

// test1()

setTimeout(test1, 2000);
setTimeout(test3, 2000);

function test2() {
  console.log("I am test 2");
}

console.log("End");

test2();
