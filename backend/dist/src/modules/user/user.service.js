"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let UserService = class UserService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addToWatchlist(userId, idObra) {
        const obra = await this.prisma.obra.findUnique({
            where: { id: idObra },
        });
        if (!obra) {
            throw new common_1.NotFoundException('La obra no existe');
        }
        return this.prisma.watchlist.upsert({
            where: {
                usuario_id_obra_id: {
                    usuario_id: userId,
                    obra_id: idObra,
                },
            },
            update: {},
            create: {
                usuario_id: userId,
                obra_id: idObra,
            },
            include: {
                obra: {
                    include: {
                        plataforma: true,
                    },
                },
            },
        });
    }
    async getWatchlist(userId) {
        return this.prisma.watchlist.findMany({
            where: { usuario_id: userId },
            include: {
                obra: {
                    include: {
                        plataforma: {
                            select: {
                                nombre: true,
                                logo_url: true,
                            },
                        },
                    },
                },
            },
            orderBy: { fecha_creacion: 'desc' },
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map