let likes = 0;

const botaoLike = document.getElementById("like");
const contador = document.getElementById("likes");

botaoLike.addEventListener("click", () => {

likes++;

contador.innerHTML = likes;

});

document.getElementById("favorito").addEventListener("click", () => {

alert("⭐ Obrigado por favoritar o blog!");

});

document.getElementById("compartilhar").addEventListener("click", () => {

alert("📤 Compartilhe este blog com seus amigos!");

});

function comentar(){

const texto = document.getElementById("texto");

const lista = document.getElementById("lista");

if(texto.value.trim()===""){

alert("Digite um comentário.");

return;

}

const novo = document.createElement("div");

novo.className="comentario";

novo.innerHTML="💬 "+texto.value;

lista.prepend(novo);

texto.value="";

}
