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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuratedController = void 0;
const common_1 = require("@nestjs/common");
const curated_service_1 = require("./curated.service");
const get_obras_filter_dto_1 = require("./dto/get-obras-filter.dto");
let CuratedController = class CuratedController {
    curatedService;
    constructor(curatedService) {
        this.curatedService = curatedService;
    }
    async findAll(filters) {
        return this.curatedService.findAll(filters);
    }
};
exports.CuratedController = CuratedController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_obras_filter_dto_1.GetObrasFilterDto]),
    __metadata("design:returntype", Promise)
], CuratedController.prototype, "findAll", null);
exports.CuratedController = CuratedController = __decorate([
    (0, common_1.Controller)('obras'),
    __metadata("design:paramtypes", [curated_service_1.CuratedService])
], CuratedController);
//# sourceMappingURL=curated.controller.js.map