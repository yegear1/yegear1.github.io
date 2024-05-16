function avancarCarrossel() {
  var carousel = document.querySelector('#carouselExampleCaptions');
  carousel.querySelector('[data-bs-slide="next"]').click();
}

var intervalo = 6000; // 3 segundos

var intervaloID = setInterval(avancarCarrossel, intervalo);

carousel.addEventListener('mouseenter', function() {
  clearInterval(intervaloID);
});

carousel.addEventListener('mouseleave', function() {
  intervaloID = setInterval(avancarCarrossel, intervalo);
});

const profileButton = document.querySelector("profileButton");
const modal = document.querySelector("loginModal");
const buttonClose = document.querySelector("dialogbutton")

profileButton.onclick = function () {
  modal.showModal()
}

buttonClose.onclick = function () {
  modal.close()
}
