# Random Music

Ce dépôt contient un petit site web permettant d'écouter de la musique gratuitement de façon aléatoire. Le projet utilise PHP pour servir les titres et s'appuie principalement sur le framework Bootstrap pour l'interface utilisateur.

## Fonctionnement

- `index.php` et `main.php` sont les points d'entrée principaux. Ils assemblent les différentes vues situées dans le dossier `view/` et chargent le lecteur audio ainsi que la barre de navigation.
- Les fichiers musicaux sont rangés par genre dans le répertoire `music/`. Chaque genre possède un sous-dossier `mp3/` contenant des pistes au format MP3.
- Le script `control/setmusi.php` renvoie aléatoirement le nom d'un morceau à partir d'un genre donné. Le JavaScript `js/myfunctions.js` appelle ce script afin de mettre à jour la playlist du lecteur.
- Les fichiers CSS et JavaScript nécessaires au thème se trouvent respectivement dans `css/` et `js/`.

## Lancer le site en local

1. Installez PHP (version 5.4 ou supérieure suffit pour utiliser le serveur intégré).
2. Placez-vous à la racine du projet et lancez :
   ```bash
   php -S localhost:8000
   ```
3. Ouvrez ensuite votre navigateur sur `http://localhost:8000/index.php` ou `main.php`.

Le site charge alors une playlist aléatoire et permet d'écouter les titres via le lecteur intégré basé sur SoundManager 2.

## Structure des dossiers

```
control/       Scripts PHP utilisés par l'application
css/           Feuilles de style
font/          Icônes FontAwesome
fonts/         Polices diverses
image/         Images du thème
images/        Autres visuels
js/            Scripts JavaScript
music/         Pistes classées par genre (electro, rock, jazz, ...)
view/          Fragments HTML inclus dans les pages
```

## Crédits

Ce projet réutilise un template HTML5 "Delite" publié par [WebThemez](http://webthemez.com/). Le design repose sur Bootstrap 3.2 ainsi que les icônes [Font Awesome](http://fortawesome.github.com/Font-Awesome/). Les images de démonstration proviennent de [Unsplash](http://unsplash.com) (licence CC0). Toutes les images présentes servent uniquement d'exemple.

## Licence

Aucune licence spécifique n'est fournie avec ce projet. Les musiques sont destinées à un usage personnel et proviennent de diverses sources libres. Veillez à respecter les éventuelles conditions de distribution associées aux fichiers audio.
