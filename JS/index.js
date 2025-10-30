// ----------- GENERAR MARCAS DEL RELOJ -----------
const marcasContainer = document.getElementById("marcas");
for (let i = 0; i < 12; i++) {
  const marca = document.createElement("div");
  marca.classList.add("marca");
  marca.style.transform = `rotate(${i * 30}deg) translateX(-50%)`;
  marcasContainer.appendChild(marca);
}