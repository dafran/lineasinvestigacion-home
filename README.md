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

El sitio es 100 % estático: subir el contenido de `dist/` a `public_html` (o conectar el repo por Git en hPanel y publicar `dist/`).
