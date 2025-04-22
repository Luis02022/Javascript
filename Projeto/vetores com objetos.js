// Criando um vetor de objetos
const usuarios = [
    {nome: 'Marta', idade: 30},
    {nome: 'José', idade: 35},
    {nome: 'Luis', idade: 19}
]

// Exibindo
usuarios.forEach(usuario => {
    console.log(`Nome: ${usuario.nome} \nIdade: ${usuario.idade}\n`)
})