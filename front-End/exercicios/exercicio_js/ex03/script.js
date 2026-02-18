let listaCarros = ["HB20", "Fusca", "FordKa", "Mareá", "Gol"];
let i = 0;
let escolhaUsuario;

do {
    escolhaUsuario = confirm(`Seu carro atual é: ${listaCarros[i]}. Deseja ir para o próximo?`);
    
    if (!escolhaUsuario) {
        break;
    }
    i++;
    
} while (i < listaCarros.length);

if (i >= listaCarros.length) {
    console.log("Fim da lista, você não selecionou nenhum carro...");
} else {
    console.log("Parabéns pela sua escolha: " + listaCarros[i]);
}