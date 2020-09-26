document.querySelector('#signup-form').addEventListener('submit', signUp);

function signUp(e) {
    e.preventDefault()
    let FullName = document.querySelector('#fullName').value
    let UserName = document.querySelector('#userNme').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#passwd').value

    let UserInformation = {
        firstName: FullName,
        surname: UserName,
        email: email,
        password: password,
        posts: []
    }
    localStorage.setItem("appStorage", JSON.stringify(UserInformation));
    window.location.replace('login.html');

}
