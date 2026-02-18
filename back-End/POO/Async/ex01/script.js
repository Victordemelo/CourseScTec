// setTimeout(()=> {
//     console.log("Alerta");
// },3000);

// setInterval(()=> {
//     console.log("Alerta");
// },3000);

console.log("Inicio da minha execucao")

function buscaDadosdoServidor() {

    //CODIGO QUE BUSCA DADOS DO SERVIDOR
    return new Promise((resolve, rejected) => {
        console.log("Buscando dados do servidor");

        setTimeout(() => {
            let sucesso = Math.random() > 0.5;

            if (sucesso) {
                resolve("Dados recebidos com sucesso")
            } else {
                rejected("Falha ao buscar dados do servidor...")
            }
        }, 2000);
    });
}

// OU

const minhaFuncaoAssincrona = async () => {
    try{
        const resultado = await buscaDadosdoServidor();
        console.log(resultado)
    } catch(erro) {
        console.error(erro);
        
    }
}

minhaFuncaoAssincrona();

console.log("Final da minha execucao")