let $miniaturas = document.querySelectorAll(".miniaturas");

$miniaturas.forEach((miniatura) => {
  miniatura.addEventListener("click",changes);
})

function changes(event){
  console.log(event);
}

function change(num){
  image = document.querySelectorAll(".clothes-color img")[num].src;
  description = document.querySelectorAll(".clothes-color img")[num].alt;
  big = document.images["imageMain"];
  text = document.getElementById("colors");
  big.src = image;
  text.innerHTML = description;
}