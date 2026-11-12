# BrainBox España (ES / SK / EN)

Juego de memoria visual e historia de España inspirado en *BrainBox*, con soporte trilingüe (**Español**, **Slovenčina**, **English**), temporizador de estudio, dado de 6 caras, modo solitario y multijugador local (*Pass & Play*).

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo, `brainbox-espana`).
2. Sube este proyecto a la rama `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: BrainBox España"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/brainbox-espana.git
   git push -u origin main
   ```
3. En tu repositorio de GitHub ve a **Settings → Pages → Build and deployment → Source** y selecciona **GitHub Actions**.
4. En ~1 minuto tendrás tu web publicada en `https://<tu-usuario>.github.io/brainbox-espana/`.

## Llevarlo en el móvil (iPhone y Android)

- **iPhone (Safari):** Abre la URL de GitHub Pages → pulsa el botón **Compartir** → **Añadir a pantalla de inicio**.
- **Android (Chrome):** Abre la URL → menú `⋮` → **Instalar aplicación** / **Añadir a pantalla de inicio**.

## Desarrollo local

```bash
npm install
npm run dev
npm test
npm run build
```
