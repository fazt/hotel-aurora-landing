# Hotel Aurora Landing

Landing page informativa de hotel con página de login básica y pruebas automatizadas con Playwright.

## Archivos principales

- `index.html`: landing page principal.
- `styles.css`: estilos responsive.
- `login.html`: formulario de login demo.
- `login.js`: validación del login demo.
- `tests/login.spec.js`: pruebas Playwright.

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
