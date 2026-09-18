# Repère

Une application web minimaliste pour organiser ses séances de musculation autour d’un focus musculaire hebdomadaire.

## Fonctionnalités

- choix d’un muscle focus et d’un objectif de séries hebdomadaires ;
- suggestions renouvelables qui privilégient le focus et évitent les répétitions dans la semaine ;
- bibliothèque de 32 exercices filtrable par muscle ;
- séance libre avec séries, répétitions et charge ;
- historique et progression de la semaine ;
- sauvegarde locale dans le navigateur (`localStorage`) ;
- interface responsive, sans compte ni backend.

## Lancer localement

Le projet n’a aucune dépendance. Depuis la racine :

```bash
python3 -m http.server 4173 --directory dist
```

Puis ouvrir [http://localhost:4173](http://localhost:4173).

## Structure

```text
dist/
  index.html
  styles.css
  app.js
README.md
```

## Sources éditoriales

La structure de la bibliothèque et les repères de pratique s’appuient sur :

- [ACE Exercise Library](https://www.acefitness.org/resources/everyone/exercise-library/) — catégories par zone, équipement et niveau ;
- [NHS — How to improve your strength and flexibility](https://www.nhs.uk/live-well/exercise/how-to-improve-strength-flexibility/) — grands groupes musculaires, fréquence et repères séries/répétitions ;
- [NHS — Strength and Flex exercise plan](https://www.nhs.uk/live-well/exercise/strength-and-flex-exercise-plan-how-to-videos/) — exemples de mouvements et rappel de sécurité.

Cette application ne remplace pas l’avis d’un professionnel de santé ou d’un coach qualifié.

## Ajouter au dépôt Git

```bash
git init
git add .
git commit -m "feat: add Repere workout tracker"
```
