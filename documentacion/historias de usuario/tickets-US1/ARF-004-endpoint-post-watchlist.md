# Work Ticket: ARF-004 — Endpoint POST /watchlist (autenticado)

| Campo | Valor |
|-------|-------|
| **Tipo** | Backend |
| **Estimación** | 2h |
| **Dependencias** | ARF-001, ARF-005 |

**Descripción**: Implementar en el Servicio de Usuario el endpoint para guardar una obra en la Watchlist, protegido por JWT.

**Criterios de Aceptación**:
- [ ] `POST /watchlist { id_obra: 42 }` con Bearer Token válido retorna 201 Created.
- [ ] `POST /watchlist` sin token retorna 401 Unauthorized.
- [ ] Intentar guardar una obra ya guardada retorna 200 (idempotente).
- [ ] `GET /watchlist` con Bearer Token retorna la lista de obras guardadas por el usuario.

**Tareas Técnicas**:
1. Crear `UserModule` con `WatchlistService` y controlador en `backend/src/modules/user/`.
2. Aplicar Guard JWT (`@UseGuards(JwtAuthGuard)`).
3. Implementar lógica de upsert en `LISTA_DESEOS`.
4. Crear respuesta tipada con los datos de la obra guardada.

---
**User Story de referencia (US-1)**: Como Curioso Cultural, quiero filtrar contenido por duración y mood.
