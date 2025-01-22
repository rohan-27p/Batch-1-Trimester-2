const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let isHeads = Math.random() > 0.5;
    if (isHeads) {
      resolve("Heads , Won the Toss");
    } else {
      reject("Tails , Lost the Toss");
    }
  }, 2000);
});

p1.then(function (resolveData) {
  console.log(resolveData);
});

p1.catch(function (rejectData) {
  console.log(rejectData);
});
