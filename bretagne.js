
let intervalId = null;
let currentIndex = 0;
let vitesse = 5000;
let currentTrackIndex = 0;
let enPause = false;
let slideshowTermine = false;

const images = [

"images/morbihan/Vannes/vannes-1.jpg",
"images/morbihan/Vannes/vannes-2.jpg",
"images/morbihan/Vannes/vannes-3.jpg",
"images/morbihan/Vannes/vannes-4.jpg",
"images/morbihan/Vannes/vannes-5.jpg",
"images/morbihan/Vannes/vannes-6.jpg",
"images/morbihan/Vannes/vannes-7.jpg",
"images/morbihan/Vannes/vannes-8.jpg",
"images/morbihan/Vannes/vannes-9.jpg",
"images/morbihan/Vannes/vannes-10.jpg",
"images/morbihan/Vannes/vannes-11.jpg",
"images/morbihan/Vannes/vannes-12.jpg",
"images/morbihan/Vannes/vannes-13.jpg",
"images/morbihan/Vannes/vannes-14.jpg",

"images/morbihan/Arzon/arzon-1.jpg",
"images/morbihan/Arzon/arzon-2.jpg",
"images/morbihan/Arzon/arzon-3.jpg",
"images/morbihan/Arzon/arzon-4.jpg",
"images/morbihan/Arzon/arzon-5.jpg",
"images/morbihan/Arzon/arzon-6.jpg",
"images/morbihan/Arzon/arzon-7.jpg",

"images/morbihan/Île d'Arz/arz-1.jpg",
"images/morbihan/Île d'Arz/arz-2.jpg",
"images/morbihan/Île d'Arz/arz-3.jpg",
"images/morbihan/Île d'Arz/arz-4.jpg",
"images/morbihan/Île d'Arz/arz-5.jpg",

"images/morbihan/Île aux Moines/moines-1.jpg",
"images/morbihan/Île aux Moines/moines-2.jpg",
"images/morbihan/Île aux Moines/moines-3.jpg",
"images/morbihan/Île aux Moines/moines-4.jpg",
"images/morbihan/Île aux Moines/moines-5.jpg",
"images/morbihan/Île aux Moines/moines-6.jpg",
"images/morbihan/Île aux Moines/moines-7.jpg",

"images/morbihan/Quiberon/quiberon-1.jpg",
"images/morbihan/Quiberon/quiberon-2.jpg",
"images/morbihan/Quiberon/quiberon-3.jpg",
"images/morbihan/Quiberon/quiberon-4.jpg",

"images/morbihan/Rochefort en Terre/rochefort-1.jpg",
"images/morbihan/Rochefort en Terre/rochefort-2.jpg",
"images/morbihan/Rochefort en Terre/rochefort-3.jpg",
"images/morbihan/Rochefort en Terre/rochefort-4.jpg",
"images/morbihan/Rochefort en Terre/rochefort-5.jpg",
"images/morbihan/Rochefort en Terre/rochefort-6.jpg",
"images/morbihan/Rochefort en Terre/rochefort-7.jpg",
"images/morbihan/Rochefort en Terre/rochefort-8.jpg",
"images/morbihan/Rochefort en Terre/rochefort-9.jpg",
"images/morbihan/Rochefort en Terre/rochefort-10.jpg",
"images/morbihan/Rochefort en Terre/rochefort-11.jpg",
"images/morbihan/Rochefort en Terre/rochefort-12.jpg",
"images/morbihan/Rochefort en Terre/rochefort-13.jpg",
"images/morbihan/Rochefort en Terre/rochefort-14.jpg",
"images/morbihan/Rochefort en Terre/rochefort-15.jpg",

"images/morbihan/Alignement de Carnac/carnac-1.jpg",
"images/morbihan/Alignement de Carnac/carnac-2.jpg",
"images/morbihan/Alignement de Carnac/carnac-3.jpg",
"images/morbihan/Alignement de Carnac/carnac-4.jpg",
"images/morbihan/Alignement de Carnac/carnac-5.jpg",
"images/morbihan/Alignement de Carnac/carnac-6.jpg",
"images/morbihan/Alignement de Carnac/carnac-7.jpg",
"images/morbihan/Alignement de Carnac/carnac-8.jpg",

"images/FIN.jpg",

];

// Liste des musiques
const playlist = [
  "audio/Galway Hills.mp3",
  "audio/Tri Martolod.mp3",
  "audio/An Dro.mp3",
 

];


const audio = document.getElementById("audio");
const pauseBtn = document.getElementById("pauseBtn");

// =============== Titre audio ===============
function afficherTitreAudio() {
  const titreAudio = document.getElementById("titre-audio");
  const chemin = playlist[currentTrackIndex];
  const nomFichier = chemin.split("/").pop().replace(".mp3", "").replace(/-/g, " ");
  titreAudio.textContent = "🎻  🎼 🎶 🎵  " + nomFichier + " 🎼 🎵 🎶 🎺";
}

// =============== Passage musique suivante (si nécessaire) ===============
audio.addEventListener("ended", () => {
  if (!slideshowTermine) {
    currentTrackIndex++;
    if (currentTrackIndex < playlist.length) {
      audio.src = playlist[currentTrackIndex];
      afficherTitreAudio();
      audio.play();
    }
  }
});

// =============== Afficher image ===============
function afficherImage(index) {
  const photo = document.getElementById("photo");
  photo.src = images[index];

  const titreSerie = document.getElementById("titre-serie");
  const chemin = images[index];
  const parties = chemin.split("/");
  const nomDossier = parties.length > 2 ? parties[2] : "Corse";
  titreSerie.textContent = nomDossier.charAt(0).toUpperCase() + nomDossier.slice(1);
}

// =============== Démarrer ===============
let timeoutId = null;

function slideshowStep() {
  if (currentIndex >= images.length) {
    slideshowTermine = true;
    timeoutId = null;
    return;
  }

  afficherImage(currentIndex);
  currentIndex++;

  timeoutId = setTimeout(slideshowStep, vitesse);
}

function startSlideshow() {
  if (timeoutId || slideshowTermine) return;

  afficherImage(currentIndex);
  slideshowTermine = false;
  enPause = false;
  pauseBtn.textContent = "⏸️ Pause";

  if (audio.paused) {
    currentTrackIndex = 0;
    audio.src = playlist[currentTrackIndex];
    afficherTitreAudio();
    audio.play();
  }

  timeoutId = setTimeout(slideshowStep, vitesse);
}

// =============== Pause / Reprendre ===============
function togglePause() {
  if (!timeoutId && !enPause) return;

  if (!enPause) {
    clearTimeout(timeoutId);
    timeoutId = null;
    audio.pause();
    enPause = true;
    pauseBtn.textContent = "▶️ Reprendre";
  } else {
    audio.play();
    enPause = false;
    pauseBtn.textContent = "⏸️ Pause";
    timeoutId = setTimeout(slideshowStep, vitesse);
  }
}

// =============== Retour au début ===============
function restartSlideshow() {
  clearInterval(intervalId);
  intervalId = null;

  currentIndex = 0;
  afficherImage(currentIndex);

  audio.pause();
  audio.currentTime = 0;
  currentTrackIndex = 0;
  afficherTitreAudio();

  slideshowTermine = false;
  enPause = false;
  pauseBtn.textContent = "⏸️ Pause";
}

// =============== Vitesse ===============
document.getElementById("vitesse").addEventListener("input", function () {
  const valeur = this.value;
  vitesse = valeur * 1000;
  document.getElementById("vitesse-valeur").textContent = `${valeur}s`;


  // Si le diaporama est actif et pas terminé, adapter vitesse sans couper musique
  if (timeoutId && !slideshowTermine && !enPause) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(slideshowStep, vitesse);
  }
});

// =============== Volume ===============
document.getElementById("volume").addEventListener("input", function () {
  audio.volume = this.value;
});



// Plein écran sur l'image
function toggleFullscreen() {
  const image = document.getElementById("photo");
  if (!document.fullscreenElement) {
    image.requestFullscreen().catch(err => alert("Erreur : " + err));
  } else {
    document.exitFullscreen();
  }
}

