var produkter = []

exports.array = [1,2,3];
document.querySelector(".add").addEventListener("click",addProdukt)

function addProdukt(){
    var prod = prompt("vilken produkt vill du läga till?")
    produkter.push(prod)
    console.log(produkter)
    

}