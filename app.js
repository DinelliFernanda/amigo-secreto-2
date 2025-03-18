// Array para armazenar os nomes 
let amigos = [];

// Adicionar amigos à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nomeAmigo = input.value.trim();

// Verificar se o nome não é vazio
    if (nomeAmigo !== "") {
        amigos.push(nomeAmigo);
        atualizarLista();
    }

// Limpando o input
    input.value = "";
    input.focus();
}

// Atualizar a lista de amigos na interface
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário ter pelo menos 2 amigos para sortear.");
        return;
    }

// Embaralha a lista
    const amigosSorteados = [...amigos];
    for (let i = amigosSorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosSorteados[i], amigosSorteados[j]] = [amigosSorteados[j], amigosSorteados[i]];
    }

// Exibe os resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa os resultados anteriores

    amigosSorteados.forEach((amigo, index) => {
        const li = document.createElement("li");
        const amigoSorteado = amigosSorteados[(index + 1) % amigosSorteados.length]; // Sorteia um amigo para cada um
        li.textContent = `${amigo} sorteou ${amigoSorteado}`;
        resultado.appendChild(li);
    });
}
