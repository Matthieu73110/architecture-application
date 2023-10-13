# architecture-application
Code projet Puzzix, Matthieu &amp; Aymeric

Puzzix - Projet de retouche d'image social
==========================================

Puzzix est une plateforme interactive qui permet aux utilisateurs de déformer une image et de défier leurs amis à deviner l'image originale et les transformations appliquées.

Architecture
------------

Le projet est structuré autour de plusieurs serveurs :

- **Alice** : Sert le frontend de l'application.
- **Bill** : Backend principal qui orchestre la logique de l'application.
- **Claire** : Serveur de stockage pour les images.
- **Diego & Elise** : Serveurs de traitement pour appliquer des filtres et des effets aux images.

Prérequis
---------

- Node.js
- Un éditeur de texte (par exemple, Visual Studio Code)

Installation
------------

1. Clonez le dépôt :
`git clone https://github.com/Matthieu73110/architecture-application`


2. Accédez au dossier du projet :
`cd chemin_vers_le_dossier`

3. Initialiser le projet :
`npm init`
Laissez les valeurs par défauts


5. Installez les dépendances :
`npm install`


Lancer le projet
----------------

Pour démarrer le projet :
`node bill.js`


Fonctionnement
--------------

1. Les utilisateurs interagissent avec le serveur Alice pour télécharger des images et définir des transformations.
2. Les images sont stockées sur le serveur Claire.
3. Les transformations sont appliquées par les serveurs Diego et Elise.
4. Les utilisateurs peuvent alors défier leurs amis à deviner l'image originale et les transformations.
