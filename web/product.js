let $miniaturas = document.querySelectorAll(".miniaturas");

$miniaturas.forEach((miniatura) => {
  miniatura.addEventListener("click",changes);
})

function changes(event){
  console.log(event);
}