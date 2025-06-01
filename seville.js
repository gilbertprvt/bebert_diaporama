
let intervalId = null;
let currentIndex = 0;
let vitesse = 5000;
let currentTrackIndex = 0;
let enPause = false;
let slideshowTermine = false;

const images = [

"images/seville/La Ville/ville-1.jpg",
"images/seville/La Ville/ville-2.jpg",
"images/seville/La Ville/ville-3.jpg",
"images/seville/La Ville/ville-4.jpg",
"images/seville/La Ville/ville-5.jpg",
"images/seville/La Ville/ville-6.jpg",
"images/seville/La Ville/ville-7.jpg",
"images/seville/La Ville/ville-8.jpg",
"images/seville/La Ville/ville-9.jpg",
"images/seville/La Ville/ville-10.jpg",
"images/seville/La Ville/ville-11.jpg",
"images/seville/La Ville/ville-12.jpg",
"images/seville/La Ville/ville-13.jpg",
"images/seville/La Ville/ville-14.jpg",
"images/seville/La Ville/ville-15.jpg",
"images/seville/La Ville/ville-16.jpg",
"images/seville/La Ville/ville-17.jpg",
"images/seville/La Ville/ville-18.jpg",
"images/seville/La Ville/ville-19.jpg",
"images/seville/La Ville/ville-20.jpg",
"images/seville/La Ville/ville-21.jpg",
"images/seville/La Ville/ville-22.jpg",
"images/seville/La Ville/ville-23.jpg",
"images/seville/La Ville/ville-24.jpg",
"images/seville/La Ville/ville-25.jpg",

"images/seville/L'Alcazar/alcazar-1.jpg",
"images/seville/L'Alcazar/alcazar-2.jpg",
"images/seville/L'Alcazar/alcazar-3.jpg",
"images/seville/L'Alcazar/alcazar-4.jpg",
"images/seville/L'Alcazar/alcazar-5.jpg",
"images/seville/L'Alcazar/alcazar-6.jpg",
"images/seville/L'Alcazar/alcazar-7.jpg",
"images/seville/L'Alcazar/alcazar-8.jpg",
"images/seville/L'Alcazar/alcazar-9.jpg",
"images/seville/L'Alcazar/alcazar-10.jpg",
"images/seville/L'Alcazar/alcazar-11.jpg",
"images/seville/L'Alcazar/alcazar-12.jpg",
"images/seville/L'Alcazar/alcazar-13.jpg",
"images/seville/L'Alcazar/alcazar-14.jpg",
"images/seville/L'Alcazar/alcazar-15.jpg",
"images/seville/L'Alcazar/alcazar-16.jpg",
"images/seville/L'Alcazar/alcazar-17.jpg",
"images/seville/L'Alcazar/alcazar-18.jpg",
"images/seville/L'Alcazar/alcazar-19.jpg",
"images/seville/L'Alcazar/alcazar-20.jpg",
"images/seville/L'Alcazar/alcazar-21.jpg",

"images/seville/Cathédrale/cathédrale-1.jpg",
"images/seville/Cathédrale/cathédrale-2.jpg",
"images/seville/Cathédrale/cathédrale-3.jpg",
"images/seville/Cathédrale/cathédrale-4.jpg",
"images/seville/Cathédrale/cathédrale-5.jpg",
"images/seville/Cathédrale/cathédrale-6.jpg",
"images/seville/Cathédrale/cathédrale-7.jpg",
"images/seville/Cathédrale/cathédrale-8.jpg",
"images/seville/Cathédrale/cathédrale-9.jpg",
"images/seville/Cathédrale/cathédrale-10.jpg",
"images/seville/Cathédrale/cathédrale-11.jpg",
"images/seville/Cathédrale/cathédrale-12.jpg",
"images/seville/Cathédrale/cathédrale-13.jpg",
"images/seville/Cathédrale/cathédrale-14.jpg",

"images/seville/Place d'Espagne/place_espagne-1.jpg",
"images/seville/Place d'Espagne/place_espagne-2.jpg",
"images/seville/Place d'Espagne/place_espagne-3.jpg",
"images/seville/Place d'Espagne/place_espagne-4.jpg",
"images/seville/Place d'Espagne/place_espagne-5.jpg",
"images/seville/Place d'Espagne/place_espagne-6.jpg",

"images/seville/La Semaine Sainte/sainte-1.jpg",
"images/seville/La Semaine Sainte/sainte-2.jpg",
"images/seville/La Semaine Sainte/sainte-3.jpg",
"images/seville/La Semaine Sainte/sainte-4.jpg",
"images/seville/La Semaine Sainte/sainte-5.jpg",
"images/seville/La Semaine Sainte/sainte-6.jpg",
"images/seville/La Semaine Sainte/sainte-7.jpg",
"images/seville/La Semaine Sainte/sainte-8.jpg",
"images/seville/La Semaine Sainte/sainte-9.jpg",
"images/seville/La Semaine Sainte/sainte-10.jpg",
"images/seville/La Semaine Sainte/sainte-11.jpg",
"images/seville/La Semaine Sainte/sainte-12.jpg",
"images/seville/La Semaine Sainte/sainte-13.jpg",
"images/seville/La Semaine Sainte/sainte-14.jpg",
"images/seville/La Semaine Sainte/sainte-15.jpg",
"images/seville/La Semaine Sainte/sainte-16.jpg",
"images/seville/La Semaine Sainte/sainte-17.jpg",

"images/FIN.jpg",

];

// Liste des musiques
const playlist = [
  "audio/Arles Romance.mp3",
  "audio/Siesta.mp3",
  "audio/Almoraima.mp3",
  "audio/Pasodoble a José Tomás.mp3",

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

