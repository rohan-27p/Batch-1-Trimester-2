const myForm = document.querySelector('.feedback-form')
console.log(myForm)
const p = document.querySelector('p')

let usernameRegex = /^[a-z0-9]{3,12}$/
let userFeedbackRegex = /^.{20,50}$/

myForm.addEventListener('submit' , function(e){
      e.preventDefault()
      let usernameValue = myForm.username.value
      let feedbackValue = myForm.feedback.value

      let userNameValidation = usernameRegex.test(usernameValue)
      let feedbackValidation = userFeedbackRegex.test(feedbackValue)

     console.log(userNameValidation)
     console.log(feedbackValidation)


     if(userNameValidation && feedbackValidation){
        p.innerText='All validated Successfully'
     }

     else{
        p.innerText='Validation failed check Again'
     }
})


// const str = 'test123AB'

// let result = usernameRegex.test(str)


// console.log(result)



