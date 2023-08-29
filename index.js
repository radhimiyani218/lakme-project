import Header from "./componets/header.js";
document.getElementById("header").innerHTML=Header()


setInterval(()=>{
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
},1000)








// pages code



// const display = (data) => {
//     data.map((products) => {
//         let img = document.createElement('img');
//         img.src = products.image;
//         let title = document.createElement('h2');
//         title.innerHTML = products.title;
//         let price = document.createElement('p');
//         price.innerHTML = products.price;
//         let pricesrong = document.createElement('p');
//         pricesrong.innerHTML = products.pricesrong;
//         let description = document.createElement('span');
//         description.innerHTML = products.description;
//         let category = document.createElement('span');
//         category.innerHTML = products.category;
//          let rating = document.createElement('span');
//         rating.innerHTML = products.rating.rate;
//          let ratings = document.createElement('img');
//          ratings.src = products.ratings.img;
//          ratings.style.width="20px";
//          let ratingsss = document.createElement('span');
//          ratingsss.innerHTML = products.ratings.count;
//          let calcu = document.createElement('span');
//          calcu.innerHTML = products.calcu;

//         let btn = document.createElement('Button');
//         btn.innerHTML = "BUY NOW";
//         let div = document.createElement('div');
//         div.append(img, title, price,pricesrong, description,category, rating,ratings,ratingsss,calcu, btn)
//         document.getElementById("pages").append(div)
//     })
// }


// const get = () => {
//     fetch("http://localhost:3000/face")
//         .then((response) => response.json())
//         .then((response) => {
//             display(response);
        
//         })
// }
// get()