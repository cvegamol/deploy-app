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
const operacionService_1 = require("./../services/operacionService");
const router = express_1.default.Router(); // Crea un enrutador de express
// Ruta para obtener todas las operaciones
router.get('/operaciones', operacionService_1.operacionesMethods.getOperations);
// Ruta para obtener una operacion por id
router.get('/operaciones/getOperationById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const operacion = yield operacionService_1.operacionesMethods.getOperationById(Number(req.params.id)); // Obtiene la operacion por id
        if (operacion) {
            res.json(operacion); // Devuelve la operacion si se encuentra
        }
        else {
            res.status(404).json({ message: 'operacion no encontrada' }); // Devuelve un error 404 si la operacion no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una operacion por Codigo
router.get('/operaciones/getOperationByCod/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const operacion = yield operacionService_1.operacionesMethods.getOperationByCode(Number(req.params.id)); // Obtiene la operacion por COD
        if (operacion) {
            res.json(operacion); // Devuelve la operacion si se encuentra
        }
        else {
            res.status(404).json({ message: 'operacion no encontrada' }); // Devuelve un error 404 si la operacion no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una operacion por Cod_IOE
router.get('/operaciones/getOperationByCodIOE/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const operacion = yield operacionService_1.operacionesMethods.getOperationByCodIOE(Number(req.params.id)); // Obtiene la operacion por Cod_IOE
        if (operacion) {
            res.json(operacion); // Devuelve la operacion si se encuentra
        }
        else {
            res.status(404).json({ message: 'operacion no encontrada' }); // Devuelve un error 404 si la operacion no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
exports.default = router; // Exporta el enrutador de express
