function cambio(id){
    let elemento1 = document.getElementById("img")
    elemento1.src = "img/cel"+(id+1)+".jpg"
    titulo = document.getElementById("titulo")
    marca = document.getElementById("marca")
    precio = document.getElementById("precio")
    titulo.innerHTML = celulares[id].titulo
    marca.innerHTML = "Marca: "+celulares[id].marca
    precio.innerHTML = "$"+celulares[id].precio.toFixed(2)+" MXN"
}

celulares =[{
    titulo: "Xiaomi Redmi Note",
    marca: "Xiaomi",
    precio: 4689
},
{
    titulo: "Xiaomi Redmi 9",
    marca: "Xiaomi",
    precio: 4098
},
{
    titulo: "Smartphone Redmi Note",
    marca: "Xiaomi",
    precio: 3749
},
{
    titulo: "Samsung Galaxy A21s",
    marca: "Samsung",
    precio: 4747
},
{
    titulo: "Samsung Galaxy S8",
    marca: "Samsung",
    precio: 6999
}];

function gracias(){
    alert("Gracias por comprar :3 ")
}