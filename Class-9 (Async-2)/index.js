function prepareIngredients(callback) {
    setTimeout(function () {
      console.log("Ingredients Prepared");
      callback();
    }, 2000);
  }
  
  function cookDish(callback) {
    setTimeout(function () {
      console.log("Dish cooked");
      callback();
    }, 1000);
  }
  
  function serveDish(callback) {
    setTimeout(function () {
      console.log("Dish Served");
      callback();
    }, 500);
  }
  
  function cleanUp(callback) {
    setTimeout(function () {
      console.log("Table cleaned");
      callback();
    }, 200);
  }
  
  function provideFeedback() {
    setTimeout(function () {
      console.log("feedback recieved");
    });
  }