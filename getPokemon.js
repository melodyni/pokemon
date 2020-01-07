const pokemons = require("./poke.json");
pokemons.forEach(poke => {
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
      <img
        src=${poke.art_url}
        class="pokemon"
        alt="notFound"
      />
      <div class="description"></div>
    </center>
  </div>`
  );
});
