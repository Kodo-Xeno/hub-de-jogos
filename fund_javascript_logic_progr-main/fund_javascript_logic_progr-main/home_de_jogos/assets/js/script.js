function abrirJogo(url) {
    window.open(url, '_blank');
}

function playHihi() {
    const audio = document.getElementById('hihi-audio');
    audio.play();
    alert('Michael Jackson: Hihi!');
}
// script.js

// Função para abrir o jogo (já deve existir)
function abrirJogo(url) {
    window.open(url, '_blank');
}

// Função para tocar o áudio (já deve existir)
function playHihi() {
    const audio = document.getElementById('hihi-audio');
    audio.play();
}

// Nova função para a barra de pesquisa
function searchGames() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const games = document.querySelectorAll('.jogo'); // Seleciona todos os divs de jogo

    games.forEach(game => {
        const gameText = game.textContent.toLowerCase(); // Ou o texto dentro de um h3/p do jogo
        if (gameText.includes(searchTerm)) {
            game.style.display = 'flex'; // Mostra o jogo se corresponder
        } else {
            game.style.display = 'none'; // Esconde o jogo se não corresponder
        }
    });

    // Opcional: Adicione um feedback se nenhum jogo for encontrado
    if (document.querySelectorAll('.jogo[style*="display: flex"]').length === 0) {
        // Pode exibir uma mensagem "Nenhum jogo encontrado"
        console.log("Nenhum jogo encontrado para: " + searchTerm);
    }
}