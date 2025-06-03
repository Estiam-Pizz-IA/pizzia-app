# PizzIA 🍕🤖
Développeurs, développeuses,\
c'est ici que commence votre aventure. Je sais que vous êtes impatients de toucher du code et faire travailler vos neuronnes, mais prennez un café et 5 minutes de votre temps pour lire ce README (en entier svp).
## Sommaire
- [Quick start](#quick-start)
- [Dev notice](#dev-notice)
- [Contribute to this project](#contribute-to-this-project)
- [HELP I'M LOST](#help-im-lost)
## Quick start
Voici la liste des étapes à effectuer pour fiare tourner ce projet sur votre machine :
1) Installez docker sur votre machine depuis le site officiel https://www.docker.com/
2) clonnez le répertoire git sur votre machine :
```Bash
git clone git@github.com:Estiam-Pizz-IA/pizzia-app.git
```
3) naviguez vers le répertoire local et lancez l'application grâce à docker.
```Bash
cd pizzia-app
docker compose up
```
4) le programme va télécharger les dépendances et lancer les applications de front-end et back-end. Une fois le container lancé, le site sera accessible via http://localhost/ sur le navigateur de votre choix.

*ps: Demandez à l'équipe pour avoir accès au variables d'environnements, sans quoi le projet ne fonctionnera pas.*

## Dev notice
Pour contribuer au développement de l'application, en plus de docker, il est nécéssaire d'avoir sur sa machine **TOUS LES OUTILS DE DÉVELOPPEMENT**:
- Un éditeur de texte (par exemple `VsCode`)
- NodeJS v24
- Un navigateur internet

Pour lancer l'application en mode développement, ouvrez deux onglets de terminal.
1) back-end
```Bash
cd pizzapi
npm install
npm run dev
````
2) front-end
```Bash
cd pizzapp
npm install
npm run dev
```
Une fois les deux programmes démarées, l'application sera dispobile via http://localhost:3000/ \
\
*ps:*
- *Les applications redémareront en cas de changement, aucune manipulation suplémentaire n'est nécéssaire.*
- *__L'application doit fonctionner sur un docker local__ avant toute demande de modification !*

## Contribute to this project
Pour contribuer à ce projet, demandez l'accès à l'organisation *(un message teams pourrait accélérer la prise en compte de votre requête)*.\
Les branches principales du projet (`main` et `dev`) sont protégés en écritures, elles nécéssittent l'approbation des `@TechLead` avant d'être modifiées.\
Pour effectuer des changements sur le projet, créez une branche en suivant ces règles :
- Basez vous sur la dernière version de la branche `dev` :
```Bash
git switch dev
git pull
```
- Essayez au maximum de créer une branche par fonctionalitée à implémenter.
- Donnez un nom pertinent à vos branches\
  eg. `feature/authentication`, `bugfix/get-products`
- Ecrivez des messages de commits compréhensible\
  eg. \
  Added Pizza CRUD\
      - created new pizza router\
      - added get, post, patch, delete methods for managing pizzas

Une fois sur de vos modifications, créez une merge request pour la fonctionalitée que vous avez ajouté. expliquez brievement dans la description les modifications que vous avez apportés et ajoutez au moins un `@Developper` et un `@TechLead` pour approuver votre requête.\
\
**⚠️ ATTENTION A NE PAS COMMIT DE CLÉS API OU AUTRES SECRETS SUR GIT !⚠️**\
\
*ps: Je n'ai aucun problème avec l'utilisation des IA mais votre code doit rester lisible, maintenable, et vous devriez être en capacité d'expliquer les décisions d'implémentations que vous prenez lors, de par exemple, une code review avec un @TechLead*

## HELP I'M LOST
En cas de problème, n'hésitez pas à envoyer un message sur Teams à `@Faraan Rozbully`. Ne paniquez pas et commandez une pizza (sans Ananas) à la pizzeria la plus proche le temps de patienter.
