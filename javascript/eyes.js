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
        price.innerHTML = "$ " + products.price;
        price.setAttribute('class','price');

        let pricesrong = document.createElement('del');
        pricesrong.innerHTML = products.pricesrong;
        pricesrong.setAttribute('class','pricesrong');

        let description = document.createElement('span');
        description.innerHTML = products.description;
        description.setAttribute('class','description');

       
        // category.setAttribute('class','category');

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
        let div = document.createElement('div');
        div.setAttribute('class','main');


        pricesbox.append(price, pricesrong, description);
        box.append(rating,ratings,ratingsss)
        div.append(img, title,pricesbox,category,box,calcu, btn)
        document.getElementById("eye").append(div)
    })
}


const get = () => {
    fetch("http://localhost:3000/eyes")
        .then((response) => response.json())
        .then((response) => {
            display(response);
        
        })
}
get()