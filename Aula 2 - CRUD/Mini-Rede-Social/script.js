// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function(){
    mostraPost()
    document.querySelector("#postForm").addEventListener("submit", addPost)
}

// Create
function addPost(event){
    event.preventDefault()
    const textPost = document.querySelector("#postText").value
    const categoriaPost = document.querySelector("#postCategory").value
    const imagePost = document.querySelector("#postImage").value

    const novoPost = {
        text: textPost,
        category: categoriaPost,
        image: imagePost,
        date: new Date().toLocaleString()
    }

    posts.unshift(novoPost)
    mostraPost()
}
// Read
function mostraPost(){
    const listaPostagens = document.querySelector("#postList")
    listaPostagens.innerHTML = ""

    posts.forEach(post => {
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")

        cardPost.innerHTML = `
            <h2>${post.text}</h2>
            <img src="${post.image}">
            <p>Categoria: ${post.category}</p>
            <p>Data e Hora: ${post.date}</p>
            <span><button>Editar</button><button>Apagar</button></span>
        `
        listaPostagens.append(cardPost)
    })
}
// Update
function uptPost(){

}
// Delete
function apagaPost(){

}