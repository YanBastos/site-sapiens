// URL do feed RSS

const feedUrl = "https://rss.app/feeds/Ggp9pj0bvBgbvJfC.xml"

// Elemento onde o fed vai ficar
const feedContainer = document.getElementById("feed");

// Requisição ao feed RSS utilizando Fetch API
// Fornece uma interface JS para acessar e manipular partes do pipeline HTTP

fetch(feedUrl)
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const items = xmlDoc.querySelectorAll("item");

        let feedHTML = "";

        items.forEach(item => {
            const title = item.querySelector("title").textContent;
            const link = item.querySelector("link").textContent;
            const description = item.querySelector("description").textContent;

            feedHTML += `
                <div class="feed-item">
                    <h2><a href="${link}" target="_blank">${title}</a></h2>
                    <p>${description}</p>
                </div>
            `;
        });

        feedContainer.innerHTML = feedHTML;
    })
    .catch(error => {
        console.error("Erro ao carregar o feed:", error);
    });


// ShowMore Button

document.addEventListener("DOMContentLoaded", function () {
    const showMoreBtn = document.getElementById("show-more-btn");
    const showLessBtn = document.getElementById("show-less-btn");
    const newsContainer = document.getElementById("feed");
    const news = newsContainer.querySelectorAll(".feed-item");

    const numNewsToShow = 3; // define  número de noticias que serão vistas

    let visibleNews = numNewsToShow;

    // Esconde as noticias
    for (let i = numNewsToShow; i < news.length; i++) {
        news[i].style.display = "none";
    }

    function updateVisibility() {
        for (let i = 0; i < news.length; i++) {
            if (i < visibleNews) {
                news[i].style.display = "block";
            } else {
                news[i].style.display = "none";
            }
        }

        showMoreBtn.style.display = visibleNews < news.length ? "block" : "none";
        showLessBtn.style.display = visibleNews > numNewsToShow ? "block" : "none";
    }

    showMoreBtn.addEventListener("click", function () {
        visibleNews += numNewsToShow;
        updateVisibility();
    });

    showLessBtn.addEventListener("click", function () {
        visibleNews -= numNewsToShow;
        updateVisibility();
    });

    // Exibir ShowLess somente se houver mais imagens que o limite
    showLessBtn.style.display = visibleNews > numNewsToShow ? "block" : "none";
});


