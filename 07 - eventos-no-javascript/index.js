function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation) {
        alert('Usuário ' + username + ' registrado!')
    } else {
        alert('senhas não conferem')
    }
}

const button = document.getElementById('register-button')

/*button.addEventListener('click', function () { alert('Botão clicado') })*/

button.addEventListener('click', register) //sem parênteses para passar a função em si e não seu resultado

function removeListener() {
    button.removeEventListener('click', register)
    alert('Event Removed')
}

button.addEventListener('mouseover', function (ev) {
    console.log(ev.currentTarget)
})
