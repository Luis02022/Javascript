const usuarios = [
    {nome: 'Marta', idade: 30},
    {nome: 'José', idade: 35},
    {nome: 'Luis', idade: 19}
]

console.log('Listando todos os usuários')
usuarios.forEach(usuario => 
    (`Nome: ${usuario.nome}, idade: ${usuario.idade}`))


//Filtrar idade maior que 30
const idadeMaiorQue30 = usuarios.filter(usuario => usuario.idade > 30)  


console.log(`\nIdade maior que 30`)
idadeMaiorQue30.forEach(usuario => {
    console.log(`Nome: ${usuario.nome}, idade: ${usuario.idade}`)
})


const usuarioEncontrado = usuarios.find(usuario => usuario.nome === `Marta`)

console.log(`Encontado usuário`)
console.log(usuarioEncontrado) //Resposta com objeto
console.log(`Nome: ${usuarioEncontrado.nome}, idade: ${usuarioEncontrado.idade}`)

// Buscar em uma lista 
console.log(`Lista com nomes dos usuários`)
const apenasNomes = usuarios.map(usuario => usuario.nome)
apenasNomes.forEach(nome => console.log(nome))




/*
i = 1
console.log(i++)
console.log(i)

y = 10
console.log(++y)
*/

// Soma idades
console.log(`\nSoma de todas as idades`)
const somaIdades = usuarios.reduce((total, usuario) => total + usuario.idade, 0)
console.log(`Soma de idades ${somaIdades}`)

// Transformar elementos 
const numeros = [2, 4, 6, 8, 9, 1]

console.log(`\nOperaçã ode multiplicação - dobrar valor`)
const numerosDobrados = numeros.map(numero => numero * 2)
console.log(numeros)
console.log(numerosDobrados)


console.log(`\nFiltrando números pares`)
const pares = numeros.filter(n => n % 2 === 0)
console.log(pares)


console.log(`\nFiltrando números impares`)
const impares = numeros.filter(n => n % 2 != 0)
console.log(impares)