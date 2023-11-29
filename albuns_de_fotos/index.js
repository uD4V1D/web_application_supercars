const url = "https://jsonserveroficial--davidferreira37.repl.co/carros";
const url_destaques = "https://jsonserveroficial--davidferreira37.repl.co/destaques";
let responseData;
let destaques;

const fetchData = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      responseData = data;
      postMethods();
      fetch(url_destaques)
        .then((dresponse) => {
          return dresponse.json();
        })
        .then((carrosselData) => {
          destaques = carrosselData;
          carrossel();
        })
        .catch((error) => {
          console.error('Houve um erro:', error);
        });
    })
    .catch((error) => {
      console.error('Houve um erro:', error);
    });
};

const container = document.querySelector('.card-container');

const postMethods = () => {
  responseData.forEach((postData, index) => {
    const postElement = document.createElement('div');
    postElement.classList.add('card');

    const verMaisLink = document.createElement('a');
    verMaisLink.href = `detalhes.html?id=${postData.id}`;

    postElement.innerHTML = `
      <a href="${verMaisLink}">
        <img src="${postData.img}" alt="${postData.titulo}"> 
      </a>
      <h2>${postData.titulo}</h2>
    `;

    const verMaisButton = document.createElement('button');
    verMaisButton.classList.add('styled-button');
    verMaisButton.textContent = postData.botao;

    verMaisLink.appendChild(verMaisButton);
    postElement.appendChild(verMaisLink);
    container.appendChild(postElement);
  });
};

const carrossel = () => {
  const container = document.querySelector('.carousel-inner');

  destaques.forEach((data, index) => {
    const divImg = document.createElement('div');
    divImg.classList.add('carousel-item');

    
    if (index === 0) {
      divImg.classList.add('active');
    }

    const imgElement = document.createElement('img');
    imgElement.src = data.img;
    imgElement.alt = data.titulo;
    imgElement.classList.add("d-block", "w-100")

    divImg.appendChild(imgElement);
    container.appendChild(divImg);
  });
};


fetchData(url);
