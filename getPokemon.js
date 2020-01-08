const pokemons = require("./poke.json");
const image = {
  poison: "File:.//pics/poison.png",
  grass: "File:.//pics/grass.png",
  water: "File:.//pics/water.png",
  bug: "File:.//pics/bug.png",
  flying: "File:.//pics/flying.png",
  electric: "File:.//pics/electric.png",
  ground: "File:.//pics/ground.png",
  fairy: "File:.//pics/fairy.png",
  fire: "File:.//pics/fire.png",
  fighting: "File:.//pics/fight.png",
  steel: "File:.//pics/steel.png",
  dragon: "File:.//pics/dragon.png",
  psychic: "File:.//pics/psychic.png",
  normal: "File:.//pics/normal.png",
  rock: "File:.//pics/rock.png",
  ice: "File:.//pics/ice.png",
  ghost: "File:.//pics/ghost.png",
  dark: "File:.//pics/dark.png"
};

pokemons.forEach(poke => {
  const createDiv = function(div, power) {
    div += `<div>
    <img
      src="${image[power]}"
      style="height:50px;width:50px;"
      alt="notFound"
    />
    <div>${power}</div>
  </div>`;
    return div;
  };
  const powerDiv = poke.types.reduce(createDiv, "");

  console.log(
    `<div class="badge">
    <div style="display: flex;justify-content:center;" class="name">
      <div style="display: flex;justify-content:end;">
        <div class="textA">${poke.name}</div>
        <img
          src="File:.//pics/pokeball.png"
          class="pokeball"
          alt="notFound"
        />
      </div>
    </div>
    <center>
      <img src="${poke.art_url}" class="pokemon" alt="notFound" />
      <div
        class="description types"
        style="display:flex;justify-content:space-evenly;"
      >
        <div
          style="display: flex;justify-content: space-evenly;height:80px;width:250px ;"
        >
          ${powerDiv}
        </div>
      </div>
    </center>
  </div>`
  );
});
