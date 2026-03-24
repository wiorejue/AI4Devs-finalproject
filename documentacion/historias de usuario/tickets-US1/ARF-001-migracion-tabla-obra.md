# Work Ticket: ARF-001 — Migración: tabla OBRA con soporte a filtros Dial de Tiempo y Mood

| Campo | Valor |
|-------|-------|
| **Tipo** | Base de Datos |
| **Estimación** | 2h |
| **Dependencias** | Ninguna |

**Descripción**: Crear la migración de PostgreSQL para la entidad `OBRA` con todos los campos necesarios para el MVP, incluyendo los campos de filtrado `duracion_min` y `vibe_mood`.

**Criterios de Aceptación**:
- [ ] Tabla `OBRA` creada con: `id_obra`, `titulo`, `director_artista`, `region`, `duracion_min`, `vibe_mood`, `valor_cultural` (VARCHAR 280), `id_eje_vertical` (FK), `id_estado_acceso` (FK), `id_plataforma_origen` (FK).
- [ ] Índices en `duracion_min` y `vibe_mood` para optimizar los filtros.
- [ ] La migración es reversible (up/down).

**Tareas Técnicas**:
1. Crear tablas auxiliares: `EJE_VERTICAL`, `ESTADO_ACCESO`, `PLATAFORMA_ORIGEN` (con campo `permite_iframe BOOLEAN`).
2. Crear tabla `OBRA` con claves foráneas a las anteriores.
3. Crear tabla `LISTA_DESEOS` (`id_usuario` FK, `id_obra` FK, clave única compuesta).
4. Aplicar migración en entorno de desarrollo y verificar esquema.

---
**User Story de referencia (US-1)**: Como Curioso Cultural, quiero filtrar contenido por duración y mood.
