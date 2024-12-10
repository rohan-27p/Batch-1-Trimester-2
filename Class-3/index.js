const MyForm = document.querySelector('.feedback-form')
console.log(MyForm)
const p = document.querySelector('p')
let usernameRegex = /^[a-z0-9_]{5,15}$/
let feedbackRegex = /^.{10,200}$/
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/
let phRegex = /^(?:\+91[\-\s]?|0)?[6-9]\d{9}$/

MyForm.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e)
let usernameValue = MyForm.username.value
let feedbackValue = MyForm.feedback.value
let emailvalue  = MyForm.email.value
let phValue  = MyForm.phonenumber.value
let resuser = usernameRegex.test(usernameValue)
let resfeed = feedbackRegex.test(feedbackValue)
let resemail = emailRegex.test(emailvalue)
let resphno = phRegex.test(phValue)
console.log(resuser)
console.log(resfeed)
console.log(resemail)
console.log(resphno)


if(res && res1 && resemail && resphno){
    alert('submitted successfully')
    p.innerText='successful'
}else{
    alert('f u bro')
    p.innerText='f u🖕🖕🖕🖕🖕🖕'
}
})
// const str='abc_123'
// console.log(usernameRegex.test(str))