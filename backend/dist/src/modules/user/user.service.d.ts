import { PrismaService } from '../../prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    addToWatchlist(userId: string, idObra: string): Promise<{
        obra: {
            plataforma: {
                id: string;
                nombre: string;
                url_base: string;
                logo_url: string | null;
                permite_iframe: boolean;
                activo: boolean;
                fecha_creacion: Date;
                fecha_actualizacion: Date;
            };
        } & {
            id: string;
            permite_iframe: boolean;
            activo: boolean;
            fecha_creacion: Date;
            fecha_actualizacion: Date;
            titulo: string;
            titulo_original: string | null;
            sinopsis: string | null;
            director: string | null;
            anio: number | null;
            duracion_min: number;
            vibe_mood: string | null;
            valor_cultural: number | null;
            imagen_poster_url: string | null;
            url_contenido: string;
            eje_vertical: import("@prisma/client").$Enums.EjeVertical;
            estado_acceso: import("@prisma/client").$Enums.EstadoAcceso;
            plataforma_id: string;
        };
    } & {
        id: string;
        fecha_creacion: Date;
        obra_id: string;
        notas: string | null;
        usuario_id: string;
    }>;
    getWatchlist(userId: string): Promise<({
        obra: {
            plataforma: {
                nombre: string;
                logo_url: string | null;
            };
        } & {
            id: string;
            permite_iframe: boolean;
            activo: boolean;
            fecha_creacion: Date;
            fecha_actualizacion: Date;
            titulo: string;
            titulo_original: string | null;
            sinopsis: string | null;
            director: string | null;
            anio: number | null;
            duracion_min: number;
            vibe_mood: string | null;
            valor_cultural: number | null;
            imagen_poster_url: string | null;
            url_contenido: string;
            eje_vertical: import("@prisma/client").$Enums.EjeVertical;
            estado_acceso: import("@prisma/client").$Enums.EstadoAcceso;
            plataforma_id: string;
        };
    } & {
        id: string;
        fecha_creacion: Date;
        obra_id: string;
        notas: string | null;
        usuario_id: string;
    })[]>;
}
