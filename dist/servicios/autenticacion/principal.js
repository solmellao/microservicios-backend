/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./compartido/dtos/compra.dto.ts":
/*!***************************************!*\
  !*** ./compartido/dtos/compra.dto.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProcesarCompraDto = exports.ArticuloCompraDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ArticuloCompraDto {
    idProducto;
    cantidad;
}
exports.ArticuloCompraDto = ArticuloCompraDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'ID del producto'
    }),
    (0, class_validator_1.IsInt)({ message: 'El ID del producto debe ser un número entero' }),
    (0, class_validator_1.IsPositive)({ message: 'El ID del producto debe ser positivo' }),
    __metadata("design:type", Number)
], ArticuloCompraDto.prototype, "idProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2,
        description: 'Cantidad a comprar'
    }),
    (0, class_validator_1.IsInt)({ message: 'La cantidad debe ser un número entero' }),
    (0, class_validator_1.IsPositive)({ message: 'La cantidad debe ser positiva' }),
    __metadata("design:type", Number)
], ArticuloCompraDto.prototype, "cantidad", void 0);
class ProcesarCompraDto {
    articulos;
}
exports.ProcesarCompraDto = ProcesarCompraDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [ArticuloCompraDto],
        description: 'Lista de artículos a comprar'
    }),
    (0, class_validator_1.IsArray)({ message: 'Los artículos deben ser un arreglo' }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ArticuloCompraDto),
    __metadata("design:type", Array)
], ProcesarCompraDto.prototype, "articulos", void 0);


/***/ }),

/***/ "./compartido/dtos/index.ts":
/*!**********************************!*\
  !*** ./compartido/dtos/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./iniciar-sesion.dto */ "./compartido/dtos/iniciar-sesion.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./producto.dto */ "./compartido/dtos/producto.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./compra.dto */ "./compartido/dtos/compra.dto.ts"), exports);


/***/ }),

/***/ "./compartido/dtos/iniciar-sesion.dto.ts":
/*!***********************************************!*\
  !*** ./compartido/dtos/iniciar-sesion.dto.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IniciarSesionDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class IniciarSesionDto {
    correo;
    clave;
}
exports.IniciarSesionDto = IniciarSesionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'usuario@tienda.com',
        description: 'Correo electrónico del usuario'
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'El correo debe ser válido' }),
    __metadata("design:type", String)
], IniciarSesionDto.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '123456',
        description: 'Contraseña del usuario'
    }),
    (0, class_validator_1.IsString)({ message: 'La contraseña debe ser texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La contraseña es obligatoria' }),
    __metadata("design:type", String)
], IniciarSesionDto.prototype, "clave", void 0);


/***/ }),

/***/ "./compartido/dtos/producto.dto.ts":
/*!*****************************************!*\
  !*** ./compartido/dtos/producto.dto.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReservarProductoDto = exports.CrearProductoDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class CrearProductoDto {
    nombre;
    precio;
    inventario;
}
exports.CrearProductoDto = CrearProductoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Laptop HP',
        description: 'Nombre del producto'
    }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser texto' }),
    __metadata("design:type", String)
], CrearProductoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 599.99,
        description: 'Precio del producto en dólares'
    }),
    (0, class_validator_1.IsNumber)({}, { message: 'El precio debe ser un número' }),
    (0, class_validator_1.IsPositive)({ message: 'El precio debe ser positivo' }),
    __metadata("design:type", Number)
], CrearProductoDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 50,
        description: 'Cantidad disponible en inventario'
    }),
    (0, class_validator_1.IsInt)({ message: 'El inventario debe ser un número entero' }),
    (0, class_validator_1.Min)(0, { message: 'El inventario no puede ser negativo' }),
    __metadata("design:type", Number)
], CrearProductoDto.prototype, "inventario", void 0);
class ReservarProductoDto {
    idProducto;
    idUsuario;
    cantidad;
}
exports.ReservarProductoDto = ReservarProductoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'ID del producto a reservar'
    }),
    (0, class_validator_1.IsInt)({ message: 'El ID del producto debe ser un número entero' }),
    (0, class_validator_1.IsPositive)({ message: 'El ID del producto debe ser positivo' }),
    __metadata("design:type", Number)
], ReservarProductoDto.prototype, "idProducto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'ID del usuario que reserva'
    }),
    (0, class_validator_1.IsInt)({ message: 'El ID del usuario debe ser un número entero' }),
    (0, class_validator_1.IsPositive)({ message: 'El ID del usuario debe ser positivo' }),
    __metadata("design:type", Number)
], ReservarProductoDto.prototype, "idUsuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2,
        description: 'Cantidad a reservar'
    }),
    (0, class_validator_1.IsInt)({ message: 'La cantidad debe ser un número entero' }),
    (0, class_validator_1.IsPositive)({ message: 'La cantidad debe ser positiva' }),
    __metadata("design:type", Number)
], ReservarProductoDto.prototype, "cantidad", void 0);


/***/ }),

/***/ "./servicios/autenticacion/src/autenticacion.controller.ts":
/*!*****************************************************************!*\
  !*** ./servicios/autenticacion/src/autenticacion.controller.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControladorAutenticacion = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const autenticacion_service_1 = __webpack_require__(/*! ./autenticacion.service */ "./servicios/autenticacion/src/autenticacion.service.ts");
const dtos_1 = __webpack_require__(/*! @compartido/dtos */ "./compartido/dtos/index.ts");
let ControladorAutenticacion = class ControladorAutenticacion {
    servicioAutenticacion;
    constructor(servicioAutenticacion) {
        this.servicioAutenticacion = servicioAutenticacion;
    }
    async validarUsuario(datos) {
        return this.servicioAutenticacion.validarUsuario(datos);
    }
    async obtenerUsuariosPorIds(ids) {
        return this.servicioAutenticacion.obtenerUsuariosPorIds(ids);
    }
    async crearUsuario(datos) {
        return this.servicioAutenticacion.crearUsuario(datos);
    }
};
exports.ControladorAutenticacion = ControladorAutenticacion;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'validar_usuario' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dtos_1.IniciarSesionDto !== "undefined" && dtos_1.IniciarSesionDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ControladorAutenticacion.prototype, "validarUsuario", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'obtener_usuarios_por_ids' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ControladorAutenticacion.prototype, "obtenerUsuariosPorIds", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'crear_usuario' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ControladorAutenticacion.prototype, "crearUsuario", null);
exports.ControladorAutenticacion = ControladorAutenticacion = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof autenticacion_service_1.ServicioAutenticacion !== "undefined" && autenticacion_service_1.ServicioAutenticacion) === "function" ? _a : Object])
], ControladorAutenticacion);


/***/ }),

/***/ "./servicios/autenticacion/src/autenticacion.module.ts":
/*!*************************************************************!*\
  !*** ./servicios/autenticacion/src/autenticacion.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModuloAutenticacion = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const autenticacion_controller_1 = __webpack_require__(/*! ./autenticacion.controller */ "./servicios/autenticacion/src/autenticacion.controller.ts");
const autenticacion_service_1 = __webpack_require__(/*! ./autenticacion.service */ "./servicios/autenticacion/src/autenticacion.service.ts");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./servicios/autenticacion/src/prisma.service.ts");
let ModuloAutenticacion = class ModuloAutenticacion {
};
exports.ModuloAutenticacion = ModuloAutenticacion;
exports.ModuloAutenticacion = ModuloAutenticacion = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
        ],
        controllers: [autenticacion_controller_1.ControladorAutenticacion],
        providers: [autenticacion_service_1.ServicioAutenticacion, prisma_service_1.ServicioPrisma],
    })
], ModuloAutenticacion);


/***/ }),

/***/ "./servicios/autenticacion/src/autenticacion.service.ts":
/*!**************************************************************!*\
  !*** ./servicios/autenticacion/src/autenticacion.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicioAutenticacion = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./servicios/autenticacion/src/prisma.service.ts");
const bcrypt = __importStar(__webpack_require__(/*! bcrypt */ "bcrypt"));
let ServicioAutenticacion = class ServicioAutenticacion {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async validarUsuario(datos) {
        const { correo, clave } = datos;
        const usuario = await this.prisma.usuario.findUnique({
            where: { correo },
        });
        if (!usuario) {
            return null;
        }
        const claveValida = await bcrypt.compare(clave, usuario.claveHash);
        if (!claveValida) {
            return null;
        }
        const { claveHash, ...datosUsuario } = usuario;
        return datosUsuario;
    }
    async obtenerUsuariosPorIds(ids) {
        const usuarios = await this.prisma.usuario.findMany({
            where: { id: { in: ids } },
            select: {
                id: true,
                correo: true,
                nombre: true,
                rol: true,
            },
        });
        return usuarios.reduce((mapa, usuario) => {
            mapa[usuario.id] = usuario;
            return mapa;
        }, {});
    }
    async crearUsuario(datos) {
        const claveHash = await bcrypt.hash(datos.clave, 10);
        const usuario = await this.prisma.usuario.create({
            data: {
                correo: datos.correo,
                nombre: datos.nombre,
                claveHash,
                rol: datos.rol || 'USUARIO',
            },
        });
        const { claveHash: _, ...usuarioSinClave } = usuario;
        return usuarioSinClave;
    }
};
exports.ServicioAutenticacion = ServicioAutenticacion;
exports.ServicioAutenticacion = ServicioAutenticacion = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.ServicioPrisma !== "undefined" && prisma_service_1.ServicioPrisma) === "function" ? _a : Object])
], ServicioAutenticacion);


/***/ }),

/***/ "./servicios/autenticacion/src/prisma.service.ts":
/*!*******************************************************!*\
  !*** ./servicios/autenticacion/src/prisma.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicioPrisma = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let ServicioPrisma = class ServicioPrisma extends client_1.PrismaClient {
    constructor() {
        super({
            datasources: {
                db: {
                    url: process.env.URL_BD_POSTGRES,
                },
            },
        });
    }
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
};
exports.ServicioPrisma = ServicioPrisma;
exports.ServicioPrisma = ServicioPrisma = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ServicioPrisma);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************************************!*\
  !*** ./servicios/autenticacion/src/principal.ts ***!
  \**************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const autenticacion_module_1 = __webpack_require__(/*! ./autenticacion.module */ "./servicios/autenticacion/src/autenticacion.module.ts");
const registrador = new common_1.Logger('ServicioAutenticacion');
async function iniciar() {
    const puerto = parseInt(process.env.PUERTO_AUTENTICACION ?? '5001', 10);
    const aplicacion = await core_1.NestFactory.createMicroservice(autenticacion_module_1.ModuloAutenticacion, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: '0.0.0.0',
            port: puerto,
        },
    });
    await aplicacion.listen();
    registrador.log(`🔐 Servicio de Autenticación escuchando en puerto ${puerto} (TCP)`);
}
iniciar();

})();

/******/ })()
;