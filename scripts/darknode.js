let btn = document.querySelector("#btndark");
let documento = document.querySelector("html");
console.log(btn);

function cambiarModo() {
    documento.classList.toggle("dark");
}
btn.addEventListener("click", cambiarModo);