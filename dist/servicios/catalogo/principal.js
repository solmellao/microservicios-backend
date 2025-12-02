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

/***/ "./servicios/catalogo/src/catalogo.module.ts":
/*!***************************************************!*\
  !*** ./servicios/catalogo/src/catalogo.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModuloCatalogo = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const productos_module_1 = __webpack_require__(/*! ./productos/productos.module */ "./servicios/catalogo/src/productos/productos.module.ts");
const producto_entidad_1 = __webpack_require__(/*! ./productos/producto.entidad */ "./servicios/catalogo/src/productos/producto.entidad.ts");
const reserva_entidad_1 = __webpack_require__(/*! ./productos/reserva.entidad */ "./servicios/catalogo/src/productos/reserva.entidad.ts");
let ModuloCatalogo = class ModuloCatalogo {
};
exports.ModuloCatalogo = ModuloCatalogo;
exports.ModuloCatalogo = ModuloCatalogo = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configuracion) => ({
                    type: 'mysql',
                    host: configuracion.get('BD_HOST', 'localhost'),
                    port: configuracion.get('BD_PUERTO', 3306),
                    username: configuracion.get('BD_USUARIO', 'root'),
                    password: configuracion.get('BD_CLAVE', ''),
                    database: configuracion.get('BD_NOMBRE', 'productos_bd'),
                    entities: [producto_entidad_1.Producto, reserva_entidad_1.Reserva],
                    synchronize: configuracion.get('BD_SINCRONIZAR', 'true') === 'true',
                    logging: true,
                }),
            }),
            schedule_1.ScheduleModule.forRoot(),
            productos_module_1.ModuloProductos,
        ],
    })
], ModuloCatalogo);


/***/ }),

/***/ "./servicios/catalogo/src/productos/producto.entidad.ts":
/*!**************************************************************!*\
  !*** ./servicios/catalogo/src/productos/producto.entidad.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Producto = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const reserva_entidad_1 = __webpack_require__(/*! ./reserva.entidad */ "./servicios/catalogo/src/productos/reserva.entidad.ts");
let Producto = class Producto {
    id;
    nombre;
    precio;
    inventario;
    inventarioReservado;
    imagenUrl;
    fechaCreacion;
    fechaActualizacion;
    reservas;
};
exports.Producto = Producto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Producto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Producto.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Producto.prototype, "inventario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, name: 'inventarioReservado' }),
    __metadata("design:type", Number)
], Producto.prototype, "inventarioReservado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 500, nullable: true }),
    __metadata("design:type", Object)
], Producto.prototype, "imagenUrl", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fechaCreacion' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Producto.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fechaActualizacion' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Producto.prototype, "fechaActualizacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reserva_entidad_1.Reserva, (reserva) => reserva.producto),
    __metadata("design:type", Array)
], Producto.prototype, "reservas", void 0);
exports.Producto = Producto = __decorate([
    (0, typeorm_1.Entity)('productos')
], Producto);


/***/ }),

/***/ "./servicios/catalogo/src/productos/productos.controller.ts":
/*!******************************************************************!*\
  !*** ./servicios/catalogo/src/productos/productos.controller.ts ***!
  \******************************************************************/
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControladorProductos = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const productos_service_1 = __webpack_require__(/*! ./productos.service */ "./servicios/catalogo/src/productos/productos.service.ts");
const dtos_1 = __webpack_require__(/*! @compartido/dtos */ "./compartido/dtos/index.ts");
const dtos_2 = __webpack_require__(/*! @compartido/dtos */ "./compartido/dtos/index.ts");
let ControladorProductos = class ControladorProductos {
    servicioProductos;
    constructor(servicioProductos) {
        this.servicioProductos = servicioProductos;
    }
    async crear(dto) {
        try {
            return await this.servicioProductos.crear(dto);
        }
        catch (error) {
            const rpcError = {
                statusCode: error.status || 500,
                error: error.message || 'Error al crear producto',
            };
            throw new microservices_1.RpcException(rpcError);
        }
    }
    async obtenerTodos() {
        try {
            return await this.servicioProductos.obtenerTodos();
        }
        catch (error) {
            const rpcError = {
                statusCode: 500,
                error: error.message || 'Error al obtener productos',
            };
            throw new microservices_1.RpcException(rpcError);
        }
    }
    async obtenerPorId(id) {
        try {
            return await this.servicioProductos.obtenerPorId(id);
        }
        catch (error) {
            const rpcError = {
                statusCode: 404,
                error: error.message || 'Producto no encontrado',
            };
            throw new microservices_1.RpcException(rpcError);
        }
    }
    async obtenerPorIds(ids) {
        try {
            return await this.servicioProductos.obtenerProductosPorIds(ids);
        }
        catch (error) {
            const rpcError = {
                statusCode: 500,
                error: error.message || 'Error al obtener productos',
            };
            throw new microservices_1.RpcException(rpcError);
        }
    }
    async actualizar(datos) {
        try {
            return await this.servicioProductos.actualizar(datos.id, datos.dto);
        }
        catch (error) {
            const rpcError = {
                statusCode: error.status || 500,
                error: error.message || 'Error al actualizar producto',
            };
            throw new microservices_1.RpcException(rpcError);
        }
    }
    async crearReserva(dto) {
        try {
            return await this.servicioProductos.crearReserva(dto);
        }
        catch (error) {
            const rpcError = {
                statusCode: error.status || 500,
                error: error.message || 'Error al crear reserva',
            };
            throw new microservices_1.RpcException(rpcError);
        }
    }
    async confirmarCompra(dto) {
        try {
            return await this.servicioProductos.confirmarCompra(dto.articulos);
        }
        catch (error) {
            const rpcError = {
                statusCode: error.status || 500,
                error: error.message || 'Error al confirmar compra',
            };
            throw new microservices_1.RpcException(rpcError);
        }
    }
    async cancelarReserva(idReserva) {
        try {
            return await this.servicioProductos.cancelarReserva(idReserva);
        }
        catch (error) {
            const rpcError = {
                statusCode: error.status || 500,
                error: error.message || 'Error al cancelar reserva',
            };
            throw new microservices_1.RpcException(rpcError);
        }
    }
};
exports.ControladorProductos = ControladorProductos;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'crear_producto' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dtos_1.CrearProductoDto !== "undefined" && dtos_1.CrearProductoDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ControladorProductos.prototype, "crear", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'obtener_todos_productos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ControladorProductos.prototype, "obtenerTodos", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'obtener_producto_por_id' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ControladorProductos.prototype, "obtenerPorId", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'obtener_productos_por_ids' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ControladorProductos.prototype, "obtenerPorIds", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'actualizar_producto' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ControladorProductos.prototype, "actualizar", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'crear_reserva' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dtos_1.ReservarProductoDto !== "undefined" && dtos_1.ReservarProductoDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ControladorProductos.prototype, "crearReserva", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'confirmar_compra' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dtos_2.ProcesarCompraDto !== "undefined" && dtos_2.ProcesarCompraDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], ControladorProductos.prototype, "confirmarCompra", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'cancelar_reserva' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ControladorProductos.prototype, "cancelarReserva", null);
exports.ControladorProductos = ControladorProductos = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof productos_service_1.ServicioProductos !== "undefined" && productos_service_1.ServicioProductos) === "function" ? _a : Object])
], ControladorProductos);


/***/ }),

/***/ "./servicios/catalogo/src/productos/productos.module.ts":
/*!**************************************************************!*\
  !*** ./servicios/catalogo/src/productos/productos.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModuloProductos = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const productos_controller_1 = __webpack_require__(/*! ./productos.controller */ "./servicios/catalogo/src/productos/productos.controller.ts");
const productos_service_1 = __webpack_require__(/*! ./productos.service */ "./servicios/catalogo/src/productos/productos.service.ts");
const tareas_service_1 = __webpack_require__(/*! ./tareas.service */ "./servicios/catalogo/src/productos/tareas.service.ts");
const producto_entidad_1 = __webpack_require__(/*! ./producto.entidad */ "./servicios/catalogo/src/productos/producto.entidad.ts");
const reserva_entidad_1 = __webpack_require__(/*! ./reserva.entidad */ "./servicios/catalogo/src/productos/reserva.entidad.ts");
let ModuloProductos = class ModuloProductos {
};
exports.ModuloProductos = ModuloProductos;
exports.ModuloProductos = ModuloProductos = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([producto_entidad_1.Producto, reserva_entidad_1.Reserva])
        ],
        controllers: [productos_controller_1.ControladorProductos],
        providers: [productos_service_1.ServicioProductos, tareas_service_1.ServicioTareas],
    })
], ModuloProductos);


/***/ }),

/***/ "./servicios/catalogo/src/productos/productos.service.ts":
/*!***************************************************************!*\
  !*** ./servicios/catalogo/src/productos/productos.service.ts ***!
  \***************************************************************/
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
var ServicioProductos_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicioProductos = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const producto_entidad_1 = __webpack_require__(/*! ./producto.entidad */ "./servicios/catalogo/src/productos/producto.entidad.ts");
const reserva_entidad_1 = __webpack_require__(/*! ./reserva.entidad */ "./servicios/catalogo/src/productos/reserva.entidad.ts");
let ServicioProductos = ServicioProductos_1 = class ServicioProductos {
    repositorioProductos;
    repositorioReservas;
    dataSource;
    logger = new common_1.Logger(ServicioProductos_1.name);
    constructor(repositorioProductos, repositorioReservas, dataSource) {
        this.repositorioProductos = repositorioProductos;
        this.repositorioReservas = repositorioReservas;
        this.dataSource = dataSource;
    }
    async obtenerTodos() {
        return this.repositorioProductos.find({
            order: { fechaCreacion: 'DESC' },
        });
    }
    async obtenerPorId(id) {
        const producto = await this.repositorioProductos.findOne({
            where: { id },
        });
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        return producto;
    }
    async obtenerProductosPorIds(ids) {
        if (!ids || ids.length === 0) {
            return [];
        }
        return this.repositorioProductos.find({
            where: { id: (0, typeorm_2.In)(ids) },
        });
    }
    async crear(dto) {
        const producto = this.repositorioProductos.create({
            nombre: dto.nombre,
            precio: dto.precio,
            inventario: dto.inventario,
            inventarioReservado: 0,
            imagenUrl: dto.imagenUrl || null,
        });
        return this.repositorioProductos.save(producto);
    }
    async reservarProductos(dto) {
        const { idProducto, cantidad, idUsuario } = dto;
        return this.dataSource.transaction(async (manager) => {
            const producto = await manager.findOne(producto_entidad_1.Producto, {
                where: { id: idProducto },
                lock: { mode: 'pessimistic_write' },
            });
            if (!producto) {
                throw new common_1.NotFoundException(`Producto con ID ${idProducto} no encontrado`);
            }
            const stockDisponible = producto.inventario - producto.inventarioReservado;
            if (stockDisponible < cantidad) {
                throw new common_1.BadRequestException(`Stock insuficiente. Disponible: ${stockDisponible}, solicitado: ${cantidad}`);
            }
            producto.inventarioReservado += cantidad;
            await manager.save(producto_entidad_1.Producto, producto);
            const reserva = manager.create(reserva_entidad_1.Reserva, {
                idProducto,
                idUsuario,
                cantidad,
            });
            return manager.save(reserva_entidad_1.Reserva, reserva);
        });
    }
    async crearReserva(dto) {
        return this.reservarProductos(dto);
    }
    async procesarCompra(dto) {
        const { articulos } = dto;
        this.logger.log(`Procesando compra de ${articulos.length} artículos`);
        return this.dataSource.transaction(async (manager) => {
            for (const articulo of articulos) {
                const producto = await manager.findOne(producto_entidad_1.Producto, {
                    where: { id: articulo.idProducto },
                    lock: { mode: 'pessimistic_write' },
                });
                if (!producto) {
                    throw new common_1.NotFoundException(`Producto con ID ${articulo.idProducto} no encontrado`);
                }
                if (producto.inventarioReservado < articulo.cantidad) {
                    throw new common_1.BadRequestException(`Inventario reservado insuficiente para producto ${producto.nombre}`);
                }
                producto.inventario -= articulo.cantidad;
                producto.inventarioReservado -= articulo.cantidad;
                if (producto.inventario < 0) {
                    throw new common_1.BadRequestException(`Error de inventario para producto ${producto.nombre}`);
                }
                await manager.save(producto_entidad_1.Producto, producto);
                this.logger.log(`Producto ${producto.nombre}: inventario actualizado a ${producto.inventario}`);
            }
        });
    }
    async liberarReservas(idsReservas) {
        if (!idsReservas || idsReservas.length === 0) {
            return;
        }
        return this.dataSource.transaction(async (manager) => {
            const reservas = await manager.find(reserva_entidad_1.Reserva, {
                where: { id: (0, typeorm_2.In)(idsReservas) },
            });
            for (const reserva of reservas) {
                const producto = await manager.findOne(producto_entidad_1.Producto, {
                    where: { id: reserva.idProducto },
                    lock: { mode: 'pessimistic_write' },
                });
                if (producto) {
                    producto.inventarioReservado -= reserva.cantidad;
                    if (producto.inventarioReservado < 0) {
                        producto.inventarioReservado = 0;
                    }
                    await manager.save(producto_entidad_1.Producto, producto);
                }
                await manager.remove(reserva_entidad_1.Reserva, reserva);
            }
        });
    }
    async verificarDisponibilidad(productos) {
        for (const item of productos) {
            const producto = await this.repositorioProductos.findOne({
                where: { id: item.idProducto },
            });
            if (!producto) {
                return {
                    disponible: false,
                    mensaje: `Producto con ID ${item.idProducto} no encontrado`,
                };
            }
            const stockDisponible = producto.inventario - producto.inventarioReservado;
            if (stockDisponible < item.cantidad) {
                return {
                    disponible: false,
                    mensaje: `Stock insuficiente para ${producto.nombre}. Disponible: ${stockDisponible}`,
                };
            }
        }
        return { disponible: true };
    }
    async actualizar(id, datos) {
        const producto = await this.obtenerPorId(id);
        Object.assign(producto, datos);
        return this.repositorioProductos.save(producto);
    }
    async eliminar(id) {
        const producto = await this.obtenerPorId(id);
        if (producto.inventarioReservado > 0) {
            throw new common_1.BadRequestException('No se puede eliminar un producto con inventario reservado');
        }
        await this.repositorioProductos.remove(producto);
    }
    async obtenerEstadisticas() {
        const productos = await this.repositorioProductos.find();
        const totalProductos = productos.length;
        const inventarioTotal = productos.reduce((sum, p) => sum + p.inventario, 0);
        const inventarioReservado = productos.reduce((sum, p) => sum + p.inventarioReservado, 0);
        const valorInventario = productos.reduce((sum, p) => sum + p.precio * p.inventario, 0);
        return {
            totalProductos,
            inventarioTotal,
            inventarioReservado,
            inventarioDisponible: inventarioTotal - inventarioReservado,
            valorInventario: parseFloat(valorInventario.toFixed(2)),
            productosSinStock: productos.filter((p) => p.inventario === 0).length,
        };
    }
    async confirmarCompra(articulos) {
        this.logger.log(`✅ Confirmando compra de ${articulos.length} artículos`);
        return this.dataSource.transaction(async (manager) => {
            for (const articulo of articulos) {
                const producto = await manager.findOne(producto_entidad_1.Producto, {
                    where: { id: articulo.idProducto },
                    lock: { mode: 'pessimistic_write' },
                });
                if (!producto) {
                    throw new common_1.NotFoundException(`Producto con ID ${articulo.idProducto} no encontrado`);
                }
                if (producto.inventario < articulo.cantidad) {
                    throw new common_1.BadRequestException(`Stock insuficiente para ${producto.nombre}. Disponible: ${producto.inventario}`);
                }
                producto.inventario -= articulo.cantidad;
                await manager.save(producto_entidad_1.Producto, producto);
                this.logger.log(`✅ Producto ${producto.nombre}: inventario actualizado a ${producto.inventario}`);
            }
        });
    }
    async cancelarReserva(idReserva) {
        return this.liberarReservas([idReserva]);
    }
};
exports.ServicioProductos = ServicioProductos;
exports.ServicioProductos = ServicioProductos = ServicioProductos_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producto_entidad_1.Producto)),
    __param(1, (0, typeorm_1.InjectRepository)(reserva_entidad_1.Reserva)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
], ServicioProductos);


/***/ }),

/***/ "./servicios/catalogo/src/productos/reserva.entidad.ts":
/*!*************************************************************!*\
  !*** ./servicios/catalogo/src/productos/reserva.entidad.ts ***!
  \*************************************************************/
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
exports.Reserva = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const producto_entidad_1 = __webpack_require__(/*! ./producto.entidad */ "./servicios/catalogo/src/productos/producto.entidad.ts");
let Reserva = class Reserva {
    id;
    idProducto;
    idUsuario;
    cantidad;
    fechaCreacion;
    producto;
};
exports.Reserva = Reserva;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reserva.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'idProducto' }),
    __metadata("design:type", Number)
], Reserva.prototype, "idProducto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'idUsuario' }),
    __metadata("design:type", Number)
], Reserva.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Reserva.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fechaCreacion' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Reserva.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => producto_entidad_1.Producto, (producto) => producto.reservas, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'idProducto' }),
    __metadata("design:type", typeof (_b = typeof producto_entidad_1.Producto !== "undefined" && producto_entidad_1.Producto) === "function" ? _b : Object)
], Reserva.prototype, "producto", void 0);
exports.Reserva = Reserva = __decorate([
    (0, typeorm_1.Entity)('reservas')
], Reserva);


/***/ }),

/***/ "./servicios/catalogo/src/productos/tareas.service.ts":
/*!************************************************************!*\
  !*** ./servicios/catalogo/src/productos/tareas.service.ts ***!
  \************************************************************/
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
var ServicioTareas_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicioTareas = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const reserva_entidad_1 = __webpack_require__(/*! ./reserva.entidad */ "./servicios/catalogo/src/productos/reserva.entidad.ts");
const producto_entidad_1 = __webpack_require__(/*! ./producto.entidad */ "./servicios/catalogo/src/productos/producto.entidad.ts");
let ServicioTareas = ServicioTareas_1 = class ServicioTareas {
    repositorioReservas;
    repositorioProductos;
    dataSource;
    logger = new common_1.Logger(ServicioTareas_1.name);
    TIEMPO_EXPIRACION_MINUTOS = 30;
    constructor(repositorioReservas, repositorioProductos, dataSource) {
        this.repositorioReservas = repositorioReservas;
        this.repositorioProductos = repositorioProductos;
        this.dataSource = dataSource;
    }
    async limpiarReservasExpiradas() {
        this.logger.log('Iniciando limpieza de reservas expiradas...');
        try {
            const fechaExpiracion = new Date();
            fechaExpiracion.setMinutes(fechaExpiracion.getMinutes() - this.TIEMPO_EXPIRACION_MINUTOS);
            const reservasExpiradas = await this.repositorioReservas.find({
                where: {
                    fechaCreacion: (0, typeorm_2.LessThan)(fechaExpiracion),
                },
            });
            if (reservasExpiradas.length === 0) {
                this.logger.log('No hay reservas expiradas para limpiar');
                return;
            }
            this.logger.log(`Encontradas ${reservasExpiradas.length} reservas expiradas`);
            await this.dataSource.transaction(async (manager) => {
                for (const reserva of reservasExpiradas) {
                    const producto = await manager.findOne(producto_entidad_1.Producto, {
                        where: { id: reserva.idProducto },
                        lock: { mode: 'pessimistic_write' },
                    });
                    if (producto) {
                        producto.inventarioReservado -= reserva.cantidad;
                        if (producto.inventarioReservado < 0) {
                            this.logger.warn(`Inventario reservado negativo detectado para producto ${producto.id}. Ajustando a 0.`);
                            producto.inventarioReservado = 0;
                        }
                        await manager.save(producto_entidad_1.Producto, producto);
                        this.logger.debug(`Liberado inventario para producto ${producto.nombre}: ${reserva.cantidad} unidades`);
                    }
                    await manager.remove(reserva_entidad_1.Reserva, reserva);
                }
            });
            this.logger.log(`Limpieza completada: ${reservasExpiradas.length} reservas eliminadas`);
        }
        catch (error) {
            this.logger.error('Error al limpiar reservas expiradas:', error);
            throw error;
        }
    }
    async limpiarReservasManual() {
        this.logger.log('Ejecutando limpieza manual de reservas...');
        const fechaExpiracion = new Date();
        fechaExpiracion.setMinutes(fechaExpiracion.getMinutes() - this.TIEMPO_EXPIRACION_MINUTOS);
        const reservasExpiradas = await this.repositorioReservas.find({
            where: {
                fechaCreacion: (0, typeorm_2.LessThan)(fechaExpiracion),
            },
        });
        if (reservasExpiradas.length === 0) {
            return 0;
        }
        await this.dataSource.transaction(async (manager) => {
            for (const reserva of reservasExpiradas) {
                const producto = await manager.findOne(producto_entidad_1.Producto, {
                    where: { id: reserva.idProducto },
                    lock: { mode: 'pessimistic_write' },
                });
                if (producto) {
                    producto.inventarioReservado -= reserva.cantidad;
                    if (producto.inventarioReservado < 0) {
                        producto.inventarioReservado = 0;
                    }
                    await manager.save(producto_entidad_1.Producto, producto);
                }
                await manager.remove(reserva_entidad_1.Reserva, reserva);
            }
        });
        return reservasExpiradas.length;
    }
    async obtenerEstadisticasReservas() {
        const totalReservas = await this.repositorioReservas.count();
        const fechaExpiracion = new Date();
        fechaExpiracion.setMinutes(fechaExpiracion.getMinutes() - this.TIEMPO_EXPIRACION_MINUTOS);
        const reservasExpiradas = await this.repositorioReservas.count({
            where: {
                fechaCreacion: (0, typeorm_2.LessThan)(fechaExpiracion),
            },
        });
        return {
            totalReservas,
            reservasActivas: totalReservas - reservasExpiradas,
            reservasExpiradas,
            tiempoExpiracionMinutos: this.TIEMPO_EXPIRACION_MINUTOS,
        };
    }
};
exports.ServicioTareas = ServicioTareas;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_HOUR),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServicioTareas.prototype, "limpiarReservasExpiradas", null);
exports.ServicioTareas = ServicioTareas = ServicioTareas_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reserva_entidad_1.Reserva)),
    __param(1, (0, typeorm_1.InjectRepository)(producto_entidad_1.Producto)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
], ServicioTareas);


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

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

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

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

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
/*!*********************************************!*\
  !*** ./servicios/catalogo/src/principal.ts ***!
  \*********************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const catalogo_module_1 = __webpack_require__(/*! ./catalogo.module */ "./servicios/catalogo/src/catalogo.module.ts");
const registrador = new common_1.Logger('ServicioCatalogo');
async function iniciar() {
    const puerto = parseInt(process.env.PUERTO_CATALOGO ?? '5002', 10);
    const aplicacion = await core_1.NestFactory.createMicroservice(catalogo_module_1.ModuloCatalogo, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: '0.0.0.0',
            port: puerto,
        },
    });
    await aplicacion.listen();
    registrador.log(`📦 Servicio de Catálogo escuchando en puerto ${puerto} (TCP)`);
}
iniciar();

})();

/******/ })()
;