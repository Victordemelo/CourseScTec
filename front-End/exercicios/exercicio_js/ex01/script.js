function calcularDesconto() {
    let nomeProduto = document.getElementById("nome").value
    let precoProduto = parseFloat(document.getElementById("valor").value)
    let descontoProduto = parseFloat(document.getElementById("desconto").value)

    let valorDesconto = precoProduto * (descontoProduto / 100)
    let valorFinal = precoProduto - valorDesconto

    if (valorFinal < 0 || valorDesconto > precoProduto) {
        console.log("Não foi possivel realizar a venda, pois o desconto foi maior que o valor do produto.")
        alert("Não foi possivel realizar a venda, pois o desconto foi maior que o valor do produto.")
    } else {
        console.log(`O produto ${nomeProduto}, possui o valor de R$${precoProduto}, vai ser aplicado um desconto de ${descontoProduto}%, onde o valor final da fruta ou verdura, vai ser de R$${valorFinal}`)
        alert(`O produto ${nomeProduto}, possui o valor de R$${precoProduto}, vai ser aplicado um desconto de ${descontoProduto}%, onde o valor final da fruta ou verdura, vai ser de R$${valorFinal}`)   
    }
}


