"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Importa el módulo express y sus tipos de solicitud y respuesta
const operacion_clasificacionesService_1 = require("./../services/operacion_clasificacionesService");
const router = express_1.default.Router(); // Crea un enrutador de express
// Ruta para obtener todas las operacionClasificaciones
router.get('/operacionClasificaciones', operacion_clasificacionesService_1.operacionClasificacionesMethods.getOperationClassifications);
// Ruta para obtener una operacionClasificacion por operacion_id
router.get('/operacionClasificaciones/getOperationClassificationByOperationId/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const operacionClasificacion = yield operacion_clasificacionesService_1.operacionClasificacionesMethods.getOperationClassificationByOperationId(Number(req.params.id)); // Obtiene la operacionClasificacion por operacion_id
        if (operacionClasificacion) {
            res.json(operacionClasificacion); // Devuelve la operacionClasificacion si se encuentra
        }
        else {
            res.status(404).json({ message: 'operacionClasificacion no encontrada' }); // Devuelve un error 404 si la operacionClasificacion no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una operacionClasificacion por clasificacion_id
router.get('/operacionClasificaciones/getOperationClassificationByClassificationId/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const operacionClasificacion = yield operacion_clasificacionesService_1.operacionClasificacionesMethods.getOperationClassificationByClasificacionId(Number(req.params.id)); // Obtiene la operacionClasificacion por clasificacion_id
        if (operacionClasificacion) {
            res.json(operacionClasificacion); // Devuelve la operacionClasificacion si se encuentra
        }
        else {
            res.status(404).json({ message: 'operacionClasificacion no encontrada' }); // Devuelve un error 404 si la operacionClasificacion no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
exports.default = router; // Exporta el enrutador de express
