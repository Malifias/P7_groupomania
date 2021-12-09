# Projet 7 - Groupomania !

7ème et dernier projet de la formation développeur web d'Openclassrooms.
Créer un réseau social d'entreprise.

## Backend

Ouvrir le dossier Backend dans le terminal de votre éditeur puis exécuter la commande:

    npm install

puis

    npm start ou nodemon serve

## Base de données

Se connecter au serveur **MySql** de votre choix.
Exécuter la commande: `CREATE DATABASE socialnetwork;`
Vérifiez les identifiants dans le fichier config.json du dossier Backend puis importer le fichier socialnetwork.sql s'il vous a été fourni :

    mysql -u root -p socialnetwork < socialnetwork.sql

Il faut remplacer `socialnetwork.sql` par le chemin du fichier dans votre machine.
Vous pouvez lancer le projet sans importer le fichier.sql, au lancement de l'application un compte administrateur est automatiquement créé (les identifiants vous on été fourni dans un fichier Id_Admin).

