import Navbar from '../componets/nav.js';

document.getElementById('navbar').innerHTML = Navbar()

// trending
const display = (data) => {
    data.map((products) => {
        let img = document.createElement('img');
        img.src = products.image;

        let title = document.createElement('p');
        title.innerHTML = products.title;
        title.setAttribute('class', 'title');

        let pricesbox = document.createElement("div");
        pricesbox.setAttribute('class', 'pricesbox');


        let price = document.createElement('p');
        price.innerHTML = "₹ " + products.price;
        price.setAttribute('class', 'price');

        let pricesrong = document.createElement('del');
        pricesrong.innerHTML = products.pricesrong;
        pricesrong.setAttribute('class', 'pricesrong');

        let description = document.createElement('span');
        description.innerHTML = products.description;
        description.setAttribute('class', 'description');

        let box = document.createElement("div");
        box.setAttribute('class', 'box');

        let rating = document.createElement('span');
        rating.innerHTML = products.rating.rate;
        rating.setAttribute('class', 'rating');

        let ratings = document.createElement('img');
        ratings.src = products.ratings.img;
        ratings.style.width = "15px";
        ratings.setAttribute('class', 'ratings');

        let ratingsss = document.createElement('span');
        ratingsss.innerHTML = products.ratings.count;
        ratingsss.setAttribute('class', 'ratingsss');

        let btn = document.createElement('Button');
        btn.innerHTML = "BUY NOW";
        btn.setAttribute('class', 'btn');
        btn.addEventListener("click", () => {
            console.log(products.id)
            let loggin = localStorage.getItem("loggin")
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
                            console.log(data.length)
                        }
                        else {
                            fetch("http://localhost:3000/cart", {
                                method: "POST",
                                headers: { "content-type": "application/json" },
                                body: JSON.stringify({ ...products, Qty: 1 }),
                            });
                        }
                    })
            }
            else {
                alert("you have to loggin first")
                setTimeout(() => {
                    window.location.href = "/pages/login.html"
                }, 1000)
            }
        })

        let div = document.createElement('div');
        div.setAttribute('class', 'main');

        pricesbox.append(price, pricesrong, description);
        box.append(rating, ratings, ratingsss)
        div.append(img, title, pricesbox, box, btn)
        document.getElementById("trending").append(div)
    })
}
const get = () => {
    fetch("http://localhost:3000/trand")
        .then((res) => res.json())
        .then((response) => {
            console.log(response)
            display(response);
        })
}
get()

// TOP 10 PRODUCTS

const displays = (data) => {
    data.map((products) => {
        let img = document.createElement('img');
        img.src = products.image;

        let title = document.createElement('p');
        title.innerHTML = products.title;
        title.setAttribute('class', 'title');

        let pricesbox = document.createElement("div");
        pricesbox.setAttribute('class', 'pricesbox');


        let price = document.createElement('p');
        price.innerHTML = "₹ " + products.price;
        price.setAttribute('class', 'price');

        let pricesrong = document.createElement('del');
        pricesrong.innerHTML = products.pricesrong;
        pricesrong.setAttribute('class', 'pricesrong');

        let description = document.createElement('span');
        description.innerHTML = products.description;
        description.setAttribute('class', 'description');

        let box = document.createElement("div");
        box.setAttribute('class', 'box');

        let rating = document.createElement('span');
        rating.innerHTML = products.rating.rate;
        rating.setAttribute('class', 'rating');

        let ratings = document.createElement('img');
        ratings.src = products.ratings.img;
        ratings.style.width = "15px";
        ratings.setAttribute('class', 'ratings');

        let ratingsss = document.createElement('span');
        ratingsss.innerHTML = products.ratings.count;
        ratingsss.setAttribute('class', 'ratingsss');

        let btn = document.createElement('Button');
        btn.innerHTML = "BUY NOW";
        btn.setAttribute('class', 'btn');
        btn.addEventListener("click", () => {
            console.log(products.id)
            let loggin = localStorage.getItem("loggin")
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
                            console.log(data.length)
                        }
                        else {
                            fetch("http://localhost:3000/cart", {
                                method: "POST",
                                headers: { "content-type": "application/json" },
                                body: JSON.stringify({ ...products, Qty: 1 }),
                            });
                        }
                    })
            }
            else {
                alert("you have to loggin first")
                setTimeout(() => {
                    window.location.href = "/pages/login.html"
                }, 1000)
            }
        })

        let div = document.createElement('div');
        div.setAttribute('class', 'main');

        pricesbox.append(price, pricesrong, description);
        box.append(rating, ratings, ratingsss)
        div.append(img, title, pricesbox, box, btn)
        document.getElementById("top").append(div)
    })
}
fetch("http://localhost:3000/top")
    .then((res) => res.json())
    .then((response) => {
        console.log(response)
        displays(response);
    })

// DEALS YOU CAN'T MISS

const output = (data) => {
    data.map((products) => {
        let img = document.createElement('img');
        img.src = products.image;

        let title = document.createElement('p');
        title.innerHTML = products.title;
        title.setAttribute('class', 'title');

        let pricesbox = document.createElement("div");
        pricesbox.setAttribute('class', 'pricesbox');


        let price = document.createElement('p');
        price.innerHTML = "₹ " + products.price;
        price.setAttribute('class', 'price');

        let pricesrong = document.createElement('del');
        pricesrong.innerHTML = products.pricesrong;
        pricesrong.setAttribute('class', 'pricesrong');

        let description = document.createElement('span');
        description.innerHTML = products.description;
        description.setAttribute('class', 'description');

        let box = document.createElement("div");
        box.setAttribute('class', 'box');

        let rating = document.createElement('span');
        rating.innerHTML = products.rating.rate;
        rating.setAttribute('class', 'rating');

        let ratings = document.createElement('img');
        ratings.src = products.ratings.img;
        ratings.style.width = "15px";
        ratings.setAttribute('class', 'ratings');

        let ratingsss = document.createElement('span');
        ratingsss.innerHTML = products.ratings.count;
        ratingsss.setAttribute('class', 'ratingsss');

        let btn = document.createElement('Button');
        btn.innerHTML = "BUY NOW";
        btn.setAttribute('class', 'btn');
        btn.addEventListener("click", () => {
            console.log(products.id)
            let loggin = localStorage.getItem("loggin")
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
                            console.log(data.length)
                        }
                        else {
                            fetch("http://localhost:3000/cart", {
                                method: "POST",
                                headers: { "content-type": "application/json" },
                                body: JSON.stringify({ ...products, Qty: 1 }),
                            });
                        }
                    })
            }
            else {
                alert("you have to loggin first")
                setTimeout(() => {
                    window.location.href = "/pages/login.html"
                }, 1000)
            }
        })

        let div = document.createElement('div');
        div.setAttribute('class', 'main');

        pricesbox.append(price, pricesrong, description);
        box.append(rating, ratings, ratingsss)
        div.append(img, title, pricesbox, box, btn)
        document.getElementById("deals").append(div)
    })
}
fetch("http://localhost:3000/deals")
    .then((res) => res.json())
    .then((response) => {
        console.log(response)
        output(response);
    })

import footer from '../componets/footer.js';

document.getElementById('footer').innerHTML = footer()


// cart page
// slidbar
document.getElementById("cart").addEventListener("click",()=>{
    let sidebar = document.querySelector('.sidebar');
        let closeicons = document.querySelector('.colsesss');
        sidebar.classList.add('active');
        closeicons.addEventListener('click', () => {
            sidebar.classList.remove('active');
        })
})