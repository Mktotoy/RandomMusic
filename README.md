# Random Music

Ce dépôt contient un petit site web permettant d'écouter de la musique gratuitement de façon aléatoire. La version actuelle ne dépend plus de PHP et fonctionne entièrement côté client en HTML, CSS et JavaScript. L'interface adopte désormais un design *glassmorphism*.

## Fonctionnement

- `index.html` est désormais l'unique point d'entrée et embarque directement le lecteur SoundManager2.
- Les fichiers musicaux sont rangés par genre dans le répertoire `music/`. Chaque genre possède un sous-dossier `mp3/` contenant des pistes au format MP3.
- La playlist est générée côté client à partir du fichier `js/playlist.js` qui référence l'ensemble des morceaux disponibles.
- Les fichiers CSS et JavaScript nécessaires au thème se trouvent respectivement dans `css/` et `js/`.
- Un appel à l'API [Jamendo](https://api.jamendo.com/) permet de compléter dynamiquement la liste avec des titres libres de droits.

## Lancer le site en local

1. Ouvrez simplement `index.html` dans votre navigateur préféré ou servez le répertoire avec n'importe quel serveur HTTP statique.

Le site charge alors une playlist aléatoire et permet d'écouter les titres via le lecteur intégré basé sur SoundManager 2.

## Structure des dossiers

```
css/           Feuilles de style
font/          Icônes FontAwesome
fonts/         Polices diverses
image/         Images du thème
images/        Autres visuels
js/            Scripts JavaScript
music/         Pistes classées par genre (electro, rock, jazz, ...)
```

## Crédits

Ce projet réutilise un template HTML5 "Delite" publié par [WebThemez](http://webthemez.com/). Le design repose sur Bootstrap 3.2 ainsi que les icônes [Font Awesome](http://fortawesome.github.com/Font-Awesome/). Les images de démonstration proviennent de [Unsplash](http://unsplash.com) (licence CC0). Toutes les images présentes servent uniquement d'exemple.

## Licence

Aucune licence spécifique n'est fournie avec ce projet. Les musiques sont destinées à un usage personnel et proviennent de diverses sources libres. Veillez à respecter les éventuelles conditions de distribution associées aux fichiers audio.
