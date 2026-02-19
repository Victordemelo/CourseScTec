let imposto = 0.10;

exports.valor = function (a) {
    return a * imposto
}

exports.adicionar = function (a) {
    return a + (a * imposto)
}