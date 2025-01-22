// function prepareIngredients(callback) {
//   setTimeout(function () {
//     console.log("Ingredients Prepared");
//     callback();
//   }, 2000);
// }

// function cookDish(callback) {
//     setTimeout(function () {
//       console.log("Dish cooked");
//       callback();
//     }, 1000);
//   }

//   function serveDish(callback) {
//     setTimeout(function () {
//       console.log("Dish Served");
//       callback();
//     }, 500);
//   }

//   function cleanUp(callback) {
//     setTimeout(function () {
//       console.log("Table cleaned");
//       callback()
//     }, 200);
//   }

function prepareIngredients() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Ingredients Prepared");
    }, 2000);

  });
}

function cookdish() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Dish Prepared");
    }, 2000);


  });
}

function serveDish() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Dish Served");
    }, 2000);

  
  });
}

function cleanUp() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Table Cleaned");
    }, 2000);

   
  });
}

function provideFeedback(callback) {
  setTimeout(function () {
    console.log("Table cleaned");
    callback();
  }, 1500);
}

function leaveTable() {
  setTimeout(function () {
    console.log("Table cleaned");
  }, 1000);
}

// prepareIngredients(function () {
//   cookDish(function () {
//     serveDish(function () {
//       cleanUp(function () {
//         provideFeedback(function () {
//           leaveTable();
//         });
//       });
//     });
//   });
// });

// Promise Chaining

prepareIngredients().then(function(ingredients){
  console.log(ingredients)
  return cookdish()
}).then(function(cooked){
  console.log(cooked)
  return serveDish()
}).then(function(dishServed){
   console.log(dishServed)
   return cleanUp()
}).then(function(cleaned){
  console.log(cleaned)
}).catch(function(err){
    console.log(err)
}).finally(function(){
    console.log('process done')
})
