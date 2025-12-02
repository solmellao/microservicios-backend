/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./compartido/dtos/actualizar-producto.dto.ts":
/*!****************************************************!*\
  !*** ./compartido/dtos/actualizar-producto.dto.ts ***!
  \****************************************************/
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
exports.ActualizarProductoDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ActualizarProductoDto {
    nombre;
    precio;
    inventario;
    imagenUrl;
}
exports.ActualizarProductoDto = ActualizarProductoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ActualizarProductoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsNumber)({}, { message: 'El precio debe ser un número' }),
    (0, class_validator_1.IsPositive)({ message: 'El precio debe ser positivo' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ActualizarProductoDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsInt)({ message: 'El inventario debe ser un número entero' }),
    (0, class_validator_1.Min)(0, { message: 'El inventario no puede ser negativo' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ActualizarProductoDto.prototype, "inventario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)({ message: 'La imagen debe ser texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ActualizarProductoDto.prototype, "imagenUrl", void 0);


/***/ }),

/***/ "./compartido/dtos/actualizar-usuario.dto.ts":
/*!***************************************************!*\
  !*** ./compartido/dtos/actualizar-usuario.dto.ts ***!
  \***************************************************/
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
exports.ActualizarUsuarioDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class ActualizarUsuarioDto {
    nombre;
    imagenUrl;
}
exports.ActualizarUsuarioDto = ActualizarUsuarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        example: 'Juan Pérez',
        description: 'Nombre completo del usuario'
    }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ActualizarUsuarioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        example: 'uploads/usuarios/abc-123-def.jpg',
        description: 'URL de la imagen del usuario'
    }),
    (0, class_validator_1.IsString)({ message: 'La imagen debe ser texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ActualizarUsuarioDto.prototype, "imagenUrl", void 0);


/***/ }),

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
__exportStar(__webpack_require__(/*! ./registrar-usuario.dto */ "./compartido/dtos/registrar-usuario.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./producto.dto */ "./compartido/dtos/producto.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./compra.dto */ "./compartido/dtos/compra.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./actualizar-producto.dto */ "./compartido/dtos/actualizar-producto.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./actualizar-usuario.dto */ "./compartido/dtos/actualizar-usuario.dto.ts"), exports);


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
    imagenUrl;
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
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'uploads/productos/abc123.jpg',
        description: 'URL de la imagen del producto',
        required: false
    }),
    (0, class_validator_1.IsString)({ message: 'La imagen debe ser texto' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CrearProductoDto.prototype, "imagenUrl", void 0);
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

/***/ "./compartido/dtos/registrar-usuario.dto.ts":
/*!**************************************************!*\
  !*** ./compartido/dtos/registrar-usuario.dto.ts ***!
  \**************************************************/
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
exports.RegistrarUsuarioDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class RegistrarUsuarioDto {
    nombre;
    correo;
    clave;
}
exports.RegistrarUsuarioDto = RegistrarUsuarioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nombre completo del usuario',
        example: 'Juan Pérez',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegistrarUsuarioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Correo electrónico del usuario',
        example: 'juan@ejemplo.com',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegistrarUsuarioDto.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Contraseña del usuario (mínimo 6 caracteres)',
        example: '123456',
        minLength: 6,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
    __metadata("design:type", String)
], RegistrarUsuarioDto.prototype, "clave", void 0);


/***/ }),

/***/ "./compartido/helpers/image-storage.helper.ts":
/*!****************************************************!*\
  !*** ./compartido/helpers/image-storage.helper.ts ***!
  \****************************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeFile = exports.saveImagesToStorage = void 0;
const multer_1 = __webpack_require__(/*! multer */ "multer");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const fs = __importStar(__webpack_require__(/*! fs */ "fs"));
const path = __importStar(__webpack_require__(/*! path */ "path"));
const validMimeType = ['image/png', 'image/jpg', 'image/jpeg'];
const saveImagesToStorage = (destination) => {
    return {
        storage: (0, multer_1.diskStorage)({
            destination: `./uploads/${destination}`,
            filename: (req, file, callback) => {
                const fileExtension = path.extname(file.originalname);
                const filename = (0, uuid_1.v4)() + fileExtension;
                callback(null, filename);
            },
        }),
        fileFilter: (req, file, callback) => {
            const allowedMimeTypes = validMimeType;
            allowedMimeTypes.includes(file.mimetype)
                ? callback(null, true)
                : callback(null, false);
        },
    };
};
exports.saveImagesToStorage = saveImagesToStorage;
const removeFile = (fullFilePath) => {
    try {
        fs.unlinkSync(fullFilePath);
    }
    catch (e) {
        console.error(new Date(), e);
    }
};
exports.removeFile = removeFile;


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
var _a, _b, _c;
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
    async iniciarSesion(dto) {
        const resultado = await this.servicioAcceso.iniciarSesion(dto);
        return {
            token: resultado.tokenAcceso,
            usuario: resultado.usuario,
        };
    }
    async registrarse(dto) {
        const usuario = await this.servicioAcceso.registrarUsuario(dto);
        return {
            mensaje: 'Usuario registrado exitosamente',
            usuario: {
                id: usuario.id,
                correo: usuario.correo,
                nombre: usuario.nombre,
                rol: usuario.rol,
            },
        };
    }
};
exports.ControladorAcceso = ControladorAcceso;
__decorate([
    (0, common_1.Post)('iniciar-sesion'),
    (0, swagger_1.ApiOperation)({
        summary: 'Iniciar sesión en el sistema',
        description: 'Autentica un usuario con correo y contraseña, devuelve un token JWT'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Login exitoso',
        schema: {
            example: {
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                usuario: {
                    id: 1,
                    correo: 'admin@tienda.com',
                    nombre: 'Administrador',
                    rol: 'ADMIN'
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Credenciales incorrectas' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dtos_1.IniciarSesionDto !== "undefined" && dtos_1.IniciarSesionDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ControladorAcceso.prototype, "iniciarSesion", null);
__decorate([
    (0, common_1.Post)('registrarse'),
    (0, swagger_1.ApiOperation)({
        summary: 'Registrar un nuevo usuario',
        description: 'Crea una cuenta nueva de usuario en el sistema'
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Usuario creado exitosamente',
        schema: {
            example: {
                mensaje: 'Usuario registrado exitosamente',
                usuario: {
                    id: 3,
                    correo: 'nuevo@tienda.com',
                    nombre: 'Nuevo Usuario',
                    rol: 'USUARIO'
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'El correo ya está registrado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dtos_1.RegistrarUsuarioDto !== "undefined" && dtos_1.RegistrarUsuarioDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ControladorAcceso.prototype, "registrarse", null);
exports.ControladorAcceso = ControladorAcceso = __decorate([
    (0, swagger_1.ApiTags)('🔐 Autenticación'),
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicioAcceso = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let ServicioAcceso = class ServicioAcceso {
    clienteAutenticacion;
    constructor(clienteAutenticacion) {
        this.clienteAutenticacion = clienteAutenticacion;
    }
    async iniciarSesion(dto) {
        try {
            const resultado = await (0, rxjs_1.firstValueFrom)(this.clienteAutenticacion.send({ cmd: 'iniciar-sesion' }, { correo: dto.correo, clave: dto.clave }));
            return resultado;
        }
        catch (error) {
            console.error('Error en iniciar sesión:', error);
            throw error;
        }
    }
    async registrarUsuario(dto) {
        try {
            const usuario = await (0, rxjs_1.firstValueFrom)(this.clienteAutenticacion.send({ cmd: 'registrar-usuario' }, {
                nombre: dto.nombre,
                correo: dto.correo,
                clave: dto.clave,
            }));
            return usuario;
        }
        catch (error) {
            console.error('Error en registro de usuario:', error);
            throw error;
        }
    }
};
exports.ServicioAcceso = ServicioAcceso;
exports.ServicioAcceso = ServicioAcceso = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SERVICIO_AUTENTICACION')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GuardiaJwt = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let GuardiaJwt = class GuardiaJwt {
    jwtService;
    configService;
    constructor(jwtService, configService) {
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extraerToken(request);
        if (!token) {
            throw new common_1.UnauthorizedException('Token no proporcionado');
        }
        try {
            const secret = this.configService.get('SECRETO_JWT') || 'clave-super-secreta-cambiar-en-produccion';
            const payload = this.jwtService.verify(token, { secret });
            request.user = {
                id: payload.id,
                idUsuario: payload.id,
                correo: payload.correo,
                nombre: payload.nombre,
                rol: payload.rol,
            };
            console.log('✅ Usuario autenticado:', request.user);
            return true;
        }
        catch (error) {
            console.error('❌ Error al verificar token:', error.message);
            throw new common_1.UnauthorizedException('Token inválido o expirado');
        }
    }
    extraerToken(request) {
        const authHeader = request.headers?.authorization;
        if (!authHeader) {
            return null;
        }
        const [type, token] = authHeader.split(' ');
        return type === 'Bearer' ? token : null;
    }
};
exports.GuardiaJwt = GuardiaJwt;
exports.GuardiaJwt = GuardiaJwt = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], GuardiaJwt);


/***/ }),

/***/ "./servicios/puerta-enlace/src/controladores/pe.carrito.controller.ts":
/*!****************************************************************************!*\
  !*** ./servicios/puerta-enlace/src/controladores/pe.carrito.controller.ts ***!
  \****************************************************************************/
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
        const idUsuario = solicitud.user.id || solicitud.user.idUsuario;
        console.log('🛒 Usuario finalizando compra:', idUsuario);
        console.log('📦 Artículos recibidos:', body.articulos);
        const montoTotal = body.articulos.reduce((suma, art) => suma + (art.precio * art.cantidad), 0);
        const datosPedido = {
            idUsuario: idUsuario,
            montoTotal: montoTotal,
            articulos: body.articulos.map(art => ({
                idProducto: art.idProducto,
                nombreProducto: art.nombreProducto,
                cantidad: art.cantidad,
                precioAlMomentoCompra: art.precio,
            })),
        };
        console.log('📋 Enviando pedido a crear:', datosPedido);
        const nuevoPedido = await (0, rxjs_1.firstValueFrom)(this.clientePedidos.send({ cmd: 'crear_pedido' }, datosPedido));
        console.log('✅ Pedido creado:', nuevoPedido);
        try {
            await (0, rxjs_1.firstValueFrom)(this.clienteCatalogo.send({ cmd: 'confirmar_compra' }, {
                articulos: body.articulos.map(art => ({
                    idProducto: art.idProducto,
                    cantidad: art.cantidad
                }))
            }).pipe((0, rxjs_1.timeout)(5000))).catch(() => {
                console.log('⚠️ Catálogo no respondió, pero el pedido se creó');
            });
        }
        catch (error) {
            console.log('⚠️ Error al actualizar catálogo:', error.message);
        }
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

/***/ "./servicios/puerta-enlace/src/controladores/pe.pedidos.controller.ts":
/*!****************************************************************************!*\
  !*** ./servicios/puerta-enlace/src/controladores/pe.pedidos.controller.ts ***!
  \****************************************************************************/
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
const jwt_guardia_1 = __webpack_require__(/*! ../acceso/jwt.guardia */ "./servicios/puerta-enlace/src/acceso/jwt.guardia.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let ControladorPedidos = class ControladorPedidos {
    clientePedidos;
    clienteAutenticacion;
    constructor(clientePedidos, clienteAutenticacion) {
        this.clientePedidos = clientePedidos;
        this.clienteAutenticacion = clienteAutenticacion;
    }
    async obtenerPedidos(req) {
        try {
            const usuario = req.user;
            console.log('Usuario solicitando pedidos:', {
                id: usuario.id,
                correo: usuario.correo,
                rol: usuario.rol
            });
            const pedidos = await (0, rxjs_1.firstValueFrom)(this.clientePedidos.send({ cmd: 'obtener-pedidos' }, {}));
            console.log(`Total de pedidos en sistema: ${pedidos.length}`);
            if (usuario.rol === 'ADMIN') {
                console.log('Usuario es ADMIN - devolviendo todos los pedidos');
                const pedidosConUsuarios = await Promise.all(pedidos.map(async (pedido) => {
                    try {
                        const usuarioPedido = await (0, rxjs_1.firstValueFrom)(this.clienteAutenticacion.send({ cmd: 'obtener-usuario-por-id' }, { id: pedido.idUsuario }));
                        return {
                            ...pedido,
                            usuario: {
                                id: usuarioPedido.id,
                                nombre: usuarioPedido.nombre,
                                correo: usuarioPedido.correo,
                            },
                        };
                    }
                    catch (error) {
                        console.error(`Error al obtener usuario ${pedido.idUsuario}:`, error);
                        return {
                            ...pedido,
                            usuario: null,
                        };
                    }
                }));
                return pedidosConUsuarios;
            }
            console.log(`Usuario normal (ID: ${usuario.id}) - filtrando sus pedidos`);
            const pedidosUsuario = pedidos.filter((pedido) => String(pedido.idUsuario) === String(usuario.id));
            console.log(`Pedidos del usuario ${usuario.id}: ${pedidosUsuario.length}`);
            return pedidosUsuario;
        }
        catch (error) {
            console.error('Error al obtener pedidos:', error);
            throw error;
        }
    }
};
exports.ControladorPedidos = ControladorPedidos;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener pedidos',
        description: 'Admin ve todos los pedidos, Usuario ve solo los suyos'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de pedidos' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'No autorizado' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ControladorPedidos.prototype, "obtenerPedidos", null);
exports.ControladorPedidos = ControladorPedidos = __decorate([
    (0, swagger_1.ApiTags)('🧾 Pedidos'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseGuards)(jwt_guardia_1.GuardiaJwt),
    (0, common_1.Controller)('pedidos'),
    __param(0, (0, common_1.Inject)('SERVICIO_PEDIDOS')),
    __param(1, (0, common_1.Inject)('SERVICIO_AUTENTICACION')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object])
], ControladorPedidos);


/***/ }),

/***/ "./servicios/puerta-enlace/src/controladores/pe.productos.controller.ts":
/*!******************************************************************************!*\
  !*** ./servicios/puerta-enlace/src/controladores/pe.productos.controller.ts ***!
  \******************************************************************************/
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
const jwt_guardia_1 = __webpack_require__(/*! ../acceso/jwt.guardia */ "./servicios/puerta-enlace/src/acceso/jwt.guardia.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const dtos_1 = __webpack_require__(/*! @compartido/dtos */ "./compartido/dtos/index.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let ControladorProductos = class ControladorProductos {
    clienteCatalogo;
    constructor(clienteCatalogo) {
        this.clienteCatalogo = clienteCatalogo;
    }
    async obtenerTodos() {
        return this.clienteCatalogo
            .send({ cmd: 'obtener_todos_productos' }, {})
            .pipe((0, rxjs_1.catchError)((rpcError) => {
            const { statusCode = 500, error } = rpcError;
            throw new common_1.HttpException(error ?? rpcError, statusCode);
        }));
    }
    async crear(dto) {
        return this.clienteCatalogo
            .send({ cmd: 'crear_producto' }, dto)
            .pipe((0, rxjs_1.catchError)((rpcError) => {
            const { statusCode = 500, error } = rpcError;
            throw new common_1.HttpException(error ?? rpcError, statusCode);
        }));
    }
};
exports.ControladorProductos = ControladorProductos;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ControladorProductos.prototype, "obtenerTodos", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_guardia_1.GuardiaJwt),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dtos_1.CrearProductoDto !== "undefined" && dtos_1.CrearProductoDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ControladorProductos.prototype, "crear", null);
exports.ControladorProductos = ControladorProductos = __decorate([
    (0, swagger_1.ApiTags)('Productos'),
    (0, common_1.Controller)('productos'),
    __param(0, (0, common_1.Inject)('SERVICIO_CATALOGO')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], ControladorProductos);


/***/ }),

/***/ "./servicios/puerta-enlace/src/controladores/pe.usuario.controller.ts":
/*!****************************************************************************!*\
  !*** ./servicios/puerta-enlace/src/controladores/pe.usuario.controller.ts ***!
  \****************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControladorUsuario = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const jwt_guardia_1 = __webpack_require__(/*! ../acceso/jwt.guardia */ "./servicios/puerta-enlace/src/acceso/jwt.guardia.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const image_storage_helper_1 = __webpack_require__(/*! @compartido/helpers/image-storage.helper */ "./compartido/helpers/image-storage.helper.ts");
const path = __importStar(__webpack_require__(/*! path */ "path"));
const rxjs_2 = __webpack_require__(/*! rxjs */ "rxjs");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let ControladorUsuario = class ControladorUsuario {
    clienteAutenticacion;
    constructor(clienteAutenticacion) {
        this.clienteAutenticacion = clienteAutenticacion;
    }
    async obtenerPerfil(req) {
        return this.clienteAutenticacion
            .send({ cmd: 'obtener_usuario_por_id' }, req.user.id)
            .pipe((0, rxjs_1.catchError)((rpcError) => {
            const { statusCode = 500, error } = rpcError;
            throw new common_1.HttpException(error ?? rpcError, statusCode);
        }));
    }
    async actualizarPerfil(req, dto, file) {
        try {
            if (file) {
                const usuarioActual = await (0, rxjs_2.firstValueFrom)(this.clienteAutenticacion.send({ cmd: 'obtener_usuario_por_id' }, req.user.id));
                if (usuarioActual.imagenUrl && !usuarioActual.imagenUrl.startsWith('http')) {
                    const oldImagePath = path.join(process.cwd(), usuarioActual.imagenUrl);
                    (0, image_storage_helper_1.removeFile)(oldImagePath);
                }
                dto.imagenUrl = `uploads/usuarios/${file.filename}`;
            }
            return this.clienteAutenticacion
                .send({ cmd: 'actualizar_usuario' }, { id: req.user.id, dto })
                .pipe((0, rxjs_1.catchError)((rpcError) => {
                if (file) {
                    const fullPath = path.join(process.cwd(), 'uploads', 'usuarios', file.filename);
                    (0, image_storage_helper_1.removeFile)(fullPath);
                }
                const { statusCode = 500, error } = rpcError;
                throw new common_1.HttpException(error ?? rpcError, statusCode);
            }));
        }
        catch (error) {
            if (file) {
                const fullPath = path.join(process.cwd(), 'uploads', 'usuarios', file.filename);
                (0, image_storage_helper_1.removeFile)(fullPath);
            }
            throw error;
        }
    }
    async cambiarClave(req, dto) {
        return this.clienteAutenticacion
            .send({ cmd: 'cambiar_clave' }, {
            id: req.user.id,
            claveActual: dto.claveActual,
            claveNueva: dto.claveNueva,
        })
            .pipe((0, rxjs_1.catchError)((rpcError) => {
            const { statusCode = 500, error } = rpcError;
            throw new common_1.HttpException(error ?? rpcError, statusCode);
        }));
    }
};
exports.ControladorUsuario = ControladorUsuario;
__decorate([
    (0, common_1.Get)('perfil'),
    (0, common_1.UseGuards)(jwt_guardia_1.GuardiaJwt),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ControladorUsuario.prototype, "obtenerPerfil", null);
__decorate([
    (0, common_1.Put)('perfil'),
    (0, common_1.UseGuards)(jwt_guardia_1.GuardiaJwt),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imagen', (0, image_storage_helper_1.saveImagesToStorage)('usuarios'))),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, typeof (_c = typeof Express !== "undefined" && (_b = Express.Multer) !== void 0 && _b.File) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ControladorUsuario.prototype, "actualizarPerfil", null);
__decorate([
    (0, common_1.Put)('cambiar-clave'),
    (0, common_1.UseGuards)(jwt_guardia_1.GuardiaJwt),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ControladorUsuario.prototype, "cambiarClave", null);
exports.ControladorUsuario = ControladorUsuario = __decorate([
    (0, swagger_1.ApiTags)('Usuario'),
    (0, common_1.Controller)('usuario'),
    __param(0, (0, common_1.Inject)('SERVICIO_AUTENTICACION')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], ControladorUsuario);


/***/ }),

/***/ "./servicios/puerta-enlace/src/controladores/pe.usuario.module.ts":
/*!************************************************************************!*\
  !*** ./servicios/puerta-enlace/src/controladores/pe.usuario.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModuloUsuarios = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const pe_usuario_controller_1 = __webpack_require__(/*! ./pe.usuario.controller */ "./servicios/puerta-enlace/src/controladores/pe.usuario.controller.ts");
let ModuloUsuarios = class ModuloUsuarios {
};
exports.ModuloUsuarios = ModuloUsuarios;
exports.ModuloUsuarios = ModuloUsuarios = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('SECRETO_JWT') || 'clave-super-secreta-cambiar-en-produccion',
                    signOptions: {
                        expiresIn: '24h',
                    },
                }),
            }),
            microservices_1.ClientsModule.register([
                {
                    name: 'SERVICIO_AUTENTICACION',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: process.env.HOST_AUTENTICACION || '127.0.0.1',
                        port: parseInt(process.env.PUERTO_AUTENTICACION || '5001', 10),
                    },
                },
            ]),
        ],
        controllers: [pe_usuario_controller_1.ControladorUsuario],
        providers: [],
    })
], ModuloUsuarios);


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
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const acceso_module_1 = __webpack_require__(/*! ./acceso/acceso.module */ "./servicios/puerta-enlace/src/acceso/acceso.module.ts");
const pe_productos_controller_1 = __webpack_require__(/*! ./controladores/pe.productos.controller */ "./servicios/puerta-enlace/src/controladores/pe.productos.controller.ts");
const pe_carrito_controller_1 = __webpack_require__(/*! ./controladores/pe.carrito.controller */ "./servicios/puerta-enlace/src/controladores/pe.carrito.controller.ts");
const pe_pedidos_controller_1 = __webpack_require__(/*! ./controladores/pe.pedidos.controller */ "./servicios/puerta-enlace/src/controladores/pe.pedidos.controller.ts");
const pe_usuario_module_1 = __webpack_require__(/*! ./controladores/pe.usuario.module */ "./servicios/puerta-enlace/src/controladores/pe.usuario.module.ts");
const pe_usuario_controller_1 = __webpack_require__(/*! ./controladores/pe.usuario.controller */ "./servicios/puerta-enlace/src/controladores/pe.usuario.controller.ts");
let ModuloPuertaEnlace = class ModuloPuertaEnlace {
};
exports.ModuloPuertaEnlace = ModuloPuertaEnlace;
exports.ModuloPuertaEnlace = ModuloPuertaEnlace = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            platform_express_1.MulterModule.register({
                dest: './uploads',
            }),
            acceso_module_1.ModuloAcceso,
            pe_usuario_module_1.ModuloUsuarios,
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
            pe_productos_controller_1.ControladorProductos,
            pe_carrito_controller_1.ControladorCarrito,
            pe_pedidos_controller_1.ControladorPedidos,
            pe_usuario_controller_1.ControladorUsuario,
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

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const puerta_enlace_module_1 = __webpack_require__(/*! ./puerta-enlace.module */ "./servicios/puerta-enlace/src/puerta-enlace.module.ts");
const path_1 = __webpack_require__(/*! path */ "path");
async function iniciar() {
    const app = await core_1.NestFactory.create(puerta_enlace_module_1.ModuloPuertaEnlace);
    app.enableCors({
        origin: process.env.ORIGEN_CORS || 'http://localhost:5173',
        credentials: true,
    });
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', '..', '..', 'uploads'), {
        prefix: '/uploads/',
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API de Tienda con Microservicios')
        .setDescription(`
API REST para sistema de comercio electrónico con arquitectura de microservicios.

CREDENCIALES DE PRUEBA:
- Admin: admin@tienda.com / 123456
- Usuario: usuario@tienda.com / 123456

AUTENTICACIÓN:
1. POST /acceso/iniciar-sesion con correo y clave
2. Copiar el token de la respuesta
3. Click en "Authorize" y pegar el token
4. Usar los endpoints protegidos

ARQUITECTURA:
- Servicio de Autenticación: Puerto 5001 (PostgreSQL)
- Servicio de Catálogo: Puerto 5002 (MySQL)  
- Servicio de Pedidos: Puerto 5003 (MongoDB)
- API Gateway: Puerto 4000 (Este servidor)

ENDPOINTS PRINCIPALES:
- POST /acceso/iniciar-sesion - Iniciar sesión
- GET /productos - Listar productos
- POST /productos - Crear producto (Admin)
- POST /carrito/agregar - Agregar al carrito
- POST /carrito/finalizar-compra - Crear pedido
- GET /pedidos - Ver pedidos
    `)
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Token JWT (sin "Bearer")',
        in: 'header',
    }, 'JWT-auth')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document, {
        customSiteTitle: 'API Tienda',
        customCss: '.swagger-ui .topbar { display: none; }',
        swaggerOptions: {
            persistAuthorization: true,
            docExpansion: 'list',
        },
    });
    const puerto = process.env.PUERTO_GATEWAY || 4000;
    await app.listen(puerto);
    console.log(`\n🚀 Gateway corriendo en: http://localhost:${puerto}`);
    console.log(`🎨 Documentación bonita: http://localhost:${puerto}`);
    console.log(`📚 Swagger: http://localhost:${puerto}/api\n`);
}
iniciar();

})();

/******/ })()
;