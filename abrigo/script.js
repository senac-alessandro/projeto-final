const abrigos = [] //banco de dados, seu escopo é global

function menu() {    
    const perguntaMenu = Number(prompt(`===== ABRIGOS TEMPORÁRIOS =====
        1. Cadastrar abrigo
        2. Listar abrigos
        3. Procurar abrigo
        4. Sair
        Escolha uma opção:`))

    //direciona conforme opção digitada pelo usuário    
    if (perguntaMenu === 1) { // '1' === 1
        cadastrarAbrigo()
    } else if (perguntaMenu === 2) {
        listarAbrigos()        
    } else if (perguntaMenu === 3) {
        procurarAbrigo()        
    } else if (perguntaMenu === 4) {
        return //isso encerra a função
    }

    menu()    
}

function cadastrarAbrigo() {
    const novo = {}
    novo.nome = prompt('Qual o nome?')
    novo.endereco = prompt('Qual o endereço?')
    novo.cidade = prompt('Qual a cidade?')
    novo.telefone = prompt('Qual o telefone?')
    novo.capacidade = prompt('Qual a capacidade?')
    abrigos.push(novo)
}

function listarAbrigos() {
    console.log('--------------------')
    console.log('LISTAGEM DE ABRIGOS:')
    console.log('--------------------')

    console.log('CÓDIGO |    NOME    |    ENDEREÇO    | TELEFONE | CAPACIDADE | CIDADE')

    for(let i = 0; i < abrigos.length; i++) {        
        console.log(`${i+1} | ${abrigos[i].nome}  |  ${abrigos[i].endereco}  |  ${abrigos[i].telefone}  |  ${abrigos[i].capacidade}  |  ${abrigos[i].cidade}`)
    }
}

function procurarAbrigo() {
    console.log('chamou o procurarAbrigo')
}

menu() // chama somente 1x quando carregar o navegador