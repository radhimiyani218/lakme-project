import Header from "./componets/header.js";
document.getElementById("header").innerHTML=Header()


setInterval(()=>{
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
},1000)






