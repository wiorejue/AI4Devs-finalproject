# Work Ticket: ARF-006 — Componente DialDeTiempo (slider de filtrado)

| Campo | Valor |
|-------|-------|
| **Tipo** | Frontend |
| **Estimación** | 2h |
| **Dependencias** | Ninguna |

**Descripción**: Crear el componente interactivo del Dial de Tiempo que permite seleccionar la duración máxima de contenido que el usuario quiere ver.

**Criterios de Aceptación**:
- [ ] El slider muestra minutos: 5, 10, 15, 30, 45, 60, 90, 120+.
- [ ] Al mover el dial, el hook de búsqueda se actualiza (debounce de 300ms).
- [ ] El valor actual se muestra de forma legible ("15 min", "2 horas").
- [ ] El estado seleccionado se refleja en la URL como query param `?duracion_max=15`.

**Tareas Técnicas**:
1. Crear `components/DialDeTiempo/DialDeTiempo.tsx`.
2. Implementar manejo de estado con `useSearchParams` de Next.js.
3. Crear `hooks/useObrasFiltradas.ts` que consume `GET /obras`.
4. Escribir test unitario con React Testing Library.

---
**User Story de referencia (US-1)**: Como Curioso Cultural, quiero filtrar contenido por duración y mood.
