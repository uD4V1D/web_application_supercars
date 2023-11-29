const url = "https://jsonserveroficial--davidferreira37.repl.co/carros";
let responseData;

const fetchData = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      responseData = data;
      postMethods();
    })
    .catch((error) => {
      console.error('Houve um erro:', error);
    });
};

const container = document.querySelector('.card-container');

const postToDestaques = (id) => {
  fetch('https://jsonserveroficial--davidferreira37.repl.co/destaques', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(responseData.find(item => item.id === id)),
  })
    .then((response) => response.json())
    .then((data) => console.log('Card adicionado aos destaques:', data))
    .catch((error) => {
      console.error('Houve um erro ao adicionar aos destaques:', error);
    });
};

const postMethods = () => {
  responseData.forEach((postData, index) => {
    const postElement = document.createElement('div');
    postElement.classList.add('card');

    const verMaisLink = document.createElement('a');
    verMaisLink.href = `detalhes.html?id=${postData.id}`;

    postElement.innerHTML = `
      <a href="${verMaisLink}">
        <img src="${postData.img}" alt="${postData.titulo} class ="d-block w-100"> 
      </a>
      <h2>${postData.titulo}</h2>
    `;

    const verMaisButton = document.createElement('button');
    verMaisButton.classList.add('styled-button');
    verMaisButton.textContent = postData.botao;

    const adicionarDestaquesButton = document.createElement('button');
    adicionarDestaquesButton.classList.add('styled-button');
    adicionarDestaquesButton.textContent = 'Add destaque';

    verMaisLink.appendChild(verMaisButton);
    postElement.appendChild(verMaisLink);
    postElement.appendChild(adicionarDestaquesButton);
    container.appendChild(postElement);

    adicionarDestaquesButton.addEventListener('click', () => {
      postToDestaques(postData.id);
    });
  });
};

fetchData(url);
