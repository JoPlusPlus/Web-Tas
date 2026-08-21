let users = JSON.parse(localStorage.getItem("users")) || [];

function SaveUser(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

    for (let i = 0; i < users.length; i++) {
       if(users[i].email === email){
            alert("Email already exist");
            return;
       }
    }

    users.push({
        name: name,
        email: email,
        pass: pass
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("User added")
    console.log(users);
    location.href = 'Login.html';
}