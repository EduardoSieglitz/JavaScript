const Cliente = document.getElementById("Cliente"), Produto = document.getElementById("Produto");
const Quantidade = document.getElementById("Quantidade"), Valor = document.getElementById("Valor"), regex = /^[a-zA-Z\s]*$/;

function required() {
    const quantidade = parseInt(Quantidade.value);
    if (Cliente.value.trim() === "" || !regex.test(Cliente.value) || Cliente.value.length > 50 || Cliente.value.length < 2) {
        document.getElementById("textCliente").innerHTML = "Preenchao o campo Cliente corretamente";
        Cliente.style.border = " 1px solid #ce1010"
    } else {
        document.getElementById("textCliente").innerHTML = "";
        Cliente.style.border = " 1px solid #1C1E21"
    }
    if (Produto.value.trim() === "" || Produto.value.length > 20 || Produto.value.length < 2 || !regex.test(Produto.value)) {
        document.getElementById("textProduto").innerHTML = "Preenchao o campo Produto corretamente";
        Produto.style.border = " 1px solid #ce1010"
    } else {
        document.getElementById("textProduto").innerHTML = "";
        Produto.style.border = " 1px solid #1C1E21"
    }

    if (quantidade === 0 || quantidade <= 0 || isNaN(Quantidade.value) || Quantidade.value > 1000) {
        document.getElementById("textQuantidade").innerHTML = "Preenchao o campo Quantidade corretamente";
        Quantidade.style.border = " 1px solid #ce1010"
    } else {
        document.getElementById("textQuantidade").innerHTML = "";
        Quantidade.style.border = " 1px solid #1C1E21"
    }

    if (Valor.value.trim() === "" || Valor.value.length > 10000 || Valor.value.length < 50) {
        document.getElementById("textValor").innerHTML = "Preenchao o campo Valor corretamente";
        Valor.style.border = " 1px solid #ce1010"
    } else {
        document.getElementById("textValor").innerHTML = "";
        Valor.style.border = " 1px solid #1C1E21"
    }
}

const form = document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    required();
});

document.querySelector('input[name = "cliente"]').addEventListener("input", () => {
    required();
});

document.querySelector('input[name = "produto"]').addEventListener("input", () => {
    required();
});

document.querySelector('input[name = "quantidade"]').addEventListener("input", () => {
    required();
});

document.querySelector('input[name = "valor"]').addEventListener("input", () => {
    required();
});

document.getElementById("Mais").addEventListener("click", () => {
    let quantidade = parseInt(document.getElementById("Quantidade").value);
    document.getElementById("Quantidade").value = quantidade += 1;
    if (quantidade >= 0) {
        document.getElementById("textQuantidade").innerHTML = "";
        Quantidade.style.border = " 1px solid #1C1E21"
    }
});

document.getElementById("Menos").addEventListener("click", () => {
    let quantidade = parseInt(document.getElementById("Quantidade").value);
    document.getElementById("Quantidade").value = quantidade -= 1;
    if (quantidade <= 0) {
        document.getElementById("textQuantidade").innerHTML = "Preenchao o campo Quantidade corretamente";
    }
})
