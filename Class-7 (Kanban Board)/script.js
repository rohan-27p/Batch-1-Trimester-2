const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const taskArea = document.querySelector('.textArea-cont')

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

// add a task

modalCont.addEventListener('keydown' , function(e){
   if(e.key ==='Shift'){
      const task = taskArea.value
      const id = shortid()
      console.log(task +  " -> " +  id)

   }
})
