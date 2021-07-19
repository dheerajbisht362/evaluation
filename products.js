var products = [
    {
    name: "TQ 101 neck",
    img : "images/A1815_38.jpg",
    price: 21999,
    category: "tanishk",
    id: 101,
    },
    {
    name: "Neck Band",
    img : "images/GSS06660536_364.jpg",
    price: 2999,
    category: "antique",
    id: 103,
    },
    {
    name: "Braslates 101",
    img : "images/GSS06660536_364.jpg",
    price: 35999,
    category: "tanishk",
    id: 104,
    },
    {
    name: "Earring Max pro",
    img : "images/GTT02156576_422.jpg",
    price: 5999,
    category: "tanishk",
    id: 105,
    },
    {
    name: "Hand braslete bangles",
    img : "images/GBG05844051_93.jpg",
    price: 6099,
    category: "frsh",
    id: 106,
    },
    {
    name: "og baraclate",
    img : "images/GBG02570190_465.jpg",
    price: 9999,
    category: "tanishk",
    id: 107,
    },
    {
    name: "Neck chain premium",
    img : "images/ZTN00016-5_629.jpg",
    price: 9999,
    category: "frsh",
    id: 108,
    },
      {
    name: "Extra varient plus orignal",
    img : "images/ZLR00627-1__1877925934.jpg",
    price: 799,
    category: "antique",
    id: 109,
    },
]
var cart = []

localStorage.setItem("products", JSON.stringify(products))

function addItems() {
    var pro = JSON.parse(localStorage.getItem("products"))
    pro.forEach((el)=>addProduct(el))
}
addItems()
function addProduct(el) {
    var main = document.getElementById("products");
    
    var div = document.createElement("div")
    var name = document.createElement("div")
    name.innerText = el.name;
    var img = document.createElement("img")
    img.src = el.img;
    var price = document.createElement("div")
    price.innerText = el.price;
    var category = document.createElement("div")
    category.innerText = el.category;
    var button = document.createElement("button")
    button.innerText = "ADD TO CART"

    img.addEventListener("mouseover", () => changeBackground(button))
    img.addEventListener("mouseout", ()=>background(button))
    button.addEventListener("click", () => addToCart(el))
    
    div.append(name, img, price, button, category)

    main.append(div)
}
function addToCart(el) {
    cart.push(el)
    localStorage.setItem("cart", JSON.stringify(cart));
}
function changeBackground(b) {
    b.style.backgroundColor = "red";
}
function background(b) {
    b.style.backgroundColor = "white";
}
function LtoH() {
    var main = document.getElementById("products");
    main.innerHTML = null
    var pro = JSON.parse(localStorage.getItem("products"))
    pro.sort((el, ac) => el.price - ac.price)
    pro.forEach((el)=>addProduct(el))
}
function HtoL() {
    var main = document.getElementById("products");
    main.innerHTML = null
    var pro = JSON.parse(localStorage.getItem("products"))
    pro.sort((el, ac) => ac.price - el.price)
    pro.forEach((el)=>addProduct(el))
}
function tanishk() {
    var main = document.getElementById("products");
    main.innerHTML = null
    var pro = JSON.parse(localStorage.getItem("products"))
    var reduced = pro.filter(function (el) {
        return el.category == "tanishk"
    })
    console.log(reduced)
    reduced.forEach((el)=>addProduct(el))    
}
function frsh() {
    var main = document.getElementById("products");
    main.innerHTML = null
    var pro = JSON.parse(localStorage.getItem("products"))
    var reduced = pro.filter(function (el) {
        return el.category == "frsh"
    })
    console.log(reduced)
    reduced.forEach((el)=>addProduct(el))    
}
function antique() {
    var main = document.getElementById("products");
    main.innerHTML = null
    var pro = JSON.parse(localStorage.getItem("products"))
    var reduced = pro.filter(function (el) {
        return el.category == "antique"
    })
    console.log(reduced)
    reduced.forEach((el)=>addProduct(el))    
}
function viewCart() {
    window.location.href = "cart.html"
}