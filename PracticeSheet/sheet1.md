**DOM Manipulation Practice Sheet**

---

### **Section 1: Easy (10 Questions)**
These questions are designed to build a strong foundation in DOM manipulation.

1. **Selecting Elements**  
   - Write a function to select an element with the ID `header-title` and change its text content to "Welcome to the DOM Practice!"

2. **Change Background Color**  
   - Select all `<li>` elements on the page and change their background color to light blue.

3. **Add New Element**  
   - Write a function that creates a new `<p>` element with the text "This is a new paragraph" and appends it to the `<body>`.

4. **Modify Styles**  
   - Select the first `<h1>` tag on the page and set its font size to `36px`.

5. **Change Image Source**  
   - Change the `src` of an image with the ID `profile-pic` to a new URL: `https://via.placeholder.com/150`.

6. **Change Text Color**  
   - Write a function to change the text color of all `<p>` elements on the page to `#FF5733` (orange).

7. **Event Listener**  
   - Write an event listener for a button with the ID `click-me`, so that when it is clicked, it logs "Button Clicked!" to the console.

8. **Form Input Value**  
   - Write a function that logs the current value of an input field with the ID `user-name` whenever the input is changed.

9. **Toggle Class**  
   - Write a function that toggles the class `highlight` on an element with the class `box` when a button with the ID `toggle-btn` is clicked.

10. **Remove Element**  
    - Write a function to remove an element with the ID `delete-me` from the DOM.

---

### **Section 2: Medium (10 Questions)**
These questions are designed to deepen your understanding of manipulating the DOM dynamically.

1. **Create a List**  
   - Write a function that dynamically creates an unordered list (`<ul>`) with 5 items (`<li>`) labeled "Item 1", "Item 2", ..., "Item 5" and appends it to a container with the ID `list-container`.

2. **Update Multiple Elements**  
   - Write a function to change the text of all elements with the class `update-text` to "Updated Successfully!".

3. **Event Delegation**  
   - Add an event listener to a parent `<ul>` with the ID `parent-list` so that any time a child `<li>` is clicked, it logs "List item clicked!" to the console.

4. **Show/Hide Element**  
   - Write a function that hides an element with the ID `popup-box` when a button with the ID `close-popup` is clicked.

5. **Dynamic Table Creation**  
   - Write a function that creates a 3x3 table and appends it to an element with the ID `table-container`.

6. **Disable Button**  
   - Write a function that disables a button with the ID `submit-btn` after it is clicked once.

7. **Text Input Event**  
   - Write a function that updates the text of an `<h2>` with the ID `dynamic-title` as the user types into an input with the ID `title-input`.

8. **Remove All Children**  
   - Write a function to remove all child elements from an element with the ID `content-area`.

9. **Dynamic Countdown**  
   - Create a countdown timer that displays the time left (in seconds) inside an element with the ID `countdown` and counts down from 10 to 0, updating every second.

10. **Add Class to Multiple Elements**  
    - Write a function that adds the class `error-message` to all `<p>` tags inside a div with the class `error-container`.

---

### **Section 3: Hard (10 Questions)**
These questions challenge you to combine multiple DOM techniques in creative ways.

1. **Dynamic To-Do List**  
   - Create a simple to-do list. It should have an input field where users can type new tasks, a button to add the task, and each task should have a "Delete" button to remove the task from the list.

2. **Modal Window**  
   - Write a function to create a simple modal pop-up. When a button with the ID `open-modal` is clicked, the modal should appear with a close button to dismiss it.

3. **Drag and Drop**  
   - Implement a simple drag-and-drop feature where users can drag items from one list with the ID `list-1` and drop them into another list with the ID `list-2`.

4. **Image Gallery**  
   - Create an image gallery with thumbnails. When a thumbnail is clicked, it should display a larger version of the image in a "main" image container.

5. **Typing Game**  
   - Create a typing speed game. Display a random word on the screen, and as the user types into an input field, show if the typed word matches the displayed word in real time.

6. **Form Validation**  
   - Create a registration form with fields for "Username", "Email", and "Password". Validate that none of the fields are empty before submission, and show error messages if any are empty.

7. **Real-time Character Counter**  
   - Write a function to count the characters in a text area with the ID `message-box` and display the count in an element with the ID `char-count`. Update it as the user types.

8. **Random Background Color**  
   - Write a function that changes the background color of an element with the ID `color-box` to a random color every 2 seconds.

9. **Multi-step Form**  
   - Create a multi-step form with 3 steps. When the user clicks "Next", the next form section is displayed, and the previous section is hidden.

10. **Dynamic Quiz App**  
    - Create a quiz app that shows one question at a time, with multiple-choice answers. When the user selects an answer and clicks "Next", it shows the next question. Display the final score at the end.

---