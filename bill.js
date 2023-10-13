// Importation des modules nécessaires
const fs = require('fs');  // Module pour les opérations de fichiers
const diegoServer = require('./diego');  // Module représentant le serveur Diego
const eliseServer = require('./elise');  // Module représentant le serveur Elise
const restSimulation = require('./restSimulation');  // Module pour simuler des requêtes REST

// Définition du serveur Bill
const billServer = {
    // Méthode pour récupérer les opérations stockées dans le fichier JSON
    getOperations: function() {
        // Lecture synchrone du fichier 'stockage.json'
        const data = fs.readFileSync('stockage.json', 'utf8');
        // Conversion des données JSON en objet JavaScript et retour des opérations
        return JSON.parse(data).operations;
    },
    
    // Méthode pour ajouter une opération au stockage
    addOperation: function(operationType, operationDetails) {
        // Récupération des opérations actuelles
        const operations = this.getOperations();
        // Ajout de la nouvelle opération à la liste
        operations.push({ operationType, operationDetails });
        // Écriture synchrone des opérations mises à jour dans le fichier 'stockage.json'
        fs.writeFileSync('stockage.json', JSON.stringify({ operations }));
        // Affichage d'un message indiquant que l'opération a été ajoutée
        console.log(`Bill: Operation added - Type: ${operationType}`);
    },
    
    // Méthode pour traiter une image en fonction des opérations stockées
    processImage: function(imageData) {
        // Récupération des opérations
        const operations = this.getOperations();
        // Boucle sur chaque opération
        for (let operation of operations) {
            // Si l'opération est un filtre, envoyez une requête au serveur Diego
            if (operation.operationType === 'filter') {
                imageData = restSimulation.sendRequest('Diego', 'POST', '/applyFilter', { imageData, filterDetails: operation.operationDetails });
            } 
            // Si l'opération est un effet, envoyez une requête au serveur Elise
            else if (operation.operationType === 'effect') {
                imageData = restSimulation.sendRequest('Elise', 'POST', '/applyEffect', { imageData, effectDetails: operation.operationDetails });
            }
        }
        // Retour de l'image traitée
        return imageData;
    }
};


// Test de la simulation
billServer.addOperation('filter', { filterName: 'grayscale' });
billServer.addOperation('effect', { effectName: 'rotation' });
billServer.addOperation('effect', { effectName: 'zoom' });
billServer.addOperation('filter', { filterName: 'sepia' });
const processedImage = billServer.processImage('rawImageData');
console.log(`Processed Image: ${processedImage}`);
