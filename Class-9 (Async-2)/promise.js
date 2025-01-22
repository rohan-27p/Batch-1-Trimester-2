const p1 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isHeads = Math.random() >0;
      if (isHeads) {
        resolve("Heads , Won the Toss 1");
      } else {
        reject("Tails , Lost the Toss 1");
      }
    }, 2000);
  });
};

const p2 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isHeads = Math.random() > 0;
      if (isHeads) {
        resolve("Heads , Won the Toss 2");
      } else {
        reject("Tails , Lost the Toss 2");
      }
    }, 2000);
  });
};
const p3 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isHeads = Math.random() > 0;
      if (isHeads) {
        resolve("Heads , Won the Toss 3");
      } else {
        reject("Tails , Lost the Toss 3");
      }
    }, 2000);
  });
};

p1().then(function (resolveData) {
  console.log(resolveData);
  return p2()
}).then(function(resolveDataP2){
    console.log(resolveDataP2)
    return p3()
}).then(function(resolveDataP3){
    console.log(resolveDataP3)
}).catch(function (rejectData) {
    console.log("Catch-> " + rejectData);
  })
  .finally(function () {
    console.log("promise settled");
  });
