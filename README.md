# Hotel Aurora Landing

Landing page informativa de hotel con página de login básica, soporte de tema claro/oscuro y pruebas automatizadas con Playwright.

## Archivos principales

- `index.html`: landing page principal.
- `styles.css`: estilos responsive con variables para light/dark theme.
- `theme.js`: selector de tema con persistencia en `localStorage`.
- `login.html`: formulario de login demo.
- `login.js`: validación del login demo.
- `tests/login.spec.js`: pruebas Playwright del login.
- `tests/theme.spec.js`: pruebas Playwright del selector de tema.

## Tema claro/oscuro

El sitio detecta la preferencia del sistema con `prefers-color-scheme` y también permite alternar manualmente con el botón de tema. La preferencia manual se guarda en `localStorage`.

## Login demo

- Email: `demo@hotelaurora.com`
- Contraseña: `hotel123`

## Ejecutar localmente

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

Abrir:

```text
http://127.0.0.1:8765/index.html
```

## Pruebas

```bash
npm install
PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers npx playwright install chromium
npm test
```
