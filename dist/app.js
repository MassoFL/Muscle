const EXERCISES = [
  { id: "bench-press", name: "Développé couché", muscle: "Pectoraux", pattern: "Poussée horizontale", equipment: "Barre", level: "Intermédiaire", target: "Grand pectoral · faisceau sterno-costal", secondary: "Triceps · deltoïde antérieur" },
  { id: "incline-dumbbell", name: "Développé incliné haltères", muscle: "Pectoraux", pattern: "Poussée inclinée", equipment: "Haltères", level: "Intermédiaire", target: "Grand pectoral · faisceau claviculaire", secondary: "Deltoïde antérieur · triceps" },
  { id: "push-up", name: "Pompes", muscle: "Pectoraux", pattern: "Poids du corps", equipment: "Sans matériel", level: "Débutant", target: "Grand pectoral · faisceau sterno-costal", secondary: "Triceps · deltoïde antérieur · dentelé antérieur" },
  { id: "cable-fly", name: "Écarté à la poulie", muscle: "Pectoraux", pattern: "Adduction", equipment: "Poulie", level: "Intermédiaire", target: "Grand pectoral · faisceau sterno-costal", secondary: "Faisceau claviculaire · deltoïde antérieur" },
  { id: "dip-chest", name: "Dips buste penché", muscle: "Pectoraux", pattern: "Poussée verticale", equipment: "Barres parallèles", level: "Avancé", target: "Grand pectoral · fibres sterno-costales inférieures", secondary: "Triceps · deltoïde antérieur" },
  { id: "pull-up", name: "Tractions pronation", muscle: "Dos", pattern: "Tirage vertical", equipment: "Barre de traction", level: "Intermédiaire", target: "Grand dorsal · grand rond", secondary: "Biceps · trapèze inférieur · rhomboïdes" },
  { id: "lat-pulldown", name: "Tirage vertical", muscle: "Dos", pattern: "Tirage vertical", equipment: "Poulie", level: "Débutant", target: "Grand dorsal · grand rond", secondary: "Biceps · trapèze inférieur · rhomboïdes" },
  { id: "barbell-row", name: "Rowing barre", muscle: "Dos", pattern: "Tirage horizontal", equipment: "Barre", level: "Intermédiaire", target: "Trapèze moyen · rhomboïdes", secondary: "Grand dorsal · deltoïde postérieur · biceps" },
  { id: "one-arm-row", name: "Rowing unilatéral", muscle: "Dos", pattern: "Tirage unilatéral", equipment: "Haltère", level: "Débutant", target: "Grand dorsal", secondary: "Rhomboïdes · trapèze moyen · biceps" },
  { id: "seated-row", name: "Rowing assis à la poulie", muscle: "Dos", pattern: "Tirage horizontal", equipment: "Poulie", level: "Débutant", target: "Trapèze moyen · rhomboïdes", secondary: "Grand dorsal · deltoïde postérieur · biceps" },
  { id: "back-extension", name: "Extensions lombaires", muscle: "Dos", pattern: "Extension du tronc", equipment: "Banc", level: "Débutant", target: "Érecteurs du rachis · multifides", secondary: "Grand fessier · ischio-jambiers" },
  { id: "back-squat", name: "Squat arrière", muscle: "Quadriceps", pattern: "Flexion de genou", equipment: "Barre", level: "Intermédiaire", target: "Quadriceps · vastes médial, latéral et intermédiaire", secondary: "Grand fessier · adducteur magnus · droit fémoral" },
  { id: "goblet-squat", name: "Goblet squat", muscle: "Quadriceps", pattern: "Flexion de genou", equipment: "Haltère", level: "Débutant", target: "Quadriceps · vastes médial et latéral", secondary: "Grand fessier · adducteur magnus · sangle abdominale" },
  { id: "split-squat", name: "Fente bulgare", muscle: "Quadriceps", pattern: "Unilatéral", equipment: "Haltères", level: "Intermédiaire", target: "Quadriceps · vastes médial et latéral", secondary: "Grand fessier · moyen fessier · adducteurs" },
  { id: "leg-press", name: "Presse à cuisses", muscle: "Quadriceps", pattern: "Flexion de genou", equipment: "Machine", level: "Débutant", target: "Quadriceps · vastes médial et latéral", secondary: "Droit fémoral · grand fessier · adducteur magnus" },
  { id: "leg-extension", name: "Extension de jambes", muscle: "Quadriceps", pattern: "Isolation", equipment: "Machine", level: "Débutant", target: "Quadriceps · droit fémoral et trois vastes", secondary: "Aucun moteur principal hors quadriceps" },
  { id: "romanian-deadlift", name: "Soulevé de terre roumain", muscle: "Ischio-jambiers", pattern: "Charnière de hanche", equipment: "Barre", level: "Intermédiaire", target: "Ischio-jambiers · semi-tendineux et biceps fémoral", secondary: "Grand fessier · érecteurs du rachis · adducteur magnus" },
  { id: "leg-curl", name: "Leg curl", muscle: "Ischio-jambiers", pattern: "Flexion de genou", equipment: "Machine", level: "Débutant", target: "Ischio-jambiers · biceps fémoral et semi-tendineux", secondary: "Semi-membraneux · gastrocnémiens" },
  { id: "single-rdl", name: "Soulevé de terre une jambe", muscle: "Ischio-jambiers", pattern: "Charnière unilatérale", equipment: "Haltère", level: "Intermédiaire", target: "Ischio-jambiers · biceps fémoral", secondary: "Grand/moyen fessier · érecteurs · obliques" },
  { id: "hip-thrust", name: "Hip thrust", muscle: "Fessiers", pattern: "Extension de hanche", equipment: "Barre", level: "Débutant", target: "Grand fessier · portions supérieure et inférieure", secondary: "Biceps fémoral · moyen fessier · quadriceps" },
  { id: "walking-lunge", name: "Fentes marchées", muscle: "Fessiers", pattern: "Unilatéral", equipment: "Haltères", level: "Intermédiaire", target: "Grand fessier · moyen fessier", secondary: "Quadriceps · adducteur long · ischio-jambiers" },
  { id: "cable-kickback", name: "Extension de hanche à la poulie", muscle: "Fessiers", pattern: "Isolation", equipment: "Poulie", level: "Débutant", target: "Grand fessier", secondary: "Ischio-jambiers · moyen fessier stabilisateur" },
  { id: "overhead-press", name: "Développé militaire", muscle: "Épaules", pattern: "Poussée verticale", equipment: "Barre", level: "Intermédiaire", target: "Deltoïde antérieur · deltoïde moyen", secondary: "Triceps · trapèze supérieur · dentelé antérieur" },
  { id: "lateral-raise", name: "Élévations latérales", muscle: "Épaules", pattern: "Abduction", equipment: "Haltères", level: "Débutant", target: "Deltoïde moyen", secondary: "Supra-épineux · trapèze supérieur" },
  { id: "face-pull", name: "Face pull", muscle: "Épaules", pattern: "Tirage haut", equipment: "Poulie", level: "Débutant", target: "Deltoïde postérieur · infra-épineux · petit rond", secondary: "Trapèze moyen · rhomboïdes" },
  { id: "rear-delt-fly", name: "Oiseau aux haltères", muscle: "Épaules", pattern: "Abduction horizontale", equipment: "Haltères", level: "Débutant", target: "Deltoïde postérieur", secondary: "Trapèze moyen · rhomboïdes · infra-épineux" },
  { id: "barbell-curl", name: "Curl barre", muscle: "Bras", pattern: "Flexion du coude", equipment: "Barre", level: "Débutant", target: "Biceps brachial · chefs long et court", secondary: "Brachial · brachio-radial" },
  { id: "hammer-curl", name: "Curl marteau", muscle: "Bras", pattern: "Flexion neutre", equipment: "Haltères", level: "Débutant", target: "Brachial · brachio-radial", secondary: "Biceps brachial" },
  { id: "triceps-pushdown", name: "Extension triceps à la poulie", muscle: "Bras", pattern: "Extension du coude", equipment: "Poulie", level: "Débutant", target: "Triceps · chefs latéral et médial", secondary: "Chef long du triceps · anconé" },
  { id: "close-grip-bench", name: "Développé couché prise serrée", muscle: "Bras", pattern: "Poussée horizontale", equipment: "Barre", level: "Intermédiaire", target: "Triceps brachial · trois chefs", secondary: "Grand pectoral · deltoïde antérieur" },
  { id: "plank", name: "Planche", muscle: "Abdominaux", pattern: "Anti-extension", equipment: "Sans matériel", level: "Débutant", target: "Droit de l’abdomen · obliques internes et externes", secondary: "Transverse · multifides · grand fessier" },
  { id: "dead-bug", name: "Dead bug", muscle: "Abdominaux", pattern: "Stabilisation", equipment: "Sans matériel", level: "Débutant", target: "Droit de l’abdomen · obliques (anti-extension)", secondary: "Transverse · fléchisseurs de hanche" },
  { id: "pallof-press", name: "Pallof press", muscle: "Abdominaux", pattern: "Anti-rotation", equipment: "Poulie", level: "Débutant", target: "Obliques internes et externes · transverse", secondary: "Droit de l’abdomen · multifides · grand fessier" },
  { id: "farmers-carry", name: "Marche du fermier", muscle: "Corps entier", pattern: "Porté", equipment: "Haltères", level: "Intermédiaire", target: "Prise/avant-bras · trapèze supérieur", secondary: "Droit abdominal · obliques · longissimus · multifides" }
];

const MUSCLES = ["Pectoraux", "Dos", "Quadriceps", "Ischio-jambiers", "Fessiers", "Épaules", "Bras", "Abdominaux"];
const STORAGE_KEY = "repere-workout-v1";
const DEFAULT_STATE = { focus: "Pectoraux", target: 4, activeSession: [], history: [], suggestionSeed: 0, trackingMode: "pr" };
let state = loadState();
let libraryFilter = "Tous";
let pendingFocus = state.focus;
let selectedSessionMuscle = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const els = {
  weekLabel: $("#week-label"), todayLabel: $("#today-label"), focusMuscle: $("#focus-muscle"),
  focusDone: $("#focus-done"), focusTarget: $("#focus-target"), progressBar: $("#progress-bar"),
  exerciseCount: $("#exercise-count"), empty: $("#session-empty"), sessionList: $("#session-list"),
  finish: $("#finish-session-button"), suggestions: $("#suggestion-list"), history: $("#history-list"),
  weekStrip: $("#week-strip"), weekSessionCount: $("#week-session-count"), focusDialog: $("#focus-dialog"),
  libraryDialog: $("#library-dialog"), focusOptions: $("#focus-options"), targetInput: $("#target-input"),
  libraryList: $("#library-list"), filters: $("#muscle-filters"), search: $("#exercise-search"), toast: $("#toast"),
  sessionBuilder: $("#session-builder-dialog"), muscleStep: $("#muscle-step"), movementStep: $("#movement-step"),
  sessionMuscleOptions: $("#session-muscle-options"), movementOptions: $("#movement-options"),
  builderEyebrow: $("#builder-eyebrow"), builderTitle: $("#builder-title"), addMore: $("#add-more-button")
};

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const saved = { ...DEFAULT_STATE, ...parsed };
    if (parsed?.trackingMode !== "pr") {
      saved.target = 4;
      saved.trackingMode = "pr";
      saved.activeSession = (saved.activeSession || []).map(({ sets, ...item }) => ({ ...item, reps: parseInt(item.reps, 10) || 8, weight: item.weight || "" }));
    }
    saved.activeSession = (saved.activeSession || []).map((item) => ({ ...EXERCISES.find((exercise) => exercise.id === item.id), ...item }));
    return saved;
  }
  catch { return { ...DEFAULT_STATE }; }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  render();
}

function startOfWeek(date = new Date()) {
  const value = new Date(date); const day = value.getDay() || 7;
  value.setHours(0, 0, 0, 0); value.setDate(value.getDate() - day + 1); return value;
}

function isThisWeek(dateValue) {
  const start = startOfWeek(); const end = new Date(start); end.setDate(end.getDate() + 7);
  const date = new Date(dateValue); return date >= start && date < end;
}

function getFocusProgress() {
  return state.history.filter((session) => isThisWeek(session.date)).reduce((sum, session) => {
    return sum + session.exercises.filter((item) => item.muscle === state.focus).length;
  }, 0);
}

function getExercisePR(exerciseId) {
  const performances = state.history.flatMap((session) => session.exercises || []).filter((item) => item.id === exerciseId && Number(item.weight) > 0);
  if (!performances.length) return null;
  return performances.reduce((best, item) => {
    const weight = Number(item.weight);
    const reps = parseInt(item.reps, 10) || 0;
    if (!best || weight > best.weight || (weight === best.weight && reps > best.reps)) return { weight, reps };
    return best;
  }, null);
}

function formatWeight(weight) {
  return Number.isInteger(Number(weight)) ? String(Number(weight)) : Number(weight).toFixed(1).replace(".", ",");
}

function formatDates() {
  const start = startOfWeek(); const end = new Date(start); end.setDate(end.getDate() + 6);
  const compact = (date) => new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }).format(date).replace(".", "");
  els.weekLabel.textContent = `${compact(start)} — ${compact(end)}`;
  els.todayLabel.textContent = new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long" }).format(new Date()).toUpperCase();
}

function render() {
  formatDates();
  const focusProgress = getFocusProgress();
  els.focusMuscle.textContent = state.focus;
  els.focusDone.textContent = focusProgress;
  els.focusTarget.textContent = state.target;
  els.progressBar.style.width = `${Math.min(100, (focusProgress / state.target) * 100)}%`;
  renderSession(); renderSuggestions(); renderHistory();
}

function renderSession() {
  const count = state.activeSession.length;
  els.exerciseCount.textContent = count;
  els.exerciseCount.parentElement.lastChild.textContent = ` EXERCICE${count > 1 ? "S" : ""}`;
  els.empty.hidden = count > 0;
  els.addMore.hidden = count === 0;
  els.finish.disabled = count === 0;
  els.sessionList.innerHTML = state.activeSession.map((item) => {
    const previousPR = getExercisePR(item.id);
    const currentWeight = Number(item.weight) || 0;
    const isNewPR = currentWeight > 0 && (!previousPR || currentWeight > previousPR.weight);
    const prLabel = isNewPR
      ? `Nouveau PR potentiel · ${formatWeight(currentWeight)} kg`
      : previousPR
        ? `PR actuel · ${formatWeight(previousPR.weight)} kg × ${previousPR.reps}`
        : "Aucun PR enregistré";
    return `
    <article class="session-item" data-id="${item.entryId}">
      <div class="session-item-body">
        <img class="session-thumb" src="assets/exercises/${item.id}.jpg" alt="Illustration : ${item.name}" loading="lazy">
        <div>
          <div class="session-item-title"><strong>${item.name}</strong><span class="muscle-tag">${item.muscle}</span></div>
          <div class="anatomy-detail"><span><b>CIBLE</b>${item.target}</span><span><b>SECONDAIRES</b>${item.secondary}</span></div>
          <div class="set-controls">
            <label class="mini-field">RÉPÉTITIONS<input data-field="reps" type="number" min="1" max="100" step="1" value="${item.reps}" placeholder="8"></label>
            <label class="mini-field">CHARGE MAX KG<input data-field="weight" type="number" min="0" step="0.5" value="${item.weight}" placeholder="0"></label>
          </div>
          <span class="pr-reference${isNewPR ? " new-pr" : ""}">${prLabel}</span>
        </div>
      </div>
      <button class="remove-button" data-remove="${item.entryId}" aria-label="Retirer ${item.name}"><svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg></button>
    </article>`;
  }).join("");
}

function recentExerciseIds() {
  return state.history.filter((session) => isThisWeek(session.date)).flatMap((session) => session.exercises.map((item) => item.id));
}

function getSuggestions() {
  const recent = recentExerciseIds();
  const active = state.activeSession.map((item) => item.id);
  const focusPool = EXERCISES.filter((item) => item.muscle === state.focus && !active.includes(item.id));
  const freshFocus = focusPool.filter((item) => !recent.includes(item.id));
  const other = EXERCISES.filter((item) => item.muscle !== state.focus && !active.includes(item.id) && !recent.includes(item.id));
  const rotate = (arr, n) => arr.length ? [...arr.slice(n % arr.length), ...arr.slice(0, n % arr.length)] : [];
  const first = rotate(freshFocus.length ? freshFocus : focusPool, state.suggestionSeed)[0];
  const extras = rotate(other, state.suggestionSeed * 2 + 1).filter((item, index, all) => all.findIndex((x) => x.muscle === item.muscle) === index).slice(0, 2);
  return [first, ...extras].filter(Boolean);
}

function renderSuggestions() {
  const list = getSuggestions();
  els.suggestions.innerHTML = list.map((item, index) => `
    <article class="suggestion-card">
      <div class="exercise-thumb-wrap"><img src="assets/exercises/${item.id}.jpg" alt="" loading="lazy"><span>0${index + 1}</span></div>
      <div><strong>${item.name}</strong><small class="anatomy-target">${item.target}</small><small>${item.muscle} · ${item.pattern}</small></div>
      <button class="add-button" data-add="${item.id}" aria-label="Ajouter ${item.name}">+</button>
    </article>`).join("");
}

function renderHistory() {
  const weekly = state.history.filter((session) => isThisWeek(session.date));
  els.weekSessionCount.textContent = `${weekly.length} séance${weekly.length > 1 ? "s" : ""}`;
  const start = startOfWeek();
  els.weekStrip.innerHTML = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start); date.setDate(date.getDate() + index);
    const key = date.toDateString(); const done = weekly.some((session) => new Date(session.date).toDateString() === key);
    const today = new Date().toDateString() === key;
    return `<div class="day-cell${done ? " done" : ""}${today ? " today" : ""}"><span>${new Intl.DateTimeFormat("fr-FR", { weekday: "short" }).format(date).slice(0,2).toUpperCase()}</span><strong>${date.getDate()}</strong></div>`;
  }).join("");
  els.history.innerHTML = weekly.slice().reverse().map((session) => {
    const exerciseLabel = `${session.exercises.length} exercice${session.exercises.length > 1 ? "s" : ""}`;
    const maxWeight = Math.max(0, ...session.exercises.map((item) => Number(item.weight) || 0));
    const performanceLabel = maxWeight > 0 ? ` · ${formatWeight(maxWeight)} kg max` : "";
    return `<div class="history-row"><strong>${new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric" }).format(new Date(session.date))}</strong><span>${exerciseLabel}${performanceLabel}</span></div>`;
  }).join("");
}

function addExercise(id) {
  const exercise = EXERCISES.find((item) => item.id === id); if (!exercise) return;
  const previousPR = getExercisePR(id);
  state.activeSession.push({ ...exercise, entryId: `${id}-${Date.now()}`, reps: previousPR?.reps || 8, weight: previousPR?.weight || "" });
  saveState(); showToast(`${exercise.name} ajouté`);
}

function openSessionBuilder() {
  selectedSessionMuscle = null;
  renderSessionBuilder();
  els.sessionBuilder.showModal();
}

function renderSessionBuilder() {
  const muscleChoices = [...MUSCLES, "Corps entier"];
  const choosingMuscle = !selectedSessionMuscle;
  els.muscleStep.hidden = !choosingMuscle;
  els.movementStep.hidden = choosingMuscle;
  els.builderEyebrow.textContent = choosingMuscle ? "ÉTAPE 1 SUR 2" : "ÉTAPE 2 SUR 2";
  els.builderTitle.textContent = choosingMuscle ? "Quel muscle aujourd’hui ?" : `Mouvements · ${selectedSessionMuscle}`;

  if (choosingMuscle) {
    els.sessionMuscleOptions.innerHTML = muscleChoices.map((muscle) => {
      const count = EXERCISES.filter((exercise) => exercise.muscle === muscle).length;
      return `<button class="session-muscle-button${muscle === state.focus ? " focus-choice" : ""}" data-session-muscle="${muscle}" type="button"><strong>${muscle}</strong><small>${count} mouvement${count > 1 ? "s" : ""}</small></button>`;
    }).join("");
    return;
  }

  const activeIds = state.activeSession.map((item) => item.id);
  const movements = EXERCISES.filter((exercise) => exercise.muscle === selectedSessionMuscle);
  els.movementOptions.innerHTML = movements.map((exercise) => {
    const isAdded = activeIds.includes(exercise.id);
    return `<article class="movement-option${isAdded ? " is-added" : ""}"><img src="assets/exercises/${exercise.id}.jpg" alt="Illustration : ${exercise.name}" loading="lazy"><div><strong>${exercise.name}</strong><small class="anatomy-target"><b>Cible</b> ${exercise.target}</small><small class="anatomy-secondary"><b>Secondaires</b> ${exercise.secondary}</small><small>${exercise.pattern} · ${exercise.equipment} · ${exercise.level}</small></div><button class="add-button" data-builder-add="${exercise.id}" aria-label="${isAdded ? `${exercise.name} déjà ajouté` : `Ajouter ${exercise.name}`}"${isAdded ? " disabled" : ""}>${isAdded ? "✓" : "+"}</button></article>`;
  }).join("");
}

function renderFocusOptions() {
  els.focusOptions.innerHTML = MUSCLES.map((muscle) => `<button class="focus-option${pendingFocus === muscle ? " active" : ""}" type="button" data-focus="${muscle}">${muscle}</button>`).join("");
}

function renderLibrary() {
  const query = els.search.value.trim().toLocaleLowerCase("fr");
  const results = EXERCISES.filter((item) => (libraryFilter === "Tous" || item.muscle === libraryFilter) && `${item.name} ${item.muscle} ${item.equipment} ${item.target} ${item.secondary}`.toLocaleLowerCase("fr").includes(query));
  els.libraryList.innerHTML = results.map((item) => `<article class="library-item"><img src="assets/exercises/${item.id}.jpg" alt="Illustration : ${item.name}" loading="lazy"><div><strong>${item.name}</strong><small class="anatomy-target"><b>Cible</b> ${item.target}</small><small class="anatomy-secondary"><b>Secondaires</b> ${item.secondary}</small><small>${item.muscle} · ${item.equipment} · ${item.level}</small></div><button class="add-button" data-add="${item.id}" aria-label="Ajouter ${item.name}">+</button></article>`).join("") || `<p class="modal-intro">Aucun exercice ne correspond à cette recherche.</p>`;
}

function renderFilters() {
  els.filters.innerHTML = ["Tous", ...MUSCLES, "Corps entier"].map((muscle) => `<button class="filter-button${muscle === libraryFilter ? " active" : ""}" data-filter="${muscle}" type="button">${muscle}</button>`).join("");
}

let toastTimer;
function showToast(message) { clearTimeout(toastTimer); els.toast.textContent = message; els.toast.classList.add("show"); toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2200); }

document.addEventListener("click", (event) => {
  const add = event.target.closest("[data-add]"); if (add) addExercise(add.dataset.add);
  const remove = event.target.closest("[data-remove]"); if (remove) { state.activeSession = state.activeSession.filter((item) => item.entryId !== remove.dataset.remove); saveState(); }
  const focus = event.target.closest("[data-focus]"); if (focus) { pendingFocus = focus.dataset.focus; renderFocusOptions(); }
  const filter = event.target.closest("[data-filter]"); if (filter) { libraryFilter = filter.dataset.filter; renderFilters(); renderLibrary(); }
  const sessionMuscle = event.target.closest("[data-session-muscle]"); if (sessionMuscle) { selectedSessionMuscle = sessionMuscle.dataset.sessionMuscle; renderSessionBuilder(); }
  const builderAdd = event.target.closest("[data-builder-add]"); if (builderAdd) { addExercise(builderAdd.dataset.builderAdd); renderSessionBuilder(); }
});

els.sessionList.addEventListener("change", (event) => {
  const card = event.target.closest("[data-id]"); const item = state.activeSession.find((entry) => entry.entryId === card?.dataset.id);
  if (item && event.target.dataset.field) { item[event.target.dataset.field] = event.target.value; localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); renderSession(); }
});

$("#change-focus-button").addEventListener("click", () => { pendingFocus = state.focus; els.targetInput.value = state.target; renderFocusOptions(); els.focusDialog.showModal(); });
$("#focus-form").addEventListener("submit", (event) => {
  if (event.submitter?.value === "cancel") return;
  event.preventDefault(); state.focus = pendingFocus; state.target = Math.max(1, Math.min(20, Number(els.targetInput.value) || 4)); saveState(); els.focusDialog.close(); showToast("Objectif hebdomadaire mis à jour");
});
$("#refresh-suggestions").addEventListener("click", () => { state.suggestionSeed += 1; saveState(); });
$("#start-session-button").addEventListener("click", openSessionBuilder);
els.addMore.addEventListener("click", openSessionBuilder);
$("#close-session-builder").addEventListener("click", () => els.sessionBuilder.close());
$("#back-to-muscles").addEventListener("click", () => { selectedSessionMuscle = null; renderSessionBuilder(); });
$("#finish-adding-button").addEventListener("click", () => els.sessionBuilder.close());
$("#open-library-button").addEventListener("click", () => { renderFilters(); renderLibrary(); els.libraryDialog.showModal(); els.search.focus(); });
$("#close-library-button").addEventListener("click", () => els.libraryDialog.close());
els.search.addEventListener("input", renderLibrary);
els.finish.addEventListener("click", () => {
  const hasNewPR = state.activeSession.some((item) => Number(item.weight) > 0 && (!getExercisePR(item.id) || Number(item.weight) > getExercisePR(item.id).weight));
  const session = { id: `session-${Date.now()}`, date: new Date().toISOString(), exercises: state.activeSession.map((item) => ({ ...item })) };
  state.history.push(session); state.activeSession = []; state.suggestionSeed += 1; saveState(); showToast(hasNewPR ? "Séance enregistrée · nouveau PR !" : "Séance enregistrée — beau travail");
});
$("#reset-button").addEventListener("click", () => $("#confirm-dialog").showModal());
$("#confirm-reset").addEventListener("click", () => { state = { ...DEFAULT_STATE, activeSession: [], history: [] }; localStorage.removeItem(STORAGE_KEY); setTimeout(render, 0); });

function registerWebMCP() {
  const context = document.modelContext; if (!context?.registerTool) return;
  const register = (tool) => { try { Promise.resolve(context.registerTool(tool)).catch(() => {}); } catch {} };
  register({ name: "get_weekly_workout_status", title: "Lire la progression de la semaine", description: "Retourne le muscle focus, l’objectif d’exercices et le nombre de séances de la semaine.", inputSchema: { type: "object", properties: {}, additionalProperties: false }, annotations: { readOnlyHint: true, untrustedContentHint: false }, execute: () => ({ focus: state.focus, targetExercises: state.target, completedExercises: getFocusProgress(), sessions: state.history.filter((s) => isThisWeek(s.date)).length }) });
  register({ name: "add_exercise_to_session", title: "Ajouter un exercice", description: "Ajoute un exercice de la bibliothèque à la séance active à partir de son identifiant.", inputSchema: { type: "object", properties: { exerciseId: { type: "string", enum: EXERCISES.map((item) => item.id) } }, required: ["exerciseId"], additionalProperties: false }, annotations: { readOnlyHint: false, untrustedContentHint: false }, execute: ({ exerciseId }) => { const exercise = EXERCISES.find((item) => item.id === exerciseId); if (!exercise) throw new Error("Exercice inconnu"); addExercise(exerciseId); return { added: exercise.name, activeExerciseCount: state.activeSession.length }; } });
}

render(); registerWebMCP();
