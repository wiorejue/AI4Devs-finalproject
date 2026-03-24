# Work Ticket: ARF-011 — Variables de entorno y configuración segura

| Campo | Valor |
|-------|-------|
| **Tipo** | Seguridad |
| **Estimación** | 1h |
| **Dependencias** | Ninguna |

**Descripción**: Configurar el sistema de variables de entorno para que ninguna credencial quede en el código.

**Criterios de Aceptación**:
- [ ] Archivos `.env.example` creados en `frontend/` y `backend/`.
- [ ] `.env` y `.env.local` en `.gitignore`.
- [ ] El `JWT_SECRET` y las llaves de API externas se leen exclusivamente desde variables de entorno.
- [ ] La app falla con mensaje claro si una variable requerida no está definida.

**Tareas Técnicas**:
1. Crear `backend/.env.example` y `frontend/.env.example`.
2. Agregar validación de env vars.

---
**User Story de referencia (US-1)**: Como Curioso Cultural, quiero filtrar contenido por duración y mood.
