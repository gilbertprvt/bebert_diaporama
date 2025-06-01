

let intervalId = null;
let currentIndex = 0;
let vitesse = 5000;
let currentTrackIndex = 0;
let enPause = false;
let slideshowTermine = false;

const images = [
  
"images/corse/00-carte.jpg",  

"images/corse/Calanque de Piana/01-piana-porto.jpg" ,
"images/corse/Calanque de Piana/02-piana-porto.jpg" ,
"images/corse/Calanque de Piana/02-piana-porto.jpg" ,
"images/corse/Calanque de Piana/03-piana-porto.jpg" ,
"images/corse/Calanque de Piana/04-piana-porto.jpg" ,
"images/corse/Calanque de Piana/05-piana-porto.jpg" ,
"images/corse/Calanque de Piana/06-piana-porto.jpg" ,
"images/corse/Calanque de Piana/07-piana-porto.jpg" ,
"images/corse/Calanque de Piana/08-piana-porto.jpg" ,
"images/corse/Calanque de Piana/09-piana-porto.jpg" ,
"images/corse/Calanque de Piana/10-piana-porto.jpg" ,
"images/corse/Calanque de Piana/11-piana-porto.jpg" ,


"images/corse/Cargèse/01-cargese.jpg" ,
"images/corse/Cargèse/02-cargese.jpg" ,
"images/corse/Cargèse/03-cargese.jpg" ,
"images/corse/Cargèse/04-cargese.jpg" ,
"images/corse/Cargèse/05-cargese.jpg" ,
"images/corse/Cargèse/06-cargese.jpg" ,
"images/corse/Cargèse/07-cargese.jpg" ,
"images/corse/Cargèse/08-cargese.jpg" ,
"images/corse/Cargèse/09-cargese.jpg" ,
"images/corse/Cargèse/10-cargese.jpg" ,
"images/corse/Cargèse/11-cargese.jpg" ,
"images/corse/Cargèse/12-cargese.jpg" ,
"images/corse/Cargèse/13-cargese.jpg" ,
"images/corse/Cargèse/14-cargese.jpg" ,
"images/corse/Cargèse/15-cargese.jpg" ,



"images/corse/Ajaccio/01-ajaccio.jpg",
"images/corse/Ajaccio/02-ajaccio.jpg" ,
"images/corse/Ajaccio/03-ajaccio.jpg" ,
"images/corse/Ajaccio/04-ajaccio.jpg" ,
"images/corse/Ajaccio/05-ajaccio.jpg" ,
"images/corse/Ajaccio/06-ajaccio.jpg" ,
"images/corse/Ajaccio/07-ajaccio.jpg" ,
"images/corse/Ajaccio/08-ajaccio.jpg" ,
"images/corse/Ajaccio/09-ajaccio.jpg" ,
"images/corse/Ajaccio/10-ajaccio.jpg" ,
"images/corse/Ajaccio/11-ajaccio.jpg" ,
"images/corse/Ajaccio/12-ajaccio.jpg" ,

"images/corse/Golfe de Valinco/01-golfe-de-valinco.jpg" ,
"images/corse/Golfe de Valinco/02-golfe-de-valinco.jpg" ,
"images/corse/Golfe de Valinco/03-golfe-de-valinco.jpg" ,
"images/corse/Golfe de Valinco/04-golfe-de-valinco.jpg" ,
"images/corse/Golfe de Valinco/05-golfe-de-valinco.jpg" ,
"images/corse/Golfe de Valinco/06-golfe-de-valinco.jpg" ,
"images/corse/Golfe de Valinco/07-golfe-de-valinco.jpg" ,
"images/corse/Golfe de Valinco/08-golfe-de-valinco.jpg" ,

"images/corse/Sartene/01-sartene.jpg" ,
"images/corse/Sartene/02-sartene.jpg" ,
"images/corse/Sartene/03-sartene.jpg" ,
"images/corse/Sartene/03-sartene.jpg" ,
"images/corse/Sartene/05-sartene.jpg" ,
"images/corse/Sartene/06-sartene.jpg" ,
"images/corse/Sartene/07-sartene.jpg" ,
"images/corse/Sartene/08-sartene.jpg" ,
"images/corse/Sartene/09-sartene.jpg" ,
"images/corse/Sartene/10-sartene.jpg" ,
"images/corse/Sartene/11-sartene.jpg" ,

"images/corse/Bonifacio/01-bonifacio.jpg" ,
"images/corse/Bonifacio/02-bonifacio.jpg" ,
"images/corse/Bonifacio/03-bonifacio.jpg" ,
"images/corse/Bonifacio/04-bonifacio.jpg" ,
"images/corse/Bonifacio/05-bonifacio.jpg" ,
"images/corse/Bonifacio/06-bonifacio.jpg" ,
"images/corse/Bonifacio/07-bonifacio.jpg" ,
"images/corse/Bonifacio/08-bonifacio.jpg" ,
"images/corse/Bonifacio/09-bonifacio.jpg" ,
"images/corse/Bonifacio/10-bonifacio.jpg" ,
"images/corse/Bonifacio/11-bonifacio.jpg" ,
"images/corse/Bonifacio/12-bonifacio.jpg" ,
"images/corse/Bonifacio/13-bonifacio.jpg" ,
"images/corse/Bonifacio/14-bonifacio.jpg" ,
"images/corse/Bonifacio/15-bonifacio.jpg" ,
"images/corse/Bonifacio/16-bonifacio.jpg" ,
"images/corse/Bonifacio/17-bonifacio.jpg" ,
"images/corse/Bonifacio/18-bonifacio.jpg" ,
"images/corse/Bonifacio/19-bonifacio.jpg" ,
"images/corse/Bonifacio/20-bonifacio.jpg" ,
"images/corse/Bonifacio/21-bonifacio.jpg" ,
"images/corse/Bonifacio/22-bonifacio.jpg" ,
"images/corse/Bonifacio/23-bonifacio.jpg" ,
"images/corse/Bonifacio/24-bonifacio.jpg" ,

"images/corse/Corte/01-corte.jpg" ,
"images/corse/Corte/02-corte.jpg" ,
"images/corse/Corte/03-corte.jpg" ,
"images/corse/Corte/04-corte.jpg" ,
"images/corse/Corte/05-corte.jpg" ,
"images/corse/Corte/06-corte.jpg" ,
"images/corse/Corte/07-corte.jpg" ,
"images/corse/Corte/08-corte.jpg" ,
"images/corse/Corte/09-corte.jpg" ,
"images/corse/Corte/10-corte.jpg" ,
"images/corse/Corte/11-corte.jpg" ,
"images/corse/Corte/12-corte.jpg" ,
"images/corse/Corte/13-corte.jpg" ,
"images/corse/Corte/14-corte.jpg" ,
"images/corse/Corte/15-corte.jpg" ,
"images/corse/Corte/16-corte.jpg" ,
"images/corse/Corte/17-corte.jpg" ,
"images/corse/Corte/18-corte.jpg" ,
"images/corse/Corte/19-corte.jpg" ,
"images/corse/Corte/20-corte.jpg" ,
"images/corse/Corte/21-corte.jpg" ,
"images/corse/Corte/22-corte.jpg" ,

"images/corse/Bastia/01-bastia.jpg" ,
"images/corse/Bastia/02-bastia.jpg" ,
"images/corse/Bastia/03-bastia.jpg" ,
"images/corse/Bastia/04-bastia.jpg" ,
"images/corse/Bastia/05-bastia.jpg" ,
"images/corse/Bastia/06-bastia.jpg" ,
"images/corse/Bastia/07-bastia.jpg" ,
"images/corse/Bastia/08-bastia.jpg" ,
"images/corse/Bastia/09-bastia.jpg" ,
"images/corse/Bastia/10-bastia.jpg" ,
"images/corse/Bastia/11-bastia.jpg" ,
"images/corse/Bastia/12-bastia.jpg" ,
"images/corse/Bastia/13-bastia.jpg" ,
"images/corse/Bastia/14-bastia.jpg" ,
"images/corse/Bastia/15-bastia.jpg" ,
"images/corse/Bastia/16-bastia.jpg" ,
"images/corse/Bastia/17-bastia.jpg" ,
"images/corse/Bastia/18-bastia.jpg" ,
"images/corse/Bastia/19-bastia.jpg" ,
"images/corse/Bastia/20-bastia.jpg" ,
"images/corse/Bastia/21-bastia.jpg" ,
"images/corse/Bastia/22-bastia.jpg" ,

"images/corse/Erbalunga/01-erbalunga.jpg" ,
"images/corse/Erbalunga/02-erbalunga.jpg" ,
"images/corse/Erbalunga/03-erbalunga.jpg" ,
"images/corse/Erbalunga/04-erbalunga.jpg" ,
"images/corse/Erbalunga/05-erbalunga.jpg" ,
"images/corse/Erbalunga/06-erbalunga.jpg" ,
"images/corse/Erbalunga/07-erbalunga.jpg" ,
"images/corse/Erbalunga/08-erbalunga.jpg" ,
"images/corse/Erbalunga/09-erbalunga.jpg" ,
"images/corse/Erbalunga/10-erbalunga.jpg" ,
"images/corse/Erbalunga/11-erbalunga.jpg" ,
"images/corse/Erbalunga/12-erbalunga.jpg" ,
"images/corse/Erbalunga/13-erbalunga.jpg" ,
"images/corse/Erbalunga/14-erbalunga.jpg" ,

"images/corse/Macinaggio/01-macinaggio.jpg" ,
"images/corse/Macinaggio/02-macinaggio.jpg" ,
"images/corse/Macinaggio/03-macinaggio.jpg" ,
"images/corse/Macinaggio/04-macinaggio.jpg" ,
"images/corse/Macinaggio/05-macinaggio.jpg" ,
"images/corse/Macinaggio/06-macinaggio.jpg" ,
"images/corse/Macinaggio/07-macinaggio.jpg" ,
"images/corse/Macinaggio/08-macinaggio.jpg" ,
"images/corse/Macinaggio/09-macinaggio.jpg" ,
"images/corse/Macinaggio/10-macinaggio.jpg" ,
"images/corse/Macinaggio/11-macinaggio.jpg" ,
"images/corse/Macinaggio/12-macinaggio.jpg" ,
"images/corse/Macinaggio/13-macinaggio.jpg" ,

"images/corse/Moulin Mattei/01-moulin-mattei.jpg" ,
"images/corse/Moulin Mattei/02-moulin-mattei.jpg" ,
"images/corse/Moulin Mattei/03-moulin-mattei.jpg" ,
"images/corse/Moulin Mattei/04-moulin-mattei.jpg" ,
"images/corse/Moulin Mattei/05-moulin-mattei.jpg" ,
"images/corse/Moulin Mattei/06-moulin-mattei.jpg" ,
"images/corse/Moulin Mattei/07-moulin-mattei.jpg" ,
"images/corse/Moulin Mattei/08-moulin-mattei.jpg" ,
"images/corse/Moulin Mattei/09-moulin-mattei.jpg" ,
"images/corse/Moulin Mattei/10-moulin-mattei.jpg" ,
"images/corse/Moulin Mattei/11-moulin-mattei.jpg" ,
"images/corse/Moulin Mattei/12-moulin-mattei.jpg" ,

"images/corse/Centuri/01-centuri.jpg" ,
"images/corse/Centuri/02-centuri.jpg" ,
"images/corse/Centuri/03-centuri.jpg" ,
"images/corse/Centuri/04-centuri.jpg" ,
"images/corse/Centuri/05-centuri.jpg" ,
"images/corse/Centuri/06-centuri.jpg" ,
"images/corse/Centuri/07-centuri.jpg" ,
"images/corse/Centuri/08-centuri.jpg" ,
"images/corse/Centuri/09-centuri.jpg" ,
"images/corse/Centuri/10-centuri.jpg" ,
"images/corse/Centuri/11-centuri.jpg" ,
"images/corse/Centuri/12-centuri.jpg" ,

"images/corse/Nonza/01-nonza.jpg" ,
"images/corse/Nonza/02-nonza.jpg" ,
"images/corse/Nonza/03-nonza.jpg" ,
"images/corse/Nonza/04-nonza.jpg" ,
"images/corse/Nonza/05-nonza.jpg" ,
"images/corse/Nonza/06-nonza.jpg" ,
"images/corse/Nonza/07-nonza.jpg" ,

"images/corse/Saint Florent/01-saint-florent.jpg" ,
"images/corse/Saint Florent/02-saint-florent.jpg" ,
"images/corse/Saint Florent/03-saint-florent.jpg" ,
"images/corse/Saint Florent/04-saint-florent.jpg" ,
"images/corse/Saint Florent/05-saint-florent.jpg" ,
"images/corse/Saint Florent/06-saint-florent.jpg" ,
"images/corse/Saint Florent/07-saint-florent.jpg" ,
"images/corse/Saint Florent/08-saint-florent.jpg" ,
"images/corse/Saint Florent/09-saint-florent.jpg" ,
"images/corse/Saint Florent/10-saint-florent.jpg" ,

"images/corse/Ile Rousse/01-ile-rousse.jpg" ,
"images/corse/Ile Rousse/01-ile-rousse.jpg" ,
"images/corse/Ile Rousse/01-ile-rousse.jpg" ,
"images/corse/Ile Rousse/01-ile-rousse.jpg" ,
"images/corse/Ile Rousse/01-ile-rousse.jpg" ,
"images/corse/Ile Rousse/01-ile-rousse.jpg" ,
"images/corse/Ile Rousse/01-ile-rousse.jpg" ,
"images/corse/Ile Rousse/01-ile-rousse.jpg" ,
"images/corse/Ile Rousse/01-ile-rousse.jpg" ,
   
"images/corse/Calvi/01-calvi.jpg" ,
"images/corse/Calvi/02-calvi.jpg" ,
"images/corse/Calvi/03-calvi.jpg" ,
"images/corse/Calvi/04-calvi.jpg" ,
"images/corse/Calvi/05-calvi.jpg" ,
"images/corse/Calvi/06-calvi.jpg" ,
"images/corse/Calvi/07-calvi.jpg" ,
"images/corse/Calvi/08-calvi.jpg" ,
"images/corse/Calvi/09-calvi.jpg" ,
"images/corse/Calvi/10-calvi.jpg" ,
"images/corse/Calvi/12-calvi.jpg" ,
"images/corse/Calvi/13-calvi.jpg" ,
"images/corse/Calvi/14-calvi.jpg" ,
"images/corse/Calvi/15-calvi.jpg" ,
"images/corse/Calvi/16-calvi.jpg" ,

"images/corse/Sur la route/01-paysage.jpg" ,
"images/corse/Sur la route/02-paysage.jpg" ,
"images/corse/Sur la route/03-paysage.jpg" ,
"images/corse/Sur la route/04-paysage.jpg" ,
"images/corse/Sur la route/05-paysage.jpg" ,
"images/corse/Sur la route/06-paysage.jpg" ,
"images/corse/Sur la route/07-paysage.jpg" ,
"images/corse/Sur la route/08-paysage.jpg" ,
"images/corse/Sur la route/09-paysage.jpg" ,
"images/corse/Sur la route/10-paysage.jpg" ,
"images/corse/Sur la route/11-paysage.jpg" ,
"images/corse/Sur la route/12-paysage.jpg" ,
"images/corse/Sur la route/13-paysage.jpg" ,
"images/corse/Sur la route/14-paysage.jpg" ,
"images/corse/Sur la route/15-paysage.jpg" ,
"images/corse/Sur la route/16-paysage.jpg" ,
"images/corse/Sur la route/17-paysage.jpg" ,
"images/corse/Sur la route/18-paysage.jpg" ,
"images/corse/Sur la route/19-paysage.jpg" ,
"images/corse/Sur la route/20-paysage.jpg" ,
"images/corse/Sur la route/21-paysage.jpg" ,
"images/FIN.jpg",

];

// Liste des musiques
const playlist = [
  "audio/La chanson du maquis.mp3",
  "audio/La boudeuse Corse.mp3",
  "audio/A l'ombre des oliviers.mp3",
  "audio/La Valse de Girolata.mp3",
  "audio/Les rives du Valinco.mp3",
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

