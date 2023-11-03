// Fonction pour récupérer l'année depuis le backend hébergé sur Vercel
const getYearFromBackend = () => {
  fetch('https://whatyearisit-backend-h3zpjxtey-hartmans-projects.vercel.app/year')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });
};

// Appel de la fonction pour récupérer l'année
getYearFromBackend();
