// Exportation d'un module représentant le serveur Elise
module.exports = {
    // Fonction pour appliquer un effet à une image
    applyEffect: function(imageData, effectDetails) {
        // Affichage d'un message pour indiquer que l'effet est en cours d'application
        console.log(`Elise: Applying effect - ${effectDetails.effectName}`);
        
        // Retourne l'imageData modifiée pour simuler l'application de l'effet
        // Dans une véritable application, ici, le traitement réel de l'image aurait lieu
        return `${imageData} + Applied ${effectDetails.effectName} effect`;
    }
};
