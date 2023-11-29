const urlParams = new URLSearchParams(window.location.search);
const carId = urlParams.get('id');

fetch(`https://jsonserveroficial--davidferreira37.repl.co/carros/${carId}`)
  .then(response => response.json())
  .then(carDetails => {
    console.log(carDetails);
    const carName = document.querySelector('.carName')
    const titulo = document.createElement('h1')
    titulo.textContent = carDetails.titulo
    carName.appendChild(titulo)
    const descricao = document.querySelector(".descricao")
    const paragrafo = document.createElement("p")
    paragrafo.textContent = carDetails.descricao
    descricao.appendChild(paragrafo)

    const lista = document.querySelector(".especificacoes")
    const velocidade = document.createElement("li")
    const preco = document.createElement("li")
    const ano = document.createElement("li")
    const motor = document.createElement("li")
    const lugares = document.createElement("li")
    velocidade.textContent = carDetails.velocidade
    preco.textContent = carDetails.preco
    ano.textContent = carDetails.ano
    motor.textContent = carDetails.motor
    lugares.textContent = carDetails.lugares
    lista.appendChild(velocidade)
    lista.appendChild(preco)
    lista.appendChild(ano)
    lista.appendChild(motor)
    lista.appendChild(lugares)
    



    fetch('https://jsonserveroficial--davidferreira37.repl.co/album')
      .then(response => response.json())
      .then(albumData => {

        const carouselInner = document.querySelector('.carousel-inner');

        const carAlbum = albumData.find(item => item.id === parseInt(carId));

        const addZoomToImage = imgElement => {
          $(imgElement).elevateZoom({
            zoomType: "inner",
            cursor: "crosshair"
          });
        };

        // ... seu código existente para criar e adicionar as imagens ao carrossel
        if (carAlbum) {
          for (let i = 2; i <= 5; i++) {
            const imgPath = carAlbum[`img${i}`];

            if (imgPath) {
              const carouselItem = document.createElement('div');
              carouselItem.classList.add('carousel-item');

              if (i === 2) {
                carouselItem.classList.add('active'); // Adiciona a classe 'active' à primeira imagem
              }

              const imgElement = document.createElement('img');
              imgElement.src = imgPath;
              imgElement.alt = `Imagem ${i}`;
              imgElement.classList.add('d-block', 'w-100');

              carouselItem.appendChild(imgElement);
              carouselInner.appendChild(carouselItem);


            }
          }
        } else {
          console.log('Álbum do carro não encontrado.');
        }
      })
      .catch(error => console.error('Erro ao buscar álbum:', error));
  })
  .catch(error => console.error('Erro ao buscar detalhes do carro:', error));

  function getMap(){
    mapboxgl.accessToken = 'pk.eyJ1IjoidWQ0djFkIiwiYSI6ImNscGQ3MDExejBxdjkybG5veGlmc2xtMWgifQ.ULLGgaN2FYEwWSiZzDD1Ww';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-46.6741841866569, -23.567647621810632], // starting position [lng, lat]
        zoom: 9, // starting zoom
    });

}

function get_locations(){
    const url = "https://replit.com/@DavidFerreira37/JSONServer#db.json"
    fetch(url)
        .then
}

getMap();