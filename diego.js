// Exportation d'un module représentant le serveur Diego
module.exports = {
    // Fonction pour appliquer un filtre à une image
    applyFilter: function(imageData, filterDetails) {
        // Affichage d'un message pour indiquer que le filtre est en cours d'application
        console.log(`Diego: Applying filter - ${filterDetails.filterName}`);
        
        // Retourne l'imageData modifiée pour simuler l'application du filtre
        // Dans une véritable application, ici, le traitement réel de l'image aurait lieu
        return `${imageData} + Filtered with ${filterDetails.filterName}`;
    }
};
