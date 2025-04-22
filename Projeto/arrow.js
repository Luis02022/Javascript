// Criar um arrow function 
const somar = (a,b) => {
    return a + b
}


const subtrair = (a,b) => a - b

const multiplicar = (a,b) => a *b

const dividir = (a, b) => a / b

// Chamando a função 
const soma = soma(2, 3)
const subtracao = subtrair(2,3)
const multipilcacao = multiplicar(3,5)
const divisao = dividir(9,6)

console.log(`Soma = ${soma}`)
console.log(`Subtração = ${subtracao}`)
console.log(`Multiplicação = ${multipilcacao}`)
console.log(`Divisão = ${divisao}`)