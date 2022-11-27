function aplicarDesconto (livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {... livro, preco: livro.preco - (livro.preco * desconto)}
        /// Operador com 3 pontos ele faz uma cópia do objeto
    })

    return livrosComDesconto
}

// exemplo utilizando método map

const arrayBase = [1, 2, 3, 4, 5, 6, 7]

const mapTeste = arrayBase.map(elemento => elemento * 2) // escrevendo dessa maneira sem as chaves não precisa de return

console.log(mapTeste)



