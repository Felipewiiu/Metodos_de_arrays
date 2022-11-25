let livros = []
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const elementoParaInserirLivros = document.querySelector("#livros")

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endPointDaAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto)
}

function exibirLivrosNaTela (listaDeLivros){
    listaDeLivros.forEach(livro =>{
        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
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


const arrayBase = [1, 2, 3, 4, 5, 6, 7]

const mapTeste = arrayBase.map(elemento => elemento * 2) // escrevendo dessa maneira sem as chaves não precisa de return

console.log(mapTeste)



