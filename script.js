// Fonction pour récupérer l'année depuis le backend hébergé sur Vercel
const getYearFromBackend = () => {
  fetch('https://whatyearisit-navy.vercel.app/year')
 .then(response => response.json())
 .then(data => {
   document.queryElemendById('year').textContent = data.year;
 });
};

