/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./servicios/pedidos/src/esquemas/pedido.schema.ts":
/*!*********************************************************!*\
  !*** ./servicios/pedidos/src/esquemas/pedido.schema.ts ***!
  \*********************************************************/
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
exports.EsquemaPedido = exports.Pedido = exports.ArticuloPedido = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let ArticuloPedido = class ArticuloPedido {
    idProducto;
    nombreProducto;
    cantidad;
    precioAlMomentoCompra;
};
exports.ArticuloPedido = ArticuloPedido;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], ArticuloPedido.prototype, "idProducto", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ArticuloPedido.prototype, "nombreProducto", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], ArticuloPedido.prototype, "cantidad", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], ArticuloPedido.prototype, "precioAlMomentoCompra", void 0);
exports.ArticuloPedido = ArticuloPedido = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], ArticuloPedido);
const EsquemaArticuloPedido = mongoose_1.SchemaFactory.createForClass(ArticuloPedido);
let Pedido = class Pedido extends mongoose_2.Document {
    idUsuario;
    montoTotal;
    articulos;
};
exports.Pedido = Pedido;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Pedido.prototype, "idUsuario", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Pedido.prototype, "montoTotal", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [EsquemaArticuloPedido], required: true }),
    __metadata("design:type", Array)
], Pedido.prototype, "articulos", void 0);
exports.Pedido = Pedido = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'pedidos',
        timestamps: { createdAt: 'fechaCreacion', updatedAt: 'fechaActualizacion' }
    })
], Pedido);
exports.EsquemaPedido = mongoose_1.SchemaFactory.createForClass(Pedido);


/***/ }),

/***/ "./servicios/pedidos/src/gestion/gestion.controller.ts":
/*!*************************************************************!*\
  !*** ./servicios/pedidos/src/gestion/gestion.controller.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControladorPedidos = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const gestion_service_1 = __webpack_require__(/*! ./gestion.service */ "./servicios/pedidos/src/gestion/gestion.service.ts");
let ControladorPedidos = class ControladorPedidos {
    servicioPedidos;
    constructor(servicioPedidos) {
        this.servicioPedidos = servicioPedidos;
    }
    async crearPedido(datos) {
        console.log('📋 Recibiendo solicitud de crear pedido:', datos);
        try {
            const pedido = await this.servicioPedidos.crearPedido(datos);
            console.log('✅ Pedido creado exitosamente:', pedido);
            return pedido;
        }
        catch (error) {
            console.error('❌ Error al crear pedido:', error);
            throw error;
        }
    }
    async obtenerPedidos() {
        console.log('📋 Obteniendo todos los pedidos');
        return this.servicioPedidos.obtenerTodos();
    }
    async obtenerPedidoPorId(datos) {
        console.log('📋 Obteniendo pedido por ID:', datos.id);
        return this.servicioPedidos.obtenerPorId(datos.id);
    }
    async obtenerPedidosUsuario(datos) {
        console.log('📋 Obteniendo pedidos del usuario:', datos.idUsuario);
        return this.servicioPedidos.obtenerPorUsuario(datos.idUsuario);
    }
    async actualizarEstado(datos) {
        console.log('📋 Actualizando estado del pedido:', datos);
        return this.servicioPedidos.actualizarEstado(datos.id, datos.estado);
    }
};
exports.ControladorPedidos = ControladorPedidos;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'crear_pedido' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ControladorPedidos.prototype, "crearPedido", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'obtener-pedidos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ControladorPedidos.prototype, "obtenerPedidos", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'obtener-pedido-por-id' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ControladorPedidos.prototype, "obtenerPedidoPorId", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'obtener-pedidos-usuario' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ControladorPedidos.prototype, "obtenerPedidosUsuario", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'actualizar-estado-pedido' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ControladorPedidos.prototype, "actualizarEstado", null);
exports.ControladorPedidos = ControladorPedidos = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof gestion_service_1.ServicioPedidos !== "undefined" && gestion_service_1.ServicioPedidos) === "function" ? _a : Object])
], ControladorPedidos);


/***/ }),

/***/ "./servicios/pedidos/src/gestion/gestion.module.ts":
/*!*********************************************************!*\
  !*** ./servicios/pedidos/src/gestion/gestion.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModuloGestionPedidos = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const gestion_controller_1 = __webpack_require__(/*! ./gestion.controller */ "./servicios/pedidos/src/gestion/gestion.controller.ts");
const gestion_service_1 = __webpack_require__(/*! ./gestion.service */ "./servicios/pedidos/src/gestion/gestion.service.ts");
const pedido_schema_1 = __webpack_require__(/*! ../esquemas/pedido.schema */ "./servicios/pedidos/src/esquemas/pedido.schema.ts");
let ModuloGestionPedidos = class ModuloGestionPedidos {
};
exports.ModuloGestionPedidos = ModuloGestionPedidos;
exports.ModuloGestionPedidos = ModuloGestionPedidos = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: pedido_schema_1.Pedido.name, schema: pedido_schema_1.EsquemaPedido }]),
        ],
        controllers: [gestion_controller_1.ControladorPedidos],
        providers: [gestion_service_1.ServicioPedidos],
        exports: [gestion_service_1.ServicioPedidos],
    })
], ModuloGestionPedidos);


/***/ }),

/***/ "./servicios/pedidos/src/gestion/gestion.service.ts":
/*!**********************************************************!*\
  !*** ./servicios/pedidos/src/gestion/gestion.service.ts ***!
  \**********************************************************/
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
exports.ServicioPedidos = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const pedido_schema_1 = __webpack_require__(/*! ../esquemas/pedido.schema */ "./servicios/pedidos/src/esquemas/pedido.schema.ts");
let ServicioPedidos = class ServicioPedidos {
    modeloPedido;
    constructor(modeloPedido) {
        this.modeloPedido = modeloPedido;
    }
    async crearPedido(datos) {
        const nuevoPedido = new this.modeloPedido({
            idUsuario: datos.idUsuario,
            articulos: datos.articulos,
            montoTotal: datos.montoTotal || this.calcularTotal(datos.articulos),
            estado: 'PENDIENTE',
            fechaCreacion: new Date(),
        });
        return nuevoPedido.save();
    }
    async obtenerTodos() {
        return this.modeloPedido.find().sort({ fechaCreacion: -1 }).exec();
    }
    async obtenerPorId(id) {
        return this.modeloPedido.findById(id).exec();
    }
    async obtenerPorUsuario(idUsuario) {
        return this.modeloPedido
            .find({ idUsuario })
            .sort({ fechaCreacion: -1 })
            .exec();
    }
    async actualizarEstado(id, estado) {
        return this.modeloPedido
            .findByIdAndUpdate(id, { estado }, { new: true })
            .exec();
    }
    calcularTotal(articulos) {
        return articulos.reduce((total, item) => {
            const precio = item.precio || item.precioAlMomentoCompra || 0;
            const cantidad = item.cantidad || 0;
            return total + precio * cantidad;
        }, 0);
    }
};
exports.ServicioPedidos = ServicioPedidos;
exports.ServicioPedidos = ServicioPedidos = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(pedido_schema_1.Pedido.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ServicioPedidos);


/***/ }),

/***/ "./servicios/pedidos/src/pedidos.module.ts":
/*!*************************************************!*\
  !*** ./servicios/pedidos/src/pedidos.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModuloPedidos = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const gestion_module_1 = __webpack_require__(/*! ./gestion/gestion.module */ "./servicios/pedidos/src/gestion/gestion.module.ts");
let ModuloPedidos = class ModuloPedidos {
};
exports.ModuloPedidos = ModuloPedidos;
exports.ModuloPedidos = ModuloPedidos = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            mongoose_1.MongooseModule.forRoot(process.env.URL_MONGODB || 'mongodb://localhost:27017/pedidos_bd'),
            gestion_module_1.ModuloGestionPedidos,
        ],
    })
], ModuloPedidos);


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

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

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
/*!********************************************!*\
  !*** ./servicios/pedidos/src/principal.ts ***!
  \********************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const pedidos_module_1 = __webpack_require__(/*! ./pedidos.module */ "./servicios/pedidos/src/pedidos.module.ts");
const registrador = new common_1.Logger('ServicioPedidos');
async function iniciar() {
    const puerto = parseInt(process.env.PUERTO_PEDIDOS ?? '5003', 10);
    const aplicacion = await core_1.NestFactory.createMicroservice(pedidos_module_1.ModuloPedidos, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: '0.0.0.0',
            port: puerto,
        },
    });
    await aplicacion.listen();
    registrador.log(`🧾 Servicio de Pedidos escuchando en puerto ${puerto} (TCP)`);
}
iniciar();

})();

/******/ })()
;