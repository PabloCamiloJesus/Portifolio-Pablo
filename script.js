
// Essa função está determinando o funcionamento do Botão de Ligar e Desligar o Sistema
var state = 0;

function onButton() {

    if (state == 0) {
        console.log("On");
        state = 1;
    } else if (state == 1) {

        console.log("Off")
        state = 0;
    } else {
        console.log("Error Circuit")
        state = 0;
    }
    // console.log("Funcionou")
}

// Este bloco fará com que o texto tenha efeito de digitado
const text = "Heyo, eu sou Pablo Camilo";
const typingText = document.getElementById("typingText");

let i = 0;
function typeEffect() {
    if (i < text.length) {
        typingText.innerHTML += text[i]; // Usa innerHTML para evitar sobrescrever
        i++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();


// Esse bloco está fazendo com que o underline da entrada pisque
const typeUnder = document.getElementById("typeUnder");

if (typeUnder.style.opacity === "") {
    typeUnder.style.opacity = 1;
}

setInterval(() => {
    typeUnder.style.opacity = typeUnder.style.opacity === "0" ? "1" : "0";
}, 750)

// Esse bloco vai fazer com que para cada item de array. haja um quadro para representá-lo, tanto quanto iam

const arrayDetails = [
    {
        title: "Cat Assist",
        text: "Consiste em uma central de atendimento para um Centro de Atividades Esportivas, no qual bifurca em dois principais serviços, o atendimento online, realizado por funcionários da secretaria do CAT 166 e o atendimento automatizado realizado por IA. Desenvolvido com React.js, Gemini, Firebase e dentre outras tecnologias",
        image1: "img/carousel-projects/Cat-Assist/banner1.png",
        image2: "img/carousel-projects/Cat-Assist/banner2.png",
        image3: "img/carousel-projects/Cat-Assist/banner3.png",
        link: "Ainda indisponível na web",
        github: "https://github.com/PabloCamiloJesus/cat-assist-web"
    },

    {
        title: "TechMage Chat",
        text: "Um chat online em tempo real para comunicação interna empresarial, focado especificamente em envio de mensagens rápidas e avisos.",
        image1: "img/carousel-projects/TechMage-Chat/banner1.png",
        image2: "img/carousel-projects/TechMage-Chat/banner2.png",
        image3: "img/carousel-projects/TechMage-Chat/banner3.png",
        link: "Ainda indisponível na web",
        github: "https://github.com/PabloCamiloJesus/chat-Magetech"
    },

    {
        title: "Pineapples Company",
        text: "Landpage com objetivo de representar um e-commerce de produtos esportivos, utilizando somente HTML e CSS. Se trata de um projeto que foi feito em período educacional.",
        image1: "img/carousel-projects/Pineapples-Company/banner1.png",
        image2: "img/carousel-projects/Pineapples-Company/banner2.png",
        image3: "img/carousel-projects/Pineapples-Company/banner3.png",
        link: "pinesports.netify.app",
        github: "https://github.com/PabloCamiloJesus/PineApple-Company"
    },

];

const containerProjetos = document.getElementById("container-projetos")

containerProjetos.innerHTML = arrayDetails.map((quadro, index) => `
    <div class="projetos">
        <button type="button" class="ver-mais" onclick="showDetails(${index})">Mais Detalhes</button>
        <img src="${quadro.image1}" alt="">
    </div>
    
`).join("")

// Esse aqui está fazendo com que ao clicar nos quadros de cada projeto, ele se abra para detalhes



function showDetails(index) {
    const detailsContainer = document.querySelector(".details-container");

    const quadro = arrayDetails[index]; // Obtém o item correto

    detailsContainer.innerHTML = `
        <div class="more-details">

            <div class="close-button col-12 d-flex justify-content-end">
                <button type="button" onclick="closeDetails()">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>

            <div class="details-img d-flex align-items-center flex-column col-12">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${quadro.image1}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${quadro.image2}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${quadro.image3}" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div class="details-text col-12">
                <span class="h3 details-title">${quadro.title}</span>

                <p class="details-description">
                    ${quadro.text}
                </p>

                <p class="link-paragraph">
                    <i class="bi bi-box-arrow-up-right"></i>
                    <a href="${quadro.link}" target="_blank" class="link-details me-2">${quadro.link}</a>
                </p>

                <p class="link-paragraph">
                    <i class="bi bi-github"></i>
                    <a href="${quadro.github}" target="_blank" class="github-details me-2">${quadro.github}</a>
                </p>
            </div>  
        </div>
    `;

    detailsContainer.style.display = "flex"; // Mostra o quadro correto

    // Aplica o efeito de blur no restante da página
    document.querySelectorAll('.header, .main, .footer').forEach((element) => {
        element.style.filter = 'blur(5px)';
    });
}


function closeDetails() {
    const closeDetails = document.querySelector(".details-container")

    closeDetails.style.display = "none";

    document.querySelectorAll('.header, .main, .footer').forEach((element) => {
        element.style.filter = 'blur(0px)'
    })

}