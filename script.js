const listAnimes = {
  naruto: "https://akamai.sscdn.co/uploadfile/letras/playlists/c/8/d/2/c8d2c68c37e14169b08f2fe288bcda53.jpg",
  bleach: "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/12/anime-bleach-5.jpg",
  "hunter x hunter": "https://uep.edu.pl/wp-content/uploads/2021/05/Aktualizacje-Hunter-x-Hunter-w-sezonie-7.jpg",
  "one piece": "https://t.ctcdn.com.br/8SvPPxAMYD8DBlNBgbKlMSMJaXs=/640x360/smart/i527855.jpeg",
  "dragon ball": "https://noticiasdatv.uol.com.br/media/_versions/artigos_2021/dragon-ball-globoplay-reproducao-grande_fixed_large.jpg",
};

const addAnime = document.getElementById("search");
const addButton = document.querySelector(".button");
const divImages = document.querySelector(".images");
const errorMessage = document.querySelector(".error-message");

// Armazenar os animes
const animesMostrados = new Set();

addButton.addEventListener("click", () => {
  if (addAnime.value !== "") {
    // Tira os espeço em branco e tudo em minusculo
    const animeName = addAnime.value.trim().toLowerCase();
    
    errorMessage.textContent = "";

    if (listAnimes.hasOwnProperty(animeName)) {
      if (!animesMostrados.has(animeName)) {
        const img = document.createElement("img"); 
        img.src = listAnimes[animeName];
        img.alt = animeName;
        divImages.appendChild(img);
        
        animesMostrados.add(animeName);
        
        addAnime.value = "";
      } else {
        errorMessage.textContent = "O Anime já foi mostrado!";
      }     
    } else {
      errorMessage.textContent = "Anime não encontrado!";
    }
  } else {
    errorMessage.textContent = "Campo de pesquisa vazio. Insira um nome de anime.";
  }
});