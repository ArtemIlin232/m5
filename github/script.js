let searchValue = document.getElementById("searchValue")
let searchBtn = document.getElementById("searchBtn")
let card = document.getElementById("card")
let load = document.getElementById("load")

let dataCard;

searchBtn.addEventListener("click" , getCard)

card.classList.add("d-none");
load.classList.add("d-none");

function getCard() {
    card.classList.add("d-none");
    load.classList.remove("d-none");
}