# Referencia de marcado: componentes `sd-*`

Copia el marcado de la familia elegida y ajusta el número de elementos. Todos los ejemplos se ven renderizados en `gallery.html` (abrir con `python3 -m http.server 8000` desde la raíz y visitar `/.claude/skills/slide-diagrams/gallery.html`).

## Piezas comunes

- `.sd-node`: caja con relleno claro del color `--c` (azul por defecto). Con `.solid`, relleno pleno y texto blanco.
- Dentro de un nodo: `<h4>` título, `<p>` detalle, `<ul>` viñetas, `<span class="sd-num">1</span>` número en círculo, `<img class="sd-img">` imagen opcional.
- Color: `style="--c:var(--tableau-orange)"` en el nodo (o en el `li` que lo contiene en ciclo y radial).
- Variables ajustables en el contenedor: `--r` (radio de ciclo/radial), `--w-max` (ancho máximo de nodo), `--min` (ancho mínimo de columna), `--cols` y `--rows` (matriz), `--step` (sangría de la cascada).
- `font-size` en el contenedor reduce todo el diagrama (todas las medidas son `em`).
- `--i` y `--n` (posición y total de hijos) los calcula el CSS hasta 12 hijos. No se escriben a mano.

## Colocación

Ancho completo, bajo el `p.intro`:

```html
<div class="sd-full">
  <!-- diagrama -->
</div>
```

Columna derecha, como en el resto del deck:

```html
<div class="columns">
  <div class="explanation"><ul><li>…</li></ul></div>
  <div class="v-visual">
    <!-- diagrama -->
  </div>
</div>
```

## 1. Secuencia lineal: `sd-flow`

```html
<ol class="sd-flow" aria-label="Pasos de RAG">
  <li class="sd-node"><span class="sd-num">1</span><h4>Preguntar</h4><p>Detalle corto.</p></li>
  <li class="sd-node" style="--c:var(--tableau-orange)"><span class="sd-num">2</span><h4>Recuperar</h4><p>Detalle corto.</p></li>
  <li class="sd-node" style="--c:var(--tableau-green)"><span class="sd-num">3</span><h4>Responder</h4><p>Detalle corto.</p></li>
</ol>
```

- `class="sd-flow chevron"`: fases como chevrones (solo título corto, texto blanco).
- `class="sd-flow vertical"`: pasos apilados con flechas hacia abajo; ideal en la columna derecha.
- Cada paso puede llevar `<img class="sd-img">` arriba si hay imagen.

## 2. Cascada: `sd-cascade`

```html
<ol class="sd-cascade" aria-label="Capas de capacidad">
  <li class="sd-node"><h4>Nivel 1</h4><p>Detalle</p></li>
  <li class="sd-node" style="--c:var(--tableau-orange)"><h4>Nivel 2</h4><p>Detalle</p></li>
  <li class="sd-node" style="--c:var(--tableau-green)"><h4>Nivel 3</h4><p>Detalle</p></li>
</ol>
```

Cada nivel se desplaza a la derecha; `--step` en el `ol` cambia la sangría (por defecto `2.2em`).

## 3. Línea de tiempo: `sd-timeline`

```html
<ol class="sd-timeline" aria-label="Hitos">
  <li><div class="sd-body"><time>2017</time><h4>Transformer</h4><p>Detalle corto</p></div></li>
  <li style="--c:var(--tableau-orange)"><div class="sd-body"><time>2020</time><h4>GPT-3</h4><p>Detalle corto</p></div></li>
</ol>
```

- Por defecto los eventos se alternan arriba y abajo del eje.
- `class="sd-timeline below"`: todos los textos debajo del eje; para muchos eventos (hasta 12). Con más de 8 reduce con `style="font-size:.85em"`.
- `class="sd-timeline vertical"`: eje vertical; para la columna derecha.
- Mantén `<time>` (año o fecha) y `<h4>` cortos.

## 4. Ciclo: `sd-cycle`

```html
<div class="sd-cycle" role="group" aria-label="Ciclo de iteración">
  <div class="sd-hub sd-node solid"><h4>Concepto central</h4></div>  <!-- opcional -->
  <ol>
    <li><div class="sd-node"><h4>Escribir</h4></div></li>
    <li style="--c:var(--tableau-orange)"><div class="sd-node"><h4>Probar</h4></div></li>
    <li style="--c:var(--tableau-green)"><div class="sd-node"><h4>Ajustar</h4></div></li>
  </ol>
</div>
```

- El primer elemento queda arriba y los demás siguen el sentido horario; las flechas se dibujan solas.
- De 7 a 10 elementos: `style="--r:10em;font-size:.8em"` en el contenedor. Más de 10: agrupar o dividir.
- Texto de nodo corto (1–3 palabras). Un `<p>` es posible pero ocupa mucho espacio.

## 5. Organigrama: `sd-tree`

```html
<ul class="sd-tree" aria-label="Taxonomía">
  <li><div class="sd-node solid">Raíz</div>
    <ul>
      <li><div class="sd-node" style="--c:var(--tableau-orange)">Rama A</div>
        <ul>
          <li><div class="sd-node" style="--c:var(--tableau-orange)">Hoja 1</div></li>
          <li><div class="sd-node" style="--c:var(--tableau-orange)">Hoja 2</div></li>
        </ul></li>
      <li><div class="sd-node" style="--c:var(--tableau-green)">Rama B</div></li>
    </ul></li>
</ul>
```

Listas anidadas de cualquier profundidad; los conectores se dibujan solos. Un nodo hoja no necesita `<ul>`. Usa un color por rama.

## 6. Radial: `sd-radial`

```html
<div class="sd-radial" role="group" aria-label="Componentes de un agente">
  <div class="sd-hub sd-node solid"><h4>Agente</h4></div>
  <ol>
    <li><div class="sd-node"><h4>Modelo</h4><p>Razona</p></div></li>
    <li style="--c:var(--tableau-orange)"><div class="sd-node"><h4>Herramientas</h4><p>Actúan</p></div></li>
    <li style="--c:var(--tableau-teal)"><div class="sd-node"><h4>Memoria</h4><p>Recuerda</p></div></li>
  </ol>
</div>
```

Los satélites se reparten uniformemente alrededor del centro, empezando por arriba. Para 7 o más, `style="--r:10em;font-size:.8em"`.

## 7. Matriz: `sd-matrix`

```html
<div class="sd-matrix" aria-label="Priorización por impacto y esfuerzo">
  <div class="sd-axis-y"><span>Bajo</span><b>Impacto</b><span>Alto</span></div>
  <div class="sd-axis-x"><span>Bajo</span><b>Esfuerzo</b><span>Alto</span></div>
  <div class="sd-node sd-cell" style="--c:var(--tableau-green)"><h4>Hacer ya</h4><ul><li>Ejemplo</li></ul></div>
  <div class="sd-node sd-cell" style="--c:var(--tableau-blue)"><h4>Planificar</h4></div>
  <div class="sd-node sd-cell" style="--c:var(--tableau-gray)"><h4>Ocasional</h4></div>
  <div class="sd-node sd-cell" style="--c:var(--tableau-red)"><h4>Descartar</h4></div>
</div>
```

- Las celdas se llenan por filas, de arriba a la izquierda a abajo a la derecha: primera fila = valor alto del eje vertical.
- El eje vertical se escribe en orden inverso (Bajo, nombre, Alto) porque el texto gira 180°: así «Alto» queda arriba.
- Otras cuadrículas: `style="--cols:3"` y/o `--rows:3`; incluye `cols × rows` celdas.

## 8. Columnas comparativas: `sd-cols`

```html
<ul class="sd-cols" aria-label="Tres opciones">
  <li class="sd-node" style="--c:var(--tableau-blue)">
    <span class="sd-num">1</span><h4>En la nube</h4>
    <ul><li>Mayor capacidad</li><li>Costo por uso</li></ul>
  </li>
  <li class="sd-node" style="--c:var(--tableau-orange)">…</li>
</ul>
```

- Las columnas se ajustan al ancho; con más de las que caben pasan a una segunda fila. `style="--min:7em"` reduce el ancho mínimo de cada tarjeta.
- Con imagen, `<img class="sd-img" src="assets/..." alt="...">` como primer hijo del `li`; sin imagen, se omite el elemento.
- Quita `.sd-num` si no hay orden entre las opciones.
