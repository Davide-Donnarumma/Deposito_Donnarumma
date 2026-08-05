#!/bin/sh
# ==========================================================
# Script di riorganizzazione per Deposito_Donnarumma
#
# COSA FA:
# 1. Sposta tutte le cartelle di esercizi dentro esercizi/
# 2. Sposta "Meme Corso.jpg" dentro assets/
# 3. Crea la cartella progetti/ (con un README)
# 4. Aggiunge un .gitignore per node_modules e simili
# 5. Rimuove node_modules dal tracking di git
# 6. Sostituisce il README.md principale con una versione curata
# 7. Fa il commit di tutte le modifiche (NON fa il push automaticamente)
#
# COME USARLO:
# 1. Apri il terminale nella cartella principale del tuo repository
#    locale (dove vedi la cartella .git)
# 2. Copia questo file lì dentro, es: riorganizza_repo.sh
# 3. Esegui:  sh riorganizza_repo.sh
# 4. Controlla che vada tutto bene con: git status / git log
# 5. Fai il push: git push origin main
# ==========================================================

set -e

if [ ! -d ".git" ]; then
  echo "ERRORE: esegui questo script dalla cartella principale del repository (dove c'è .git)"
  exit 1
fi

mkdir -p esercizi progetti assets

for f in "03-Mercoledi-06" "04-Giovedi-06" "05-Venerdi-06" "08-Lunedi-06" "09-Martedi-06" "10-Mercoledi-06" "10-Mercoledi-06-Test" "12-Martedi-05" "13-Mercoledi-05" "14_Giovedi-05" "18_Lunedi-05" "19_Martedi-05" "20_Mercoledi-05" "21_Giovedi-05" "21_Pome" "25-Lunedi-05" "26-Martedi-05" "29_Venerdi-05" "Esercizio-di-gruppo_15-05" "Pratica-mercoledi-13" "Ripasso-sett1" "Test_15-05" "Test_22-05"; do
  if [ -d "$f" ]; then
    git mv "$f" "esercizi/$f"
    echo "Spostata: $f -> esercizi/$f"
  else
    echo "Attenzione: cartella '$f' non trovata, salto."
  fi
done

if [ -f "Meme Corso.jpg" ]; then
  git mv "Meme Corso.jpg" "assets/Meme Corso.jpg"
  echo "Spostato: Meme Corso.jpg -> assets/"
fi

# Rimuove eventuali node_modules dal tracking (se presenti)
find esercizi -type d -name node_modules 2>/dev/null | while read -r nm; do
  git rm -r --cached "$nm" > /dev/null 2>&1 || true
  echo "Rimosso dal tracking: $nm"
done

# .gitignore
cat > .gitignore << 'EOF'
# Dipendenze
node_modules/
package-lock.json.bak

# Build / output
dist/
build/
.vite/
.angular/
*.tsbuildinfo

# Ambiente
.env
.env.local

# Editor / OS
.vscode/*
!.vscode/extensions.json
.DS_Store
Thumbs.db

# Log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
EOF

# README progetti/
cat > progetti/README.md << 'EOF'
# 🚀 Progetti

Questa cartella conterrà i progetti reali (personali o di gruppo) sviluppati al di fuori del percorso didattico giornaliero, a differenza della cartella [`esercizi/`](../esercizi) che raccoglie gli esercizi svolti durante il corso.

Ogni progetto avrà una propria sottocartella con un README dedicato che spiega obiettivo, stack tecnologico e istruzioni per l'avvio.
EOF

# README principale
cat > README.md << 'EOF'
<div align="center">

# 📚 Deposito Donnarumma

### Percorso di apprendimento Full Stack Web Development

*Raccolta di esercizi, progetti pratici ed esperimenti sviluppati durante il mio percorso di formazione.*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

</div>

---

## 📖 Indice

- [Descrizione](#-descrizione)
- [Struttura del repository](#-struttura-del-repository)
- [Come consultare gli esercizi](#-come-consultare-gli-esercizi)
- [Come avviare un progetto](#-come-avviare-un-progetto)
- [Stack tecnologico](#-stack-tecnologico)
- [Contatti](#-contatti)

---

## 📌 Descrizione

Questo repository raccoglie il materiale prodotto durante il mio percorso di formazione da **Full Stack Web Developer**: esercitazioni giornaliere, prove pratiche ed esempi, organizzati in ordine cronologico, oltre ai progetti sviluppati in autonomia.

Gli argomenti trattati spaziano da **HTML, CSS e JavaScript** di base fino a **React**, **Angular** e **Node.js**, con esercizi su manipolazione del DOM, asincronia, gestione di API e sviluppo di piccole applicazioni full stack.

## 🗂 Struttura del repository

```
Deposito_Donnarumma/
├── esercizi/       # Esercitazioni ed esempi svolti giorno per giorno durante il corso
├── progetti/       # Progetti reali sviluppati al di fuori delle lezioni
├── assets/         # Immagini e risorse varie
└── README.md
```

- **[`esercizi/`](./esercizi)** — ogni sottocartella corrisponde a una giornata o a un argomento del corso (es. `18_Lunedi-05`, `03-Mercoledi-06`), e contiene esempi, esercizi e prove pratiche svolte in quella data.
- **[`progetti/`](./progetti)** — spazio dedicato a progetti più strutturati e completi, separati dal materiale didattico giornaliero.
- **`assets/`** — file di supporto non legati al codice (es. immagini).

## 🔎 Come consultare gli esercizi

Le cartelle dentro `esercizi/` sono nominate seguendo il pattern `GG-Giorno-MM` (es. `26-Martedi-05` = 26 maggio) oppure `GG_Giorno-MM`. All'interno di ciascuna si trovano generalmente:

- file **HTML/CSS/JS** singoli per esercizi rapidi;
- mini-progetti **React** (creati con Vite) o **Angular** per esercitazioni più strutturate;
- eventuali file di testo con consegne o appunti.

## ▶️ Come avviare un progetto

Molti esercizi più avanzati sono piccole applicazioni **React (Vite)** o **Angular**. Per avviarli:

```bash
# Entra nella cartella del progetto che vuoi avviare
cd esercizi/<cartella-del-giorno>/<nome-progetto>

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run start   # oppure: npm run dev
```

> 💡 Le cartelle `node_modules` non sono incluse nel repository (vedi `.gitignore`): vanno rigenerate con `npm install` prima di ogni avvio.

## 🛠 Stack tecnologico

| Ambito | Tecnologie |
|---|---|
| Frontend base | HTML5, CSS3, JavaScript (ES6+) |
| Framework/Librerie | React, Angular |
| Backend | Node.js, Express |
| Tooling | Vite, npm |

## 📬 Contatti

**Davide Donnarumma**
📧 davide.donnarummadd98@gmail.com
🔗 [GitHub](https://github.com/Davide-Donnarumma)

---

<div align="center">
<sub>⭐ Se questo repository ti è stato utile, lascia una stella!</sub>
</div>
EOF

git add -A
git commit -m "Riorganizza repository: sposta esercizi in esercizi/, crea progetti/, pulisce README e node_modules"

echo ""
echo "=========================================="
echo "FATTO! Controlla con 'git log' e 'git status'."
echo "Quando sei soddisfatto, esegui: git push origin main"
echo "=========================================="
