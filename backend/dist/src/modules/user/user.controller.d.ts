import { UserService } from './user.service';
import { AddWatchlistDto } from './dto/add-watchlist.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    addToWatchlist(req: any, addWatchlistDto: AddWatchlistDto): Promise<{
        obra: {
            plataforma: {
                id: string;
                fecha_creacion: Date;
                permite_iframe: boolean;
                activo: boolean;
                fecha_actualizacion: Date;
                nombre: string;
                url_base: string;
                logo_url: string | null;
            };
        } & {
            id: string;
            fecha_creacion: Date;
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
            permite_iframe: boolean;
            eje_vertical: import("@prisma/client").$Enums.EjeVertical;
            estado_acceso: import("@prisma/client").$Enums.EstadoAcceso;
            activo: boolean;
            fecha_actualizacion: Date;
            plataforma_id: string;
        };
    } & {
        id: string;
        notas: string | null;
        fecha_creacion: Date;
        usuario_id: string;
        obra_id: string;
    }>;
    getWatchlist(req: any): Promise<({
        obra: {
            plataforma: {
                nombre: string;
                logo_url: string | null;
            };
        } & {
            id: string;
            fecha_creacion: Date;
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
            permite_iframe: boolean;
            eje_vertical: import("@prisma/client").$Enums.EjeVertical;
            estado_acceso: import("@prisma/client").$Enums.EstadoAcceso;
            activo: boolean;
            fecha_actualizacion: Date;
            plataforma_id: string;
        };
    } & {
        id: string;
        notas: string | null;
        fecha_creacion: Date;
        usuario_id: string;
        obra_id: string;
    })[]>;
}
