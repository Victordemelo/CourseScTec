//Lista de Produtos
const produtos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calca", preco: 39.99 },
    { id: 3, nome: "Tenis", preco: 259.99 },
];

//Transforma a lista em JSON 
const produtosJson = JSON.stringify(produtos);


// Vizualizando JS e Json
console.log(produtos);
console.log(produtosJson);

//Converte Json para JS
const produtosObj = JSON.parse(produtosJson);
console.log(produtosObj);