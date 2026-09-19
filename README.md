# Repère

Une application web minimaliste pour organiser ses séances de musculation autour d’un focus musculaire hebdomadaire.

## Fonctionnalités

- choix d’un muscle focus et d’un objectif d’exercices hebdomadaires ;
- suggestions renouvelables qui privilégient le focus et évitent les répétitions dans la semaine ;
- bibliothèque de 34 exercices filtrable par muscle, avec cible anatomique précise et principaux muscles secondaires ;
- séance libre avec répétitions, charge maximale et suivi automatique du dernier PR ;
- historique et progression de la semaine ;
- sauvegarde locale dans le navigateur (`localStorage`) ;
- interface responsive, sans compte ni backend.

## Lancer localement

Le projet n’a aucune dépendance. Depuis la racine :

```bash
python3 -m http.server 4173 --directory dist
```

Puis ouvrir [http://localhost:4173](http://localhost:4173).

## Déployer sur Vercel

Le fichier `vercel.json` configure automatiquement `dist` comme dossier public. Connecter le dépôt à Vercel avec le preset **Other** et sans commande de build ; chaque push sur `main` déclenchera ensuite un nouveau déploiement.

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
- [Free Exercise DB](https://github.com/yuhonas/free-exercise-db) — photographies des mouvements, distribuées dans le domaine public.
- [Rodríguez-Ridao et al., 2020](https://pubmed.ncbi.nlm.nih.gov/32236133/) — activité régionale des quadriceps et des fessiers sur les mouvements unilatéraux ;
- [Coratella et al., 2020](https://pubmed.ncbi.nlm.nih.gov/32824894/) — activation des trois faisceaux du deltoïde selon les variantes d’élévation ;
- [Saeterbakken et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28713459/) — pectoraux, deltoïdes et triceps selon l’angle et la prise au développé couché ;
- [Bourne et al., 2014](https://pubmed.ncbi.nlm.nih.gov/24978835/) — recrutement régional des ischio-jambiers ;
- [Contreras et al., 2015](https://pubmed.ncbi.nlm.nih.gov/26214739/) — grand fessier, biceps fémoral et vaste latéral au hip thrust et au squat ;
- [Calatayud et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29809073/) — comparaison de l’activation musculaire aux pompes et au développé couché ;
- [Marcolin et al., 2018](https://pubmed.ncbi.nlm.nih.gov/30013836/) — biceps brachial et brachio-radial sur différentes variantes de curl ;
- [Park et al., 2016](https://pubmed.ncbi.nlm.nih.gov/27213781/) — droit abdominal et obliques pendant la planche ;
- [Fisher et al., 2024](https://pubmed.ncbi.nlm.nih.gov/38665162/) — activation du tronc pendant les marches chargées.

Cette application ne remplace pas l’avis d’un professionnel de santé ou d’un coach qualifié.

## Ajouter au dépôt Git

```bash
git init
git add .
git commit -m "feat: add Repere workout tracker"
```
