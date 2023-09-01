const login = (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(email, password)

    fetch(`http://localhost:3000/user?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.length > 0) {
                if (data[0].password === password) {
                    alert("login succesful")[
                        setTimeout(() => {
                            window.location.href = "/pages/home.html"
                        }, 3000)
                    ]
                }
                else {
                    alert("invaild login")
                }
            }
            else {
                alert("user not found")
                setTimeout(() => {
                    window.location.href = "/pages/signin.html"
                }, 3000)
            }
        })
}
document.getElementById("userdatas").addEventListener("submit", login)



// eye hide

let password = document.getElementById('password');
let eye = document.getElementById('eye');


document.getElementById("eye").addEventListener("click", () => {
    if (password.type == "password") {
        password.type = "text";
        eye.classList.add("fa-eye");
        eye.classList.remove("fa-eye-slash");
    }

    else {
        password.type = "password";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    }
})