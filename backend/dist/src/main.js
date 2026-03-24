"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET'];
    requiredEnvVars.forEach((v) => {
        if (!process.env[v]) {
            console.error(`❌ CRITICAL ERROR: Environment variable "${v}" is missing!`);
            process.exit(1);
        }
    });
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    const port = process.env.PORT ?? 3001;
    await app.listen(port);
    console.log(`🎨 latearte backend running on http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map