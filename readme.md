# Recherche dichotomique en Node.js

Ce script implémente la recherche dichotomique sur un tableau trié en Node.js. L'utilisateur est invité à entrer la valeur recherchée, puis le script trie le tableau et effectue la recherche.

## Utilisation

- Assurez-vous que Node.js est installé sur votre machine.
- Ouvrez un terminal et accédez au répertoire contenant le fichier index.js.
- Exécutez la commande `node index.js` dans votre terminal.
- Entrez la valeur que vous souhaitez rechercher dans le tableau lorsqu'on vous le demande.

## Fonctionnement

Le script commence par trier le tableau en entrée à l'aide de la fonction `sortTab`. Ensuite, il invite l'utilisateur à entrer la valeur qu'il souhaite rechercher. Cette valeur est stockée dans la variable `searchValue`.

Ensuite, le script effectue la recherche dichotomique à l'aide d'une boucle `while`. Les indices `min`, `max` et `mediane` sont initialisés pour effectuer la recherche. La boucle `while` se poursuit tant que la valeur recherchée n'a pas été trouvée et que la plage de recherche n'a pas été épuisée.

Une fois que la boucle est terminée, le script affiche le résultat de la recherche à l'utilisateur.

## Licence

Ce script est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier à votre guise.
