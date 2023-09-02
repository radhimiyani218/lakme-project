import Navbar from '../componets/nav.js';
document.getElementById('navbar').innerHTML = Navbar()

import footer from '../componets/footer.js';
document.getElementById('footer').innerHTML = footer()

let pages = JSON.parse(localStorage.getItem("productDetails"));


const datas=(data)=>{

    document.getElementById("pimg").src=`${data.image}`;
    document.getElementById("titles").innerHTML=`${data.title}`;
    document.getElementById("rate").innerHTML=`${data.rating.rate}`;
    document.getElementById("ver").innerHTML=`${data.ratings.count}`;
    document.getElementById("prices").innerHTML=`₹ ${data.price}`;
    document.getElementById("prisess").innerHTML=`₹ ${data.pricesrong}`;
    document.getElementById("descri").innerHTML=`${data.description}`;
    document.getElementById("cat").innerHTML=`${data.category }`;

    document.getElementById("add").addEventListener("click", () => {
        console.log(data.id)
        let loggin = localStorage.getItem("loggin")
        if (loggin) {
            fetch(`http://localhost:3000/cart?id=${data.id}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.length > 0) {
                        fetch(`http://localhost:3000/cart/${data.id}`, {
                            method: "PATCH",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify({ Qty: data[0].Qty + 1 }),
                        });
                        console.log(data.length)
                    }
                    else{
                         fetch(`http://localhost:3000/cart`,{
                             method : "POST",
                             headers : {"Content-Type": "application/json"},
                             body : JSON.stringify({...pages , Qty : 1})
                         })
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
};

datas(pages); 

