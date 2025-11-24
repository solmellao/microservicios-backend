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
                    entities: [__dirname + '/**/*.entidad{.ts,.js}'],
                    synchronize: configuracion.get('BD_SINCRONIZAR', 'true') === 'true',
                    logging: false,
                }),
            }),
            schedule_1.ScheduleModule.forRoot(),
            productos_module_1.ModuloProductos,
        ],
    })
], ModuloCatalogo);


/***/ }),

/***/ "./servicios/catalogo/src/entidades/producto.entidad.ts":
/*!**************************************************************!*\
  !*** ./servicios/catalogo/src/entidades/producto.entidad.ts ***!
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
exports.Producto = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const reserva_entidad_1 = __webpack_require__(/*! ./reserva.entidad */ "./servicios/catalogo/src/entidades/reserva.entidad.ts");
let Producto = class Producto {
    id;
    nombre;
    precio;
    inventario;
    inventarioReservado;
    fechaCreacion;
    reservas;
};
exports.Producto = Producto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Producto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Producto.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Producto.prototype, "inventario", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0, name: 'inventario_reservado' }),
    __metadata("design:type", Number)
], Producto.prototype, "inventarioReservado", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Producto.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reserva_entidad_1.Reserva, reserva => reserva.producto),
    __metadata("design:type", Array)
], Producto.prototype, "reservas", void 0);
exports.Producto = Producto = __decorate([
    (0, typeorm_1.Entity)('productos')
], Producto);


/***/ }),

/***/ "./servicios/catalogo/src/entidades/reserva.entidad.ts":
/*!*************************************************************!*\
  !*** ./servicios/catalogo/src/entidades/reserva.entidad.ts ***!
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
const producto_entidad_1 = __webpack_require__(/*! ./producto.entidad */ "./servicios/catalogo/src/entidades/producto.entidad.ts");
let Reserva = class Reserva {
    id;
    idProducto;
    producto;
    idUsuario;
    cantidad;
    fechaCreacion;
};
exports.Reserva = Reserva;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reserva.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_producto' }),
    __metadata("design:type", Number)
], Reserva.prototype, "idProducto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => producto_entidad_1.Producto, producto => producto.reservas),
    __metadata("design:type", typeof (_a = typeof producto_entidad_1.Producto !== "undefined" && producto_entidad_1.Producto) === "function" ? _a : Object)
], Reserva.prototype, "producto", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'id_usuario' }),
    __metadata("design:type", Number)
], Reserva.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Reserva.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Reserva.prototype, "fechaCreacion", void 0);
exports.Reserva = Reserva = __decorate([
    (0, typeorm_1.Entity)('reservas_productos')
], Reserva);


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
    crear(dto) {
        return this.servicioProductos.crear(dto);
    }
    obtenerTodos() {
        return this.servicioProductos.obtenerTodos();
    }
    obtenerPorIds(ids) {
        return this.servicioProductos.obtenerProductosPorIds(ids);
    }
    crearReserva(dto) {
        return this.servicioProductos.crearReserva(dto);
    }
    confirmarCompra(dto) {
        return this.servicioProductos.confirmarCompra(dto.articulos);
    }
    cancelarReserva(idReserva) {
        return this.servicioProductos.cancelarReserva(idReserva);
    }
};
exports.ControladorProductos = ControladorProductos;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'crear_producto' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dtos_1.CrearProductoDto !== "undefined" && dtos_1.CrearProductoDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], ControladorProductos.prototype, "crear", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'obtener_todos_productos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ControladorProductos.prototype, "obtenerTodos", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'obtener_productos_por_ids' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ControladorProductos.prototype, "obtenerPorIds", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'crear_reserva' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dtos_1.ReservarProductoDto !== "undefined" && dtos_1.ReservarProductoDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], ControladorProductos.prototype, "crearReserva", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'confirmar_compra' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dtos_2.ProcesarCompraDto !== "undefined" && dtos_2.ProcesarCompraDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], ControladorProductos.prototype, "confirmarCompra", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'cancelar_reserva' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
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
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const productos_controller_1 = __webpack_require__(/*! ./productos.controller */ "./servicios/catalogo/src/productos/productos.controller.ts");
const productos_service_1 = __webpack_require__(/*! ./productos.service */ "./servicios/catalogo/src/productos/productos.service.ts");
const tareas_service_1 = __webpack_require__(/*! ./tareas.service */ "./servicios/catalogo/src/productos/tareas.service.ts");
const producto_entidad_1 = __webpack_require__(/*! ../entidades/producto.entidad */ "./servicios/catalogo/src/entidades/producto.entidad.ts");
const reserva_entidad_1 = __webpack_require__(/*! ../entidades/reserva.entidad */ "./servicios/catalogo/src/entidades/reserva.entidad.ts");
let ModuloProductos = class ModuloProductos {
};
exports.ModuloProductos = ModuloProductos;
exports.ModuloProductos = ModuloProductos = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([producto_entidad_1.Producto, reserva_entidad_1.Reserva]),
        ],
        controllers: [productos_controller_1.ControladorProductos],
        providers: [productos_service_1.ServicioProductos, tareas_service_1.ServicioTareas],
        exports: [productos_service_1.ServicioProductos],
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicioProductos = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const producto_entidad_1 = __webpack_require__(/*! ../entidades/producto.entidad */ "./servicios/catalogo/src/entidades/producto.entidad.ts");
const reserva_entidad_1 = __webpack_require__(/*! ../entidades/reserva.entidad */ "./servicios/catalogo/src/entidades/reserva.entidad.ts");
let ServicioProductos = class ServicioProductos {
    repositorioProductos;
    repositorioReservas;
    fuenteDatos;
    constructor(repositorioProductos, repositorioReservas, fuenteDatos) {
        this.repositorioProductos = repositorioProductos;
        this.repositorioReservas = repositorioReservas;
        this.fuenteDatos = fuenteDatos;
    }
    async crear(dto) {
        const nuevoProducto = this.repositorioProductos.create({
            nombre: dto.nombre,
            precio: dto.precio,
            inventario: dto.inventario,
        });
        return this.repositorioProductos.save(nuevoProducto);
    }
    async obtenerTodos() {
        return this.repositorioProductos.find();
    }
    async obtenerProductosPorIds(ids) {
        return this.repositorioProductos.findBy({
            id: (0, typeorm_2.In)(ids)
        });
    }
    async crearReserva(dto) {
        const ejecutorConsultas = this.fuenteDatos.createQueryRunner();
        await ejecutorConsultas.connect();
        await ejecutorConsultas.startTransaction();
        try {
            const { idProducto, idUsuario, cantidad } = dto;
            const producto = await ejecutorConsultas.manager.findOne(producto_entidad_1.Producto, {
                where: { id: idProducto }
            });
            if (!producto) {
                throw new common_1.NotFoundException(`Producto con ID ${idProducto} no encontrado`);
            }
            const stockDisponible = producto.inventario - producto.inventarioReservado;
            if (stockDisponible < cantidad) {
                throw new common_1.BadRequestException(`Stock insuficiente. Disponible: ${stockDisponible}, Solicitado: ${cantidad}`);
            }
            const nuevaReserva = ejecutorConsultas.manager.create(reserva_entidad_1.Reserva, {
                idProducto,
                idUsuario,
                cantidad,
            });
            await ejecutorConsultas.manager.save(nuevaReserva);
            await ejecutorConsultas.manager.increment(producto_entidad_1.Producto, { id: idProducto }, 'inventarioReservado', cantidad);
            await ejecutorConsultas.commitTransaction();
            return nuevaReserva;
        }
        catch (error) {
            await ejecutorConsultas.rollbackTransaction();
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Error al crear reserva: ${error.message}`);
        }
        finally {
            await ejecutorConsultas.release();
        }
    }
    async cancelarReserva(idReserva) {
        const reserva = await this.repositorioReservas.findOne({
            where: { id: idReserva }
        });
        if (!reserva) {
            return;
        }
        const { idProducto, cantidad } = reserva;
        await this.fuenteDatos.transaction(async (gestor) => {
            await gestor.decrement(producto_entidad_1.Producto, { id: idProducto }, 'inventarioReservado', cantidad);
            await gestor.delete(reserva_entidad_1.Reserva, idReserva);
        });
    }
    async confirmarCompra(articulos) {
        return this.fuenteDatos.transaction(async (gestor) => {
            const resultados = [];
            for (const articulo of articulos) {
                const resultado = await gestor.update(producto_entidad_1.Producto, { id: articulo.idProducto }, {
                    inventario: () => `inventario - ${articulo.cantidad}`,
                    inventarioReservado: () => `inventarioReservado - ${articulo.cantidad}`,
                });
                resultados.push(resultado);
            }
            return resultados;
        });
    }
};
exports.ServicioProductos = ServicioProductos;
exports.ServicioProductos = ServicioProductos = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(producto_entidad_1.Producto)),
    __param(1, (0, typeorm_1.InjectRepository)(reserva_entidad_1.Reserva)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _c : Object])
], ServicioProductos);


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
const reserva_entidad_1 = __webpack_require__(/*! ../entidades/reserva.entidad */ "./servicios/catalogo/src/entidades/reserva.entidad.ts");
const producto_entidad_1 = __webpack_require__(/*! ../entidades/producto.entidad */ "./servicios/catalogo/src/entidades/producto.entidad.ts");
let ServicioTareas = ServicioTareas_1 = class ServicioTareas {
    repoReservas;
    repoProductos;
    fuenteDatos;
    registrador = new common_1.Logger(ServicioTareas_1.name);
    constructor(repoReservas, repoProductos, fuenteDatos) {
        this.repoReservas = repoReservas;
        this.repoProductos = repoProductos;
        this.fuenteDatos = fuenteDatos;
    }
    async limpiarReservasExpiradas() {
        this.registrador.log('🧹 Buscando reservas expiradas...');
        const haceTresDias = new Date();
        haceTresDias.setDate(haceTresDias.getDate() - 3);
        const reservasExpiradas = await this.repoReservas.find({
            where: {
                fechaCreacion: (0, typeorm_2.LessThan)(haceTresDias)
            }
        });
        if (reservasExpiradas.length === 0) {
            this.registrador.log('✅ No hay reservas expiradas');
            return;
        }
        this.registrador.warn(`🔄 Liberando ${reservasExpiradas.length} reservas expiradas`);
        await this.fuenteDatos.transaction(async (gestor) => {
            for (const reserva of reservasExpiradas) {
                const { idProducto, cantidad } = reserva;
                await gestor.decrement(producto_entidad_1.Producto, { id: idProducto }, 'inventarioReservado', cantidad);
                await gestor.increment(producto_entidad_1.Producto, { id: idProducto }, 'inventario', cantidad);
                await gestor.delete(reserva_entidad_1.Reserva, reserva.id);
            }
        });
        this.registrador.log('✅ Limpieza completada');
    }
};
exports.ServicioTareas = ServicioTareas;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_6_HOURS),
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