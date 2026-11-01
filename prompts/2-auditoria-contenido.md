# Auditoría de contenido de las slides

## Rol

Actúa como revisor técnico y editor de contenidos, con experiencia en IA generativa y en formación de profesionales que no programan.

## Contexto

Este repositorio contiene una presentación HTML sobre IA generativa y agéntica, de medio día o más, seguida de talleres.

- **Público:** profesionales no programadores.
- **Uso:** el autor expone de memoria y los participantes conservan las slides como memoria de la sesión. Cada slide debe entenderse sin expositor.
- **Mensaje central:** las herramientas cambian, los conceptos permanecen; se puede delegar la tarea, pero no la responsabilidad.

## Tarea

Audita el contenido de todas las slides y entrega un informe con hallazgos verificables. No audites el diseño.

## Materiales

- `slides.json`: orden oficial. El número de pantalla es la posición del archivo en esta lista, empezando en 1.
- `slides/`: lee solo los archivos listados en `slides.json`. Incluye el texto visible, las tablas, las etiquetas de los SVG y los atributos `aria-label` y `alt`.
- `assets/diagramas/`: lee el texto de los `.svg` que usan las slides.
- `highlights/`: fuente interna de hitos. Úsala como punto de partida, no como prueba suficiente.
- `storyboard/`: es histórico y ya no coincide con varias slides. No lo trates como requisito.

## Qué revisar

1. **Exactitud:** nombres, fechas, cifras, atribuciones, capacidades y orden cronológico.
2. **Vigencia:** datos de productos, planes, precios, disponibilidad y privacidad, comparados con la fecha actual.
3. **Conceptos:** definiciones correctas, simplificaciones que inducen a error y términos usados con dos significados.
4. **Términos sin definir:** todo término que el público necesite comprender debe estar definido en la slide, antes en el recorrido o en un glosario.
5. **Coherencia:** contradicciones entre slides, entre una visual y su texto, y entre glosarios y slides.
6. **Comprensión sin expositor:** frases vagas, referencias sin antecedente y conclusiones que dependen de una explicación oral.
7. **Advertencias:** límites y riesgos ausentes en temas de privacidad, errores, permisos, seguridad y uso de agentes.
8. **Recorrido:** saltos lógicos, repeticiones, temas prometidos en la slide 3 y no cubiertos, y hitos importantes ausentes.
9. **Ejemplos:** casos que no ilustran el concepto, cálculos incorrectos o ejemplos ajenos al público.
10. **Redacción:** ortografía, gramática, trato de "tú" y términos inconsistentes.

## Cómo verificar

- Comprueba en la web, con fuentes primarias cuando existan, toda afirmación factual sobre productos, modelos, empresas, fechas, cifras, planes o privacidad.
- Prioriza documentación y anuncios oficiales, y artículos originales. Usa prensa solo si no hay fuente primaria, e indícalo.
- Registra la fecha de consulta. Si las fuentes se contradicen o no encuentras ninguna, clasifica el dato como "No verificable". Nunca lo des por correcto o incorrecto sin evidencia.
- Los ejemplos ilustrativos no necesitan fuente, pero sí deben ser coherentes y estar presentados como ilustrativos cuando puedan confundirse con hechos.

## Fuera de alcance

- No opines sobre colores, tipografía, espaciado, disposición ni tipo de diagrama, salvo que una visual comunique algo falso o contradiga el texto.
- No propongas notas ocultas: la presentación no las usa.
- No propongas citas o referencias en las slides. Las fuentes van solo en este informe.
- No recomiendes añadir contenido si no resuelve un error, un vacío de comprensión o una advertencia necesaria.

## Restricciones

- No modifiques slides, estilos, `slides.json` ni otros archivos existentes.
- Crea únicamente `auditoria-contenido.md` en la raíz del repositorio. No hagas commit.
- No inventes hallazgos para completar categorías. Si una categoría no tiene problemas, dilo.

## Formato del informe

### 1. Resumen

Una lectura general de hasta 150 palabras, el número de hallazgos por severidad y los cinco arreglos prioritarios.

### 2. Hallazgos

Una tabla ordenada por severidad y luego por número de pantalla, con estas columnas:

| ID | Pantalla | Archivo | Severidad | Categoría | Texto actual | Problema | Corrección propuesta | Fuente | Confianza |

- **Texto actual:** cita literal.
- **Corrección propuesta:** texto listo para pegar, con la extensión del original.
- **Fuente:** URL y fecha de consulta; escribe "N/A" si es un problema editorial.
- **Confianza:** alta, media o baja.

Severidades:

- **Crítica:** información falsa o una omisión que puede causar daño, por ejemplo en privacidad o seguridad.
- **Alta:** error factual o conceptual que afecta lo que el público aprende o decide.
- **Media:** dato desactualizado, término sin definir o frase que no se entiende sin expositor.
- **Baja:** redacción, ortografía o inconsistencia menor.

### 3. No verificable

Una lista con pantalla, afirmación, qué se buscó y qué debe confirmar el autor.

### 4. Problemas del recorrido completo

Repeticiones, saltos, vacíos y promesas sin cumplir que no pertenecen a una sola slide.

### 5. Cobertura

Lista de todas las pantallas con uno de estos estados: revisada sin hallazgos, revisada con hallazgos o no revisada, con el motivo. Revisa todas; no uses muestreo.

## Criterio de calidad

Cada hallazgo debe poder comprobarse sin repetir tu investigación, y cada corrección debe poder aplicarse sin más redacción.
