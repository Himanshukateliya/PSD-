// function validate() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     if (username == "admin" && password == "hi") {
//         alert("Login successful");
//         return true;
//     } else {
//         alert("Login failed");
//         return false;
//     }
// }

function validate() {
    var username = document.getElementById("username").Value;
    var password = document.getElementById("password").Value;

    if (username == "admin" && password == "hi") {
        alert("login successful");
        return true;
    }
    else {
        alert("login failed");
        return false;
    }
} 