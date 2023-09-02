import Navbar from "../componets/nav.js";
document.getElementById("navbar").innerHTML = Navbar();

import footer from "../componets/footer.js";

document.getElementById("footer").innerHTML = footer();

let totals = 0;

const display = (cart) => {
  cart.map((products) => {
    let totalprice = 0;

    let maindiv = document.createElement("tr");
    maindiv.setAttribute("class", "imagdiv");

    let imgdiv = document.createElement("td");
    let image = document.createElement("img");
    image.src = products.image;

    let title = document.createElement("td");
    title.innerHTML = products.title;

    let prices = document.createElement("td");
    prices.innerHTML = `₹  ${products.price}`;

    let plusminse = document.createElement("td");
    plusminse.setAttribute("class", "plusee");

    let minse = document.createElement("button");
    minse.innerHTML = "-";
    minse.addEventListener("click", () => {
      console.log(products.id);
      let loggin = localStorage.getItem("loggin");
      if (loggin) {
        fetch(`http://localhost:3000/cart?id=${products.id}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.length > 0) {
              if (data[0].Qty>1) {
                fetch(`http://localhost:3000/cart/${products.id}`, {
                  method: "PATCH",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({ Qty: data[0].Qty - 1 }),
                });
                console.log(data.length);
              }
            } else {
              fetch("http://localhost:3000/cart", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ ...products, Qty: 1 }),
              });
            }
          });
      } else {
        alert("you have to loggin first");
        setTimeout(() => {
          window.location.href = "/pages/login.html";
        }, 1000);
      }
    });

    let noq = document.createElement("button");
    noq.innerHTML = products.Qty;

    let plus = document.createElement("button");
    plus.innerHTML = "+";
    plus.addEventListener("click", () => {
      console.log(products.id);
      let loggin = localStorage.getItem("loggin");
      if (loggin) {
        fetch(`http://localhost:3000/cart?id=${products.id}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.length > 0) {
              fetch(`http://localhost:3000/cart/${products.id}`, {
                method: "PATCH",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ Qty: data[0].Qty + 1 }),
              });
              console.log(data.length);
            } else {
              fetch("http://localhost:3000/cart", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ ...products, Qty: 1 }),
              });
            }
          });
      } else {
        alert("you have to loggin first");
        setTimeout(() => {
          window.location.href = "/pages/login.html";
        }, 1000);
      }
    });

    let total = document.createElement("td");
    total.innerHTML = totalprice += products.Qty * products.price;
    console.log(totalprice);

    let btn = document.createElement("Button");
    btn.innerHTML = `<i class="fa-solid fa-trash-can delete"></i>`;
    btn.addEventListener("click", () => {
      fetch(`http://localhost:3000/cart/${products.id}`, {
        method: "DELETE",
      });
    });
    imgdiv.append(image);
    plusminse.append(minse, noq, plus);
    maindiv.append(imgdiv, title, prices, plusminse, total, btn);
    document.getElementById("product").append(maindiv);

    // total sum
    document.getElementById("total").innerHTML = `₹ ${(totals =
      totals + totalprice)}`;
  });
};

const get = () => {
  fetch("http://localhost:3000/cart")
    .then((response) => response.json())
    .then((response) => display(response));
};
get();
