let livros = []
const endPointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json"

buscaLivrosDaAPI ();

async function buscaLivrosDaAPI() {
    const res = await fetch(endPointDaAPI)
    livros = await res.json()
    console.table(livros)
}