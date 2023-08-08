const carousel = document.querySelector("carousel");
firstGroup = carousel.querySelector("group")[0];
arrowIcons = document.querySelector("i");


let isDragStart = false, prevPageX, prevScrollLeft;

const showHideIcons = () => {
    // Mostrar ou não os icones depois de mover para x lado

    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstGroup.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60)
    });
});
