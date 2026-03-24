import { PrismaService } from '../../prisma/prisma.service';
import { GetObrasFilterDto } from './dto/get-obras-filter.dto';
export declare class CuratedService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(filters: GetObrasFilterDto): Promise<({
        plataforma: {
            nombre: string;
            logo_url: string | null;
            permite_iframe: boolean;
        };
        hitos: {
            nombre: string;
            anio: number | null;
        }[];
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
    })[]>;
}
