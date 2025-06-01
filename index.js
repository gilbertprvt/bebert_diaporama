const text = "Album Photos";
const path = document.getElementById("arcPath");
const svg = document.getElementById("svg");

const centerX = 500;
const centerY = 320;

const pathLength = path.getTotalLength();
const numLetters = text.length;

// Boucle sur chaque lettre du texte
for (let i = 0; i < numLetters; i++) {
  const char = text[i];
  const ratio = i / (numLetters - 1); // Position relative sur la courbe
  const point = path.getPointAtLength(pathLength * ratio);

  // Création d'une ligne depuis la lettre vers le centre bas
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", point.x);
  line.setAttribute("y1", point.y);
  line.setAttribute("x2", centerX);
  line.setAttribute("y2", centerY);
  line.setAttribute("stroke", "#71c0e1");
  line.setAttribute("stroke-opacity", "0.4");
  line.setAttribute("stroke-width", "2");
  svg.appendChild(line);

  // Création de la lettre sur la courbe
  const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
  t.setAttribute("x", point.x);
  t.setAttribute("y", point.y);
  t.setAttribute("text-anchor", "middle");
  t.setAttribute("alignment-baseline", "middle");
  t.setAttribute("class", "letter");
  t.textContent = char;
  svg.appendChild(t);
}
