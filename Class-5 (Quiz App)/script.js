let correctAns =["D","B","C","B", "D"]

const quizForm = document.querySelector('.quiz-form')
const result = document.querySelector('.result')
let questions = document.querySelectorAll('.question')
quizForm.addEventListener('submit', function(e){
     e.preventDefault()
     const val = [quizForm.q1.value,
                  quizForm.q2.value,
                  quizForm.q3.value,
                  quizForm.q4.value,
                  quizForm.q5.value];
 

                  let score =0;
    val.forEach((ans,index)=>{
        //console.log(ans,index)
        if(ans === correctAns[index]){
            score=score+1
           questions[index].classList.add('correct')
        }else{
            console.log('wrong')
            questions[index].classList.add('wrong')
        }
    })
     result.classList.remove('hide')
     result.querySelector('.score').innerText = `Your Score is ${score}/5`
       
})