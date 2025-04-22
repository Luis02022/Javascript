// Criando vetores
const frutas = ['Maçã', 'Banana', 'Laranja']
console.log(frutas)


// Acessar elementos específicos
console.log(frutas[0])
console.log(frutas[1])

// Adicionando elementos
frutas.push("Uvas")
console.log(frutas)-


// Remover elementos
frutas.pop() // Remove o último elemento 
console.log(frutas)

frutas.splice(1,1)
console.log(frutas)

frutas.forEach((fruta, index) => {
    console.log(`${index}: ${fruta}`)
})