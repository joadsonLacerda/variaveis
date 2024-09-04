
let pesoAdicionado = 15
let ajuste = 0.15
let pesoObjeto = pesoAdicionado + ajuste
let parteInteira = Math.floor(pesoObjeto)
let parteDecimal = Math.floor((pesoObjeto % 1) * 100)
let resultado = parteInteira + 'h' + parteDecimal


console.log(resultado) 
