// Seleciona a imagem SVG
const heartSvg = document.querySelector('.heart');

// Adiciona evento de clique para mudar a cor após o clique
heartSvg.addEventListener('click', () => {
    heartSvg.querySelector('path').style.fill = 'red'; // Muda a cor para vermelho após o clique
});