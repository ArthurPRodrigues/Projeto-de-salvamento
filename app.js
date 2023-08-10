console.log("Rodando o sistema de gerenciamento de jogos")
console.log("aplicação está se concectando ao banco de dados")

var entrada = document.querySelector("input"); 

var frase = "Está errado!";

function mostra(frase) {
    document.write(frase);
    return frase;
}

if (entrada.value !== "0") { 
    mostra(frase);
}
