let users = JSON.parse(localStorage.getItem("users")) || [];

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email.includes("@") || !email.includes(".") || password == "") {
        alert("Please enter a valid email and password");
        return;
    }

    if (users.length === 0) {
        alert("There are no users registered");
        return;
    }

    for (let i = 0; i < users.length; i++) {
        if (email == users[i].email && password == users[i].pass) {
            alert("Welcome " + users[i].name + "!") ;
            location.href = "Fatma.html";
            return;
        }
    }

    alert("Wrong Email or Password");
}