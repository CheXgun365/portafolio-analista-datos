# Portafolio · Fernando Ángel Chirinos Paredes

Sitio estático (HTML + CSS + JS, sin build). Funciona en GitHub Pages con rutas relativas.

```
portafolio/
├── index.html        # estructura, SEO, carga de scripts
├── content.js        # TODO el contenido (ES/EN) y tus datos de contacto
├── README.md
└── assets/
    ├── style.css     # diseño, tema claro/oscuro, responsive
    ├── app.js        # render, idioma, tema, cursor, partículas, formulario
    ├── favicon.svg
    └── cv.pdf        # ← tú lo agregas (ver abajo)
```

## Publicar en GitHub Pages
1. En github.com → **New repository**. Nombre: por ejemplo `portafolio`. Público. Sin README.
2. Sube **el contenido** de esta carpeta (no la carpeta en sí): `index.html`, `content.js`, `assets/`…
   - Web: **Add file → Upload files**, arrastra todo y **Commit changes**.
   - O con Git: `git init && git add . && git commit -m "portafolio" && git branch -M main && git remote add origin https://github.com/CheXgun365/portafolio.git && git push -u origin main`
3. **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, carpeta `/ (root)` → **Save**.
4. Espera 1–2 minutos. Tu sitio: `https://CheXgun365.github.io/portafolio/`

## Tu CV
Guarda el PDF como `assets/cv.pdf`. Antes de subirlo, **quita datos sensibles** (por ejemplo, el teléfono, si no quieres duplicarlo, y cualquier dato que no deba ser público). Exporta una versión pública aparte.

## Formulario de contacto (gratis, sin backend)
1. Entra a https://web3forms.com → escribe tu correo → recibirás una **Access Key** por email.
2. En `content.js`, reemplaza `web3formsKey:"[COMPLETAR]"` por tu clave.
3. Mientras sea `[COMPLETAR]`, el formulario abre tu app de correo (`mailto:`) como alternativa.

## Cómo editar
- **Textos**: están en `content.js` como pares `["español","english"]`.
- **Contacto**: bloque `contact` al inicio.
- **Proyectos**: lista `projects`. Campos: `n` (nombre del repo), `g` (índice del grupo), `l` (lenguaje), `d` (descripción ES/EN, opcional), `f:1` (destacado), `fork:1` (es un fork). Agrega o quita objetos; el enlace se arma con tu usuario de GitHub.
- **Foto o imágenes**: ponlas en `assets/` y referénciales desde `content.js` o `index.html`. (La foto es opcional; este diseño no la usa por defecto.)
- **Colores**: variables al inicio de `assets/style.css`.
- **Vista previa local**: abre `index.html` o ejecuta `python3 -m http.server` en la carpeta.
