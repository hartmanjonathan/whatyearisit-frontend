// Fonction pour récupérer l'année depuis le backend hébergé sur Vercel
fetch("whatyearisit-backend-blond.vercel.app/year")
// transformé en json
.then(response => response.json())
.then(data => {
    console.log("data", data)
    // je récupère les éléments grace au dom
    const yearStock = document.getElementById("year"); 

    // je mets à jour l'élement avec l'année récup
    yearStock.textContent = data.year;
})
.catch(error => {
    console.error(error);
});

