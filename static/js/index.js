import API from "./api.js";

const api = new API();
const $characterContainer = document.querySelector("#character-container");

class Character {
  constructor({ name, img }) {
    this.name = name;
    this.img = img;
    this.render();
  }
  build() {
    return ` 
<article class="character">
    <div class="character-grid">
        <h2 class="name">${this.name}</h2>
        <img src="${this.img}" alt="">
    </div>
</article>`;
  }
  render() {
    $characterContainer.innerHTML = this.build();
  }
}

async function initApp(characterid) {
  const { name, image } = await api.getCharacterByNum(characterid);
  console.log(image);
  const rick = new Character({ name: name, img: image });
  rick.render();
}
initApp(1);

// let char = api.getCharacterByNum(1).then((data) => console.log(data));
