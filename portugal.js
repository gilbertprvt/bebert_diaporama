

let intervalId = null;
let currentIndex = 0;
let vitesse = 5000;
let currentTrackIndex = 0;
let enPause = false;
let slideshowTermine = false;

const images = [
 

"images/portugal/Carte circuit.jpg" ,
"images/portugal/Lisbonne la ville/0-Lisbonne.jpg" ,
"images/portugal/Lisbonne la ville/lisbonne-1.jpg" ,
"images/portugal/Lisbonne la ville/lisbonne-2.jpg" ,
"images/portugal/Lisbonne la ville/lisbonne-3.jpg" ,
"images/portugal/Lisbonne la ville/lisbonne-4.jpg" ,
"images/portugal/Lisbonne la ville/lisbonne-5.jpg" ,
"images/portugal/Lisbonne la ville/lisbonne-6.jpg" ,
"images/portugal/Lisbonne la ville/lisbonne-7.jpg" ,
"images/portugal/Lisbonne la ville/lisbonne-8.jpg" ,
"images/portugal/Lisbonne la ville/lisbonne-9.jpg" ,
"images/portugal/Lisbonne la ville/lisbonne-10.jpg" ,
"images/portugal/Lisbonne la ville/lisbonne-11.jpg" ,
"images/portugal/Lisbonne la ville/lisbonne-12.jpg" ,
"images/portugal/Lisbonne la ville/lisbonne-13.jpg" ,
"images/portugal/Lisbonne la ville/lisbonne-14.jpg" ,
"images/portugal/Lisbonne la ville/lisbonne-15.jpg" ,


"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-1.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-2.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-3.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-4.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-5.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-6.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-7.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-8.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-9.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-10.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-11.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-12.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-13.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-14.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-15.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-16.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-17.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-18.jpg" ,
"images/portugal/Lisbonne (Monastére Hiéronymites)/Hiéronymites-19.jpg" ,

"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-1.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-2.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-3.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-4.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-5.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-6.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-7.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-8.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-9.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-10.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-11.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-12.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-13.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-14.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-15.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-16.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-17.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-18.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-19.jpg" ,
"images/portugal/Lisbonne (quartier d'Alfama)/Alfama-20.jpg" ,

"images/portugal/Lisbonne (quartier Belém)/Belém-1.jpg" ,
"images/portugal/Lisbonne (quartier Belém)/Belém-2.jpg" ,
"images/portugal/Lisbonne (quartier Belém)/Belém-3.jpg" ,
"images/portugal/Lisbonne (quartier Belém)/Belém-4.jpg" ,
"images/portugal/Lisbonne (quartier Belém)/Belém-5.jpg" ,
"images/portugal/Lisbonne (quartier Belém)/Belém-6.jpg" ,
"images/portugal/Lisbonne (quartier Belém)/Belém-7.jpg" ,
"images/portugal/Lisbonne (quartier Belém)/Belém-8.jpg" ,
"images/portugal/Lisbonne (quartier Belém)/Belém-9.jpg" ,
"images/portugal/Lisbonne (quartier Belém)/Belém-10.jpg" ,
"images/portugal/Lisbonne (quartier Belém)/Belém-11.jpg" ,

"images/portugal/Lisbonne (quartier moderne)/Moderne-1.jpg" ,
"images/portugal/Lisbonne (quartier moderne)/Moderne-2.jpg" ,
"images/portugal/Lisbonne (quartier moderne)/Moderne-3.jpg" ,
"images/portugal/Lisbonne (quartier moderne)/Moderne-4.jpg" ,
"images/portugal/Lisbonne (quartier moderne)/Moderne-5.jpg" ,
"images/portugal/Lisbonne (quartier moderne)/Moderne-6.jpg" ,
"images/portugal/Lisbonne (quartier moderne)/Moderne-7.jpg" ,
"images/portugal/Lisbonne (quartier moderne)/Moderne-8.jpg" ,
"images/portugal/Lisbonne (quartier moderne)/Moderne-9.jpg" ,
"images/portugal/Lisbonne (quartier moderne)/Moderne-10.jpg" ,

"images/portugal/Sintra/Carte Sintra.jpg" ,
"images/portugal/Sintra/Sintra-1.jpg" ,
"images/portugal/Sintra/Sintra-2.jpg" ,
"images/portugal/Sintra/Sintra-3.jpg" ,
"images/portugal/Sintra/Sintra-4.jpg" ,
"images/portugal/Sintra/Sintra-5.jpg" ,
"images/portugal/Sintra/Sintra-6.jpg" ,
"images/portugal/Sintra/Sintra-7.jpg" ,
"images/portugal/Sintra/Sintra-8.jpg" ,
"images/portugal/Sintra/Sintra-9.jpg" ,
"images/portugal/Sintra/Sintra-10.jpg" ,
"images/portugal/Sintra/Sintra-11.jpg" ,
"images/portugal/Sintra/Sintra-12.jpg" ,
"images/portugal/Sintra/Sintra-13.jpg" ,
"images/portugal/Sintra/Sintra-14.jpg" ,
"images/portugal/Sintra/Sintra-1.jpg" ,

"images/portugal/Sintra (Palais national)(UNESCO)/Palais-1.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-2.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-3.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-4.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-5.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-6.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-7.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-8.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-9.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-10.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-11.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-12.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-13.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-14.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-15.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-16.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-17.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-18.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-19.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-20.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-21.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-22.jpg" ,
"images/portugal/Sintra (Palais national)(UNESCO)/Palais-23.jpg" ,

"images/portugal/Alcobaça/Alcobaça-0.jpg" ,
"images/portugal/Alcobaça/Alcobaça-1.jpg" ,
"images/portugal/Alcobaça/Alcobaça-2.jpg" ,
"images/portugal/Alcobaça/Alcobaça-3.jpg" ,
"images/portugal/Alcobaça/Alcobaça-4.jpg" ,
"images/portugal/Alcobaça/Alcobaça-5.jpg" ,
"images/portugal/Alcobaça/Alcobaça-6.jpg" ,
"images/portugal/Alcobaça/Alcobaça-7.jpg" ,
"images/portugal/Alcobaça/Alcobaça-8.jpg" ,
"images/portugal/Alcobaça/Alcobaça-8.jpg" ,
"images/portugal/Alcobaça/Alcobaça-10.jpg" ,
"images/portugal/Alcobaça/Alcobaça-11.jpg" ,
"images/portugal/Alcobaça/Alcobaça-12.jpg" ,

"images/portugal/Nazaré/Nazaré-0.jpg" ,
"images/portugal/Nazaré/Nazaré-1.jpg" ,
"images/portugal/Nazaré/Nazaré-2.jpg" ,
"images/portugal/Nazaré/Nazaré-3.jpg" ,
"images/portugal/Nazaré/Nazaré-4.jpg" ,
"images/portugal/Nazaré/Nazaré-5.jpg" ,
"images/portugal/Nazaré/Nazaré-6.jpg" ,
"images/portugal/Nazaré/Nazaré-7.jpg" ,
"images/portugal/Nazaré/Nazaré-8.jpg" ,
"images/portugal/Nazaré/Nazaré-9.jpg" ,
"images/portugal/Nazaré/Nazaré-10.jpg" ,
"images/portugal/Nazaré/Nazaré-11.jpg" ,
"images/portugal/Nazaré/Nazaré-12.jpg" ,
"images/portugal/Nazaré/Nazaré-13.jpg" ,
"images/portugal/Nazaré/Nazaré-14.jpg" ,

"images/portugal/Batalha/Batalha-0.jpg" ,
"images/portugal/Batalha/Batalha-1.jpg" ,
"images/portugal/Batalha/Batalha-2.jpg" ,
"images/portugal/Batalha/Batalha-3.jpg" ,
"images/portugal/Batalha/Batalha-4.jpg" ,
"images/portugal/Batalha/Batalha-5.jpg" ,
"images/portugal/Batalha/Batalha-6.jpg" ,
"images/portugal/Batalha/Batalha-7.jpg" ,
"images/portugal/Batalha/Batalha-8.jpg" ,
"images/portugal/Batalha/Batalha-9.jpg" ,
"images/portugal/Batalha/Batalha-10.jpg" ,
"images/portugal/Batalha/Batalha-11.jpg" ,
"images/portugal/Batalha/Batalha-12.jpg" ,
"images/portugal/Batalha/Batalha-13.jpg" ,
"images/portugal/Batalha/Batalha-14.jpg" ,
"images/portugal/Batalha/Batalha-15.jpg" ,
"images/portugal/Batalha/Batalha-16.jpg" ,
"images/portugal/Batalha/Batalha-17.jpg" ,
"images/portugal/Batalha/Batalha-18.jpg" ,
"images/portugal/Batalha/Batalha-19.jpg" ,

"images/portugal/Fatima/Fatima-0.jpg" ,
"images/portugal/Fatima/Fatima-1.jpg" ,
"images/portugal/Fatima/Fatima-2.jpg" ,
"images/portugal/Fatima/Fatima-3.jpg" ,
"images/portugal/Fatima/Fatima-4.jpg" ,
"images/portugal/Fatima/Fatima-5.jpg" ,
"images/portugal/Fatima/Fatima-6.jpg" ,
"images/portugal/Fatima/Fatima-7.jpg" ,
"images/portugal/Fatima/Fatima-8.jpg" ,
"images/portugal/Fatima/Fatima-9.jpg" ,
"images/portugal/Fatima/Fatima-10.jpg" ,
"images/portugal/Fatima/Fatima-11.jpg" ,
"images/portugal/Fatima/Fatima-12.jpg" ,
"images/portugal/Fatima/Fatima-13.jpg" ,

"images/portugal/Coimbra/Coimbra-0.jpg" ,
"images/portugal/Coimbra/Coimbra-1.jpg" ,
"images/portugal/Coimbra/Coimbra-2.jpg" ,
"images/portugal/Coimbra/Coimbra-3.jpg" ,
"images/portugal/Coimbra/Coimbra-4.jpg" ,
"images/portugal/Coimbra/Coimbra-5.jpg" ,
"images/portugal/Coimbra/Coimbra-6.jpg" ,
"images/portugal/Coimbra/Coimbra-7.jpg" ,
"images/portugal/Coimbra/Coimbra-8.jpg" ,
"images/portugal/Coimbra/Coimbra-9.jpg" ,
"images/portugal/Coimbra/Coimbra-10.jpg" ,
"images/portugal/Coimbra/Coimbra-11.jpg" ,
"images/portugal/Coimbra/Coimbra-12.jpg" ,
"images/portugal/Coimbra/Coimbra-13.jpg" ,
"images/portugal/Coimbra/Coimbra-14.jpg" ,
"images/portugal/Coimbra/Coimbra-15.jpg" ,
"images/portugal/Coimbra/Coimbra-16.jpg" ,

"images/portugal/Coimbra Université/Université-1.jpg" ,
"images/portugal/Coimbra Université/Université-2.jpg" ,
"images/portugal/Coimbra Université/Université-3.jpg" ,
"images/portugal/Coimbra Université/Université-4.jpg" ,
"images/portugal/Coimbra Université/Université-5.jpg" ,
"images/portugal/Coimbra Université/Université-6.jpg" ,
"images/portugal/Coimbra Université/Université-7.jpg" ,
"images/portugal/Coimbra Université/Université-8.jpg" ,
"images/portugal/Coimbra Université/Université-9.jpg" ,
"images/portugal/Coimbra Université/Université-10.jpg" ,


"images/portugal/Aveiro/Aveiro-0.jpg" ,
"images/portugal/Aveiro/Aveiro-1.jpg" ,
"images/portugal/Aveiro/Aveiro-2.jpg" ,
"images/portugal/Aveiro/Aveiro-3.jpg" ,
"images/portugal/Aveiro/Aveiro-4.jpg" ,
"images/portugal/Aveiro/Aveiro-5.jpg" ,
"images/portugal/Aveiro/Aveiro-6.jpg" ,
"images/portugal/Aveiro/Aveiro-7.jpg" ,
"images/portugal/Aveiro/Aveiro-8.jpg" ,
"images/portugal/Aveiro/Aveiro-9.jpg" ,
"images/portugal/Aveiro/Aveiro-10.jpg" ,
"images/portugal/Aveiro/Aveiro-11.jpg" ,
"images/portugal/Aveiro/Aveiro-12.jpg" ,
"images/portugal/Aveiro/Aveiro-13.jpg" ,
"images/portugal/Aveiro/Aveiro-14.jpg" ,

"images/portugal/Porto/Porto-0.jpg" ,
"images/portugal/Porto/Porto-1.jpg" ,
"images/portugal/Porto/Porto-2.jpg" ,
"images/portugal/Porto/Porto-3.jpg" ,
"images/portugal/Porto/Porto-4.jpg" ,
"images/portugal/Porto/Porto-5.jpg" ,
"images/portugal/Porto/Porto-6.jpg" ,
"images/portugal/Porto/Porto-7.jpg" ,
"images/portugal/Porto/Porto-8.jpg" ,
"images/portugal/Porto/Porto-9.jpg" ,
"images/portugal/Porto/Porto-10.jpg" ,
"images/portugal/Porto/Porto-11.jpg" ,
"images/portugal/Porto/Porto-12.jpg" ,
"images/portugal/Porto/Porto-13.jpg" ,
"images/portugal/Porto/Porto-14.jpg" ,
"images/portugal/Porto/Porto-15.jpg" ,
"images/portugal/Porto/Porto-16.jpg" ,
"images/portugal/Porto/Porto-17.jpg" ,
"images/portugal/Porto/Porto-18.jpg" ,
"images/portugal/Porto/Porto-19.jpg" ,
"images/portugal/Porto/Porto-20.jpg" ,
"images/portugal/Porto/Porto-21.jpg" ,
"images/portugal/Porto/Porto-22.jpg" ,
"images/portugal/Porto/Porto-23.jpg" ,
"images/portugal/Porto/Porto-24.jpg" ,
"images/portugal/Porto/Porto-25.jpg" ,
"images/portugal/Porto/Porto-26.jpg" ,
"images/portugal/Porto/Porto-27.jpg" ,
"images/portugal/Porto/Porto-28.jpg" ,
"images/portugal/Porto/Porto-29.jpg" ,
"images/portugal/Porto/Porto-30.jpg" ,
"images/portugal/Porto/Porto-31.jpg" ,
"images/portugal/Porto/Porto-32.jpg" ,
"images/portugal/Porto/Porto-33.jpg" ,
"images/portugal/Porto/Porto-34.jpg" ,
"images/portugal/Porto/Porto-35.jpg" ,

"images/portugal/Porto (Palais de la Bourse)/Palais de la Bourse-1.jpg" ,
"images/portugal/Porto (Palais de la Bourse)/Palais de la Bourse-2.jpg" ,
"images/portugal/Porto (Palais de la Bourse)/Palais de la Bourse-3.jpg" ,
"images/portugal/Porto (Palais de la Bourse)/Palais de la Bourse-4.jpg" ,
"images/portugal/Porto (Palais de la Bourse)/Palais de la Bourse-5.jpg" ,
"images/portugal/Porto (Palais de la Bourse)/Palais de la Bourse-6.jpg" ,
"images/portugal/Porto (Palais de la Bourse)/Palais de la Bourse-7.jpg" ,
"images/portugal/Porto (Palais de la Bourse)/Palais de la Bourse-8.jpg" ,
"images/portugal/Porto (Palais de la Bourse)/Palais de la Bourse-9.jpg" ,
"images/portugal/Porto (Palais de la Bourse)/Palais de la Bourse-10.jpg" ,

"images/portugal/Guimaraes/Guimaraes-0.jpg" ,
"images/portugal/Guimaraes/Guimaraes-1.jpg" ,
"images/portugal/Guimaraes/Guimaraes-2.jpg" ,
"images/portugal/Guimaraes/Guimaraes-3.jpg" ,
"images/portugal/Guimaraes/Guimaraes-4.jpg" ,
"images/portugal/Guimaraes/Guimaraes-5.jpg" ,
"images/portugal/Guimaraes/Guimaraes-6.jpg" ,
"images/portugal/Guimaraes/Guimaraes-7.jpg" ,
"images/portugal/Guimaraes/Guimaraes-8.jpg" ,
"images/portugal/Guimaraes/Guimaraes-9.jpg" ,
"images/portugal/Guimaraes/Guimaraes-10.jpg" ,
"images/portugal/Guimaraes/Guimaraes-11.jpg" ,
"images/portugal/Guimaraes/Guimaraes-12.jpg" ,
"images/portugal/Guimaraes/Guimaraes-13.jpg" ,
"images/portugal/Guimaraes/Guimaraes-14.jpg" ,

"images/portugal/Braga/Braga-0.jpg" ,
"images/portugal/Braga/Braga-1.jpg" ,
"images/portugal/Braga/Braga-2.jpg" ,
"images/portugal/Braga/Braga-3.jpg" ,
"images/portugal/Braga/Braga-4.jpg" ,
"images/portugal/Braga/Braga-5.jpg" ,
"images/portugal/Braga/Braga-6.jpg" ,
"images/portugal/Braga/Braga-7.jpg" ,

"images/FIN.jpg",

];

// Liste des musiques
const playlist = [
  "audio/Portugal.mp3",
 
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

