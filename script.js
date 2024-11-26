const url = "https://api.thecatapi.com/v1/images/search"; //url de la API a usar

const btnMiau = document.getElementById("btnCat");
const contenedorImg = document.getElementById("img");

//Llama los datos de la API y muestra una imagen
function mostrarGato() {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al acceder al cargar los datos');
      }
      return response.json();
    })
    .then(data => {
      const imgGato = data[0].url;
      contenedorImg.innerHTML = "";
    
      '<br>'
      const imgElement = document.createElement('img');
      imgElement.src = imgGato;
      contenedorImg.appendChild(imgElement);
    })
    .catch(error => {
      console.error(error);
    });
}

btnMiau.addEventListener("click", mostrarGato);