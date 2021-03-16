function impList(){
    let tmp = document.cookie
    if (tmp.length == 0){
        return ["inga produkter"]
    } else {
        tmp = tmp.split(",") 
        return tmp
    }
}

produkter = impList()
console.log(produkter);

// för tetsyfte ändast
var lastexpier = produkter[Math.floor(Math.random()*produkter.length)];
var furtexpier= produkter[Math.floor(Math.random()*produkter.length)];
var mostof = produkter[Math.floor(Math.random()*produkter.length)];

const mostOf = document.createTextNode(mostof)
document.querySelector(".most").appendChild(mostOf)

const longest = document.createTextNode(lastexpier)
document.querySelector(".shortest").appendChild(longest)

const shortest = document.createTextNode(furtexpier)
document.querySelector(".longest").appendChild(shortest)
