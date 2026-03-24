# Work Ticket: ARF-009 — Hook useWatchlist + integración de Watchlist

| Campo | Valor |
|-------|-------|
| **Tipo** | Frontend |
| **Estimación** | 2h |
| **Dependencias** | ARF-004, ARF-008 |

**Descripción**: Implementar la lógica cliente para guardar/eliminar obras de la Watchlist, incluyendo feedback visual inmediato.

**Criterios de Aceptación**:
- [ ] Al hacer clic en "Guardar", el ícono cambia a "Guardado" inmediatamente (optimistic update).
- [ ] Si el POST /watchlist falla, se muestra error toast y revierte el cambio.
- [ ] Si el usuario no está autenticado, se muestra modal de login.
- [ ] La Watchlist se carga al iniciar sesión y persiste en el estado.

**Tareas Técnicas**:
1. Crear `hooks/useWatchlist.ts` con métodos `addToWatchlist` y `getWatchlist`.
2. Crear `services/watchlistService.ts`.
3. Implementar contexto de autenticación `AuthContext`.
4. Agregar toast de confirmación/error.

---
**User Story de referencia (US-1)**: Como Curioso Cultural, quiero filtrar contenido por duración y mood.
