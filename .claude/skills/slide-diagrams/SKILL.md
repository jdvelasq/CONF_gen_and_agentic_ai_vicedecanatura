---
name: slide-diagrams
description: Crea o edita slides HTML de este repositorio y elige e implementa diagramas tipo SmartArt (secuencias, ciclos, líneas de tiempo, jerarquías, matrices, comparaciones, radiales) en HTML/CSS. Usar al crear una slide nueva o al editar una existente, también para reemplazar sus viñetas o su visual actual, cuando el contenido tenga estructura (pasos, fases, eventos con fecha, jerarquía, opciones comparables, un concepto con elementos asociados) y un diagrama comunique mejor que viñetas.
---

# Diagramas tipo SmartArt para las slides

Sirve para crear una slide nueva o editar una existente. Convierte su contenido en un diagrama HTML/CSS: eliges la familia según la **forma del contenido**, ajustas el número de elementos y escribes el marcado con los componentes `sd-*` de `style.css`. No requiere librerías ni imágenes.

**El catálogo es una guía, no un molde.** El contenido manda: si pide más elementos que los indicados, más texto o una variante intermedia, adapta el diagrama (tamaño, columnas, radio, división en dos slides) en lugar de recortar el contenido. Si ninguna familia encaja, usa viñetas o el patrón que ya usen las slides vecinas.

## Cómo está hecho este repositorio (verificado)

- Cada slide es un archivo `slides/NNN-slug.html` cuyo cuerpo es **exactamente un** `<section class="slide content" aria-label="...">`. `slides.js` rechaza el archivo si hay otro elemento hermano o si falta ese `section` ("Estructura inválida").
- `slides.json` fija el orden: toda slide nueva o renombrada debe registrarse allí (solo nombres `[a-zA-Z0-9_-]+.html`). Para intercalar, sigue el patrón existente (`075b-...`).
- Estructura habitual de una slide de contenido: `header.slide-heading > h2`, luego `div.content-body` con un `p.intro` y un `div.columns` (texto en `.explanation` a la izquierda, visual en `.v-visual` a la derecha). Imita el estilo del título (`año · tema`) y del texto de las slides vecinas.
- Todos los estilos viven en `style.css` (paleta Tableau 10 en `--tableau-*`). **No añadas `<style>` ni CSS por slide**: los diagramas usan las clases `sd-*` de la sección «Diagramas tipo SmartArt» al final de `style.css`. Si hace falta una variante nueva, se agrega ahí, con el prefijo `sd-`.
- Imágenes y diagramas SVG/drawio ya existentes están en `assets/` (`assets/diagramas/`). Los diagramas `sd-*` son para estructuras que se editan como texto; los flujos con muchas conexiones cruzadas siguen el método SVG/drawio existente.

## Flujo de trabajo

1. **Lee el contenido** (si editas, lee también el archivo actual de la slide y conserva lo que no se pidió cambiar) e identifica su forma: ¿hay orden?, ¿fechas?, ¿niveles?, ¿repetición?, ¿un centro?, ¿dos ejes?, ¿opciones paralelas?
2. **Elige la familia** con la tabla siguiente. Decide también la colocación (ver «Colocación»).
3. **Cuenta los elementos** y revisa los límites. Si te pasas, ajusta o divide (ver «Cuántos elementos»).
4. **Abre `reference.md`** y copia el marcado de la familia elegida; también hay ejemplos renderizados en `gallery.html`.
5. **Escribe o edita la slide** respetando la estructura exigida por `slides.js`, con `aria-label` en la slide y en el diagrama.
6. **Registra** en `slides.json` la slide nueva o renombrada; si solo editas el contenido, no hace falta.
7. **Verifica**: sirve el repo desde su raíz con `python3 -m http.server 8765 --bind 127.0.0.1`, abre `http://127.0.0.1:8765/#N` (N = posición en `slides.json`) y recarga sin caché (`Cmd+Shift+R`) y revisa que nada se desborde ni se parta una palabra. Si dispones de un navegador sin interfaz (Playwright o Chrome), toma una captura a 1280×720.
8. **Informa en una línea** qué familia elegiste y por qué, para que se pueda corregir rápido.

## Elegir la familia

| El contenido es… | Familia | Clase |
|---|---|---|
| Pasos ordenados con inicio y fin | Secuencia lineal | `sd-flow` (`.chevron` para fases cortas, `.vertical` en columna estrecha) |
| Pasos con dependencia, o niveles que se apoyan en el anterior | Cascada | `sd-cascade` |
| Eventos con fecha o año explícito | Línea de tiempo | `sd-timeline` (`.below` si son muchos, `.vertical` en columna) |
| Pasos que se repiten: el último alimenta al primero | Ciclo | `sd-cycle` |
| Relación padre-hijo, taxonomía, clasificación | Organigrama | `sd-tree` |
| Un concepto central con elementos asociados, sin orden | Radial | `sd-radial` |
| Clasificar por dos dimensiones (ejes) | Matriz | `sd-matrix` |
| Comparar opciones con los mismos atributos | Columnas | `sd-cols` |

Desempates frecuentes:

- **Ciclo o secuencia:** si el último paso vuelve a empezar el proceso, ciclo; si no, secuencia.
- **Secuencia o línea de tiempo:** con fechas o años como dato principal, línea de tiempo.
- **Radial o columnas:** radial tiene un centro del que cuelga todo; columnas son opciones paralelas que se comparan.
- **Árbol o radial:** si hay más de un nivel, árbol.

No uses diagrama cuando:

- el contenido no tiene estructura (ideas sueltas): viñetas;
- hay un solo elemento, o más de 12: viñetas, o divide en varias slides;
- son datos numéricos: un gráfico, no un diagrama SmartArt;
- el diagrama sería decorativo y repetiría lo que ya dice el texto de al lado.

## Colocación

- **Ancho completo:** `<div class="sd-full">` bajo el `p.intro`. Para 4 o más elementos, diagramas anchos (timeline alternada, chevrones, matriz, árbol, columnas) y ciclos o radiales con texto en los nodos.
- **Columna derecha:** dentro de `.columns > .v-visual`, con el texto explicativo a la izquierda. Es lo habitual en las slides del repo; úsala para 3–5 elementos y prefiere las variantes `vertical`.

## Cuántos elementos

Los límites se probaron en la galería a 1280×720; más elementos funcionan, pero revisa el resultado.

| Familia | Recomendado | Si hay más |
|---|---|---|
| `sd-flow` horizontal | 3–6 (hasta 7 con `.chevron`) | `.vertical`, o dividir en dos slides |
| `sd-flow.vertical` | 2–5 | dividir en dos slides |
| `sd-cascade` | 3–6 | agrupar niveles |
| `sd-timeline` alternada | 3–6 | `.below` (hasta 12) |
| `sd-timeline.vertical` | 3–6 | dividir por periodo |
| `sd-cycle` | 3–8; hasta 10 con `--r:10em` y `font-size:.8em` | agrupar pasos o dividir |
| `sd-tree` | hasta ~10 nodos por nivel | reducir `font-size` o dividir por rama |
| `sd-radial` | 3–8 (de 7 en adelante: `--r:10em` y `font-size:.8em`) | agrupar en categorías |
| `sd-matrix` | 2×2; ampliable con `--cols` y `--rows` (hasta 3×3) | dividir |
| `sd-cols` | 2–5 (hasta 6 con `--min` menor) | pasan a una segunda fila automáticamente |

`sd-flow`, `sd-cascade`, `sd-timeline` y `sd-cycle`/`sd-radial` calculan en CSS la posición de cada hijo (`--i`) y el total (`--n`) hasta **12 hijos**. Con más de 12 la geometría falla: divide.

## Reglas de contenido y estilo

- Texto corto: títulos de 1–3 palabras en ciclo, radial y chevrones; detalle de hasta ~12 palabras en el resto. No cambies el sentido del contenido para que quepa; si no cabe, cambia el diagrama o divide.
- Color por elemento con `style="--c:var(--tableau-orange)"`; sin `--c` el color es azul. Mantén una paleta coherente en toda la slide (un color por elemento o por grupo, no al azar).
- Con `.solid` o `.chevron` el texto es blanco: evita fondos `--tableau-yellow`, `--tableau-pink` o `--tableau-gray` en esos casos (poco contraste); úsalos con el relleno claro por defecto.
- **Imagen opcional:** si el usuario no indica una imagen existente en `assets/`, no pongas marco de imagen ni inventes rutas. Si hay imagen, `<img class="sd-img" src="assets/..." alt="descripción">`.
- Accesibilidad: `aria-label` descriptivo en el contenedor del diagrama (`ol`, `ul` o `div role="group"`) y `alt` en imágenes. Las listas `ol/ul` ya son semánticas; no las reemplaces por `div`.
- Al editar, cambia solo la slide pedida y reemplaza su visual si el diagrama comunica mejor. Un diagrama SVG o drawio que funcione no se migra a `sd-*` sin motivo.
- No cambies las clases anteriores de `style.css`, porque otras slides dependen de ellas; añade variantes con el prefijo `sd-`.
- No añadas notas ocultas: la slide debe entenderse sin expositor.
