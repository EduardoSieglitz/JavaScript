const btn = document.querySelector("#btn").addEventListener("click", function (e) {
    var primeiroItem = document.getElementById("primeiroItem").value,
        segundoItem = document.getElementById("segundoItem").value,
        terceiroItem = document.getElementById("terceiroItem").value;
    validacao(primeiroItem, segundoItem, terceiroItem);


    //Validação
    function validacao(item1, item2, item3) {
        if (item1 == undefined || item1 == null || item1 == "") {
            return alert("Insira um valor no campo primeiro");
        }
        if (item2 == undefined || item2 == null || item2 == "") {
            return alert("Insira um valor no campo segundo");
        }
        if (item3 == undefined || item3 == null || item3 == "") {
            return alert("Insira um valor no campo terceiro");
        }
        document.getElementById("tableItem1").innerHTML = primeiroItem;
        document.getElementById("tableItem2").innerHTML = segundoItem;
        document.getElementById("tableItem3").innerHTML = terceiroItem;
        return alert("itens inseridos na tabela com sucesso");
    }
});
