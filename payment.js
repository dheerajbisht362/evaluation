showpage();
function showpage() {
    var pay = document.getElementById("head")
    pay.innerText = "Total Payable Amount is " + localStorage.getItem("pr")
}
function proceed() {
    setTimeout(pay, 3000);
}
function pay() {
    alert("Your order is successfully placed")
    window.location.href = "products.html";
}