import Navbar from '../componets/nav.js';

document.getElementById('navbar').innerHTML = Navbar()

// face code
let products = [];
let id = 1;


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
        btn.innerHTML = "VIEW";
        btn.setAttribute('class', 'btn');

        btn.addEventListener("click",()=>{
            id= products.id;
            console.log(id);
             fetch(`http://localhost:3000/face/${id}`)
                 .then((res)=>res.json())
                 .then((data)=>{
                     console.log(data)
                     localStorage.setItem("productDetails", JSON.stringify(data));
                     window.location.href="/pages/detels.html";
                 })
           
         })
        let div = document.createElement('div');
        div.setAttribute('class', 'main');

        pricesbox.append(price, pricesrong, description);
        box.append(ratings, ratingsss)
        div.append(img, title, pricesbox, category, box, calcu, btn)
        document.getElementById("face").append(div)
    })
}
const get = () => {
    fetch("http://localhost:3000/face")
        .then((res) => res.json())
        .then((response) => {
            display(response);
            products = response;

        })
}
get()

// sorting by price

const handlelth = () => {
    document.getElementById("face").innerHTML = ""
    let data = products.sort((a, b) => a.price - b.price);
    console.log(data)
    display(data);
}
document.getElementById('lth').addEventListener('click', handlelth)

const handlehtl = () => {
    document.getElementById("face").innerHTML = ""
    let data = products.sort((a, b) => b.price - a.price);
    console.log(data)
    display(data);
}
document.getElementById('htl').addEventListener('click', handlehtl)

// serching

const serching = () => {
    document.getElementById("face").innerHTML = ""
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

const handelcategory =(cat) =>{
    document.getElementById("face").innerHTML = "";
    let data = products.filter((value)=>value.category==cat);
    display(data);
    console.log(data)
}

document.getElementById("FOUNDATION").addEventListener("click",()=>handelcategory("FOUNDATION"));
document.getElementById("PRIMER").addEventListener("click",()=>handelcategory("PRIMER"));
document.getElementById("HIGHLIGHTER").addEventListener("click",()=>handelcategory("HIGHLIGHTER"));







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


// slidbar
document.getElementById("cart").addEventListener("click", () => {
    let sidebar = document.querySelector('.sidebar');
    let closeicons = document.querySelector('.colsesss');
    sidebar.classList.add('active');
    closeicons.addEventListener('click', () => {
        sidebar.classList.remove('active');
    })
})

// search


import footer from '../componets/footer.js';

document.getElementById('footer').innerHTML = footer()