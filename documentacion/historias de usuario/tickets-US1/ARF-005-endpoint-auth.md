# Work Ticket: ARF-005 — Endpoint POST /auth/register y POST /auth/login

| Campo | Valor |
|-------|-------|
| **Tipo** | Backend |
| **Estimación** | 3h |
| **Dependencias** | ARF-001 |

**Descripción**: Implementar autenticación básica con JWT para habilitar la Watchlist personal.

**Criterios de Aceptación**:
- [ ] `POST /auth/register { email, password }` crea usuario y retorna JWT (expiración 7d).
- [ ] `POST /auth/login { email, password }` retorna JWT si las credenciales son correctas.
- [ ] Password almacenado con bcrypt.
- [ ] Email duplicado en registro retorna 409 Conflict.
- [ ] Credenciales incorrectas retornan 401 con mensaje genérico.

**Tareas Técnicas**:
1. Crear `AuthModule` con `AuthService`, `JwtStrategy` y controlador en `backend/src/modules/auth/`.
2. Configurar `JwtModule` con secret desde variables de entorno.
3. Crear tabla `USUARIO` (migración): `id_usuario`, `email` UNIQUE, `password_hash`.
4. Implementar guards y decoradores reutilizables.

---
**User Story de referencia (US-1)**: Como Curioso Cultural, quiero filtrar contenido por duración y mood.
