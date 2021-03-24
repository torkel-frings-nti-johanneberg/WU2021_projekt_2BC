function impList(){
    let tmp = document.cookie
    if (tmp.length == 0){
        return ["inga produkter"]
    } else if (tmp.split(",")[0] == "inga produkter"){
        return ["inga produkter"]
    } else {
        tmp = tmp.split(",") 
        return tmp
    }
}

produkter = impList()
let pname = "hej"
spanall()

function spanall(){
    var i = 0
    while (produkter.length > i) {
        pname = "produkt" + i
        // pname = pname.toString()
        // console.log(pname)
        spannext(i,pname)
        // console.log(document.getElementById(pname))
        document.getElementById(pname).addEventListener("click", removeprodukt) //med mer vettandet att funktionen skikar med ett event när den klikas på kunde jag ta bort (i)
        i += 1
    }
}

function spannext(index, pname){
    const newArticel = document.createElement("article")
    const produkten = document.createTextNode(produkter[index])
    newArticel.id=pname
    newArticel.appendChild(produkten)
    document.querySelector(".rem").appendChild(newArticel)  
}

function removeprodukt(event){
    // console.log(event)
    // console.log(produkter)
    number = event.target.id
    number = number.replace("produkt","")
    // console.log(number)
    produkter.splice(number,1)
    // console.log(produkter)
    // console.log(number)
    if (produkter.length == 0){
        produkter.push("inga produkter")
    }
    document.cookie = produkter; "path=/";
    console.log(document.cookie)
    location.reload()
}
