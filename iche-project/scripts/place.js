function calculateWindChill(temp, wind) {
  return (13.12 + 0.6215 * temp - 11.37 * wind ** 0.16 + 0.3965 * temp * wind ** 0.16).toFixed(1) + "°C";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;

  const temp = parseFloat(document.getElementById("temperature").textContent);
  const wind = parseFloat(document.getElementById("wind-speed").textContent);

  if (temp <= 10 && wind > 4.8) {
    document.getElementById("wind-chill").textContent = calculateWindChill(temp, wind);
  }
});