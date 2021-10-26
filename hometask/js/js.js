//task 1(a)

// const btn1 = document.createElement("button");
// btn1.innerText = "Планета с ID 1";
// document.body.append(btn1);
// btn1.addEventListener("click", () => {
//   fetch("https://swapi.dev/api/planets/1/")
//     .then((responce) => responce.json())
//     .then((data) => {
//       console.log(data);
//       btn1.after(earth(data));
//     })
//     .catch((e) => console.log(e));
// });

// function earth(data) {
//   const div = document.createElement("div");
//   div.insertAdjacentHTML(
//     "afterbegin",
//     `
//     <div>
//       <span>Name: ${data.name}</span><br>
//       <span>Rotation period: ${data.rotation_period}</span><br>
//       <span>Orbital period: ${data.orbital_period}</span><br>
//       <span>Diametr: ${data.diameter}</span><br>
//       <span>Climat: ${data.climate}</span><br>
//       <span>Gravity: ${data.gravity}</span><br>
//       <span>Terrain: ${data.terrain}</span><br>
//       <span>Water: ${data.surface_water}</span><br>
//       <span>Population: ${data.population}</span><br>
//     </div>
//   `
//   );
//   return div;
// }


// task 1(b)

// const btn1 = document.createElement("button");
// btn1.innerText = "Фильм с ID 3";
// document.body.append(btn1);
// btn1.addEventListener("click", () => {
//   fetch("https://swapi.dev/api/films/3/")
//     .then((responce) => responce.json())
//     .then((data) => {
//       console.log(data);
//       btn1.after(film(data));
//     })
//     .catch((e) => console.log(e));
// });

// function film(data) {
//   const div = document.createElement("div");
//   div.insertAdjacentHTML(
//     "afterbegin",
//     `
//       <div>
//         <span>Title: ${data.title}</span><br>
//         <span>Episode: ${data.episode_id}</span><br>
//         <span>Synopsis: ${data.opening_crawl}</span><br>
//         <span>Director: ${data.director}</span><br>
//         <span>Producer: ${data.producer}</span><br>
//         <span>Date of release: ${data.release_date}</span><br>
//       </div>
//     `
//   );
//   return div;
// }

// task 1(c)

// const btn1 = document.createElement("button");
// btn1.innerText = "Космический корабль с ID 2";
// document.body.append(btn1);
// btn1.addEventListener("click", () => {
//   fetch("https://swapi.dev/api/starships/2/")
//     .then((responce) => responce.json())
//     .then((data) => {
//       console.log(data);
//       btn1.after(starships(data));
//     })
//     .catch((e) => console.log(e));
// });

// function starships(data) {
//   const div = document.createElement("div");
//   div.insertAdjacentHTML(
//     "afterbegin",
//     `
//       <div>
//         <span>Name: ${data.name}</span><br>
//         <span>Model: ${data.model}</span><br>
//         <span>Manufacturer: ${data.manufacturer}</span><br>
//         <span>Cost in credits: ${data.cost_in_credits}</span><br>
//         <span>Length: ${data.length}</span><br>
//         <span>Max atmosphering speed: ${data.max_atmosphering_speed}</span><br>
//         <span>Crew: ${data.crew}</span><br>
//         <span>Passengers: ${data.passengers}</span><br>
//         <span>Cargo capacity: ${data.cargo_capacity}</span><br>
//         <span>Consumables: ${data.consumables}</span><br>
//         <span>Hyperdrive rating: ${data.hyperdrive_rating}</span><br>
//         <span>MGLT: ${data.MGLT}</span><br>
//         <span>Starship class: ${data.starship_class}</span><br>
//       </div>
//     `
//   );
//   return div;
// }

//task 2

// const person = () => {
//   const name = "Ivanov Ivan";
//   return () => {
//     console.log(name);
//   };
// };
// const printName = person();
// printName();

