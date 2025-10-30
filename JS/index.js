// ----------- MARCAS AJUSTADAS -----------
const marcasContainer = document.getElementById("marcas");
for (let i = 0; i < 12; i++) {
  const marca = document.createElement("div");
  marca.classList.add("marca");
  marca.style.transform = `rotate(${i * 30}deg)`;
  marcasContainer.appendChild(marca);
}
// ----------- FUNCIONAMIENTO DEL RELOJ -----------
function actualizarReloj() {
  const ahora = new Date();
  const horas = ahora.getHours().toString().padStart(2, "0");
  const minutos = ahora.getMinutes().toString().padStart(2, "0");
  const segundos = ahora.getSeconds().toString().padStart(2, "0");
  document.getElementById("digital").textContent = `${horas}:${minutos}:${segundos}`;
  const horasGrados = (ahora.getHours() % 12) * 30 + ahora.getMinutes() * 0.5;
  const minutosGrados = ahora.getMinutes() * 6;
  const segundosGrados = ahora.getSeconds() * 6;
  document.getElementById("hora").style.transform = `rotate(${horasGrados}deg)`;
  document.getElementById("minuto").style.transform = `rotate(${minutosGrados}deg)`;
  document.getElementById("segundo").style.transform = `rotate(${segundosGrados}deg)`;
}
setInterval(actualizarReloj, 1000);
actualizarReloj();