
function impList(){
    let tmp = document.cookie
    tmp = tmp.split(",") 
    return tmp
}

produkter = impList()
console.log(produkter);


i = 0
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