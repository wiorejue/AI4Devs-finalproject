"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Iniciando Seeding del Catálogo Cultural...');
    const youtube = await prisma.plataformaOrigen.upsert({
        where: { nombre: 'YouTube' },
        update: {},
        create: {
            nombre: 'YouTube',
            url_base: 'https://youtube.com',
            permite_iframe: true,
            logo_url: 'https://cdn.pixabay.com/photo/2016/07/03/18/48/youtube-1495277_960_720.png',
        },
    });
    const mubi = await prisma.plataformaOrigen.upsert({
        where: { nombre: 'MUBI' },
        update: {},
        create: {
            nombre: 'MUBI',
            url_base: 'https://mubi.com',
            permite_iframe: false,
            logo_url: 'https://images.mubi.com/favicon.ico',
        },
    });
    const vimeo = await prisma.plataformaOrigen.upsert({
        where: { nombre: 'Vimeo' },
        update: {},
        create: {
            nombre: 'Vimeo',
            url_base: 'https://vimeo.com',
            permite_iframe: true,
            logo_url: 'https://vimeo.com/favicon.ico',
        },
    });
    const obras = [
        {
            titulo: 'Symphony No. 5 - Fragmento',
            director: 'Beethoven Academy',
            duracion_min: 8,
            vibe_mood: 'Inspirador',
            eje_vertical: client_1.EjeVertical.STAGE,
            estado_acceso: client_1.EstadoAcceso.ABIERTO,
            plataforma_id: youtube.id,
            url_contenido: 'https://www.youtube.com/watch?v=vcBn04IyELc',
        },
        {
            titulo: 'La Jetée',
            director: 'Chris Marker',
            duracion_min: 28,
            vibe_mood: 'Melancólico',
            eje_vertical: client_1.EjeVertical.SHORT_LIST,
            estado_acceso: client_1.EstadoAcceso.SUSCRIPCION,
            plataforma_id: mubi.id,
            url_contenido: 'https://mubi.com/films/la-jetee',
        },
        {
            titulo: 'Jazz in Paris - Live Fragment',
            director: 'Lidr Collective',
            duracion_min: 12,
            vibe_mood: 'Dinámico',
            eje_vertical: client_1.EjeVertical.STAGE,
            estado_acceso: client_1.EstadoAcceso.ABIERTO,
            plataforma_id: youtube.id,
            url_contenido: 'https://www.youtube.com/watch?v=example1',
        },
        {
            titulo: 'Caryatid - Experimental Short',
            director: 'Anna Pavlova',
            duracion_min: 5,
            vibe_mood: 'Contemplativo',
            eje_vertical: client_1.EjeVertical.SHORT_LIST,
            estado_acceso: client_1.EstadoAcceso.ABIERTO,
            plataforma_id: vimeo.id,
            url_contenido: 'https://vimeo.com/839420',
        },
        {
            titulo: 'Metropolis (Restored)',
            director: 'Fritz Lang',
            duracion_min: 153,
            vibe_mood: 'Inspirador',
            eje_vertical: client_1.EjeVertical.CINEMA,
            estado_acceso: client_1.EstadoAcceso.VOD,
            plataforma_id: mubi.id,
            url_contenido: 'https://mubi.com/films/metropolis',
        },
        {
            titulo: 'The Great Dictator',
            director: 'Charlie Chaplin',
            duracion_min: 125,
            vibe_mood: 'Dinámico',
            eje_vertical: client_1.EjeVertical.CINEMA,
            estado_acceso: client_1.EstadoAcceso.ABIERTO,
            plataforma_id: youtube.id,
            url_contenido: 'https://www.youtube.com/watch?v=example2',
        },
        {
            titulo: 'Zen Garden Meditation',
            director: 'Kyoto Films',
            duracion_min: 15,
            vibe_mood: 'Contemplativo',
            eje_vertical: client_1.EjeVertical.SHORT_LIST,
            estado_acceso: client_1.EstadoAcceso.ABIERTO,
            plataforma_id: youtube.id,
            url_contenido: 'https://www.youtube.com/watch?v=example3',
        },
        {
            titulo: 'Flamenco Night - Seville',
            director: 'Andalucía Cultural',
            duracion_min: 45,
            vibe_mood: 'Dinámico',
            eje_vertical: client_1.EjeVertical.STAGE,
            estado_acceso: client_1.EstadoAcceso.SUSCRIPCION,
            plataforma_id: vimeo.id,
            url_contenido: 'https://vimeo.com/example4',
        },
        {
            titulo: 'Stare into the Abyss',
            director: 'Nietzschean Visions',
            duracion_min: 3,
            vibe_mood: 'Melancólico',
            eje_vertical: client_1.EjeVertical.SHORT_LIST,
            estado_acceso: client_1.EstadoAcceso.ABIERTO,
            plataforma_id: youtube.id,
            url_contenido: 'https://www.youtube.com/watch?v=example5',
        },
        {
            titulo: 'Cinema Paradiso',
            director: 'Giuseppe Tornatore',
            duracion_min: 124,
            vibe_mood: 'Melancólico',
            eje_vertical: client_1.EjeVertical.CINEMA,
            estado_acceso: client_1.EstadoAcceso.SUSCRIPCION,
            plataforma_id: mubi.id,
            url_contenido: 'https://mubi.com/films/cinema-paradiso',
        },
        {
            titulo: 'Bolero de Ravel - Fragmento',
            director: 'Opera de Paris',
            duracion_min: 14,
            vibe_mood: 'Inspirador',
            eje_vertical: client_1.EjeVertical.STAGE,
            estado_acceso: client_1.EstadoAcceso.ABIERTO,
            plataforma_id: youtube.id,
            url_contenido: 'https://www.youtube.com/watch?v=example6',
        },
        {
            titulo: 'The Cabinet of Dr. Caligari',
            director: 'Robert Wiene',
            duracion_min: 71,
            vibe_mood: 'Contemplativo',
            eje_vertical: client_1.EjeVertical.CINEMA,
            estado_acceso: client_1.EstadoAcceso.ABIERTO,
            plataforma_id: vimeo.id,
            url_contenido: 'https://vimeo.com/example7',
        },
    ];
    for (const obra of obras) {
        await prisma.obra.upsert({
            where: { id: `seed-${obra.titulo.toLowerCase().replace(/ /g, '-')}` },
            update: {},
            create: {
                id: `seed-${obra.titulo.toLowerCase().replace(/ /g, '-')}`,
                ...obra,
            },
        });
    }
    console.log('✅ Seeding completado con éxito. 12 obras cargadas.');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map