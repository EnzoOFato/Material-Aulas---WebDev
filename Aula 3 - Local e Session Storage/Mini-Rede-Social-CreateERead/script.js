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
        image: "https://placedog.net/150?random=3",
        date: "12/10/2023 12:00:00"
    }
];


// Inicialização
window.onload = function() {
    displayPosts();
    carregarPosts();

    document.querySelector("#postList").addEventListener("click", handleclick);
    document.getElementById('postForm').addEventListener('submit', addPost); 
};

function handleclick(event){
    console.log(event.target)
    const action = event.target.dataset.action
    const indice = event.target.dataset.index

    if(action == "Editar"){
        editarPost(indice)
    }
    if(action == "Apagar"){
        apagraPost(indice)
    }
}

// Função para exibir os posts
function displayPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach((pegaPost, indice) => {
            const postElement = document.createElement('div');
            postElement.classList.add('card-post');
  
            postElement.innerHTML = `
                <p>${pegaPost.text}</p>
                ${pegaPost.image ? `<img src="${pegaPost.image}" alt="Imagem do post" style="max-width:150px;">` : ""}
                <p><em>Categoria: ${pegaPost.category}</em></p>
                <p><em>Data e Hora: ${pegaPost.date}</em></p>
                <button data-action="Editar" data-index="${indice}"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
                <button data-action="Apagar" data-index="${indice}"><i class="fa-solid fa-eraser"></i> Apagar</button>
                <hr style="margin:30px;">`;
               
            postList.append(postElement);
        });
}

// Função para adicionar um novo post
function addPost(event) {
    event.preventDefault();
    
    const postText = document.getElementById('postText').value;
    const postCategory = document.getElementById('postCategory').value;
    const postImage = document.getElementById('postImage').value
    const postDate = new Date().toLocaleString(); 

    const post = { 
        text: postText, 
        category: postCategory, 
        image: postImage, 
        date: postDate 
    };
    
    posts.unshift(post);
    
    document.getElementById('postForm').reset();
    
    salvarPost();
    displayPosts();
}

function editarPost(indice){
    const novoTexto = prompt("Edite seu post");
    posts[indice].text = novoTexto;
    salvarPost();
    displayPosts();
}

function apagraPost(indice){
    const confirmar = confirm("Realmente deseja apagar o post?")
    if(confirmar){
        posts.splice(indice,1)
    }
    salvarPost();
    displayPosts();
}

function salvarPost(){
    localStorage.setItem("posts", JSON.stringify(posts))
}

function carregarPosts(){
    const postGuardados = localStorage.getItem("posts")
    if(postGuardados){
        posts = JSON.parse(postGuardados)
    }
}