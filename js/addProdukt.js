// var produkter = document.cookie
// console.log(produkter)

// var dates = []
// function newlist(item,) {
//     console.log(item)
//     item.split(" ")
//     dates.push(item)    
//     var i
//     for (let i = 0; i < dates.length; i = i + 2) {
//         datlist.splice(i,1)
//     }
//     console.log(dates)
// }
function impList(){
    let tmp = document.cookie
    if (tmp.length == 0){
        return []
    } else if (tmp.split(",")[0] == "inga produkter"){
        return []
    } else {
        tmp = tmp.split(",")
        return tmp
    }
}



var mat = impList()
console.log(mat)
// newlist

document.querySelector(".add p").addEventListener("click",addProdukt)

function addProdukt(){
    let inputs = document.getElementById("addprod")
    let prod = inputs.elements[0].value
    let date = inputs.elements[1].value
    if (prod == "" || date == "") {
        alert("ofulständig input")
        return
    }
    let proddate = prod + " " + date
    if (mat.length > 0){
        plasser(proddate)
    } else {
        mat.push(proddate)
    } 
    console.log(mat)
    document.cookie = mat; "path=/";
    console.log(document.cookie)
    document.getElementById("addprod").reset()
}

function  plasser(produkt) {
    date = produkt.substring(produkt.length-10)
    let i = 0
    while (i < mat.length && date > mat[i].substring(mat[i].length-10)) {
        i += 1
    }
    mat.splice(i,0,produkt)
    return mat
}
