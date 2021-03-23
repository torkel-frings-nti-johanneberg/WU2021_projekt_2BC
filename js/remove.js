function impList(){
    let tmp = document.cookie
    if (tmp.length == 0){
        return ["inga produkter"]
    } else {
        tmp = tmp.split(",") 
        return tmp
    }
}

let produkter = impList()
let pname = "hej"


i = 0
while (produkter.length > i) {
    pname = "produkt" + i
    pname = pname.toString()
    console.log(pname)
    spannext(i,pname)
    i += 1
}


function spannext(index, pname){
    const newArticel = document.createElement("article")
    const produkten = document.createTextNode(produkter[index])
    newArticel.id=pname
    newArticel.appendChild(produkten)
    document.querySelector(".rem").appendChild(newArticel)  
    document.getElementById(pname).addEventListener("click",removeprodukt(pname))

}

function removeprodukt(name){
    console.log("hej")
}