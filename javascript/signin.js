const userdatas = (e) => {
    e.preventDefault();

    let user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    }
    console.log(user);
    var regexname = /^[a-zA-Z ]{2,30}$/;
    var regexemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var regexpassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    // name
    if (!(regexname.test(user.name))) {
      document.getElementById("n_err").innerHTML = "** enter the not valid name"
        document.getElementById("n_err").classList.add("text_red")
    }
    else {
        document.getElementById("n_err").innerHTML = "** enter the valid name"
        document.getElementById("n_err").classList.add("text_green")
        document.getElementById("n_err").classList.remove("text_red")
    }
    // email
    if (!(regexemail.test(user.email))) {
         document.getElementById("e_err").innerHTML = "** enter the not valid email"
        document.getElementById("e_err").classList.add("text_red")
    }
    else {
        document.getElementById("e_err").innerHTML = "** enter the valid email"
        document.getElementById("e_err").classList.add("text_green")
        document.getElementById("e_err").classList.remove("text_red")
    }
    // password
    if (!(regexpassword.test(user.password))) {
         document.getElementById("p_err").innerHTML = "** enter the not valid password"
        document.getElementById("p_err").classList.add("text_red")
    }
    else {
        document.getElementById("p_err").innerHTML = "** enter the valid password"
        document.getElementById("p_err").classList.add("text_green")
        document.getElementById("p_err").classList.remove("text_red")
    }

    if ((regexname.test(user.name) && (regexemail.test(user.email)) && (regexpassword.test(user.password)))) {
        fetch(`http://localhost:3000/user?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    alert("user existis")
                    setTimeout(() => {
                        window.location.href = "/pages/login.html"
                    },3000)
                }
                else {
                    localStorage.setItem("loggin",true)
                    fetch ("http://localhost:3000/user",{
                        method:"POST",
                        headers:{"content-type":"application/json"},
                        body:JSON.stringify(user),
                    });
                }
            });

    }
}

document.getElementById('userdatas').addEventListener('submit', userdatas);

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