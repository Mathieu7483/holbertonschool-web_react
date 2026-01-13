<p align="center"\>
<img src="https://github.com/Mathieu7483/Aiko78-Photgraphy/blob/main/img/creer-moi-une-page-de-garder-pour-un-projet--types.png"\>
</p>

# TypeScript Foundations

## 📝 Description

Ce projet explore les fondamentaux de **TypeScript**, une surcouche syntaxique (superset) de JavaScript qui ajoute un système de typage statique. L'objectif est de passer d'un code JavaScript flexible mais risqué à un code TypeScript robuste, prévisible et facile à maintenir.

Nous couvrons ici l'utilisation des interfaces, des classes, la manipulation du DOM avec typage, les types génériques, ainsi que des concepts avancés comme les namespaces ambients et le typage nominal.

## 🛠️ Contenu du projet

Le projet est organisé par tâches, chacune isolée avec sa propre configuration Webpack/Babel :

| Dossier | Sujets abordés | Fichiers clés |
| --- | --- | --- |
| `task_0/` | Interfaces, Tableaux, Rendu DOM simple. | `js/main.ts` |
| `task_1/` | Interfaces complexes, extension d'interfaces (Inheritance). | `js/main.ts` |
| `task_2/` | Classes, Interfaces pour fonctions, méthodes de classes. | `js/main.ts` |
| `task_3/` | Interfaces pour fonctions de rappel (Callbacks). | `js/main.ts` |
| `task_4/` | Classes avancées et logique métier. | `js/main.ts` |
| `task_5/` | Types avancés : Union types, Intersection types. | `js/main.ts` |
| `task_6/` | Fonctions spécifiques aux employés, Type guards. | `js/main.ts` |
| `task_7/` | String Literal Types. | `js/main.ts` |
| `task_8/` | Namespaces Ambients (importation de bibliothèques externes). | `js/main.ts`, `js/db.d.ts` |
| `task_9/` | Namespaces & Declaration Merging. | `js/main.ts` |
| `task_10/` | Brand Convention & Nominal Typing. | `js/main.ts` |

## 🏗️ Configuration et Prérequis

L'environnement de transpilation est configuré pour **Ubuntu 18.04**.

* **Langage :** TypeScript 4.9.5
* **Moteur :** Node.js
* **Bundler :** Webpack 5.x
* **Tests :** Jest 29.x
* **Linter :** ESLint avec le plugin `@typescript-eslint`.

### Fichiers de configuration inclus :

* `tsconfig.json` : Définit les règles du compilateur (stricte, cible ES5).
* `webpack.config.js` : Gère le serveur de développement et la génération du bundle.
* `.eslintrc.js` : Garantit la qualité et la cohérence du code TS.

## 🚀 Installation et Lancement

### 1. Installation

Rendez-vous dans le dossier de la tâche souhaitée (ex: `task_0`) et installez les dépendances :

```bash
npm install

```

### 2. Développement

Pour lancer le serveur de développement avec rechargement automatique (Hot Reloading) :

```bash
npm run start-dev

```

Le projet sera accessible sur `http://localhost:8080`.

### 3. Tests et Build

* **Exécuter les tests :** `npm run test`
* **Générer le bundle de production :** `npm run build`

## ✒️ Auteur

**Mathieu**

[Mathieu GODALIER](https://github.com/Mathieu7483) - Élève en programmation à la Holberton School

## ⚖️ Licence

Ce projet est sous licence **ISC**.

## 🙏 Remerciements

* **Holberton School** pour le curriculum.
* **Johann Kerbrat** pour l'ingénierie pédagogique de ce module.
