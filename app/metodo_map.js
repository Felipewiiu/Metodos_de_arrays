function aplicarDesconto (livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {... livro, preco: livro.preco - (livro.preco * desconto)}
        /// Operador com 3 pontos ele faz uma cópia do objeto
    })

    return livrosComDesconto
}



//Exemplo da utilização do método filter

const idade = [10, 18, 20, 30, 17, 5]
const podeDirigir = idade.filter(idade => {
    return idade >= 18
})

console.log(podeDirigir)