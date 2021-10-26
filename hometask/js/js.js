//task 1(a)

const btn1 = document.createElement("button");
btn1.innerText = "Планета с ID 1";
document.body.append(btn1);
btn1.addEventListener("click", () => {
  fetch("https://swapi.dev/api/planets/1/")
    .then((responce) => responce.json())
    .then((data) => {
      console.log(data);
      btn1.after(earth(data));
    })
    .catch((e) => console.log(e));
});

function earth(data) {
  const div = document.createElement("div");
  div.insertAdjacentHTML(
    "afterbegin",
    `
    <div>
      <span>Name: ${data.name}</span><br>
      <span>Rotation period: ${data.rotation_period}</span><br>
      <span>Orbital period: ${data.orbital_period}</span><br>
      <span>Diametr: ${data.diameter}</span><br>
      <span>Climat: ${data.climate}</span><br>
      <span>Gravity: ${data.gravity}</span><br>
      <span>Terrain: ${data.terrain}</span><br>
      <span>Water: ${data.surface_water}</span><br>
      <span>Population: ${data.population}</span><br>
    </div>
  `
  );
  return div;
}