const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");
const modalCont = document.querySelector(".modal-cont");
const taskArea = document.querySelector(".textArea-cont");
const mainCont = document.querySelector(".main-cont");
const allpriorityColors = document.querySelectorAll(".priority-color");

let ticketsArr =JSON.parse(localStorage.getItem('apptickets'))||[]


function init(){
  if(localStorage.getItem('apptickets')){
    ticketsArr.forEach(function(ticket){
      createTicket(ticket.color , ticket.task , ticket.id)
    })
  }
}

init()

// if the ticketArr is Empty , if the ticketsArr is not Empty

console.log(ticketsArr);

let toolBoxColors = document.querySelectorAll(".color");

// priority colors array
let colors = ["lightpink", "lightgreen", "lightblue", "black"];

// console.log(allpriorityColors)

let addBtnFlag = false;
let removeBtnFlag = false;
let modalColorForTicket = "lightpink";

// Lock Classes

let lockClose = "fa-lock";
let lockOpen = "fa-lock-open";

// Modal pop up Event

addBtn.addEventListener("click", function () {
  addBtnFlag = !addBtnFlag;
  if (addBtnFlag === true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

// Delete button activation and deactivation
removeBtn.addEventListener("click", function () {
  removeBtnFlag = !removeBtnFlag;

  if (removeBtnFlag) {
    alert("Delete button Activated");
    removeBtn.style.color = "red";
  } else {
    removeBtn.style.color = "white";
  }
});

function handleRemoval(ticket) {
  ticket.addEventListener("click", function () {
    if (removeBtnFlag == true) {
      ticket.remove();
    }
  });
}

// change priority color of tickets
function handleColor(ticket) {
  let ticketColorBand = ticket.querySelector(".ticket-color");
  ticketColorBand.addEventListener("click", function () {
    let currentColor = ticketColorBand.style.backgroundColor;

    let currentColorIdx = colors.findIndex(function (color) {
      return color === currentColor;
    });

    currentColorIdx++;

    let newColorIdx = currentColorIdx % colors.length;
    // 1 // 2 // 3 // 4->0
    let newColor = colors[newColorIdx];

    ticketColorBand.style.backgroundColor = newColor;
  });
}

// handle Lock for content edit

function handleLock(ticket) {
  let ticketLockCont = ticket.querySelector(".ticket-lock");
  let ticketLockIcon = ticketLockCont.children[0];
  let ticketTaskArea = ticket.querySelector(".task-area");

  ticketLockIcon.addEventListener("click", function () {
    if (ticketLockIcon.classList.contains(lockClose)) {
      ticketLockIcon.classList.remove(lockClose);
      ticketLockIcon.classList.add(lockOpen);

      ticketTaskArea.setAttribute("contenteditable", "true");
    } else {
      ticketLockIcon.classList.remove(lockOpen);
      ticketLockIcon.classList.add(lockClose);
      // should not be editing the task
      ticketTaskArea.setAttribute("contenteditable", "false");
    }
  });
}

// Filter out task according to selected Color

// Create a ticket

function createTicket(ticketColor, ticketTask, ticketId) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
             <div class="ticket-color" style="background-color:${ticketColor}"></div>
             <div class="ticket-id">${ticketId}</div>
             <div class="task-area">${ticketTask}</div>
              <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
              </div>`;

  mainCont.appendChild(ticketCont);

  handleRemoval(ticketCont);
  handleColor(ticketCont);
  handleLock(ticketCont);

}

// add a task

modalCont.addEventListener("keydown", function (e) {
  if (e.key === "Shift") {
    const task = taskArea.value;
    const id = shortid();
    console.log(task + " -> " + id);
    createTicket(modalColorForTicket, task, id);
    modalCont.style.display = "none";
    taskArea.value = "";
    addBtnFlag = false;
    ticketsArr.push({ color: modalColorForTicket, task: task, id: id });
    updateLocalStorage()
  }
});

// moving the active class on priority color boxes

allpriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function () {
    allpriorityColors.forEach(function (priorityColor) {
      priorityColor.classList.remove("active");
    });

    colorElem.classList.add("active");
    modalColorForTicket = colorElem.classList[0];
  });
});

toolBoxColors.forEach(function (color) {
  color.addEventListener("click", function () {
    const allTickets = document.querySelectorAll(".ticket-cont");

    let selectedColor = color.classList[0];

    allTickets.forEach(function (ticket) {
      let ticketColorBand = ticket.querySelector(".ticket-color");
      if (ticketColorBand.style.backgroundColor === selectedColor) {
        ticket.style.display = "block";
      } else {
        ticket.style.display = "none";
      }
    });
  });
});

function updateLocalStorage() {
  localStorage.setItem("apptickets", JSON.stringify(ticketsArr));
}
