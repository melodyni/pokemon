const pokemons = require("./poke.json");
const colors = {
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
  const types = poke.types;
  const firstImage = colors[types[0]];
  const secondImage = colors[types[1]];

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
          <div>
            <img
              src="${firstImage};"
              style="height:50px;width:50px;"
              alt="notFound"
            />
            <div>Grass</div>
          </div>
          <div>
            <img
              src="${secondImage};"
              style="height:50px;width:50px;"
              alt="notFound"
            />
            <div>Poison</div>
          </div>
        </div>
      </div>
    </center>
  </div>`
  );
});
