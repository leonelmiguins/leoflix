document.addEventListener("DOMContentLoaded", function() {
    acessMoviesJson();
});

function openVideoPopup() {
    window.location.replace('player.html');
}


acessMoviesJson()
 
function acessMoviesJson() {
    const id = localStorage.getItem('leoflix-movie-id');
    const serve = localStorage.getItem('leoflix-server-id');
    fetch('https://raw.githubusercontent.com/leonelmiguins/crawlers/main/filmes/'+serve)
    .then(response => {
        if (!response.ok) {
        throw new Error('Erro ao carregar o arquivo JSON');
    }
   return response.json();
})
.then(filmes => {

    document.querySelector('.info-title').innerHTML = filmes[id]['title'];
    document.querySelector('.info-sinopse').innerHTML = filmes[id]['sinopse'];
    document.querySelector('.cover').src = filmes[id]['cover'];
    localStorage.setItem('leoflix-movie-url', filmes[id]['link']);
    document.querySelector('.info-year').innerHTML = filmes[id]['year'];
    document.querySelector('.info-genre').innerHTML = filmes[id]['genre'];
    document.querySelector('.background-container').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.748), rgba(0, 0, 0, 0.762)), url("+filmes[id]['wallpaper']+")";

})
.catch(error => console.error('Erro:', error));
}