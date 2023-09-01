let products = [];

const display = (data) => {
    data.map((products) => {
        let img = document.createElement('img');
        img.src = products.image;
        
        let title = document.createElement('p');
        title.innerHTML = products.title;
        title.setAttribute('class','title');

        let pricesbox = document.createElement("div");
        pricesbox.setAttribute('class','pricesbox');


        let price = document.createElement('p');
        price.innerHTML = "₹ " + products.price;
        price.setAttribute('class','price');

        let pricesrong = document.createElement('del');
        pricesrong.innerHTML = products.pricesrong;
        pricesrong.setAttribute('class','pricesrong');

        let description = document.createElement('span');
        description.innerHTML = products.description;
        description.setAttribute('class','description');

        let box = document.createElement("div");
        box.setAttribute('class','box');

        let category = document.createElement('span');
        category.innerHTML = products.category;
        category.setAttribute('class','category');


        let rating = document.createElement('span');
        rating.innerHTML = products.rating.rate;
        rating.setAttribute('class','rating');

         let ratings = document.createElement('img');
         ratings.src = products.ratings.img;
         ratings.style.width="15px";
         ratings.setAttribute('class','ratings');

         let ratingsss = document.createElement('span');
         ratingsss.innerHTML = products.ratings.count;
         ratingsss.setAttribute('class','ratingsss');

         let calcu = document.createElement('span');
         calcu.innerHTML = products.calcu;
         calcu.setAttribute('class','calcu');


        let btn = document.createElement('Button');
        btn.innerHTML = "BUY NOW";
        btn.setAttribute('class','btn');

        let div = document.createElement('div');
        div.setAttribute('class','main');
        div.addEventListener("click", () => {

            console.log(products.id)
            let loggin = localStorage.getItem("loggin")
            if (loggin) {
                fetch(`http://localhost:3000/detel?id=${products.id}`)
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.length > 0) {
                            alert("product was defaine")
                            fetch(`http://localhost:3000/detel/${products.id}`, {
                                method: "PATCH",
                                headers: { "content-type": "application/json" },
                                body: JSON.stringify(products),
                            });
                            console.log(data.length)
                         
                        }
                        else {
                            fetch("http://localhost:3000/detel", {
                                method: "POST",
                                headers: { "content-type": "application/json" },
                                body: JSON.stringify(products),
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


        pricesbox.append(price, pricesrong, description);
        box.append(ratings,ratingsss)
        div.append(img, title,pricesbox,category,box,calcu, btn)
        document.getElementById("skin").append(div)
    })
}



const get = () => {
    fetch(" http://localhost:3000/skin")
        .then((res) => res.json())
        .then((response) => {
            console.log(response)
            display(response);
            products = response;
        
        })
}
get()

// sort

const handlelth = () => {
    document.getElementById("skin").innerHTML=""
    let data = products.sort((a, b) => a.price - b.price);
    console.log(data)
    display(data);
}
document.getElementById('lth').addEventListener('click', handlelth)

const handlehtl = () => {
    document.getElementById("skin").innerHTML=""
    let data = products.sort((a, b) => b.price - a.price);
    console.log(data)
    display(data);
}
document.getElementById('htl').addEventListener('click', handlehtl)

// serching

const serching = () => {
    document.getElementById("skin").innerHTML = ""
    let value = document.getElementById("value").value
    let data = products.filter((val) => val.category.includes(value.toUpperCase()));
    display(data);
    console.log(data)

}

document.getElementById("value").addEventListener("keypress", (e) => {
    if (e.key == "Enter")
        serching();
})

// dropdown
document.getElementById("sort").addEventListener("click",()=>{
    let dropdown = document.querySelector('.dropdown');
    dropdown.classList.add('active');

   
    
})
document.getElementById("close").addEventListener("click",()=>{
    let dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('active');
    
})
