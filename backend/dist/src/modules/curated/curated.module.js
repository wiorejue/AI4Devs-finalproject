"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuratedModule = void 0;
const common_1 = require("@nestjs/common");
const curated_controller_1 = require("./curated.controller");
const curated_service_1 = require("./curated.service");
let CuratedModule = class CuratedModule {
};
exports.CuratedModule = CuratedModule;
exports.CuratedModule = CuratedModule = __decorate([
    (0, common_1.Module)({
        controllers: [curated_controller_1.CuratedController],
        providers: [curated_service_1.CuratedService],
    })
], CuratedModule);
//# sourceMappingURL=curated.module.js.map