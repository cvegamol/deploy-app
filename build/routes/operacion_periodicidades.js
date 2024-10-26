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
const operacion_periodicidadesService_1 = require("./../services/operacion_periodicidadesService");
const router = express_1.default.Router(); // Crea un enrutador de express
// Ruta para obtener todas las operaciones_periodicidades
router.get('/operacion_periodicidades', operacion_periodicidadesService_1.operacionPeriodicidades.getOperationPeriodicities);
// Ruta para obtener una operacion_periodicidad por OperacionID
router.get('/operacion_periodicidades/getOperationPeriodicityByOperationId/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const operacionPeriodicidad = yield operacion_periodicidadesService_1.operacionPeriodicidades.getOperationPeriodicityByOperationId(Number(req.params.id)); // Obtiene la operacion_periodicidad por OperacionID
        if (operacionPeriodicidad) {
            res.json(operacionPeriodicidad); // Devuelve la operacion_periodicidad si se encuentra
        }
        else {
            res.status(404).json({ message: 'operacion_periodicidad no encontrada' }); // Devuelve un error 404 si la operacion_periodicidad no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una operacion_periodicidad por PeriodicidadID
router.get('/operacion_periodicidades/getOperationPeriodicityByPeriodicityId/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const operacionPeriodicidad = yield operacion_periodicidadesService_1.operacionPeriodicidades.getOperationPeriodicityByPeriodicityId(Number(req.params.id)); // Obtiene la operacion_periodicidad por PeriodicidadID
        if (operacionPeriodicidad) {
            res.json(operacionPeriodicidad); // Devuelve la operacion_periodicidad si se encuentra
        }
        else {
            res.status(404).json({ message: 'operacion_periodicidad no encontrada' }); // Devuelve un error 404 si la operacion_periodicidad no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
exports.default = router; // Exporta el enrutador de express
