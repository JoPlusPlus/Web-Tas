let users = JSON.parse(localStorage.getItem("users")) || [];

function login(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    if (users.length === 0) {
        alert("There are no users registered");
        return;
    }

    for (let i = 0; i < users.length; i++) {
        if (email == users[i].email && password == users[i].pass) {
            alert("Welcome " + users[i].name + "!") ;
            location.href = "Home.html";
            return;
        }
    }

    alert("Wrong Email or Password");
}