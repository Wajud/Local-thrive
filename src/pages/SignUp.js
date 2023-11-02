function displayElement(element){
    element.classList.replace('hidden','block')
}

function hideElement(element){
    element.classList.replace('block','hidden')
}

//SIGN UP
const handleSignUp = (event) => {
    event.preventDefault()
    
    const signUp = new FormData(event.target)

    let userData = {
        Name : signUp.get('name'),
        Email : signUp.get('email'),
        Password : signUp.get('password'),
    }

    if(userData.Password.length < 8 ){
        const passwordLength = document.getElementById('passwordLength')
        displayElement(passwordLength)
        setTimeout(()=> hideElement(passwordLength), 3000)
        return;
    }
    if(signUp.get('confirm-password') != signUp.get('password') ){
        const passwordMismatch = document.getElementById('passwordMismatch')
        displayElement(passwordMismatch)
        setTimeout(()=> hideElement(passwordMismatch), 5000)
        return;
    }

    localStorage.setItem(userData.Email,JSON.stringify(userData))

    window.location = 'authentication.html'
}

//SIGN IN
const handleSignIn = (event) => {
    event.preventDefault()
    const signIn = new FormData(event.target)

    let userDetail = {
        Email : signIn.get('email'),
        Password : signIn.get('password'),
    }
    const fetchUser = JSON.parse(localStorage.getItem(userDetail.Email))    
    if (fetchUser === null){
        const error = document.getElementById('error')
        resolve(displayElement(error))
        setTimeout(()=> hideElement(error), 10000)
        return; 
    }
    else {
        if (fetchUser.Password !== userDetail.Password){
            const errorPassword = document.getElementById('errorPassword')
            reject(displayElement(errorPassword))
            setTimeout(()=> hideElement(errorPassword), 3000)
        return;
        }
    }  
}