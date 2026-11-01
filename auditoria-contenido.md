# Auditoría de contenido de las slides

Fecha de corte y consulta: **31 de octubre de 2026**, zona America/Bogota. Orden de pantalla: posición en `slides.json`, empezando en 1; el prefijo del archivo no es el número de pantalla.

## 1. Resumen

Las 81 pantallas construyen un recorrido comprensible y cubren las promesas de la agenda. Los ejemplos numéricos revisados son correctos. Los riesgos principales son una garantía de seguridad inexistente, una anonimización insuficiente y simplificaciones que confunden contexto, modelos y autonomía. La sección de productos necesita ajustes puntuales de cronología y vigencia. Los datos que no se pudieron respaldar se separan de los errores demostrados.

**Hallazgos:** 2 críticas, 14 altas, 21 medias y 0 bajas. Los cinco arreglos prioritarios son: (1) eliminar la garantía de detención ante ataques; (2) corregir anonimización y tratamiento de credenciales; (3) reparar la taxonomía de IA y la definición de contexto; (4) actualizar skills en Office y la integración de Cowork; (5) corregir Deep Research y Gemini en Chrome.

## 2. Hallazgos

Las citas conservan las palabras originales; se normalizan espacios y saltos de línea del HTML. En tablas y diagramas, la cita concatena las etiquetas en su orden de lectura. Las correcciones sustituyen el fragmento citado y mantienen una extensión comparable, sin exigir fuentes en las slides. Cuando una corrección afecta un SVG, se refiere a su mensaje y etiquetas, no a su diseño.

| ID | Pantalla | Archivo | Severidad | Categoría | Texto actual | Problema | Corrección propuesta | Fuente | Confianza |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

| H-01 | 59 | `slides/056-claude-chrome-hoy.html` | Crítica | Advertencias / coherencia | «Claude se detiene y pide confirmación.» | El diagrama presenta como garantizada la detención ante una inyección. El fabricante advierte que los ataques pueden tener éxito y que el panel puede aprobar acciones automáticamente. | Claude puede obedecer el ataque. Detén acciones inesperadas. | https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely (consulta: 2026-10-31) | alta |
| H-02 | 74 | `slides/071-privacidad-semaforo.html` | Crítica | Conceptos / privacidad | «Ejemplo: cambia el nombre y el documento del cliente por «Cliente A» antes de pegar el texto.» | Cambiar identificadores no garantiza anonimato: el resto del texto puede permitir reidentificar. El ejemplo invita a compartirlo tras una transformación insuficiente. | Ejemplo: «Cliente A» no garantiza anonimato. Revisa otros datos identificables y usa solo una herramienta autorizada. | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-sharing/anonymisation/pseudonymisation/ (consulta: 2026-10-31) | alta |
| H-03 | 6 | `slides/006-vocabulario-base.html` | Alta | Conceptos / coherencia | «Círculos concéntricos: la inteligencia artificial contiene a la IA generativa, esta a la IA agéntica, y el modelo es la pieza común en el centro.» | El anidamiento enseña que toda IA agéntica es generativa y que todo modelo pertenece a ella. Sus propias definiciones no implican esa taxonomía; un modelo también puede clasificar o predecir sin actuar. Cambiar solo el aria-label no resuelve el contenido de los círculos. | Inteligencia artificial: campo general. IA generativa: crea contenido. IA agéntica: organiza acciones. Un modelo puede participar en ambos sistemas. | https://www.anthropic.com/research/building-effective-agents (consulta: 2026-10-31) | alta |
| H-04 | 10 | `slides/010-gpt3.html` | Alta | Conceptos | «Una sola vez y muy costoso» | Presenta el entrenamiento como un evento que no puede repetirse. Existen ajustes posteriores; la misma presentación explica uno en la pantalla 14. | Antes del uso; puede haber ajustes posteriores. | N/A | alta |
| H-05 | 17 | `slides/017-2022-voz.html` | Alta | Advertencias / privacidad | «Ejemplo: graba la reunión, transcríbela y pide un acta con decisiones, responsables y fechas. Revisa nombres y cifras contra el audio.» | La instrucción práctica omite autorización para grabar y permiso para procesar voces y contenido de terceros. La advertencia general posterior no acompaña este primer uso accionable. No se afirma aquí un requisito legal universal. | Ejemplo: con autorización para grabar y una herramienta aprobada, transcribe la reunión y pide un acta con decisiones y responsables. Revisa nombres y cifras. | N/A | alta |
| H-06 | 18 | `slides/018-2022-chatgpt.html` | Alta | Conceptos / coherencia | «Una IA generativa es un modelo de lenguaje que puede crear texto, imágenes o código a partir de instrucciones o prompts.» | La respuesta simulada reduce toda IA generativa a modelos de lenguaje; contradice la definición amplia de la pantalla 6 y los modelos de imagen presentados en la 16. | La IA generativa crea contenido nuevo, como texto, imágenes o código, a partir de instrucciones y datos. Puede usar distintos tipos de modelos. | N/A | alta |
| H-07 | 19 | `slides/019-ventana-de-contexto.html` | Alta | Conceptos | «El modelo responde con lo que está en su contexto; lo que no está, no lo tiene en cuenta.» | Confunde información de entrada con conocimiento aprendido. El modelo también usa patrones y conocimientos codificados en sus parámetros. | El modelo combina lo aprendido con su contexto; la información nueva debe estar en él. | https://arxiv.org/abs/2005.11401 (consulta: 2026-10-31) | alta |
| H-08 | 25 | `slides/025-2023-gpt4-claude.html` | Alta | Exactitud / disponibilidad | «14 de marzo de 2023: Anthropic abre Claude al público vía API (el canal para que otros programas usen el modelo).» | El anuncio presenta acceso mediante socios, chat y API, pero invita a solicitar acceso; no demuestra una API de acceso público general ese día. La disponibilidad general de la API se anuncia en marzo de 2024. | 14 de marzo de 2023: Anthropic presenta Claude mediante socios, chat y API con acceso solicitado (el canal para que otros programas usen el modelo). | https://www.anthropic.com/news/introducing-claude (consulta: 2026-10-31); https://www.anthropic.com/news/claude-3-family (consulta: 2026-10-31) | alta |
| H-09 | 29 | `slides/030-2023-modelos-locales.html` | Alta | Conceptos / ejemplos | «Calidad La mejor disponible Menor, limitada por el equipo» | Nube y local son lugares de ejecución, no una clasificación universal de calidad. El mismo modelo puede correr en ambos; también existen modelos de nube de baja capacidad. | Calidad Depende del modelo elegido Depende del modelo y del equipo | https://lmstudio.ai/docs/app/offline (consulta: 2026-10-31) | alta |
| H-10 | 46 | `slides/043-workflow-vs-agente.html` | Alta | Conceptos / coherencia | «Prompt Flujo de trabajo Agente supervisado Agente persistente De menor a mayor autonomía» | Persistencia describe continuidad entre sesiones, no más libertad para actuar. Un agente persistente puede exigir aprobación para cada acción. | Prompt Flujo de trabajo Agente supervisado Agente persistente Persistencia y autonomía son decisiones distintas. | https://www.anthropic.com/research/building-effective-agents (consulta: 2026-10-31); https://support.claude.com/en/articles/17631495-get-started-with-claude-duet (consulta: 2026-10-31) | alta |
| H-11 | 48 | `slides/045-2025-deep-research.html` | Alta | Exactitud / recorrido | «Desde febrero, el sistema investiga durante varios minutos y entrega un informe.» | El título usa Deep Research como capacidad general y fija su inicio en febrero de 2025. Gemini ya ofrecía investigación agéntica con ese nombre en diciembre de 2024. Febrero sí corresponde a ChatGPT. | ChatGPT incorpora Deep Research en febrero de 2025; Gemini lo ofrecía desde diciembre de 2024. | https://blog.google/products-and-platforms/products/gemini/google-gemini-deep-research/ (consulta: 2026-10-31); https://openai.com/index/introducing-deep-research/ (consulta: 2026-10-31) | alta |
| H-12 | 51 | `slides/048-2025-agentes-de-codigo.html` | Alta | Exactitud / coherencia | «La delegación a agentes se probó primero en programación; lo que hoy llega a la oficina viene de ahí.» | La exclusividad histórica no se sostiene con el propio recorrido: Auto-GPT aparece en 2023 y Operator y Deep Research preceden a los lanzamientos de código de 2025. El patrón también se documenta en soporte al cliente. | La programación impulsó la delegación a agentes; ese mismo ciclo también se aplica hoy a tareas de oficina. | https://www.anthropic.com/research/building-effective-agents (consulta: 2026-10-31) | alta |
| H-13 | 59 | `slides/056-claude-chrome-hoy.html` | Alta | Conceptos / advertencias | «Inyección de instrucciones (prompt injection): texto oculto que intenta engañar al agente.» | No necesita estar oculto: instrucciones visibles en páginas, correos o documentos también pueden intentar sustituir el encargo. La misma definición se repite en la pantalla 78. | Inyección de instrucciones: contenido externo, visible u oculto, que intenta desviar al agente. | https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely (consulta: 2026-10-31) | alta |
| H-14 | 61 | `slides/058-chatgpt-office.html` | Alta | Vigencia / capacidades | «Las conversaciones están separadas del historial principal y no llevan memoria ni skills.» | La afirmación conjunta sobre Office niega skills que la documentación de Excel, Sheets y PowerPoint sí admite. En Word la propia ayuda se contradice: véase NV-07. | Historial y memoria varían por complemento; Excel y PowerPoint admiten skills según el plan y los permisos. | https://help.openai.com/en/articles/20001063-chatgpt-for-excel-and-google-sheets (consulta: 2026-10-31); https://help.openai.com/en/articles/20001242-chatgpt-for-powerpoint (consulta: 2026-10-31) | alta |
| H-15 | 74 | `slides/071-privacidad-semaforo.html` | Alta | Conceptos / coherencia | «Anonimizar: retirar lo que identifique a personas o clientes.» | No precisa la identificación indirecta ni distingue anonimización de sustitución de nombres. Corregir también la definición idéntica del glosario en la pantalla 79. | Anonimizar: impedir identificar directa o indirectamente a una persona. | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-sharing/anonymisation/pseudonymisation/ (consulta: 2026-10-31) | alta |
| H-16 | 74 | `slides/071-privacidad-semaforo.html` | Alta | Advertencias / seguridad | «Rojo Datos personales, de salud, financieros, secretos y credenciales, salvo autorización expresa.» | Agrupa contraseñas y llaves de acceso con datos que podrían compartirse por autorización. Una autorización genérica no convierte el chat en un canal adecuado para secretos de autenticación. | Rojo No pegues contraseñas ni llaves. Los demás datos sensibles requieren autorización y una herramienta aprobada. | https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely (consulta: 2026-10-31) | alta |
| H-17 | 7 | `slides/007-transformer.html` | Media | Ejemplos / comprensión | «El banco cerró porque el río creció» | «Cerró» conduce al banco como establecimiento, mientras el aria-label afirma que «banco» significa orilla. «Orilla» tampoco es una equivalencia inequívoca de banco de arena. El ejemplo no demuestra la desambiguación que declara. | El banco de arena quedó cubierto cuando el río creció. | N/A | alta |
| H-18 | 12 | `slides/012-2021-modelo-fundacional.html` | Media | Términos / coherencia | «Copiloto: asistente que propone; no ejecuta objetivos por sí solo.» | Funciona como convención para el asistente de sugerencias de 2021, pero se presenta como definición general y reaparece en la pantalla 79. La pantalla 66 describe productos Copilot con agentes. | Copiloto, aquí: asistente que sugiere y deja a la persona aceptar o modificar. | N/A | alta |
| H-19 | 15 | `slides/015-2022-cadena-de-pensamiento.html` | Media | Conceptos / advertencias | «Práctica: los pasos visibles facilitan encontrar dónde falló el razonamiento.» | Sin matiz, se puede leer la explicación generada como registro fiel del razonamiento interno; la pantalla 41 advierte que ese razonamiento no es directamente verificable. | Práctica: revisa los cálculos mostrados; la explicación puede contener errores. | https://openai.com/index/learning-to-reason-with-llms/ (consulta: 2026-10-31) | alta |
| H-20 | 28 | `slides/029-2023-modelos-abiertos.html` | Media | Comprensión / exactitud | «Idea clave: cuando en redes dicen "un modelo chino gratis que compite con GPT", casi siempre hablan de un modelo open-weight.» | «Casi siempre» es una frecuencia sin población ni evidencia. Gratis, origen geográfico y pesos descargables son atributos independientes. | Idea clave: que un modelo sea gratis o compita con GPT no implica que sus pesos se puedan descargar. | N/A | alta |
| H-21 | 29 | `slides/030-2023-modelos-locales.html` | Media | Conceptos / costos | «Sin pago por uso una vez que tienes el equipo» | Omite electricidad, mantenimiento y posibles licencias. Puede expresar correctamente ausencia de tarifa por token del proveedor, pero no ausencia de costo variable. | Sin tarifa por token; sí hay electricidad y mantenimiento. | N/A | alta |
| H-22 | 30 | `slides/030b-cuantizacion.html` | Media | Conceptos | «GGUF: formato estándar para modelos locales.» | No es un estándar único de ejecución local. LM Studio y otros entornos también admiten formatos y motores distintos. | GGUF: formato común en llama.cpp y aplicaciones compatibles. | https://github.com/ggml-org/llama.cpp (consulta: 2026-10-31); https://lmstudio.ai/docs/app (consulta: 2026-10-31) | alta |
| H-23 | 30 | `slides/030b-cuantizacion.html` | Media | Ejemplos / coherencia | «Comparación ilustrativa: 16 bits usa toda la memoria con calidad máxima; 8 bits usa cerca de 60% de la memoria con calidad cercana a 85%; 4 bits usa cerca de 33% de la memoria con calidad cercana a 70%.» | Aunque se indica que es ilustrativa, la escala porcentual de «calidad» no define una medida. No permite interpretar 85% o 70% y puede enseñar una pérdida fija inexistente. Afecta también las etiquetas y barras de calidad del SVG inline. | Comparación ilustrativa del mismo modelo: menos bits reducen la memoria de los pesos. El cambio en calidad y velocidad depende del método, del equipo y de la tarea; debe medirse con ejemplos propios. | https://github.com/ggml-org/llama.cpp/blob/master/tools/quantize/quantize.cpp (consulta: 2026-10-31) | alta |
| H-24 | 32 | `slides/031b-copilot-windows.html` | Media | Cronología / comprensión | «21 de septiembre de 2023 Copilot en Windows 11» | Es la fecha de anuncio; el despliegue inicial fue el 26 de septiembre. La secuencia mezcla anuncio y uso efectivo sin indicarlo. | 21 de septiembre de 2023 Anuncio de Copilot en Windows 11 | https://blogs.microsoft.com/blog/2023/09/21/announcing-microsoft-copilot-your-everyday-ai-companion/ (consulta: 2026-10-31) | alta |
| H-25 | 32 | `slides/031b-copilot-windows.html` | Media | Exactitud / cronología | «2026 Gemini en Chrome» | La fecha corresponde a una ampliación, no al inicio del producto. La pantalla 67 repite «con despliegue gradual desde 2026». Google documenta despliegue en Mac y Windows desde septiembre de 2025. | 2025 Gemini en Chrome | https://blog.google/products-and-platforms/products/chrome/new-ai-features-for-chrome/ (consulta: 2026-10-31) | alta |
| H-26 | 35 | `slides/034-2024-memoria.html` | Media | Conceptos / coherencia | «Contexto: lo que está en la conversación actual.» | Más estrecho que la definición correcta de las pantallas 19 y 77: incluye instrucciones del sistema, documentos recuperados, herramientas y memoria incorporada aunque no sean mensajes visibles. | Contexto: información que recibe el modelo en esta petición. | N/A | alta |
| H-27 | 41 | `slides/038-2024-razonamiento.html` | Media | Exactitud / nombres | «Los modelos o1 fueron lanzados por OpenAI en septiembre de 2024 e introdujeron el razonamiento extendido.» | El hito de septiembre fue o1-preview y o1-mini. Nombrarlo solo o1 confunde la versión preliminar con la posterior versión completa. | OpenAI lanzó o1-preview y o1-mini en septiembre de 2024, con más tiempo de cómputo para razonar antes de responder. | https://openai.com/index/introducing-openai-o1-preview/ (consulta: 2026-10-31) | alta |
| H-28 | 53 | `slides/050-2025-ingenieria-de-contexto.html` | Media | Exactitud / atribución | «Ingeniería de contexto (septiembre): decidir qué información entra al contexto y cuándo.» | La fuente interna remite al artículo de Anthropic del 29 de septiembre de 2025; la expresión no queda demostrada como inventada ese mes. El texto fecha un concepto sin identificar el hito. | Anthropic explica en septiembre la ingeniería de contexto: decidir qué información entra y cuándo. | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents (consulta: 2026-10-31) | alta |
| H-29 | 56 | `slides/053-2026-claude-cowork.html` | Media | Vigencia / recorrido | «Cowork (enero) lleva a las tareas de oficina el ciclo de agente que antes exigía Claude Code.» | Como hito de enero es útil, pero el recorrido a octubre omite que desde septiembre Cowork se está integrando con el chat de Claude. También «exigía» excluye otros agentes ya expuestos. | Cowork llega en enero a tareas de oficina; desde septiembre se integra con el chat de Claude, según el plan. | https://claude.com/resources/articles/cowork-is-now-claude (consulta: 2026-10-31) | alta |
| H-30 | 57 | `slides/054-claude-office.html` | Media | Exactitud / fechas | «Disponible desde mayo de 2026» | Se repite para Excel, Word y PowerPoint. Mayo corresponde a disponibilidad general, no necesariamente a primera disponibilidad; confunde beta con lanzamiento general. | Disponibilidad general desde mayo de 2026 | https://claude.com/claude-for-microsoft-365 (consulta: 2026-10-31); https://marketplace.microsoft.com/en-us/product/WA200010725?tab=DetailsAndSupport (consulta: 2026-10-31) | alta |
| H-31 | 58 | `slides/055-claude-google.html` | Media | Advertencias / coherencia | «Compartir, mover o borrar pide tu aprobación.» | El texto principal sí dice «por defecto», pero el diagrama elimina esa condición. La ayuda permite cambiar el comportamiento de algunas acciones según los controles de la organización. | Por defecto, compartir, mover o borrar pide aprobación. | https://support.claude.com/en/articles/10166901-use-google-workspace-connectors (consulta: 2026-10-31) | alta |
| H-32 | 65 | `slides/062-comparacion-chatgpt-claude.html` | Media | Vigencia | «Delegar trabajo ChatGPT Work Claude Cowork» | La comparación se declara actualizada a octubre de 2026, pero no avisa de la integración de Cowork en Claude anunciada en septiembre. Debe corresponder con la actualización de la pantalla 56 y del SVG de elección de la 70. | Delegar trabajo ChatGPT Work Claude, con Cowork integrado según el plan | https://claude.com/resources/articles/cowork-is-now-claude (consulta: 2026-10-31) | alta |
| H-33 | 67 | `slides/064-alternativa-gemini.html` | Media | Exactitud / cronología | «Gemini in Chrome: lleva Gemini al navegador, con despliegue gradual desde 2026.» | Repite el desplazamiento de fecha de la pantalla 32. En enero de 2026 se anunciaron nuevas funciones, no el primer despliegue en Chrome. | Gemini in Chrome: lleva Gemini al navegador, con despliegue gradual desde 2025. | https://blog.google/products-and-platforms/products/chrome/new-ai-features-for-chrome/ (consulta: 2026-10-31) | alta |
| H-34 | 77 | `slides/074-glosario-conceptos.html` | Media | Términos / coherencia | «Modelo abierto Sus pesos se pueden descargar.» | Borra la distinción open-weight/open source que las pantallas 28 y 79 piden preservar. Descargar pesos no demuestra apertura del código, datos o licencia. | Modelo open-weight Sus pesos se pueden descargar; revisa la licencia. | N/A | alta |
| H-35 | 78 | `slides/075-glosario-trabajo.html` | Media | Conceptos / advertencias | «Inyección de instrucciones Texto oculto que intenta engañar al agente.» | Repite la definición demasiado estrecha de la pantalla 59; debe mantener el mismo alcance corregido. | Inyección de instrucciones Contenido externo, visible u oculto, que intenta desviar al agente. | https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely (consulta: 2026-10-31) | alta |
| H-36 | 79 | `slides/075b-glosario-productos.html` | Media | Conceptos / coherencia | «Copiloto Asistente que propone; no ejecuta objetivos por sí solo.» | Repite como taxonomía general la convención de la pantalla 12, mientras Copilot también nombra productos con agentes. | Copiloto, aquí Asistente de sugerencias; el nombre comercial puede incluir agentes. | N/A | alta |
| H-37 | 79 | `slides/075b-glosario-productos.html` | Media | Conceptos / privacidad | «Anonimizar Retirar lo que identifique a personas o clientes.» | El glosario debe recoger la corrección de la pantalla 74 para no perpetuar que basta borrar nombres. | Anonimizar Impedir identificar directa o indirectamente a una persona. | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-sharing/anonymisation/pseudonymisation/ (consulta: 2026-10-31) | alta |

No se identificaron problemas de severidad baja que requieran una corrección independiente. No se encontraron errores de cálculo: 3 × 300 × 0,8 = 720; 18% de 2.450 = 441; las cuatro probabilidades ilustrativas de la pantalla 8 suman 100%. No se detectó alternancia sistemática incorrecta entre tú y usted; «mejore» en la pantalla 58 pertenece a un encargo dirigido al asistente. No se proponen cambios de diseño.

## 3. No verificable

«No verificable» significa evidencia insuficiente o contradictoria en esta consulta, no que la afirmación sea falsa. Estos casos no se cuentan como errores demostrados en la tabla anterior. Fecha de búsqueda para todos: 2026-10-31.

| ID | Pantalla | Afirmación literal | Qué se buscó y resultado | Qué debe confirmar el autor |
| --- | --- | --- | --- | --- |
| NV-01 | 13 | «En 2022, la interfaz de la IA más potente… se convirtió en una conversación.» | Se contrastó con el anuncio de ChatGPT de noviembre de 2022. No establece un criterio comparativo que justifique «la IA más potente». https://openai.com/index/chatgpt/ | Qué modelo, medida y comparación sostienen el superlativo. Sustitución neutral: «En 2022, una nueva forma de usar la IA… se convirtió en una conversación.» |
| NV-02 | 26 | «Conector (2024 en adelante): la evolución de esa conexión.» / «plugins y GPTs son el origen de los proyectos, las skills y los conectores de hoy.» | Se buscaron anuncios oficiales de plugins, GPTs, MCP y Skills. Se confirma semejanza funcional, pero no esa genealogía general entre proveedores ni el inicio universal de «conector» en 2024. https://openai.com/index/introducing-gpts/ ; https://www.anthropic.com/news/model-context-protocol ; https://claude.com/resources/articles/skills | Si se propone una analogía pedagógica o una genealogía documentada. Sustitución: «Plugins, GPTs, proyectos, skills y conectores reutilizan instrucciones, información o acceso a sistemas.» |
| NV-03 | 28 | «Días después, los pesos se filtran y la comunidad empieza a ejecutarlo en computadoras comunes.» | El anuncio de Meta respalda fecha, modelos y acceso de investigación; no documenta la filtración ni delimita «computadoras comunes». Se buscó confirmación primaria del episodio y no se obtuvo una fuente suficiente. https://ai.meta.com/blog/large-language-model-Llama-meta-ai/ | Fuente contemporánea del incidente y qué tamaño de modelo/equipo se describe. Alternativa sin el episodio: «La comunidad desarrolla herramientas para ejecutar variantes en equipos propios.» |
| NV-04 | 30 | «llama.cpp (marzo de 2023)» | Se consultaron el repositorio oficial y resultados sobre su creación. El repositorio respalda función y formatos; la página recuperada no acredita por sí sola el primer lanzamiento de marzo. https://github.com/ggml-org/llama.cpp | Enlace al primer commit o publicación fechada; no confundir creación del repositorio con lanzamiento. |
| NV-05 | 37 | «Perplexica (abril de 2024)» | Se abrió el repositorio original, que ahora redirige a Vane. Se respalda su función de búsqueda, pero la página consultada no acredita el primer lanzamiento de abril. https://github.com/ItzCrazyKns/Perplexica | Commit, etiqueta o anuncio original fechado. La fecha de creación encontrada en un agregador no basta como prueba primaria. |
| NV-06 | 57 | «Disponible desde mayo de 2026» | La página del producto confirma disponibilidad general de Excel, Word y PowerPoint y beta de Outlook. Marketplace muestra actualización en mayo, pero una actualización del paquete no demuestra por sí sola el día de lanzamiento general. https://claude.com/claude-for-microsoft-365 ; https://marketplace.microsoft.com/en-us/product/WA200010725?tab=DetailsAndSupport | Anuncio oficial fechado de disponibilidad general para cada aplicación. H-30 distingue el tipo de disponibilidad; el mes exacto queda pendiente de soporte primario inequívoco. |
| NV-07 | 61 | «no llevan memoria ni skills» | La ayuda de Word contiene «Use skills and apps», pero su FAQ dice que memory y skills no se trasladan al complemento. La primera sección no deja claro si habla de skills propias del complemento o de las de la cuenta. Excel y PowerPoint sí documentan skills. https://help.openai.com/en/articles/20001526-chatgpt-for-word | Comportamiento en Word, versión, plan y si se habla de traslado de skills o de soporte propio. No generalizar desde Word a las otras dos aplicaciones. |
| NV-08 | 75 | «En una prueba, un modelo afirmó haber guardado un archivo que no se creó.» | Se buscaron el enunciado y reportes originales del comportamiento; no se identifica la prueba, el modelo, la fecha ni un registro reproducible en la slide o los highlights. La documentación general de agentes no acredita este caso particular. | Registro del encargo, herramientas, respuesta y carpeta resultante. Si es solo ilustrativo: «Ejemplo ilustrativo: un agente afirma que guardó un archivo, pero la carpeta sigue vacía.» |

## 4. Problemas del recorrido completo

- **Las promesas de la pantalla 3 tienen desarrollo:** vocabulario (6–19 y 77–79), instrucción y verificación (20–23 y 75–76), elección (25–70), uso en el entorno (52 y 57–68) y protección de datos (72–74). Se explica el alcance de las herramientas, aunque no se demuestra una instalación completa: como preparación para talleres es coherente; no debe prometer dominio práctico ya adquirido.
- **El orden es temático dentro de cada año, no cronología estricta.** En 2023 se presentan GPT-4 de marzo y GPTs de noviembre antes de LLaMA de febrero. En 2024 Artifacts de junio sigue a GPT-4o de mayo, pero las familias de modelos de marzo aparecen después de buscadores de abril. Basta explicitarlo en la pantalla 4 sustituyendo «Cada etapa añadió una capacidad que hoy se usa en el trabajo diario.» por «Cada etapa reúne capacidades; dentro de ella seguimos los conceptos, no el orden exacto de los anuncios.» No se propone reordenar por estética.
- **Unificar las definiciones repetidas.** Aplicar conjuntamente contexto (19, 35, 77), copiloto (12, 66, 79), apertura de modelos (28, 77, 79), inyección (59, 78) y anonimización (74, 79). Las correcciones aisladas dejarían contradicciones en el material de consulta.
- **Seguridad antes del primer encargo con efectos.** La pantalla 17 ya propone grabar y procesar reuniones; las advertencias llegan al final. Corregir ese ejemplo en su lugar, como indica el hallazgo, y conservar la revisión final. No hace falta añadir un bloque nuevo.
- **Hitos cuyo vacío sí cambia lo aprendido.** La investigación delegada de Gemini de diciembre de 2024 evita atribuir toda la capacidad a febrero de 2025; la integración de Cowork y chat de septiembre de 2026 evita que la comparación «actualizada a octubre» describa como separado lo que se está unificando. No se justifica añadir una lista de otros lanzamientos por completitud histórica.
- **Repeticiones útiles y una redundancia menor.** Las pantallas 26 y 27 repiten GPTs de noviembre de 2023; no se clasifica como error porque una explica reutilización y la otra ejecución. Los glosarios son deliberadamente recapitulativos. «Modelo de frontera» aparece en 77 y 79 con la misma definición: repetición menor que no exige contenido nuevo.
- **Autonomía, persistencia y alojamiento deben permanecer separados.** Una ejecución en la nube no implica independencia de aprobaciones; continuar entre sesiones tampoco. El tramo 45–46 debe preparar esta distinción antes de los productos persistentes de 64 y 68.

## 5. Cobertura

Se leyeron **81 de 81 archivos**, exclusivamente los enumerados en `slides.json`, incluyendo tablas, texto SVG inline, `aria-label` y `alt`. También se extrajo el texto de los cinco SVG externos utilizados: `mcp.svg`, `deep-research.svg`, `chatgpt-agent.svg`, `chatgpt-drive.svg` y `elegir-herramienta.svg`. Sus etiquetas se contrastaron con la slide que los incorpora. `chatgpt-drive.svg` distingue el panel propio de Sheets; no se confundió con el conector de Drive. No se auditó diseño ni se usó `storyboard/` como requisito.

«Revisada sin hallazgos» significa sin un error demostrado en la tabla; una reserva NV se indica expresamente y no certifica la afirmación. Los ejemplos, consejos y frases retóricas no se trataron como mediciones empíricas. La cobertura factual y sus límites se documentan después de la lista.

| Pantalla | Archivo | Estado | Resultado / reserva |
| --- | --- | --- | --- |

| 1 | `slides/001-cover.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 2 | `slides/002-statement.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 3 | `slides/003-content.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 4 | `slides/004-mapa-de-ruta.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 5 | `slides/005-statement-cimientos.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 6 | `slides/006-vocabulario-base.html` | revisada con hallazgos | H-03 |
| 7 | `slides/007-transformer.html` | revisada con hallazgos | H-17 |
| 8 | `slides/008-tokens.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 9 | `slides/009-embeddings.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 10 | `slides/010-gpt3.html` | revisada con hallazgos | H-04 |
| 11 | `slides/011-rag.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 12 | `slides/012-2021-modelo-fundacional.html` | revisada con hallazgos | H-18 |
| 13 | `slides/013-statement-2022.html` | revisada sin hallazgos | NV-01 |
| 14 | `slides/014-2022-instrucciones.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 15 | `slides/015-2022-cadena-de-pensamiento.html` | revisada con hallazgos | H-19 |
| 16 | `slides/016-2022-imagen.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 17 | `slides/017-2022-voz.html` | revisada con hallazgos | H-05 |
| 18 | `slides/018-2022-chatgpt.html` | revisada con hallazgos | H-06 |
| 19 | `slides/019-ventana-de-contexto.html` | revisada con hallazgos | H-07 |
| 20 | `slides/020-alucinaciones-que-son.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 21 | `slides/021-alucinaciones-verificar.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 22 | `slides/022-prompt-estructurado.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 23 | `slides/023-prompt-iterar.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 24 | `slides/024-statement-2023.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 25 | `slides/025-2023-gpt4-claude.html` | revisada con hallazgos | H-08 |
| 26 | `slides/026-plugins-gpts.html` | revisada sin hallazgos | NV-02 |
| 27 | `slides/027-2023-herramientas.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 28 | `slides/029-2023-modelos-abiertos.html` | revisada con hallazgos | H-20; NV-03 |
| 29 | `slides/030-2023-modelos-locales.html` | revisada con hallazgos | H-09, H-21 |
| 30 | `slides/030b-cuantizacion.html` | revisada con hallazgos | H-22, H-23; NV-04 |
| 31 | `slides/031-2023-entorno.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 32 | `slides/031b-copilot-windows.html` | revisada con hallazgos | H-24, H-25 |
| 33 | `slides/032-2023-auto-gpt.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 34 | `slides/033-statement-2024.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 35 | `slides/034-2024-memoria.html` | revisada con hallazgos | H-26 |
| 36 | `slides/035-2024-contexto-largo.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 37 | `slides/035b-buscadores-ia.html` | revisada sin hallazgos | NV-05 |
| 38 | `slides/036-2024-elegir-modelo.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 39 | `slides/036b-gpt4o-voz.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 40 | `slides/037-2024-artifacts.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 41 | `slides/038-2024-razonamiento.html` | revisada con hallazgos | H-27 |
| 42 | `slides/039-2024-computer-use.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 43 | `slides/040-2024-mcp.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 44 | `slides/041-statement-agentes.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 45 | `slides/042-anatomia-agente.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 46 | `slides/043-workflow-vs-agente.html` | revisada con hallazgos | H-10 |
| 47 | `slides/044-2025-deepseek.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 48 | `slides/045-2025-deep-research.html` | revisada con hallazgos | H-11 |
| 49 | `slides/046-2025-chatgpt-agent.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 50 | `slides/047-2025-vibe-coding.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 51 | `slides/048-2025-agentes-de-codigo.html` | revisada con hallazgos | H-12 |
| 52 | `slides/048b-editores.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 53 | `slides/050-2025-ingenieria-de-contexto.html` | revisada con hallazgos | H-28 |
| 54 | `slides/051-2025-skills.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 55 | `slides/052-statement-oficina.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 56 | `slides/053-2026-claude-cowork.html` | revisada con hallazgos | H-29 |
| 57 | `slides/054-claude-office.html` | revisada con hallazgos | H-30; NV-06 |
| 58 | `slides/055-claude-google.html` | revisada con hallazgos | H-31 |
| 59 | `slides/056-claude-chrome-hoy.html` | revisada con hallazgos | H-01, H-13 |
| 60 | `slides/057-2026-chatgpt-work.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 61 | `slides/058-chatgpt-office.html` | revisada con hallazgos | H-14; NV-07 |
| 62 | `slides/059-chatgpt-google.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 63 | `slides/060-chatgpt-chrome.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 64 | `slides/061-2026-agentes-compartidos.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 65 | `slides/062-comparacion-chatgpt-claude.html` | revisada con hallazgos | H-32 |
| 66 | `slides/063-alternativa-copilot.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 67 | `slides/064-alternativa-gemini.html` | revisada con hallazgos | H-33 |
| 68 | `slides/065-alternativa-otros.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 69 | `slides/066-alternativa-abiertos-locales.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 70 | `slides/067-como-elegir.html` | revisada con hallazgos | Actualizar «Cowork» en el SVG conforme a H-32. |
| 71 | `slides/068-statement-responsabilidad.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 72 | `slides/069-privacidad-datos.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 73 | `slides/070-privacidad-planes.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 74 | `slides/071-privacidad-semaforo.html` | revisada con hallazgos | H-02, H-15, H-16 |
| 75 | `slides/072-errores-en-agentes.html` | revisada sin hallazgos | NV-08 |
| 76 | `slides/073-errores-lista-de-revision.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 77 | `slides/074-glosario-conceptos.html` | revisada con hallazgos | H-34 |
| 78 | `slides/075-glosario-trabajo.html` | revisada con hallazgos | H-35 |
| 79 | `slides/075b-glosario-productos.html` | revisada con hallazgos | H-36, H-37 |
| 80 | `slides/076-puente-talleres.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |
| 81 | `slides/077-statement-cierre.html` | revisada sin hallazgos | Sin corrección necesaria identificada. |

### Registro de comprobaciones factuales

Todas las fuentes siguientes se consultaron el **2026-10-31**. Se registra qué dato respaldan para que no sea necesario repetir la búsqueda. Los anuncios históricos se usan para el estado de lanzamiento, no para afirmar acceso actual. En productos actuales, disponibilidad significa capacidad documentada; no garantiza habilitación en la cuenta de cada asistente. Las reservas NV prevalecen sobre cualquier respaldo parcial de esta lista.

| Pantallas | Comprobación y alcance de la evidencia | Fuentes primarias |
| --- | --- | --- |
| 7 | Transformer, artículo de 2017, atención y paralelización. El título «detrás de todo» se interpreta dentro del recorrido de estos modelos, no como descripción de toda la IA. | https://arxiv.org/abs/1706.03762 |
| 8–10, 23 | GPT-3: 175.000 millones de parámetros; generación autoregresiva; adaptación mediante ejemplos sin actualizar parámetros. La tokenización de la factura está expresamente marcada como ilustrativa. | https://arxiv.org/abs/2005.14165 |
| 9 | BERT bidireccional (2018) y Sentence-BERT (2019), comparación de representaciones de oraciones. No se atribuye a BERT la invención de todos los embeddings. | https://arxiv.org/abs/1810.04805 ; https://arxiv.org/abs/1908.10084 |
| 11, 19 | RAG combina memoria paramétrica y recuperación externa; publicación de 2020. La formulación original incluía entrenamiento de componentes: «sin reentrenar» se interpreta como actualizar los documentos del sistema ya preparado, no como una propiedad de todo experimento original. | https://arxiv.org/abs/2005.11401 |
| 12 | Término modelo fundacional en 2021 y preview de GitHub Copilot en junio de 2021 como sugeridor de código. El ejemplo de fórmula es una analogía expresamente presentada como ejemplo. | https://arxiv.org/abs/2108.07258 ; https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/ |
| 14–15 | InstructGPT, demostraciones y preferencias humanas en 2022; chain-of-thought mediante ejemplos con pasos intermedios en 2022. El cálculo de descuento es ilustrativo y correcto. | https://arxiv.org/abs/2203.02155 ; https://arxiv.org/abs/2201.11903 |
| 16 | DALL·E 2 Preview en abril de 2022, edición y riesgos; publicación de Stable Diffusion en agosto de 2022 bajo licencia OpenRAIL-M. | https://github.com/openai/dalle-2-preview/blob/main/system-card.md ; https://stability.ai/news-updates/stable-diffusion-public-release |
| 17–18, 20 | Whisper: publicación de modelos y código en septiembre de 2022; transcripción multilingüe. ChatGPT: noviembre de 2022, ajuste de GPT-3.5 y limitaciones de respuestas plausibles falsas. No se exige fuente a la referencia ficticia porque la slide la marca explícitamente como inventada. | https://openai.com/index/whisper/ ; https://openai.com/index/chatgpt/ |
| 25 | GPT-4 en marzo de 2023 y entradas de imagen; anuncio de Claude de la misma fecha con acceso solicitado. La explicación de IA constitucional es una síntesis del método, no garantía de que cada respuesta pase por una revisión visible. | https://openai.com/index/gpt-4/ ; https://www.anthropic.com/news/introducing-claude ; https://arxiv.org/abs/2212.08073 |
| 26–27 | GPTs reutilizables en noviembre de 2023 y function calling en junio. La retirada de la antigua beta de plugins corresponde a abril de 2024; no implica que la palabra plugin haya dejado de usarse para paquetes actuales. Assistants API terminó el 26 de agosto de 2026. La genealogía general queda en NV-02. | https://openai.com/index/introducing-gpts/ ; https://openai.com/index/function-calling-and-other-api-updates/ ; https://help.zapier.com/hc/en-us/articles/24785309335565-Sunsetting-the-Zapier-ChatGPT-plugin-what-you-need-to-know ; https://developers.openai.com/api/docs/assistants/migration |
| 28–30 | Meta publicó LLaMA en febrero de 2023 con acceso para investigación; no equivale a licencia irrestricta. LM Studio declara lanzamiento en mayo de 2023. Ollama tiene versiones fechadas de 2023. Funcionamiento local y offline tras descargar modelos. Los detalles de filtración y primer lanzamiento de llama.cpp quedan en NV-03/04. | https://ai.meta.com/blog/large-language-model-Llama-meta-ai/ ; https://lmstudio.ai/blog/free-for-work ; https://github.com/ollama/ollama/releases/tag/v0.0.3 ; https://lmstudio.ai/docs/app/offline ; https://github.com/ggml-org/llama.cpp |
| 31–32 | GPT-4V: imágenes, septiembre de 2023. Copilot: anuncio del 21 y despliegue del 26 de septiembre de 2023. Apple Intelligence: anuncio de junio de 2024. Gemini: anuncio de sustitución de Assistant en móviles en marzo de 2025; no se interpreta como la primera existencia de una app Android. Chrome ya tenía despliegue en 2025. | https://openai.com/index/gpt-4v-system-card/ ; https://blogs.microsoft.com/blog/2023/09/21/announcing-microsoft-copilot-your-everyday-ai-companion/ ; https://www.apple.com/newsroom/2024/06/introducing-apple-intelligence-for-iphone-ipad-and-mac/ ; https://blog.google/products-and-platforms/products/gemini/google-assistant-gemini-mobile/ ; https://blog.google/products-and-platforms/products/chrome/new-ai-features-for-chrome/ |
| 33 | El proveedor sitúa los comienzos abiertos de AutoGPT en 2023. El ciclo se presenta como patrón histórico experimental, no como garantía del producto actual. | https://agpt.co/ |
| 35 | La memoria de ChatGPT se anunció en febrero de 2024. Google documenta Saved Info en diciembre de 2024 y Claude documenta después memoria entre sesiones. Se verificó la secuencia general, no equivalencia completa entre implementaciones. | https://help.openai.com/en/articles/6825453-chatgpt-release-notes ; https://blog.google/products-and-platforms/devices/pixel/pixel-drop-december-2024/ ; https://support.claude.com/en/articles/12138966-release-notes |
| 36 | Gemini 1.5: febrero de 2024, un millón de tokens; el anuncio da equivalencias aproximadas de una hora de vídeo, 11 de audio y más de 700.000 palabras. No son una conversión universal válida para cualquier idioma. Dos millones se anunciaron en mayo. Comparación histórica: Gemini 1.0 32.000; GPT-4 Turbo 128.000; Claude 2.1 200.000. | https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/ ; https://blog.google/innovation-and-ai/technology/developers-tools/gemini-gemma-developer-updates-may-2024/ ; https://openai.com/index/new-models-and-developer-products-announced-at-devday/ ; https://www.anthropic.com/news/claude-2-1 |
| 37–40 | El repositorio de Perplexica respalda el motor de respuestas con búsqueda; fecha en NV-05. Perplexity documenta citas. Claude 3: familia anunciada en marzo de 2024, con Haiku posterior a la presentación de Sonnet/Opus. GPT-4o: audio, visión y texto integrados en 2024. Artifacts: lanzamiento de preview con Claude 3.5 Sonnet en junio de 2024. | https://github.com/ItzCrazyKns/Perplexica ; https://www.perplexity.ai/hub ; https://www.anthropic.com/news/claude-3-family ; https://openai.com/index/hello-gpt-4o/ ; https://www.anthropic.com/news/claude-3-5-sonnet |
| 41–46 | o1-preview en septiembre de 2024; más cómputo de razonamiento, sin garantía de corrección. Computer use de Anthropic en octubre y MCP en noviembre. El protocolo común no elimina servidores, permisos ni adaptaciones. Workflows y agentes: se respalda la diferencia entre pasos prefijados y decisiones dinámicas. | https://openai.com/index/introducing-openai-o1-preview/ ; https://openai.com/index/learning-to-reason-with-llms/ ; https://www.anthropic.com/news/3-5-models-and-computer-use ; https://www.anthropic.com/news/model-context-protocol ; https://www.anthropic.com/research/building-effective-agents |
| 47–49 | DeepSeek-R1 en enero de 2025; pesos y variantes destiladas publicados. gpt-oss en agosto. OpenAI Deep Research en febrero; Operator en enero; unificación en ChatGPT agent en julio. El SVG de convergencia es coherente. | https://api-docs.deepseek.com/updates/ ; https://github.com/deepseek-ai/DeepSeek-R1 ; https://openai.com/index/introducing-gpt-oss/ ; https://openai.com/index/introducing-deep-research/ ; https://openai.com/index/introducing-operator/ ; https://openai.com/index/introducing-chatgpt-agent/ |
| 50 | La expresión vibe coding consta en el mensaje original de Karpathy de febrero de 2025, recogido por Simon Willison. El original en X no devolvió texto legible; el mes se respalda mediante esa reproducción atribuida, no mediante acceso al original. Su sentido original incluía despreocuparse del código: la definición de la slide es una acepción amplia, y su advertencia sobre revisión técnica evita convertirla en una recomendación de producción sin revisión. | Original: https://x.com/karpathy/status/1886192184808149383 ; reproducción atribuida, fuente secundaria: https://feeds.simonwillison.net/2025/Feb/6/andrej-karpathy/ |
| 51–54 | Claude Code en febrero de 2025; Codex CLI en abril y Codex cloud en mayo; Claude 4 en mayo. VS Code y Cursor documentan agentes que editan archivos. Ingeniería de contexto: artículo de septiembre de 2025. Skills: carpetas con instrucciones, scripts y recursos, anuncio de octubre de 2025. | https://www.anthropic.com/news/claude-3-7-sonnet ; https://openai.com/index/introducing-o3-and-o4-mini/ ; https://openai.com/index/introducing-codex/ ; https://www.anthropic.com/news/claude-4 ; https://code.visualstudio.com/features/agents ; https://cursor.com/help/ai-features/agent ; https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents ; https://claude.com/resources/articles/skills |
| 56–59 | Cowork en enero y Dispatch en marzo de 2026 según notas oficiales; integración con el chat en septiembre. Office y Google tienen alcances propios, documentados por aplicación y con permisos. Chrome tiene riesgos residuales y capturas visibles; la aprobación no es una garantía universal. El mes de disponibilidad general de Office queda reservado en NV-06. | https://support.claude.com/en/articles/12138966-release-notes ; https://claude.com/resources/articles/cowork-is-now-claude ; https://claude.com/claude-for-microsoft-365 ; https://support.claude.com/en/articles/10166901-use-google-workspace-connectors ; https://support.claude.com/en/articles/12902428-use-claude-in-chrome-safely |
| 60–63 | ChatGPT Work consta en la documentación y anuncios de julio de 2026. Office tiene complementos por aplicación; Google Drive reúne las acciones de Docs, Sheets y Slides, con panel propio en Sheets. Atlas terminó el 9 de agosto de 2026; la transición documentada incluye ChatGPT y la extensión de Chrome. No se interpreta como disponibilidad universal. | https://learn.chatgpt.com/docs/get-started-with-work ; https://learn.chatgpt.com/docs/whats-new ; https://help.openai.com/en/articles/20001526-chatgpt-for-word ; https://help.openai.com/en/articles/20001242-chatgpt-for-powerpoint ; https://help.openai.com/en/articles/20001063-chatgpt-for-excel-and-google-sheets ; https://help.openai.com/en/articles/10929079-google-drive-app-and-setup-in-chatgpt ; https://help.openai.com/en/articles/20001371 |
| 64–65 | Workspace agents: abril de 2026, compartidos y con controles de administración. dots: septiembre de 2026, alojamiento persistente y despliegue limitado por plan/mercado. Duet: preview en octubre de 2026, no disponibilidad general. La comparación no atribuye precios universales. | https://openai.com/index/introducing-workspace-agents-in-chatgpt/ ; https://openai.com/index/introducing-dots/ ; https://claude.com/resources/articles/claude-duet ; https://support.claude.com/en/articles/17631495-get-started-with-claude-duet |
| 66–67 | Copilot Chat y licencias elegibles, controles empresariales y agentes de archivos. Gemini documenta controles por servicio y acceso de Workspace; Spark se anunció en mayo de 2026 como agente cloud. La presencia de una capacidad no implica que se habilite automáticamente en todas las cuentas. | https://learn.microsoft.com/copilot/faq ; https://learn.microsoft.com/microsoft-365/copilot/wordexcelppt-agents ; https://support.google.com/a/users/answer/17010577 ; https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/manage-access-to-gemini-features-in-workspace-services ; https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/ |
| 68–70 | Perplexity: respuestas con fuentes; Grok Bot: agentes persistentes, con lanzamiento en beta y documentación actual; Kimi: generación de presentaciones; Muse: agente personal y canal WhatsApp. LM Studio, Ollama y Open WebUI admiten ejecución de modelos locales, pero la aplicación o herramienta también puede conectarse a nube. El árbol de elección se interpreta como orientación, no como resultado obligatorio de una compra. | https://www.perplexity.ai/hub ; https://docs.x.ai/grok-bot/overview ; https://forum.cursor.com/t/introducing-grok-bot/168053 ; https://www.kimi.ai/help/agent/agent-overview ; https://ai.meta.com/muse/ ; https://lmstudio.ai/docs/app/offline ; https://ollama.com/blog ; https://docs.openwebui.com/ |
| 72–74, 79 | ChatGPT: datos empresariales fuera de entrenamiento por defecto; cuentas personales dependen de controles. Claude: elección en cuentas personales y exclusiones comerciales con excepciones de feedback. No entrenar no significa no almacenar, como ya muestra la pantalla 72. Se usa la distinción técnica de ICO entre anonimización y seudonimización, sin trasladar automáticamente legislación británica a Colombia. | https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance/ ; https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings ; https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training ; https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-sharing/anonymisation/pseudonymisation/ |

Los nombres de familias de la pantalla 25 se leen como identificación del proveedor (GPT/OpenAI, Claude/Anthropic, Gemini/Google, Llama/Meta, Qwen/Alibaba, DeepSeek/DeepSeek, Kimi/Moonshot, Grok/xAI), no como una comparación cuantitativa ni como una lista de modelos concretos disponibles para toda cuenta. Las enumeraciones de pesos abiertos tampoco eximen de revisar la licencia de la versión elegida.

## 6. Ampliación: resultados de aprendizaje para profesionales no programadores

Criterios solicitados por el autor después de la auditoría inicial. Esta evaluación analiza las oportunidades de aprendizaje que ofrece el material; no demuestra comprensión efectiva sin observar participantes. Los 37 hallazgos anteriores mantienen su numeración y conteo. Los vacíos siguientes son de alcance pedagógico y se consideran prioritarios con estos objetivos ampliados.

| Resultado esperado | Evaluación del material actual | Evidencia del recorrido | Vacío que debe resolverse |
| --- | --- | --- | --- |
| Definir los conceptos relevantes y relacionarlos | Parcialmente cubierto | Pantallas 6–23, 43–46, 53–54 y glosarios 77–79 | Hay vocabulario abundante, pero falta el de automatización accesible al usuario: disparador, condición, acción, ejecución y excepción. Persistencia, alojamiento y autonomía aparecen sin una comparación que permita distinguirlos. Las definiciones erróneas identificadas antes también deben corregirse. |
| Saber qué puede hacer con IA generativa y agéntica sin programar | Cubierto para uso de asistentes; incompleto para construir soluciones | Resúmenes, actas, informes, investigación y trabajo con archivos en 17–23 y 48–62; GPTs en 26 y prototipos en 50 | El participante ve entregables, pero no una separación explícita entre usar un asistente, configurar uno reutilizable, conectar un proceso automático y encargar la creación de software. Puede concluir que toda automatización requiere un agente o un editor de código. |
| Interpretar anuncios en redes sociales, por ejemplo dots | Parcialmente cubierto | Pantalla 64 menciona dots y define persistencia como continuidad entre sesiones | Reconocer el término no basta para explicar un anuncio. Falta traducir «siempre activo», «proactivo», «con memoria», «conectado» y «autónomo» a comportamientos y preguntas sobre control. El ejemplo de esa pantalla es de un agente compartido de soporte, no de uno personal proactivo. |
| Reconocer herramientas para construir flujos y agentes sin escribir código para cada paso | No cubierto explícitamente | Pantalla 46 define workflow y da un ejemplo; no se presenta una selección de constructores de automatizaciones ni una construcción visual equivalente en los archivos oficiales | No se explica cómo un usuario configura disparadores, conexiones, reglas y acciones. Tampoco se muestra que un flujo puede funcionar sin IA o incorporar un modelo en uno de sus pasos. |

### Ajustes mínimos de contenido propuestos

1. **Completar la pantalla 46 con un proceso reconocible.** Texto propuesto: «Puedes construir flujos conectando bloques en herramientas como n8n, Make, Zapier o Power Automate. Disparador: qué inicia el proceso. Condición: qué regla decide el camino. Acción: qué hace cada paso. Ejemplo: llega una solicitud → la IA identifica el tema → una regla la asigna al área → una persona aprueba la respuesta. La IA es un paso del flujo; no todo el proceso necesita ser un agente.» Si no cabe junto a la distinción workflow/agente, merece una pantalla consecutiva porque cubre un objetivo actualmente ausente.

2. **Añadir una síntesis de las formas de trabajar sin programar, antes de elegir herramientas.** Texto propuesto: «Puedes pedir un resultado, configurar un asistente reutilizable, conectar aplicaciones en un flujo o encargar un prototipo de software. Son formas distintas de resolver tareas. Empieza por la que permita controlar y comprobar mejor el resultado.» Vincular cada forma con un ejemplo ya presentado evita añadir otro catálogo de productos.

3. **Distinguir persistencia, proactividad y autonomía alrededor de la pantalla 64.** Texto propuesto: «Persistente: conserva continuidad entre sesiones. Proactivo: puede iniciar una búsqueda o avisarte sin una nueva petición. Alojado: se ejecuta en servidores del proveedor. Autonomía: qué decisiones y acciones puede realizar sin consultarte. Estas características pueden combinarse; una no garantiza las demás.» Un servicio que permanece activo no necesariamente trabaja continuamente: puede ejecutar tareas por horarios o eventos.

4. **Usar dots como ejercicio de lectura de anuncios.** Texto propuesto: «Al leer “agente siempre activo”, pregunta: ¿qué objetivo sigue?, ¿qué información puede consultar?, ¿qué inicia su trabajo?, ¿qué puede cambiar?, ¿cuándo necesita mi aprobación?, ¿cómo lo detengo y reviso lo que hizo?». Ejemplo ilustrativo: «Revisa las solicitudes pendientes cada mañana y prepara un resumen; pide aprobación antes de enviar mensajes». El ejercicio enseña conceptos transferibles aunque cambie el producto.

5. **Hacer explícitos los límites de “sin programar”.** Texto propuesto: «No necesitas escribir código para muchos flujos habituales. Sí necesitas entender el proceso, conectar cuentas, dar permisos, probar casos y decidir qué ocurre cuando algo falla. Las integraciones o reglas especiales pueden necesitar apoyo técnico.» Añadir como criterio de prueba: «Si una acción falla o el flujo se repite, ¿cómo evitas omisiones, envíos duplicados o cambios incorrectos?».

Estos ajustes responden a vacíos de comprensión; no implican convertir la conferencia en un curso completo de una plataforma ni añadir hitos por completitud histórica.

### Cómo comprobar los cuatro resultados

Al terminar, el participante debería poder resolver, con las slides como apoyo:

- Explicar con un ejemplo propio la diferencia entre modelo, asistente, herramienta, flujo y agente.
- Elegir entre pedir un resumen, configurar un asistente o automatizar un proceso repetitivo, e indicar cómo revisaría el resultado.
- Leer un anuncio de un agente y distinguir memoria, persistencia, proactividad, alojamiento y permisos sin asumir capacidades no anunciadas.
- Dibujar un flujo de su trabajo con un disparador, pasos, una condición y una salida; indicar dónde usaría IA, qué aprobaría una persona y cómo manejaría un fallo.

Conocer herramientas por su nombre no demuestra el último resultado; poder explicar cómo organizaría ese proceso sí aporta evidencia de comprensión inicial.

Fuentes de la ampliación, consultadas el 2026-10-31: [documentación oficial de n8n](https://docs.n8n.io/), [curso introductorio de flujos de n8n](https://learn.n8n.io/courses/course-v1%3An8n%2BN8N101%2B2026H2/about) y [documentación oficial de dots](https://learn.chatgpt.com/docs/dots). n8n documenta construcción de automatizaciones con aplicaciones e IA; su formación inicial permite comenzar sin escribir código para cada paso. OpenAI describe dots como agentes siempre disponibles con entorno cloud. Ninguna de estas capacidades elimina la necesidad de configurar accesos y supervisar resultados.

### Ampliación del mapa de herramientas para construir sin programar

n8n es un ejemplo de una capacidad más amplia que falta hacer visible: **el profesional puede configurar soluciones propias conectando datos, aplicaciones, reglas y modelos**. La presentación debe mostrar herramientas representativas por propósito y entorno, además de los asistentes que ya permite utilizar. La siguiente selección es pedagógica; no es una clasificación de mejores productos ni garantiza que todo caso se resuelva sin apoyo técnico.

| Propósito que debe reconocer el participante | Herramientas representativas | Ejemplo ilustrativo para el público | Concepto que enseña |
| --- | --- | --- | --- |
| Conectar aplicaciones y automatizar pasos | n8n, Make, Zapier | Recibir un formulario, registrar la solicitud, clasificarla y avisar al responsable | Disparador, acción, condición y conexión entre sistemas; la IA puede ser uno de los pasos |
| Automatizar procesos del entorno Microsoft | Power Automate | Solicitar aprobación de un documento y registrar la decisión | Reglas, aprobaciones humanas y seguimiento de ejecuciones |
| Automatizar tareas del entorno Google | Google Workspace Studio | Organizar la revisión de solicitudes recibidas en Gmail y documentos de trabajo | Automatización integrada en las aplicaciones habituales |
| Construir asistentes y agentes con información y herramientas propias | Microsoft Copilot Studio, Dify | Configurar un asistente que consulte procedimientos y ayude a tramitar solicitudes | Instrucciones, conocimiento, herramientas, decisiones y límites del agente |

Las categorías se solapan: varias plataformas permiten tanto flujos como agentes. La distinción es el problema que se quiere resolver y la autonomía configurada, no una etiqueta exclusiva para cada marca. Dify y n8n pueden requerir mayor acompañamiento según el caso; la posibilidad de usar un editor visual no elimina el trabajo de integración, pruebas y mantenimiento.

**Texto de apertura propuesto para este bloque:** «Además de usar asistentes, puedes construir soluciones para tu trabajo: conectar aplicaciones, automatizar pasos y configurar agentes con información propia. Herramientas como Make, Zapier, n8n, Power Automate, Workspace Studio, Copilot Studio y Dify permiten hacerlo mediante instrucciones y editores visuales, con distintos niveles de complejidad. Elige según tu proceso y las herramientas aprobadas por tu organización.»

**Criterio de cobertura:** el participante debe identificar una opción para su entorno y explicar qué configuraría en ella. Un listado de logotipos no resuelve el vacío. Conviene mostrar el mismo caso sencillo como flujo con pasos definidos y como tarea que requiere decisiones de un agente; así se conectan las herramientas con la distinción conceptual de la pantalla 46.

Fuentes oficiales de las capacidades, consultadas el 2026-10-31: [Make](https://www.make.com/en/product), [flujos de Zapier](https://help.zapier.com/hc/en-us/articles/22234847450893-Zap-workflows-quick-start-guide), [aprobaciones de Power Automate](https://learn.microsoft.com/en-us/power-automate/get-started-approvals), [Google Workspace Studio](https://workspace.google.com/intl/en_gb/studio/), [Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/overview) y [Dify Workflow Studio](https://dify.ai/workflows). Para n8n se mantienen las fuentes anteriores. Los ejemplos de procesos son ilustrativos y requieren comprobar conectores y permisos concretos antes de implementarlos.

## 7. Propuestas concretas de mejora consolidadas

Esta sección incorpora las seis propuestas concretas discutidas después de la auditoría y precisa dónde aplicarlas. Complementa los hallazgos de la sección 2 y desarrolla los resultados de aprendizaje de la sección 6. Todas las propuestas quedan documentadas aquí; ninguna se ha aplicado a las slides. La numeración de pantalla se refiere al orden actual de `slides.json`, antes de cualquier inserción.

### P-01. Pantalla 3: explicitar la construcción de soluciones sin programar

Archivo: `slides/003-content.html`. Acción propuesta: incorporar este resultado de aprendizaje.

> **Automatizar tu trabajo:** reconocer qué procesos puedes construir conectando aplicaciones, reglas e IA, sin escribir código para cada paso.

Propósito: que el participante sepa desde la agenda que también puede configurar soluciones propias. Los ejemplos de uso de asistentes, por sí solos, no hacen explícita esa posibilidad.

### P-02. Después de la pantalla 46: cuatro formas de trabajar con IA

Ubicación: después de `slides/043-workflow-vs-agente.html`. Acción propuesta: añadir una pantalla titulada **«Cuatro formas de trabajar con IA»**.

| Forma de trabajar | Ejemplo listo para la pantalla |
| --- | --- |
| Pedir un resultado | Resumir un informe y verificar sus cifras. |
| Configurar un asistente reutilizable | Preparar un asistente con instrucciones y procedimientos del equipo. |
| Construir un flujo automático | Registrar solicitudes, clasificarlas y avisar al responsable. |
| Delegar una tarea a un agente | Investigar alternativas y preparar una propuesta para revisión. |

Cierre propuesto:

> Puedes empezar sin programar. Debes comprender el proceso, dar permisos y comprobar el resultado.

Propósito: distinguir formas de trabajo que hoy aparecen dispersas. Son alternativas que se pueden combinar; no constituyen una escala obligatoria de sofisticación o autonomía. Esta propuesta concreta la síntesis de formas de trabajar de la sección 6: se propone una sola pantalla, no dos versiones de la misma síntesis.

### P-03. A continuación: un proceso completo con sus herramientas posibles

Ubicación: después de P-02. Acción propuesta: añadir una pantalla titulada **«De una tarea repetitiva a un proceso automático»**.

Ejemplo ilustrativo listo para usar:

> Llega una solicitud → se registra → la IA identifica el tema → una regla asigna al responsable → se prepara una respuesta → una persona la aprueba.

Definiciones ligadas al ejemplo:

- **Disparador:** la llegada de la solicitud inicia el proceso.
- **Acciones:** registrar, clasificar y avisar.
- **Condición:** una regla decide el área según el tema.
- **Excepción:** si falta información, se solicita revisión.

Texto de conexión con las herramientas:

> Puedes configurar estos pasos en herramientas como n8n, Make o Zapier. En el entorno Microsoft, considera Power Automate; en Google, Workspace Studio. Comprueba que existan las conexiones y los permisos necesarios.

Cierre propuesto:

> La IA puede ser un paso del flujo. El proceso también necesita reglas, pruebas y una respuesta cuando algo falla.

Propósito: mostrar primero la necesidad y el proceso, y después las herramientas. Las capacidades y fuentes están documentadas en el mapa de la sección 6. No se promete equivalencia entre plataformas ni disponibilidad de todas las conexiones. Esta pantalla desarrolla el ejemplo antes propuesto para la pantalla 46; si se añade, no hace falta repetir allí todo el ejemplo.

### P-04. Pantalla 64: distinguir las características de los agentes

Archivo: `slides/061-2026-agentes-compartidos.html`. Acción propuesta: sustituir o desarrollar la mención breve de agentes persistentes con las siguientes definiciones, manteniendo la explicación de agentes compartidos.

> **Memoria:** conserva información para usos posteriores.  
> **Persistencia:** mantiene continuidad entre sesiones.  
> **Proactividad:** puede iniciar trabajo o avisarte sin una nueva petición.  
> **Alojamiento:** dónde se ejecuta.  
> **Autonomía:** qué puede decidir y hacer sin consultarte.

Cierre propuesto:

> Un agente puede seguir activo y necesitar tu aprobación para actuar.

Propósito: preparar la interpretación de anuncios como dots. Conservar información no equivale a ejecutar tareas en segundo plano; trabajar en la nube no implica libertad para actuar. Si esta explicación no cabe junto al contenido de agentes compartidos, se debe distribuir entre las pantallas existentes de anatomía y agentes compartidos antes de añadir otra pantalla.

### P-05. Pantalla 70: elegir a partir de decisiones concretas

Archivo: `slides/067-como-elegir.html`. Acción propuesta: conservar las preguntas existentes sobre datos y autorización de la organización, y desarrollar la elección de tarea con estas preguntas.

> ¿Necesitas una respuesta puntual, un asistente reutilizable, un proceso repetitivo o una investigación abierta?  
> ¿Los pasos se conocen de antemano?  
> ¿Qué aplicaciones debe conectar?  
> ¿Qué acciones requieren aprobación?

Texto adicional propuesto:

> Para configurar asistentes y agentes propios, considera herramientas como Copilot Studio o Dify. Para conectar pasos de un proceso, consulta las opciones de automatización de tu entorno.

Propósito: conectar necesidad → tipo de solución → herramientas → ejemplo → supervisión. El mapa de herramientas de la sección 6 es el contenido de referencia para esta ampliación. Varias plataformas admiten tanto flujos como agentes; los ejemplos no deben presentarse como categorías exclusivas.

### P-06. Pantalla 80: comprobar comprensión mediante una tarea propia

Archivo: `slides/076-puente-talleres.html`. Acción propuesta: concretar la preparación para los talleres con este encargo, preservando la comprobación de sensibilidad de datos y herramientas autorizadas.

> Trae una tarea repetitiva y describe: qué la inicia, qué información necesita, cuáles son sus pasos, dónde podría ayudar la IA, qué debe aprobar una persona y qué ocurre si falla.

Ejercicio oral o visible propuesto para el cierre del bloque de agentes:

> Lee un anuncio de dots. Identifica qué promete sobre memoria, persistencia, proactividad y autonomía. Señala qué necesitarías comprobar antes de usarlo.

Criterio de evaluación: el participante debe justificar una elección y señalar límites y permisos. Nombrar una herramienta o repetir una definición no demuestra por sí solo que pueda aplicarla. El anuncio debe presentarse con su fecha; las fuentes oficiales de dots constan en las secciones anteriores.

### Prioridad y alcance de las propuestas

Priorizar **P-02, P-03 y P-04**: resuelven los mayores vacíos entre conocer vocabulario, entender anuncios y descubrir qué puede construir el participante. P-01 hace visible el resultado esperado; P-05 permite elegir; P-06 comprueba la comprensión y prepara el taller.

La propuesta base añade **dos pantallas** y modifica contenido de cuatro existentes. Los ajustes de la sección 6 y estas propuestas se deben implementar conjuntamente, evitando duplicar ejemplos y definiciones. Los arreglos críticos de seguridad y privacidad de la sección 2 conservan su prioridad. No se propone un curso completo de cada plataforma, ni una lista extensa de marcas sin casos de uso.
