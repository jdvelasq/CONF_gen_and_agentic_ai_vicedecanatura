# Instrucciones para agentes

## Atribución de commits

- Trabajar directamente sobre la rama `main`, salvo instrucción explícita en contrario.
- El asunto de cada commit debe comenzar con el nombre del agente que realizó el cambio, seguido de dos puntos; por ejemplo, `codex: mejorar diagramas` o `claude: actualizar presentación`.
- La identidad Git del **autor principal** debe corresponder al agente o persona que efectivamente realizó el cambio. No atribuir a un agente cambios hechos por otro.
- Cuando **Codex sea el autor principal**, utilizar `Codex <267193182+codex@users.noreply.github.com>`, identidad vinculada a [github.com/codex](https://github.com/codex). Para un único commit local, sin modificar la configuración global:

  ```bash
  git -c user.name="Codex" \
      -c user.email="267193182+codex@users.noreply.github.com" \
      commit -m "codex: descripción del cambio"
  ```

- Cuando Codex **solo colabore** en un cambio cuyo autor principal sea otra persona o agente, mantener la identidad real del autor principal y agregar al final del mensaje, después de una línea en blanco, el trailer exacto:

  ```text
  Co-authored-by: Codex <267193182+codex@users.noreply.github.com>
  ```

- No agregar un trailer de coautoría para el mismo agente que ya figura como autor principal, salvo que exista una razón específica y verificable.
- Aplicar el mismo criterio de autoría real a Claude y a los demás agentes. No reescribir commits anteriores únicamente para modificar las estadísticas de *Contributors*.
