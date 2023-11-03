// Fonction pour récupérer l'année depuis le backend hébergé sur Vercel
const getYearFromBackend = () => {
  fetch('https://whatyearisit-backend-h3zpjxtey-hartmans-projects.vercel.app/api/year')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });
};

// Appel de la fonction pour récupérer l'année
getYearFromBackend();

// ... (votre code existant)

// Fonction pour afficher l'année sur la page web
function afficherAnneeSurLaPage(annee) {
  // Trouver l'élément avec l'ID "year"
  const yearElement = document.getElementById('year');

  // Vérifier si l'élément existe
  if (yearElement) {
    // Modifier le contenu textuel de l'élément avec l'année récupérée
    yearElement.textContent = annee;
  }
}




  
  // ... (le reste de votre code)
