// var produkter = document.cookie
// console.log(produkter)

function impList(){
    let tmp = document.cookie
    if (tmp.length == 0){
        return []
    } else {
        tmp = tmp.split(",") 
        return tmp
    }
}

mat = impList()
console.log(mat)

document.querySelector(".add").addEventListener("click",addProdukt)

function addProdukt(){
    var prod = prompt("vilken produkt vill du läga till?")
    mat.push(prod)
    console.log(mat)
    document.cookie = mat; "path=/";
    console.log(document.cookie)
}