let livros = []
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const elementoParaInserirLivros = document.querySelector("#livros") // isso é a section dos livros
const elementoComVaolrTotalDeLivrosDisponiveis = document.querySelector('#valor_total_livros_disponiveis')

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endPointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto)
    console.table(livros)
}

function exibirLivrosNaTela (listaDeLivros){
    elementoComVaolrTotalDeLivrosDisponiveis.innerHTML = ""
    elementoParaInserirLivros.innerHTML = "" // Quando essa função for chamada ela lima a área de vendas
    listaDeLivros.forEach(livro =>{
        // let disponibilidade = verificarDisponibilidadeDoLivro (livro)

        let disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel"
// Operador ternário --> se a quantidade for maior que zero retona "livro__imagens" se não (:) retorna  "livro__imagens indisponivel"
        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
            ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${livro.categoria}</span>
            </div>
            </div>
        `
    })
}

// criando um código mais elegante

// function verificarDisponibilidadeDoLivro(livro){
//     if(livro.quantidade > 0){
//         return "livro__imagens"
//     }else{
//        return  "livro__imagens indisponivel"
//     }
// }


