
console.log("O script foi carregado com sucesso!");


const titulo = document.getElementById("titulo");
titulo.textContent = "Título alterado pelo JavaScript";


const botao = document.getElementById("botao");
botao.addEventListener("click", () => {
    alert("Página não carregada");
});
