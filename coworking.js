// ShowMore Button

document.addEventListener("DOMContentLoaded", function () {
    const showMoreBtn = document.getElementById("show-more-btn");
    const showLessBtn = document.getElementById("show-less-btn");
    const imageContainer = document.querySelector(".image-container");
    const images = imageContainer.querySelectorAll("img");
    
    const numImagesToShow = 3; // Define o número de imagens a serem mostradas a cada clique no botão.

    let visibleImages = numImagesToShow;

    // Esconder imagens que não estão dentro do limite inicial.
    for (let i = numImagesToShow; i < images.length; i++) {
        images[i].style.display = "none";
    }

    function updateVisibility() {
        for (let i = 0; i < images.length; i++) {
            if (i < visibleImages) {
                images[i].style.display = "block";
            } else {
                images[i].style.display = "none";
            }
        }

        showMoreBtn.style.display = visibleImages < images.length ? "block" : "none";
        showLessBtn.style.display = visibleImages > numImagesToShow ? "block" : "none";
    }

    showMoreBtn.addEventListener("click", function () {
        visibleImages += numImagesToShow;
        updateVisibility();
    });

    showLessBtn.addEventListener("click", function () {
        visibleImages -= numImagesToShow;
        updateVisibility();
    });

    // Exibir o botão "Mostrar Menos" apenas se houver mais imagens do que o limite inicial.
    showLessBtn.style.display = visibleImages > numImagesToShow ? "block" : "none";
});


// Mover cards

const slider = document.querySelector( '.escr-cards' );
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {    //  "e" evento
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};

let stopDragging = function (event) {
    mouseDown = false
};

slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
});

// Adicionando EventListener

slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);



function scrollCards() {
    const slider = document.querySelector( '.cards' );
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {    //  "e" evento
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};

let stopDragging = function (event) {
    mouseDown = false
};

slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
});

// Adicionando EventListener

slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);
}

scrollCards()