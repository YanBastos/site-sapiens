// URL do feed RSS
const feedUrl = "https://rss.app/feeds/MyA24gAoIGwYwiRW.xml"

// Elemento onde o fed vai ficar
const feedContainer = document.createElement("feed");

// Requisição ao feed RSS utilizando Fetch API
//fornece uma interface JS para acessar e manipular partes do pipeline HTTP

fetch(feedUrl)
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/html");
        const items = xmlDoc.querySelectorAll("item");

        let feedHtml = "";

        items.forEach(Item => {
            const title = item.querySelector("title").textContent;
            const link = item.querySelector("link").textContent;
            const description = item.querySelector("description").textContent;

            feedHtml += `
                <div class="feedm-item">
                    <h2><a href="${link}" target="_blank">${title}</a></h2>
                    <p>${description}</p>
                </div>
                `;
        });

        feedContainer.innerHTML = feedHtml;
    })

    .catch(error => {
        console.error("Erro ao carregar o feed", error);
    });

