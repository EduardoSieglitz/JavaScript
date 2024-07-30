const Nav = document.getElementById("Nav"),
Botao = document.querySelector(".botao");

function Active(){
    Nav.classList.toggle("active");
}
Botao.addEventListener("click", Active);


