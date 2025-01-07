const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const taskArea = document.querySelector(".textArea-cont");
const mainCont = document.querySelector('.main-cont')

let addBtnFlag = false;

// Modal pop up Event

addBtn.addEventListener("click", function () {
  addBtnFlag = !addBtnFlag;
  if (addBtnFlag === true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

// Create a ticket

function createTicket(ticketTask , ticketId) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class="ticket-cont">
             <div class="ticket-color"></div>
             <div class="ticket-id">${ticketId}</div>
             <div class="task-area">${ticketTask}</div>
              <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
              </div>`;

              mainCont.appendChild(ticketCont)
}

// add a task

modalCont.addEventListener("keydown", function (e) {
  if (e.key === "Shift") {
    const task = taskArea.value;
    const id = shortid();
    console.log(task + " -> " + id);
    createTicket(task , id)
    modalCont.style.display = 'none'
    taskArea.value = ''
    addBtnFlag = false
    
  }
});
