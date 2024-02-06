const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}
loginLink.onclick = () => {
    wrapper.classList.remove('active');
}


function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "hi") {
        alert("Login successful");
        return true;
    } else {
        alert("Login failed");
        return false;
    }
}
