const cadastrar= () => {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    fetch('htpps://localhost:8080/usuarios',{
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        } ,
        body: JSON.stringify({ nome,email,senha })
    })
.then(response => response.json().then(data => ({status: response.status, body: data})))
.then(({status, body}) => {
        
    if(status >= 400){
        let erroMensagem = body.mensagem
        if(body.erros){
            erroMensagem += ' ' + Object.values(body.erros).join(', ')
        }
        mensagem.textContent = erroMensagem
        mensagem.classlist.remove('erro')
        mensagem.classlist.add('erro','visivel')
        
    } else{
        mensagem.textContent = body.mensagem || 'Usuario cadastrado com sucesso'
        mensagem.classlist.remove('sucesso')
        mensagem.classlist.add('sucesso','visivel')
        document.getElementById('cadastriform').reset()
    }
    exibirMensagem()
})
.catch(() => {
    mensagem.textContent = 'Erroao conectar ao servidor'
    mensagem.classlist.remove('sucesso')
    mensagem.classlist.add('erro', 'visivel')
    exibirMensagem()
})

const exibirMensagem = () => {
    const mensagem = document.getElementById('mensagem')
    mensagem.classlist.remove('oculto')
    setTimeout(() => fecharMensagem(),5000)

}
const fecharMensagem = () => {
    const mensagem = document.getElementById('mensagem')
    mensagem.classList.remove('visivel')
    setTimeout(() => mensagem.classList.add('oculto'), 5000)
}

    }
