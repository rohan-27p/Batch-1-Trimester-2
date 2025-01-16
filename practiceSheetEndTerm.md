### **Practice Sheet: Asynchronous Programming in JavaScript**

#### **Part 1: Conceptual Questions**  
1. What is asynchronous programming, and why is it important in JavaScript?  
2. Explain the difference between synchronous and asynchronous code execution.  
3. What is a callback function? Provide an example.  
4. What are some of the common problems associated with using callbacks extensively?  
5. What is a Promise in JavaScript? How does it improve code readability over callbacks?  
6. Explain the different states of a Promise and what they represent.  
7. How does the `.then()` method work with Promises?  
8. What is the purpose of the `.catch()` method in Promises?  
9. How does `async/await` simplify working with Promises?  
10. Can `async/await` be used without Promises? Why or why not?  

---

#### **Part 2: Coding Exercises**  

1. Write a function `fetchData(callback)` that simulates fetching data from an API. Use `setTimeout` to delay the execution for 2 seconds. The function should return either data or an error message via the callback.  

2. Convert the following callback-based function into one that uses Promises:  
   ```javascript
   function getUserData(callback) {
       setTimeout(() => {
           callback(null, { name: "John", age: 25 });
       }, 1000);
   }
   ```  

3. Write a Promise-based function `getTemperature(city)` that resolves with a simulated temperature for the given city after 2 seconds.  

4. Given the following code snippet, fix it using `.catch()` to handle the error:  
   ```javascript
   fetchWeatherData()
       .then(data => console.log(data))
       .then(() => console.log("Done"));
   ```  

5. Use `async/await` to refactor the following code:  
   ```javascript
   function fetchUser() {
       return new Promise(resolve => {
           setTimeout(() => resolve({ name: "Alice" }), 1000);
       });
   }
   fetchUser().then(user => console.log(user));
   ```  

6. Create an `async` function that fetches user data and weather data sequentially using the following mock functions:  
   ```javascript
   function getUser() {
       return new Promise(resolve => setTimeout(() => resolve("User data"), 1000));
   }
   function getWeather() {
       return new Promise(resolve => setTimeout(() => resolve("Weather data"), 1000));
   }
   ```  

7. Handle multiple Promises using `Promise.all` to fetch details of three users simultaneously.  

8. Rewrite the following code to handle errors gracefully using `try...catch`:  
   ```javascript
   async function fetchUserData() {
       let response = await fetch("/user");
       let data = await response.json();
       console.log(data);
   }
   ```  

9. Write an `async` function that throws an error intentionally and handles it using `try...catch`.  

10. Create a chain of Promises that simulates a series of dependent asynchronous operations:  
    - Fetch user profile  
    - Fetch user settings based on profile  
    - Fetch recommendations based on settings  

---

#### **Part 3: Debugging and Logical Thinking**  

1. What happens if you forget to use `await` inside an `async` function? Provide an example.  
2. Identify the issue with the following code and correct it:  
   ```javascript
   async function fetchData() {
       setTimeout(() => {
           return "Data";
       }, 1000);
   }
   let data = fetchData();
   console.log(data);
   ```  

3. Why does the following code result in a rejected Promise, and how can you fix it?  
   ```javascript
   function fetchItems() {
       return new Promise((resolve, reject) => {
           setTimeout(() => reject("Error fetching items"), 2000);
       });
   }
   fetchItems().then(items => console.log(items));
   ```  

4. Rewrite the following function to use `Promise.allSettled`:  
   ```javascript
   const promise1 = Promise.resolve("Data 1");
   const promise2 = Promise.reject("Error in Data 2");
   const promise3 = Promise.resolve("Data 3");
   Promise.all([promise1, promise2, promise3]).then(results => console.log(results));
   ```  

5. Consider the following code. Will it work as intended? Explain why or why not:  
   ```javascript
   async function processData() {
       const data = fetch("/data");
       console.log(await data.json());
   }
   processData();
   ```  

6. Write an `async` function that demonstrates the usage of `Promise.race` with two Promises: one that resolves quickly and another that takes longer.  

7. What is the difference between `Promise.all` and `Promise.race`? Provide an example for each.  

---

#### **Challenge Question**  
1. Create a small program that simulates a "Retry Mechanism" using Promises. The function should attempt to fetch data from a mocked API up to 3 times if it encounters an error.  

---  

