 
form = document.getElementById('form')
const full_name_input = document.getElementById('fullName')
const TruckerID_input = document.getElementById('truckerID')
const email_input = document.getElementById('email')
const password_input = document.getElementById('password')
const confirm_Password_input = document.getElementById('confirmPassword')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {

  let errors =[]

  if(firstname_input){
    errors = getRegistrationErrors(full_name_input.value, TruckerID_input.value, email_input.value, password_input.value, confirm_Password_input.value)
  }
  else{
    errors = getLoginErrors(TruckerID_input.value, password_input.value)
  }
  if(errors.length > 0) {
    e.preventDefault()
    error_message.innerText = errors.join(". ")
  }
})

function getRegistrationErrors(fullName, truckerID, email, password, confirmPassword){
    let errors = []

    if(fullName === '' || fullName == null){
        errors.push('Full Name is required')
        full_name_input.parentElement.classList.add('incorrect')
    }
    if(truckerID === '' || truckerID == null){
        errors.push('Trucker ID is required')
        TruckerID_input_input.parentElement.classList.add('incorrect')
    }
    if(email === '' || email == null){
        errors.push('Email is required')
        email_input_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password == null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    if(confirmPassword === '' || confirmPassword == null){
        errors.push('Confirm Password')
        confirmPassword.parentElement.classList.add('incorrect')
    }
}