
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
        title: "titulo 1",
        text: "vapo vapp",
        image: "image/image",
        link: "link1",
        github: "github1"
    },
    
    {
        title: "titulo 2",
        text: "vapo vapp",
        image: "image/image",
        link: "link 2",
        github: "github 2"
    },
    
    {
        title: "titulo 3",
        text: "vapo vapp",
        image: "image/image",
        link: "link 3",
        github: "github 3"
    },
    
];

const containerProjetos = document.getElementById("container-projetos")

containerProjetos.innerHTML = arrayDetails.map((quadro, index) => `
    <div class="projetos">
        <button type="button" class="ver-mais" onclick="showDetails(${index})">Mais Detalhes</button>
        <img src="favicon.ico" alt="">
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
                <img src="mini-pablo.png" alt="">
            </div>

            <div class="details-text col-12">
                <span class="h4 details-title">${quadro.title}</span>

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


function closeDetails(){
    const closeDetails = document.querySelector(".details-container")

    closeDetails.style.display = "none";

    document.querySelectorAll('.header, .main, .footer').forEach((element) =>{
        element.style.filter = 'blur(0px)'
    })

}