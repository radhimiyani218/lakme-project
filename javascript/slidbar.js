let totalprice = 0;
let totals = 0;
let Qty = 0;

const display = (cart) => {

    cart.map((products) => {

        let maindiv = document.createElement("tr");
        maindiv.setAttribute("class","imagdiv")


        let imgdiv = document.createElement("td");
        let image = document.createElement("img");
        image.src = products.image;

        let title = document.createElement("td");
        title.innerHTML = products.title;

        let price1 = document.createElement("td");
        price1.innerHTML = products.price;

        let plusminse = document.createElement("td");
        plusminse.setAttribute("class","number")

        let minse = document.createElement("button");
        minse.innerHTML = "-";
        minse.addEventListener("click",()=>{
            console.log(products.id)
            let loggin = localStorage.getItem("loggin")
            if(loggin){
                fetch(`http://localhost:3000/cart?id=${products.id}`)
                .then((res)=>res.json())
                .then((data)=>{
                    if(data.length > 0){
                        fetch (`http://localhost:3000/cart/${products.id}`,{
                            method:"PATCH",
                            headers:{"content-type":"application/json"},
                            body:JSON.stringify({Qty:data[0].Qty-1}),
                        });
                        console.log(data.length)
                    }
                    else{
                        fetch ("http://localhost:3000/cart",{
                            method:"POST",
                            headers:{"content-type":"application/json"},
                            body:JSON.stringify({...products,Qty:1}),
                        });
                    }
                })
            }
            else{
                alert("you have to loggin first")
                setTimeout(() => {
                    window.location.href = "/pages/login.html"
                },1000)
            }
        })

        let noq = document.createElement("button");
        noq.innerHTML = products.Qty;

        let plus = document.createElement("button");
        plus.innerHTML = "+";
        plus.addEventListener("click",()=>{
            console.log(products.id)
            let loggin = localStorage.getItem("loggin")
            if(loggin){
                fetch(`http://localhost:3000/cart?id=${products.id}`)
                .then((res)=>res.json())
                .then((data)=>{
                    if(data.length > 0){
                        fetch (`http://localhost:3000/cart/${products.id}`,{
                            method:"PATCH",
                            headers:{"content-type":"application/json"},
                            body:JSON.stringify({Qty:data[0].Qty+1}),
                        });
                        console.log(data.length)
                    }
                    else{
                        fetch ("http://localhost:3000/cart",{
                            method:"POST",
                            headers:{"content-type":"application/json"},
                            body:JSON.stringify({...products,Qty:1}),
                        });
                    }
                })
            }
            else{
                alert("you have to loggin first")
                setTimeout(() => {
                    window.location.href = "/pages/login.html"
                },1000)
            }
        })

        let total = document.createElement("td");
        total.innerHTML = totalprice += products.Qty * products.price ;

        let td1 = document.createElement("td");

        let btn = document.createElement("h2");
        btn.innerHTML = `<i class="fa-solid fa-trash-can delete"></i>`
        btn.setAttribute("class","buttons")
        btn.addEventListener("click",()=>{
            fetch (`http://localhost:3000/cart/${products.id}`,{
            method:"DELETE",
        })

        })
        td1.append(btn)
        imgdiv.append(image);
        plusminse.append(minse, noq, plus);
        maindiv.append(imgdiv, title, price1, plusminse ,total , td1);
        document.getElementById("cartItem").append(maindiv);

        // total sum
        document.getElementById('total').innerHTML=`₹  ${totals = totals + totalprice}`
        totals = totals + totalprice ;
    });

};
 

const get = () => {
    fetch("http://localhost:3000/cart")
        .then((response) => response.json())
        .then((response) => display(response))
}
get()