document.addEventListener("DOMContentLoaded", function() {
    writeCardsSection2();
});


function writeCardsSection2() {
    var cardSection = document.querySelector('.section-filmes-gdrive');

    if (cardSection) {
        // URL do servidor (substitua com a lógica apropriada para obter a URL desejada)
        var serverURL = 'https://raw.githubusercontent.com/leonelmiguins/crawlers/main/filmes/GDRIVE-FILMES.json';

        // Realiza o fetch dos dados
        fetch(serverURL)
            .then(response => response.json())
            .then(data => {
                const mincards = data.length - 6;
                const maxCards = data.length;
                // Aqui você pode usar os dados obtidos para criar seus cartões
                for (let i = mincards; i < maxCards; i++) {
                    var newCard = document.createElement('div');
                    newCard.className = 'card';
                    newCard.innerHTML = '<img src="' + data[i]['cover'] + '">'; // Certifique-se de ajustar a propriedade apropriada do objeto de dados
                    newCard.onclick = function() {
                        window.location.replace('preview.html');
                        localStorage.setItem('leoflix-movie-id', i); // Ajuste para a propriedade apropriada do objeto de dados
                        console.log(i)
                        localStorage.setItem('leoflix-server-id', 'GDRIVE-FILMES.json');
                    };

                    cardSection.appendChild(newCard);
                }
            })
            .catch(error => console.error('Erro ao obter dados:', error));
    } else {
        console.error("Elemento com a classe 'card-section-1' não encontrado.");
    }
}