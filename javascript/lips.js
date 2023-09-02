import Navbar from '../componets/nav.js';

document.getElementById('navbar').innerHTML = Navbar()

// eye code
let products = [];

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

        let category = document.createElement('span');
        category.innerHTML = products.category;
        category.setAttribute('class', 'category');


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

        let calcu = document.createElement('span');
        calcu.innerHTML = products.calcu;
        calcu.setAttribute('class', 'calcu');


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
        box.append(ratings, ratingsss)
        div.append(img, title, pricesbox, category, box, calcu, btn)
        document.getElementById("lips").append(div)
    })
}
const get = () => {
    fetch("http://localhost:3000/lips")
        .then((res) => res.json())
        .then((response) => {
            display(response);
            products = response;

        })
}
get()

// sorting by price

const handlelth = () => {
    document.getElementById("lips").innerHTML = ""
    let data = products.sort((a, b) => a.price - b.price);
    console.log(data)
    display(data);
}
document.getElementById('lth').addEventListener('click', handlelth)

const handlehtl = () => {
    document.getElementById("lips").innerHTML = ""
    let data = products.sort((a, b) => b.price - a.price);
    console.log(data)
    display(data);
}
document.getElementById('htl').addEventListener('click', handlehtl)

// serching

const serching = () => {
    document.getElementById("lips").innerHTML = ""
    let value = document.getElementById("value").value
    let data = products.filter((val) => val.category.includes(value.toUpperCase()));
    display(data);
    console.log(data)

}

document.getElementById("value").addEventListener("keypress", (e) => {
    if (e.key == "Enter")
        serching();
})

// filter products by categorly

const handelcategory = (cat) => {
    document.getElementById("lips").innerHTML = ""
    let data = products.filter((value) => value.category == cat);
    display(data);
}

document.getElementById("LIPSTICK").addEventListener("click", () => handelcategory("LIPSTICK"));
document.getElementById("LIQUID").addEventListener("click", () => handelcategory("LIQUID"));
document.getElementById("BLAM").addEventListener("click", () => handelcategory("BLAM"));
document.getElementById("GLOSS").addEventListener("click", () => handelcategory("GLOSS"));




// dropdown
document.getElementById("sort").addEventListener("click", () => {
    let dropdown = document.querySelector('.dropdown');
    dropdown.classList.add('active');
})
document.getElementById("closed").addEventListener("click", () => {
    let dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('active');
})
// down
document.getElementById("filter").addEventListener("click", () => {
    let down = document.querySelector('.down');
    down.classList.add('active');
})
document.getElementById("close").addEventListener("click", () => {
    let down = document.querySelector('.down');
    down.classList.remove('active');
})


import footer from '../componets/footer.js';

document.getElementById('footer').innerHTML = footer()

