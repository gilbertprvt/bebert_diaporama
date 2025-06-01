

let intervalId = null;
let currentIndex = 0;
let vitesse = 5000;
let currentTrackIndex = 0;
let enPause = false;
let slideshowTermine = false;

const images = [
 

"images/versailles/Le Château/Chateau-0.jpg" ,
"images/versailles/Le Château/Chateau-1.jpg" ,
"images/versailles/Le Château/Chateau-2.jpg" ,
"images/versailles/Le Château/Chateau-3.jpg" ,
"images/versailles/Le Château/Chateau-4.jpg" ,
"images/versailles/Le Château/Chateau-5.jpg" ,
"images/versailles/Le Château/Chateau-6.jpg" ,
"images/versailles/Le Château/Chateau-7.jpg" ,
"images/versailles/Le Château/Chateau-8.jpg" ,
"images/versailles/Le Château/Chateau-9.jpg" ,
"images/versailles/Le Château/Chateau-10.jpg" ,
"images/versailles/Le Château/Chateau-11.jpg" ,
"images/versailles/Le Château/Chateau-12.jpg" ,

"images/versailles/Le Jardin/jardin-1.jpg" ,
"images/versailles/Le Jardin/jardin-2.jpg" ,
"images/versailles/Le Jardin/jardin-3.jpg" ,
"images/versailles/Le Jardin/jardin-4.jpg" ,
"images/versailles/Le Jardin/jardin-5.jpg" ,
"images/versailles/Le Jardin/jardin-6.jpg" ,
"images/versailles/Le Jardin/jardin-7.jpg" ,
"images/versailles/Le Jardin/jardin-8.jpg" ,
"images/versailles/Le Jardin/jardin-9.jpg" ,
"images/versailles/Le Jardin/jardin-10.jpg" ,
"images/versailles/Le Jardin/jardin-11.jpg" ,
"images/versailles/Le Jardin/jardin-12.jpg" ,
"images/versailles/Le Jardin/jardin-13.jpg" ,
"images/versailles/Le Jardin/jardin-14.jpg" ,
"images/versailles/Le Jardin/jardin-15.jpg" ,
"images/versailles/Le Jardin/jardin-16.jpg" ,
"images/versailles/Le Jardin/jardin-17.jpg" ,
"images/versailles/Le Jardin/jardin-18.jpg" ,
"images/versailles/Le Jardin/jardin-19.jpg" ,
"images/versailles/Le Jardin/jardin-20.jpg" ,


"images/versailles/Grand Trianon/Grand Trianon-1.jpg" ,
"images/versailles/Grand Trianon/Grand Trianon-2.jpg" ,
"images/versailles/Grand Trianon/Grand Trianon-3.jpg" ,
"images/versailles/Grand Trianon/Grand Trianon-4.jpg" ,
"images/versailles/Grand Trianon/Grand Trianon-5.jpg" ,
"images/versailles/Grand Trianon/Grand Trianon-6.jpg" ,
"images/versailles/Grand Trianon/Grand Trianon-7.jpg" ,
"images/versailles/Grand Trianon/Grand Trianon-8.jpg" ,
"images/versailles/Grand Trianon/Grand Trianon-9.jpg" ,
"images/versailles/Grand Trianon/Grand Trianon-10.jpg" ,
"images/versailles/Grand Trianon/Grand Trianon-11.jpg" ,
"images/versailles/Grand Trianon/Grand Trianon-12.jpg" ,
"images/versailles/Grand Trianon/Grand Trianon-13.jpg" ,
"images/versailles/Grand Trianon/Grand Trianon-14.jpg" ,

"images/versailles/Petit Trianon/Petit Trianon-1.jpg" ,
"images/versailles/Petit Trianon/Petit Trianon-2.jpg" ,
"images/versailles/Petit Trianon/Petit Trianon-3.jpg" ,
"images/versailles/Petit Trianon/Petit Trianon-4.jpg" ,
"images/versailles/Petit Trianon/Petit Trianon-5.jpg" ,
"images/versailles/Petit Trianon/Petit Trianon-6.jpg" ,
"images/versailles/Petit Trianon/Petit Trianon-7.jpg" ,
"images/versailles/Petit Trianon/Petit Trianon-8.jpg" ,
"images/versailles/Petit Trianon/Petit Trianon-9.jpg" ,
"images/FIN.jpg",

];

// Liste des musiques
const playlist = [
  "audio/Schwanensee (Moderato).mp3",
  "audio/Tri Martolod.mp3",
  "audio/We'll Meet Again.mp3",
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

