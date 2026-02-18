function pedirPizza(){
    let escolhaUsuário = parseInt(document.getElementById("numeroPizza").value);
    let resultado = document.getElementById("resultado");

    console.log(escolhaUsuário)

    switch(escolhaUsuário){
        case 1:
            resultado.innerText = "Preparando pizza de Calabresa";
            console.log("Preparando a pizza de Calabresa") 
            break
        case 2:
            resultado.innerText = "Preparando pizza de Quatro Queijos";
            console.log("Preparando a pizza de Quatro Queijos") 
            break
        case 3:
            resultado.innerText = "Preparando pizza de Frango com Catupiry";
            console.log("Preparando a pizza de Frango com catupiry") 
            break
        case 4:
            resultado.innerText = "Preparando a pizza de Brigadeiro";
            console.log("Preparando a pizza de Brigadeiro") 
            break
        default:
            resultado.innerText = "Pedido não está na lista!";
            console.log("Pedido não está na lista!") 
    }
    
}