# Líneas de investigación (home)

Landing estática en [Astro](https://astro.build) que reemplaza el WordPress de https://lineasdeinvestigacion.com.

## Comandos

| Comando           | Acción                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | Instala dependencias                     |
| `npm run dev`     | Servidor local en `localhost:4321`       |
| `npm run build`   | Genera el sitio estático en `./dist/`    |
| `npm run preview` | Previsualiza el build                    |

## Estructura

- `src/data/content.ts`: todos los textos, imágenes y la URL del botón "Entrar" (`loginUrl`, pendiente de definir).
- `src/components/`: Header, Hero, About, HowItWorks, WhyUs, Footer.
- `src/assets/`: logo y fotos (optimizadas a webp en el build).

## Despliegue en Hostinger

El sitio es estático: subir el contenido de `dist/` a `public_html` (o conectar el repo por Git en hPanel y publicar `dist/`).

## Formulario de contacto

`public/contact.php` (se copia a `dist/`) envía los mensajes a `contacto@cieasypal.com` con `mail()` de PHP, que Hostinger ejecuta. Requisitos:

- Crear la cuenta `no-reply@lineasdeinvestigacion.com` en Hostinger (remitente del correo; si no existe, puede caer en spam).
- Solo funciona en el hosting: con `npm run dev` el envío devuelve error (Astro no ejecuta PHP). El destinatario y el remitente se cambian al inicio de `contact.php`.
