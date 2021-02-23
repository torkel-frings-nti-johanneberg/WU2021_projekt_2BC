// let module = require('./array.js');
// let array = module.array;
// console.log(array)
i = 0
produkter = ["smör", "ost", "mjölk", "egg","dom här är automatiskt generearade"]
// const mostOf = document.createTextNode(mostof)
// document.querySelector(".most").appendChild(mostOf)


while (produkter.length > i) {
    spannext(i)
    i += 1
}

function spannext(index){
    const newArticel = document.createElement("article")
    const produkten = document.createTextNode(produkter[index])
    newArticel.appendChild(produkten)
    document.querySelector(".lista").appendChild(newArticel)
}