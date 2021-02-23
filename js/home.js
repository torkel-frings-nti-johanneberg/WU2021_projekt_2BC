var produkter = ["smör","ost","bröd"]

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
