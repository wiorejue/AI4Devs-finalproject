// Servicios para consumir el API Gateway del backend latearte
// Aquí irán los clientes HTTP (fetch/axios) para cada dominio

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
