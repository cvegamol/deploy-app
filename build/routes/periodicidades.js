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
const periodicidadesService_1 = require("./../services/periodicidadesService");
const express_1 = __importDefault(require("express")); // Importa el módulo express y sus tipos de solicitud y respuesta
const router = express_1.default.Router(); // Crea un enrutador de express
// Ruta para obtener todas las periodicidades
router.get('/periodicidades', periodicidadesService_1.periodicidadesMethods.getPeriodicities);
// Ruta para obtener una periodicidad por id
router.get('/periodicidades/getPeriodicidadById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const periodicidad = yield periodicidadesService_1.periodicidadesMethods.getPeriodicityById(Number(req.params.id)); // Obtiene la periodicidad por id
        if (periodicidad) {
            res.json(periodicidad); // Devuelve la periodicidad si se encuentra
        }
        else {
            res.status(404).json({ message: 'periodicidad no encontrada' }); // Devuelve un error 404 si la periodicidad no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una periodicidad por FK_Operacion
router.get('/periodicidades/getPeriodicidadByFkOperation/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const periodicidad = yield periodicidadesService_1.periodicidadesMethods.getPeriodicityByFkOperation(Number(req.params.id)); // Obtiene la periodicidad por FK_Operacion
        if (periodicidad) {
            res.json(periodicidad); // Devuelve la periodicidad si se encuentra
        }
        else {
            res.status(404).json({ message: 'periodicidad no encontrada' }); // Devuelve un error 404 si la periodicidad no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
exports.default = router; // Exporta el enrutador de express
