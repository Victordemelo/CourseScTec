let pessoa = require("./commons/pessoa");
let soma = require("./commons/soma");
let imposto = require("./commons/calculoImposto")

victor = pessoa();
soma = soma(2,5);

console.log(JSON.stringify(victor));
console.log(JSON.stringify(soma)); 
console.log("Valor do produto com imposto: " + imposto.adicionar(10));
console.log("Valor do imposto: " + imposto.valor(10));
console.log("Taxa do imposto: " + imposto.imposto)
