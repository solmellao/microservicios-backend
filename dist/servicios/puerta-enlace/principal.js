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

/***/ "./servicios/puerta-enlace/src/acceso/acceso.controller.ts":
/*!*****************************************************************!*\
  !*** ./servicios/puerta-enlace/src/acceso/acceso.controller.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControladorAcceso = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const acceso_service_1 = __webpack_require__(/*! ./acceso.service */ "./servicios/puerta-enlace/src/acceso/acceso.service.ts");
const dtos_1 = __webpack_require__(/*! @compartido/dtos */ "./compartido/dtos/index.ts");
let ControladorAcceso = class ControladorAcceso {
    servicioAcceso;
    constructor(servicioAcceso) {
        this.servicioAcceso = servicioAcceso;
    }
    async iniciarSesion(datos) {
        const usuario = await this.servicioAcceso.validarUsuario(datos);
        return this.servicioAcceso.generarToken(usuario);
    }
};
exports.ControladorAcceso = ControladorAcceso;
__decorate([
    (0, common_1.Post)('iniciar-sesion'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Iniciar sesión en el sistema' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Inicio de sesión exitoso. Retorna token JWT.'
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Credenciales inválidas.'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dtos_1.IniciarSesionDto !== "undefined" && dtos_1.IniciarSesionDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ControladorAcceso.prototype, "iniciarSesion", null);
exports.ControladorAcceso = ControladorAcceso = __decorate([
    (0, swagger_1.ApiTags)('Autenticación'),
    (0, common_1.Controller)('acceso'),
    __metadata("design:paramtypes", [typeof (_a = typeof acceso_service_1.ServicioAcceso !== "undefined" && acceso_service_1.ServicioAcceso) === "function" ? _a : Object])
], ControladorAcceso);


/***/ }),

/***/ "./servicios/puerta-enlace/src/acceso/acceso.module.ts":
/*!*************************************************************!*\
  !*** ./servicios/puerta-enlace/src/acceso/acceso.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModuloAcceso = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const acceso_controller_1 = __webpack_require__(/*! ./acceso.controller */ "./servicios/puerta-enlace/src/acceso/acceso.controller.ts");
const acceso_service_1 = __webpack_require__(/*! ./acceso.service */ "./servicios/puerta-enlace/src/acceso/acceso.service.ts");
const jwt_estrategia_1 = __webpack_require__(/*! ./jwt.estrategia */ "./servicios/puerta-enlace/src/acceso/jwt.estrategia.ts");
let ModuloAcceso = class ModuloAcceso {
};
exports.ModuloAcceso = ModuloAcceso;
exports.ModuloAcceso = ModuloAcceso = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configuracion) => ({
                    secret: configuracion.get('SECRETO_JWT'),
                    signOptions: { expiresIn: '60m' },
                }),
                inject: [config_1.ConfigService],
            }),
            microservices_1.ClientsModule.register([
                {
                    name: 'SERVICIO_AUTENTICACION',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: process.env.HOST_AUTENTICACION || '127.0.0.1',
                        port: parseInt(process.env.PUERTO_AUTENTICACION || '5001', 10)
                    },
                },
            ]),
        ],
        controllers: [acceso_controller_1.ControladorAcceso],
        providers: [acceso_service_1.ServicioAcceso, jwt_estrategia_1.EstrategiaJwt],
        exports: [acceso_service_1.ServicioAcceso, jwt_1.JwtModule, passport_1.PassportModule],
    })
], ModuloAcceso);


/***/ }),

/***/ "./servicios/puerta-enlace/src/acceso/acceso.service.ts":
/*!**************************************************************!*\
  !*** ./servicios/puerta-enlace/src/acceso/acceso.service.ts ***!
  \**************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicioAcceso = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let ServicioAcceso = class ServicioAcceso {
    clienteAutenticacion;
    servicioJwt;
    constructor(clienteAutenticacion, servicioJwt) {
        this.clienteAutenticacion = clienteAutenticacion;
        this.servicioJwt = servicioJwt;
    }
    async validarUsuario(datos) {
        const usuario = await (0, rxjs_1.firstValueFrom)(this.clienteAutenticacion.send({ cmd: 'validar_usuario' }, datos)).catch((error) => {
            console.error('Error al contactar servicio de autenticación:', error);
            throw new common_1.UnauthorizedException('Error al validar credenciales. Intenta nuevamente.');
        });
        if (!usuario) {
            throw new common_1.UnauthorizedException('Correo o contraseña incorrectos');
        }
        return usuario;
    }
    async generarToken(usuario) {
        const cargaUtil = {
            sub: usuario.id,
            correo: usuario.correo,
            rol: usuario.rol
        };
        return {
            tokenAcceso: this.servicioJwt.sign(cargaUtil),
            usuario: {
                id: usuario.id,
                correo: usuario.correo,
                nombre: usuario.nombre,
                rol: usuario.rol
            }
        };
    }
};
exports.ServicioAcceso = ServicioAcceso;
exports.ServicioAcceso = ServicioAcceso = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICIO_AUTENTICACION')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], ServicioAcceso);


/***/ }),

/***/ "./servicios/puerta-enlace/src/acceso/jwt.estrategia.ts":
/*!**************************************************************!*\
  !*** ./servicios/puerta-enlace/src/acceso/jwt.estrategia.ts ***!
  \**************************************************************/
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EstrategiaJwt = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let EstrategiaJwt = class EstrategiaJwt extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(configuracion) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configuracion.get('SECRETO_JWT') || 'mi-super-secreto-jwt-2024',
        });
    }
    async validate(payload) {
        return {
            id: payload.sub,
            correo: payload.correo,
            nombre: payload.nombre,
            rol: payload.rol,
        };
    }
};
exports.EstrategiaJwt = EstrategiaJwt;
exports.EstrategiaJwt = EstrategiaJwt = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], EstrategiaJwt);


/***/ }),

/***/ "./servicios/puerta-enlace/src/acceso/jwt.guardia.ts":
/*!***********************************************************!*\
  !*** ./servicios/puerta-enlace/src/acceso/jwt.guardia.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GuardiaJwt = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let GuardiaJwt = class GuardiaJwt extends (0, passport_1.AuthGuard)('jwt') {
};
exports.GuardiaJwt = GuardiaJwt;
exports.GuardiaJwt = GuardiaJwt = __decorate([
    (0, common_1.Injectable)()
], GuardiaJwt);


/***/ }),

/***/ "./servicios/puerta-enlace/src/controladores/carrito.controller.ts":
/*!*************************************************************************!*\
  !*** ./servicios/puerta-enlace/src/controladores/carrito.controller.ts ***!
  \*************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControladorCarrito = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const jwt_guardia_1 = __webpack_require__(/*! ../acceso/jwt.guardia */ "./servicios/puerta-enlace/src/acceso/jwt.guardia.ts");
let ControladorCarrito = class ControladorCarrito {
    clienteCatalogo;
    clientePedidos;
    constructor(clienteCatalogo, clientePedidos) {
        this.clienteCatalogo = clienteCatalogo;
        this.clientePedidos = clientePedidos;
    }
    async agregarAlCarrito(body, solicitud) {
        const { idUsuario } = solicitud.user;
        const dtoReserva = {
            idProducto: body.idProducto,
            idUsuario: idUsuario,
            cantidad: body.cantidad,
        };
        try {
            const reserva = await (0, rxjs_1.firstValueFrom)(this.clienteCatalogo.send({ cmd: 'crear_reserva' }, dtoReserva));
            return {
                exito: true,
                mensaje: 'Producto agregado al carrito',
                reserva
            };
        }
        catch (error) {
            if (error.message.includes('Stock insuficiente')) {
                throw new common_1.BadRequestException(error.message);
            }
            throw error;
        }
    }
    async finalizarCompra(body, solicitud) {
        const { idUsuario } = solicitud.user;
        const total = body.articulos.reduce((suma, art) => suma + (art.precio * art.cantidad), 0);
        const datosPedido = {
            idUsuario,
            total,
            articulos: body.articulos,
        };
        const nuevoPedido = await (0, rxjs_1.firstValueFrom)(this.clientePedidos.send({ cmd: 'crear_pedido' }, datosPedido));
        await (0, rxjs_1.firstValueFrom)(this.clienteCatalogo.send({ cmd: 'confirmar_compra' }, {
            articulos: body.articulos.map(art => ({
                idProducto: art.idProducto,
                cantidad: art.cantidad
            }))
        }));
        return {
            mensaje: 'Compra completada exitosamente',
            pedido: nuevoPedido
        };
    }
};
exports.ControladorCarrito = ControladorCarrito;
__decorate([
    (0, common_1.Post)('agregar'),
    (0, swagger_1.ApiOperation)({ summary: 'Agregar producto al carrito' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Producto agregado al carrito' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Stock insuficiente' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autenticado' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ControladorCarrito.prototype, "agregarAlCarrito", null);
__decorate([
    (0, common_1.Post)('finalizar-compra'),
    (0, swagger_1.ApiOperation)({ summary: 'Finalizar compra y crear pedido' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Compra completada exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error al procesar la compra' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ControladorCarrito.prototype, "finalizarCompra", null);
exports.ControladorCarrito = ControladorCarrito = __decorate([
    (0, swagger_1.ApiTags)('Carrito'),
    (0, common_1.Controller)('carrito'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guardia_1.GuardiaJwt),
    __param(0, (0, common_1.Inject)('SERVICIO_CATALOGO')),
    __param(1, (0, common_1.Inject)('SERVICIO_PEDIDOS')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object])
], ControladorCarrito);


/***/ }),

/***/ "./servicios/puerta-enlace/src/controladores/pedidos.controller.ts":
/*!*************************************************************************!*\
  !*** ./servicios/puerta-enlace/src/controladores/pedidos.controller.ts ***!
  \*************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControladorPedidos = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const jwt_guardia_1 = __webpack_require__(/*! ../acceso/jwt.guardia */ "./servicios/puerta-enlace/src/acceso/jwt.guardia.ts");
let ControladorPedidos = class ControladorPedidos {
    clientePedidos;
    clienteAutenticacion;
    constructor(clientePedidos, clienteAutenticacion) {
        this.clientePedidos = clientePedidos;
        this.clienteAutenticacion = clienteAutenticacion;
    }
    async obtenerTodosPedidos(solicitud) {
        if (solicitud.user.rol !== 'ADMIN') {
            throw new common_1.UnauthorizedException('Acceso denegado. Se requiere rol de Administrador.');
        }
        const pedidos = await (0, rxjs_1.firstValueFrom)(this.clientePedidos.send({ cmd: 'obtener_todos_pedidos' }, {}));
        const idsUsuarios = [...new Set(pedidos.map((p) => p.idUsuario))];
        const mapaUsuarios = await (0, rxjs_1.firstValueFrom)(this.clienteAutenticacion.send({ cmd: 'obtener_usuarios_por_ids' }, idsUsuarios));
        return pedidos.map((pedido) => {
            const usuario = mapaUsuarios[pedido.idUsuario];
            return {
                ...pedido,
                usuario: usuario || {
                    nombre: 'Desconocido',
                    correo: 'N/A',
                    rol: 'N/A'
                }
            };
        });
    }
};
exports.ControladorPedidos = ControladorPedidos;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guardia_1.GuardiaJwt),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los pedidos (Solo ADMIN)' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de pedidos con información de usuarios' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Prohibido - Requiere rol ADMIN' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ControladorPedidos.prototype, "obtenerTodosPedidos", null);
exports.ControladorPedidos = ControladorPedidos = __decorate([
    (0, swagger_1.ApiTags)('Pedidos'),
    (0, common_1.Controller)('pedidos'),
    __param(0, (0, common_1.Inject)('SERVICIO_PEDIDOS')),
    __param(1, (0, common_1.Inject)('SERVICIO_AUTENTICACION')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object])
], ControladorPedidos);


/***/ }),

/***/ "./servicios/puerta-enlace/src/controladores/productos.controller.ts":
/*!***************************************************************************!*\
  !*** ./servicios/puerta-enlace/src/controladores/productos.controller.ts ***!
  \***************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControladorProductos = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const jwt_guardia_1 = __webpack_require__(/*! ../acceso/jwt.guardia */ "./servicios/puerta-enlace/src/acceso/jwt.guardia.ts");
const dtos_1 = __webpack_require__(/*! @compartido/dtos */ "./compartido/dtos/index.ts");
let ControladorProductos = class ControladorProductos {
    clienteCatalogo;
    constructor(clienteCatalogo) {
        this.clienteCatalogo = clienteCatalogo;
    }
    async obtenerTodos() {
        return (0, rxjs_1.firstValueFrom)(this.clienteCatalogo.send({ cmd: 'obtener_todos_productos' }, {}));
    }
    async crear(crearProductoDto, solicitud) {
        if (solicitud.user.rol !== 'ADMIN') {
            throw new common_1.UnauthorizedException('Acceso denegado. Se requiere rol de Administrador.');
        }
        return (0, rxjs_1.firstValueFrom)(this.clienteCatalogo.send({ cmd: 'crear_producto' }, crearProductoDto));
    }
};
exports.ControladorProductos = ControladorProductos;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los productos del catálogo' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de productos retornada exitosamente' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ControladorProductos.prototype, "obtenerTodos", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guardia_1.GuardiaJwt),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo producto (Solo ADMIN)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Producto creado exitosamente' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado - Token inválido' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Prohibido - Requiere rol ADMIN' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dtos_1.CrearProductoDto !== "undefined" && dtos_1.CrearProductoDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], ControladorProductos.prototype, "crear", null);
exports.ControladorProductos = ControladorProductos = __decorate([
    (0, swagger_1.ApiTags)('Productos'),
    (0, common_1.Controller)('productos'),
    __param(0, (0, common_1.Inject)('SERVICIO_CATALOGO')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], ControladorProductos);


/***/ }),

/***/ "./servicios/puerta-enlace/src/puerta-enlace.module.ts":
/*!*************************************************************!*\
  !*** ./servicios/puerta-enlace/src/puerta-enlace.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModuloPuertaEnlace = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const acceso_module_1 = __webpack_require__(/*! ./acceso/acceso.module */ "./servicios/puerta-enlace/src/acceso/acceso.module.ts");
const productos_controller_1 = __webpack_require__(/*! ./controladores/productos.controller */ "./servicios/puerta-enlace/src/controladores/productos.controller.ts");
const carrito_controller_1 = __webpack_require__(/*! ./controladores/carrito.controller */ "./servicios/puerta-enlace/src/controladores/carrito.controller.ts");
const pedidos_controller_1 = __webpack_require__(/*! ./controladores/pedidos.controller */ "./servicios/puerta-enlace/src/controladores/pedidos.controller.ts");
let ModuloPuertaEnlace = class ModuloPuertaEnlace {
};
exports.ModuloPuertaEnlace = ModuloPuertaEnlace;
exports.ModuloPuertaEnlace = ModuloPuertaEnlace = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            acceso_module_1.ModuloAcceso,
            microservices_1.ClientsModule.register([
                {
                    name: 'SERVICIO_AUTENTICACION',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: process.env.HOST_AUTENTICACION || '127.0.0.1',
                        port: parseInt(process.env.PUERTO_AUTENTICACION || '5001', 10)
                    }
                },
                {
                    name: 'SERVICIO_CATALOGO',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: process.env.HOST_CATALOGO || '127.0.0.1',
                        port: parseInt(process.env.PUERTO_CATALOGO || '5002', 10)
                    }
                },
                {
                    name: 'SERVICIO_PEDIDOS',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: process.env.HOST_PEDIDOS || '127.0.0.1',
                        port: parseInt(process.env.PUERTO_PEDIDOS || '5003', 10)
                    }
                },
            ]),
        ],
        controllers: [
            productos_controller_1.ControladorProductos,
            carrito_controller_1.ControladorCarrito,
            pedidos_controller_1.ControladorPedidos,
        ],
    })
], ModuloPuertaEnlace);


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

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

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

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

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
  !*** ./servicios/puerta-enlace/src/principal.ts ***!
  \**************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const puerta_enlace_module_1 = __webpack_require__(/*! ./puerta-enlace.module */ "./servicios/puerta-enlace/src/puerta-enlace.module.ts");
async function iniciar() {
    const aplicacion = await core_1.NestFactory.create(puerta_enlace_module_1.ModuloPuertaEnlace);
    aplicacion.enableCors({
        origin: process.env.ORIGEN_CORS || 'http://localhost:5173',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    aplicacion.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const configuracionSwagger = new swagger_1.DocumentBuilder()
        .setTitle('API de Tienda con Microservicios')
        .setDescription('Sistema de comercio electrónico con arquitectura de microservicios')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Ingresa tu token JWT aquí'
    })
        .addTag('Autenticación', 'Endpoints para login y registro')
        .addTag('Productos', 'Gestión del catálogo de productos')
        .addTag('Carrito', 'Operaciones del carrito de compras')
        .addTag('Pedidos', 'Consulta de pedidos realizados')
        .build();
    const documento = swagger_1.SwaggerModule.createDocument(aplicacion, configuracionSwagger);
    swagger_1.SwaggerModule.setup('api', aplicacion, documento);
    const puerto = process.env.PUERTO_GATEWAY || 4000;
    await aplicacion.listen(puerto);
    console.log(`\n🚀 Puerta de Enlace corriendo en: http://localhost:${puerto}`);
    console.log(`📚 Documentación Swagger: http://localhost:${puerto}/api\n`);
}
iniciar();

})();

/******/ })()
;