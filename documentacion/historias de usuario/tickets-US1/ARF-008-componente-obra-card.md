# Work Ticket: ARF-008 — Componente ObraCard (tarjeta de resultado)

| Campo | Valor |
|-------|-------|
| **Tipo** | Frontend |
| **Estimación** | 2h |
| **Dependencias** | Ninguna |

**Descripción**: Crear la tarjeta visual que muestra cada obra en los resultados de búsqueda, con toda la información requerida y el indicador de acceso.

**Criterios de Aceptación**:
- [ ] Muestra: título, director/artista, duración, logo de plataforma origen, indicador de acceso (🟢🟡🔵 con tooltip).
- [ ] Si la obra tiene Hitos, muestra el primero como "sello de calidad" (ej. "🏆 Ganador Cannes").
- [ ] Botón "Guardar en mi lista" visible; redirige al login si no hay sesión.
- [ ] Hover animado y diseño premium.

**Tareas Técnicas**:
1. Crear `components/ObraCard/ObraCard.tsx`.
2. Crear mapa de colores/iconos para `ESTADO_ACCESO`.
3. Crear `components/AccesoIndicator/AccesoIndicator.tsx`.
4. Conectar botón "Guardar" con el hook `useWatchlist`.

---
**User Story de referencia (US-1)**: Como Curioso Cultural, quiero filtrar contenido por duración y mood.
