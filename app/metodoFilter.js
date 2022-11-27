const botoes = document.querySelectorAll(".btn")
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros))

function filtrarLivros (){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == "disponivel" ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados)
    if(categoria == "disponivel"){
        exibirValorTotaldisponiveisNaTela()
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livros => livros.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livros => livros.quantidade > 0)
}

function exibirValorTotaldisponiveisNaTela (){
    elementoComVaolrTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
        </div>
    `
}








//Exemplo da utilização do método filter

const idade = [10, 18, 20, 30, 17, 5]
const podeDirigir = idade.filter(idade => {
    return idade >= 18
})

console.log(podeDirigir)

 // outra maneira de se pegar o valor de uma tag com função anônima

botoes.forEach(elemento =>{
    elemento.addEventListener("click", () => {
        console.log(elemento.value)
    })
})

