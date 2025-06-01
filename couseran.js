
let intervalId = null;
let currentIndex = 0;
let vitesse = 5000;
let currentTrackIndex = 0;
let enPause = false;
let slideshowTermine = false;

const images = [


"images/couseran/Autrefois le Couseran/couseran-31.jpg",
"images/couseran/Autrefois le Couseran/couseran-1.jpg",
"images/couseran/Autrefois le Couseran/couseran-2.jpg",
"images/couseran/Autrefois le Couseran/couseran-3.jpg",
"images/couseran/Autrefois le Couseran/couseran-4.jpg",
"images/couseran/Autrefois le Couseran/couseran-5.jpg",
"images/couseran/Autrefois le Couseran/couseran-6.jpg",
"images/couseran/Autrefois le Couseran/couseran-7.jpg",
"images/couseran/Autrefois le Couseran/couseran-8.jpg",
"images/couseran/Autrefois le Couseran/couseran-9.jpg",
"images/couseran/Autrefois le Couseran/couseran-10.jpg",
"images/couseran/Autrefois le Couseran/couseran-11.jpg",
"images/couseran/Autrefois le Couseran/couseran-12.jpg",
"images/couseran/Autrefois le Couseran/couseran-13.jpg",
"images/couseran/Autrefois le Couseran/couseran-14.jpg",
"images/couseran/Autrefois le Couseran/couseran-15.jpg",
"images/couseran/Autrefois le Couseran/couseran-16.jpg",
"images/couseran/Autrefois le Couseran/couseran-17.jpg",
"images/couseran/Autrefois le Couseran/couseran-18.jpg",
"images/couseran/Autrefois le Couseran/couseran-19.jpg",
"images/couseran/Autrefois le Couseran/couseran-20.jpg",
"images/couseran/Autrefois le Couseran/couseran-21.jpg",
"images/couseran/Autrefois le Couseran/couseran-22.jpg",
"images/couseran/Autrefois le Couseran/couseran-23.jpg",
"images/couseran/Autrefois le Couseran/couseran-24.jpg",
"images/couseran/Autrefois le Couseran/couseran-25.jpg",
"images/couseran/Autrefois le Couseran/couseran-26.jpg",
"images/couseran/Autrefois le Couseran/couseran-27.jpg",
"images/couseran/Autrefois le Couseran/couseran-28.jpg",
"images/couseran/Autrefois le Couseran/couseran-29.jpg",
"images/couseran/Autrefois le Couseran/couseran-30.jpg",
"images/couseran/Autrefois le Couseran/couseran-32.jpg",
"images/couseran/Autrefois le Couseran/couseran-33.jpg",
"images/couseran/Autrefois le Couseran/couseran-24.jpg",
"images/couseran/Autrefois le Couseran/couseran-35.jpg",


"images/FIN.jpg",

];

// Liste des musiques
const playlist = [
  "audio/Bourrée d'Ariège.mp3",
  "audio/Danse Pas de 4.mp3",
  "audio/Une maraîchine.mp3",
 

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

