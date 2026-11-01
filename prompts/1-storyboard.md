# Generación del storyboard

## Rol

Eres un experto en IA generativa, IA agéntica y diseño de presentaciones para audiencias profesionales no técnicas.

## Contexto

Este repositorio contiene una presentación sobre la evolución de la IA generativa y la IA agéntica. Las slides son páginas HTML que se visualizan con GitHub Pages.

La audiencia son profesionales no programadores de ingeniería, economía, administración y carreras afines. El objetivo es formar usuarios profesionales: deben adquirir el vocabulario y los conceptos necesarios para usar estas herramientas efectivamente en su trabajo diario.

La presentación es la primera fase de la formación y dura medio día o más. Incluye unas pocas demostraciones a cargo del presentador. Después vendrán talleres prácticos sobre casos de estudio tomados de las labores diarias de los participantes.

## Tarea

Construye el storyboard completo de la presentación y escríbelo en la carpeta `storyboard/`, con un archivo markdown numerado por slide.

Organiza la narrativa cronológicamente a partir de los principales hitos de la IA generativa y la IA agéntica. Cada hito debe introducir los conceptos que el usuario necesita y su uso práctico.

El contenido de las slides es tentativo. Las slides HTML se generarán en otra fase, una a la vez, bajo supervisión directa del presentador. No generes ni modifiques HTML en esta tarea.

## Restricciones

Selecciona solo los hitos que cambian lo que un profesional no programador puede hacer. No debe existir una slide por cada archivo de `highlights/`.

El storyboard debe recoger todo lo que los participantes deben conocer o dominar para usar efectivamente:

* ChatGPT, ChatGPT Work y su integración con Office, Google Docs y Google Chrome.
* Claude, Claude Cowork y su integración con Office, Google Docs y Google Chrome.
* Las alternativas: Gemini, Microsoft Copilot, modelos abiertos o locales y otros asistentes, como Perplexity, Grok o DeepSeek.

También debe cubrir obligatoriamente estos temas de uso responsable:

* Privacidad de datos.
* Errores y alucinaciones.

No incluyas las demostraciones: el presentador las definirá posteriormente. No incluyas el contenido de los talleres.

## Datos de entrada

* `highlights/`: contiene un archivo por cada evento de interés, nombrado `YYMM-event.md`, con el evento y los highlights que lo caracterizan. Esta información está verificada y es la fuente principal.
* Documentación oficial de los proveedores: úsala solo para lo que `highlights/` no cubra.
* `slides/`: contiene pruebas de la presentación que solo sugieren el estilo; no son contenido que deba conservarse.
  * `001-cover.html`: ejemplo de carátula, que debe mejorarse.
  * `002-statement.html`: ejemplo de separador, basado en la metodología de TEDx.
  * `003-content.html` y `004-data-warehouse.html`: ejemplos de slides de contenido.

## Formato de salida

Crea un archivo por slide en `storyboard/`, nombrado `NNN-nombre.md`, donde `NNN` es el orden de la slide con tres dígitos (por ejemplo, `001-caratula.md`).

Cada archivo describe la slide con estas secciones:

* **Título**
* **Mensaje clave**
* **Contenido en pantalla**
* **Visual sugerido**

## Criterios de calidad

* Todos los términos que el usuario deba comprender para hacer adecuadamente su trabajo están definidos.
* Cada slide tiene una sola idea, salvo que varias ideas estén extremadamente relacionadas.
* Las slides no incluyen citas ni referencias a fuentes.
* Todas las herramientas, integraciones y temas exigidos en Restricciones aparecen en el storyboard.
