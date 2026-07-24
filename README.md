# Marvel Patel — Portfolio Site

A static portfolio site built from Marvel Patel's resume. Plain HTML/CSS/JS —
no build step, no dependencies, works the moment you open it.

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/          (empty — add a headshot/resume PDF here if you want)
└── README.md
```

## 1. Open it in VS Code

1. Unzip/copy the `portfolio` folder anywhere on your computer.
2. Open VS Code → **File → Open Folder...** → select the `portfolio` folder.
3. Install the **Live Server** extension (by Ritwick Dey) from the Extensions
   panel (`Ctrl+Shift+X` / `Cmd+Shift+X`, search "Live Server").
4. Right-click `index.html` in the file explorer → **Open with Live Server**.
   Your site opens at `http://127.0.0.1:5500` and reloads automatically
   whenever you save a change.

No Live Server? You can also just double-click `index.html` to open it
directly in a browser — everything works, you just won't get auto-reload.

## 2. Put it on GitHub

From the `portfolio` folder, open a terminal in VS Code (`` Ctrl+` ``) and run:

```bash
git init
git add .
git commit -m "Initial portfolio site"
```

Then create a new empty repository on GitHub (no README/license — you
already have files locally): go to github.com → **New repository** → name it
e.g. `portfolio` → **Create repository**. GitHub will show you a remote URL,
then run:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

## 3. Make it a live website (GitHub Pages, free)

1. On GitHub, open your new repo → **Settings** → **Pages** (left sidebar).
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)` → **Save**.
4. Wait ~1 minute, then refresh — GitHub gives you a live URL like:
   `https://YOUR-USERNAME.github.io/portfolio/`

That URL is safe to put on your resume and LinkedIn — it updates automatically
every time you `git push` a change.

## Editing content later

- **Text/experience/projects**: edit directly in `index.html`. Everything is
  in plain sections (`<section id="log">`, `<section id="projects">`, etc.)
  labeled with comments.
- **Colors/fonts/spacing**: all in `css/style.css` under the `:root` block at
  the top — change the hex values there and the whole site updates.
- **Animated stat gauges** in the hero: each `.gauge` div has a
  `data-target="35"` attribute — change the number to update both the counter
  and the ring fill automatically (logic lives in `js/script.js`).
- **Resume PDF**: drop your resume into `assets/`, e.g. `assets/marvel-patel-resume.pdf`,
  then add a link anywhere, like:
  ```html
  <a href="assets/marvel-patel-resume.pdf" class="btn btn--ghost">Download résumé</a>
  ```

## Notes

- Fully responsive (mobile nav collapses to a menu button below 780px).
- Respects `prefers-reduced-motion` — gauge/counter animations are skipped
  for users who have that OS setting on.
- No external JS dependencies — only Google Fonts are loaded remotely.
