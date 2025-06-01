
let intervalId = null;
let currentIndex = 0;
let vitesse = 5000;
let currentTrackIndex = 0;
let enPause = false;
let slideshowTermine = false;

const images = [

"images/occitanie/Belcastel/01-belcastel.jpg",
"images/occitanie/Belcastel/02-belcastel.jpg",
"images/occitanie/Belcastel/03-belcastel.jpg",
"images/occitanie/Belcastel/04-belcastel.jpg",
"images/occitanie/Belcastel/05-belcastel.jpg",
"images/occitanie/Belcastel/06-belcastel.jpg",
"images/occitanie/Belcastel/07-belcastel.jpg",
"images/occitanie/Belcastel/08-belcastel.jpg",
"images/occitanie/Belcastel/09-belcastel.jpg",
"images/occitanie/Belcastel/10-belcastel.jpg",
"images/occitanie/Belcastel/11-belcastel.jpg",

"images/occitanie/Penne/01-penne.jpg",
"images/occitanie/Penne/02-penne.jpg",
"images/occitanie/Penne/03-penne.jpg",
"images/occitanie/Penne/04-penne.jpg",
"images/occitanie/Penne/05-penne.jpg",
"images/occitanie/Penne/06-penne.jpg",
"images/occitanie/Penne/07-penne.jpg",
"images/occitanie/Penne/08-penne.jpg",
"images/occitanie/Penne/09-penne.jpg",
"images/occitanie/Penne/10-penne.jpg",
"images/occitanie/Penne/11-penne.jpg",

"images/occitanie/Puycelsi/01-puycelsi.jpg",
"images/occitanie/Puycelsi/02-puycelsi.jpg",
"images/occitanie/Puycelsi/03-puycelsi.jpg",
"images/occitanie/Puycelsi/04-puycelsi.jpg",
"images/occitanie/Puycelsi/05-puycelsi.jpg",
"images/occitanie/Puycelsi/06-puycelsi.jpg",
"images/occitanie/Puycelsi/07-puycelsi.jpg",
"images/occitanie/Puycelsi/08-puycelsi.jpg",
"images/occitanie/Puycelsi/09-puycelsi.jpg",

"images/occitanie/Bruniquel/01-bruniquel.jpg",
"images/occitanie/Bruniquel/02-bruniquel.jpg",
"images/occitanie/Bruniquel/03-bruniquel.jpg",
"images/occitanie/Bruniquel/04-bruniquel.jpg",
"images/occitanie/Bruniquel/05-bruniquel.jpg",
"images/occitanie/Bruniquel/06-bruniquel.jpg",
"images/occitanie/Bruniquel/07-bruniquel.jpg",
"images/occitanie/Bruniquel/08-bruniquel.jpg",

"images/occitanie/Castelnau de Montmiral/01-castelnau-de-montmiral.jpg",
"images/occitanie/Castelnau de Montmiral/02-castelnau-de-montmiral.jpg",
"images/occitanie/Castelnau de Montmiral/03-castelnau-de-montmiral.jpg",
"images/occitanie/Castelnau de Montmiral/04-castelnau-de-montmiral.jpg",
"images/occitanie/Castelnau de Montmiral/05-castelnau-de-montmiral.jpg",

"images/occitanie/Estaing/01-estaing.jpg",
"images/occitanie/Estaing/02-estaing.jpg",
"images/occitanie/Estaing/03-estaing.jpg",
"images/occitanie/Estaing/04-estaing.jpg",
"images/occitanie/Estaing/05-estaing.jpg",
"images/occitanie/Estaing/06-estaing.jpg",

"images/occitanie/Collioure/01-collioure.jpg",
"images/occitanie/Collioure/02-collioure.jpg",
"images/occitanie/Collioure/03-collioure.jpg",
"images/occitanie/Collioure/04-collioure.jpg",
"images/occitanie/Collioure/05-collioure.jpg",
"images/occitanie/Collioure/06-collioure.jpg",
"images/occitanie/Collioure/07-collioure.jpg",
"images/occitanie/Collioure/08-collioure.jpg",
"images/occitanie/Collioure/09-collioure.jpg",
"images/occitanie/Collioure/10-collioure.jpg",
"images/occitanie/Collioure/11-collioure.jpg",
"images/occitanie/Collioure/12-collioure.jpg",
"images/occitanie/Collioure/13-collioure.jpg",
"images/occitanie/Collioure/14-collioure.jpg",
"images/occitanie/Collioure/15-collioure.jpg",
"images/occitanie/Collioure/16-collioure.jpg",
"images/occitanie/Collioure/17-collioure.jpg",
"images/occitanie/Collioure/18-collioure.jpg",
"images/occitanie/Collioure/19-collioure.jpg",
"images/occitanie/Collioure/20-collioure.jpg",
"images/occitanie/Collioure/21-collioure.jpg",

"images/occitanie/Banyuls sur mer/01-banyouls.jpg",
"images/occitanie/Banyuls sur mer/02-banyouls.jpg",
"images/occitanie/Banyuls sur mer/03-banyouls.jpg",
"images/occitanie/Banyuls sur mer/04-banyouls.jpg",
"images/occitanie/Banyuls sur mer/05-banyouls.jpg",
"images/occitanie/Banyuls sur mer/06-banyouls.jpg",
"images/occitanie/Banyuls sur mer/08-banyouls.jpg",
"images/occitanie/Banyuls sur mer/09-banyouls.jpg",
"images/occitanie/Banyuls sur mer/10-banyouls.jpg",
"images/occitanie/Banyuls sur mer/11-banyouls.jpg",
"images/FIN.jpg",







];

// Liste des musiques
const playlist = [
  "audio/Concerto Pour Un Ete.mp3",
  "audio/Et Les Oiseaux Chantaient.mp3",
  "audio/Lamento.mp3",
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

