let idade = 70

if(idade < 16){
    console.log("menores de 16 não podem votar")
}else if(idade >= 16 && idade <= 17){
    console.log("entre 16 e 17, voto opcional")
}else if(idade == 18){
    console.log("a partir de 18, voto obrigatório")
}else if(idade >= 65){
    console.log("maiores que 65 não são obrigatórios a votar")
}