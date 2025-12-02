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
var _a, _b, _c;
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
    async iniciarSesion(datos) {
        const usuario = await this.servicioAutenticacion.validarUsuario(datos);
        if (!usuario) {
            throw new Error('Credenciales inválidas');
        }
        const token = await this.servicioAutenticacion.generarToken(usuario);
        return {
            tokenAcceso: token,
            usuario: {
                id: usuario.id,
                correo: usuario.correo,
                nombre: usuario.nombre,
                rol: usuario.rol,
                imagenUrl: usuario.imagenUrl,
            },
        };
    }
    async registrarUsuario(datos) {
        try {
            return await this.servicioAutenticacion.crearUsuario(datos);
        }
        catch (error) {
            const rpcError = {
                statusCode: error.status || 500,
                error: error.message || 'Error al registrar usuario',
            };
            throw new microservices_1.RpcException(rpcError);
        }
    }
    async obtenerUsuarioPorId(id) {
        try {
            return await this.servicioAutenticacion.obtenerUsuarioPorId(id);
        }
        catch (error) {
            const rpcError = {
                statusCode: 404,
                error: error.message || 'Usuario no encontrado',
            };
            throw new microservices_1.RpcException(rpcError);
        }
    }
    async actualizarUsuario(datos) {
        try {
            return await this.servicioAutenticacion.actualizarUsuario(datos.id, datos.dto);
        }
        catch (error) {
            const rpcError = {
                statusCode: error.status || 500,
                error: error.message || 'Error al actualizar usuario',
            };
            throw new microservices_1.RpcException(rpcError);
        }
    }
    async cambiarClave(datos) {
        try {
            await this.servicioAutenticacion.verificarClave(datos.id, datos.claveActual);
            return await this.servicioAutenticacion.cambiarClave(datos.id, datos.claveNueva);
        }
        catch (error) {
            const rpcError = {
                statusCode: error.status || 401,
                error: error.message || 'Error al cambiar contraseña',
            };
            throw new microservices_1.RpcException(rpcError);
        }
    }
    async validarUsuario(datos) {
        try {
            return await this.servicioAutenticacion.validarUsuario(datos);
        }
        catch (error) {
            const rpcError = {
                statusCode: 401,
                error: error.message || 'Credenciales inválidas',
            };
            throw new microservices_1.RpcException(rpcError);
        }
    }
    async obtenerUsuariosPorIds(ids) {
        try {
            return await this.servicioAutenticacion.obtenerUsuariosPorIds(ids);
        }
        catch (error) {
            const rpcError = {
                statusCode: 500,
                error: error.message || 'Error al obtener usuarios',
            };
            throw new microservices_1.RpcException(rpcError);
        }
    }
    async crearUsuario(datos) {
        try {
            return await this.servicioAutenticacion.crearUsuario(datos);
        }
        catch (error) {
            const rpcError = {
                statusCode: error.status || 500,
                error: error.message || 'Error al crear usuario',
            };
            throw new microservices_1.RpcException(rpcError);
        }
    }
};
exports.ControladorAutenticacion = ControladorAutenticacion;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'iniciar-sesion' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dtos_1.IniciarSesionDto !== "undefined" && dtos_1.IniciarSesionDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ControladorAutenticacion.prototype, "iniciarSesion", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'registrar-usuario' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ControladorAutenticacion.prototype, "registrarUsuario", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'obtener_usuario_por_id' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ControladorAutenticacion.prototype, "obtenerUsuarioPorId", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'actualizar_usuario' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ControladorAutenticacion.prototype, "actualizarUsuario", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'cambiar_clave' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ControladorAutenticacion.prototype, "cambiarClave", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'validar_usuario' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dtos_1.IniciarSesionDto !== "undefined" && dtos_1.IniciarSesionDto) === "function" ? _c : Object]),
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
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
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
        ],
        controllers: [autenticacion_controller_1.ControladorAutenticacion],
        providers: [autenticacion_service_1.ServicioAutenticacion, prisma_service_1.ServicioPrisma],
        exports: [autenticacion_service_1.ServicioAutenticacion],
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicioAutenticacion = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./servicios/autenticacion/src/prisma.service.ts");
const bcrypt = __importStar(__webpack_require__(/*! bcrypt */ "bcrypt"));
let ServicioAutenticacion = class ServicioAutenticacion {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async validarUsuario(dto) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { correo: dto.correo },
        });
        if (!usuario) {
            return null;
        }
        const claveValida = await bcrypt.compare(dto.clave, usuario.claveHash);
        if (!claveValida) {
            return null;
        }
        const { claveHash, ...resultado } = usuario;
        return resultado;
    }
    async generarToken(usuario) {
        const payload = {
            id: usuario.id,
            correo: usuario.correo,
            nombre: usuario.nombre,
            rol: usuario.rol,
            imagenUrl: usuario.imagenUrl,
            fechaCreacion: usuario.fechaCreacion,
            fechaActualizacion: usuario.fechaActualizacion,
        };
        return this.jwtService.sign(payload);
    }
    async crearUsuario(dto) {
        const usuarioExistente = await this.prisma.usuario.findUnique({
            where: { correo: dto.correo },
        });
        if (usuarioExistente) {
            throw new common_1.ConflictException('El correo ya está registrado');
        }
        const claveHash = await bcrypt.hash(dto.clave, 10);
        const usuario = await this.prisma.usuario.create({
            data: {
                correo: dto.correo,
                nombre: dto.nombre,
                claveHash,
                rol: dto.rol || 'USUARIO',
                imagenUrl: dto.imagenUrl || null,
            },
            select: {
                id: true,
                correo: true,
                nombre: true,
                rol: true,
                imagenUrl: true,
                fechaCreacion: true,
                fechaActualizacion: true,
            },
        });
        return usuario;
    }
    async obtenerUsuarioPorId(id) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id },
            select: {
                id: true,
                correo: true,
                nombre: true,
                rol: true,
                imagenUrl: true,
                fechaCreacion: true,
                fechaActualizacion: true,
            },
        });
        if (!usuario) {
            throw new common_1.NotFoundException('Usuario no encontrado');
        }
        return usuario;
    }
    async obtenerUsuariosPorIds(ids) {
        if (!ids || ids.length === 0) {
            return [];
        }
        return this.prisma.usuario.findMany({
            where: {
                id: { in: ids },
            },
            select: {
                id: true,
                correo: true,
                nombre: true,
                rol: true,
                imagenUrl: true,
                fechaCreacion: true,
                fechaActualizacion: true,
            },
        });
    }
    async actualizarUsuario(id, datos) {
        await this.obtenerUsuarioPorId(id);
        const actualizado = await this.prisma.usuario.update({
            where: { id },
            data: {
                nombre: datos.nombre !== undefined ? datos.nombre : undefined,
                imagenUrl: datos.imagenUrl !== undefined ? datos.imagenUrl : undefined,
            },
            select: {
                id: true,
                correo: true,
                nombre: true,
                rol: true,
                imagenUrl: true,
                fechaCreacion: true,
                fechaActualizacion: true,
            },
        });
        return actualizado;
    }
    async verificarClave(id, clave) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id },
        });
        if (!usuario) {
            throw new common_1.NotFoundException('Usuario no encontrado');
        }
        const esValida = await bcrypt.compare(clave, usuario.claveHash);
        if (!esValida) {
            throw new common_1.UnauthorizedException('Contraseña actual incorrecta');
        }
        return true;
    }
    async cambiarClave(id, claveNueva) {
        const hash = await bcrypt.hash(claveNueva, 10);
        await this.prisma.usuario.update({
            where: { id },
            data: {
                claveHash: hash,
            },
        });
        return { mensaje: 'Contraseña actualizada correctamente' };
    }
};
exports.ServicioAutenticacion = ServicioAutenticacion;
exports.ServicioAutenticacion = ServicioAutenticacion = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.ServicioPrisma !== "undefined" && prisma_service_1.ServicioPrisma) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], ServicioAutenticacion);


/***/ }),

/***/ "./servicios/autenticacion/src/principal.ts":
/*!**************************************************!*\
  !*** ./servicios/autenticacion/src/principal.ts ***!
  \**************************************************/
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
const dotenv = __importStar(__webpack_require__(/*! dotenv */ "dotenv"));
dotenv.config();
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
        console.log('✅ Prisma conectado a PostgreSQL (Autenticación)');
    }
    async onModuleDestroy() {
        await this.$disconnect();
        console.log('❌ Prisma desconectado de PostgreSQL (Autenticación)');
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

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./servicios/autenticacion/src/principal.ts");
/******/ 	
/******/ })()
;