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
const unidadesService_1 = require("./../services/unidadesService");
const express_1 = __importDefault(require("express")); // Importa el módulo express y sus tipos de solicitud y respuesta
const router = express_1.default.Router(); // Crea un enrutador de express
// Ruta para obtener todas las unidades
router.get('/unidades', unidadesService_1.unidadesMethods.getUnits);
// Ruta para obtener una unidad por id
router.get('/unidades/getUnitById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const unidad = yield unidadesService_1.unidadesMethods.getUnitById(Number(req.params.id)); // Obtiene la unidad por id
        if (unidad) {
            res.json(unidad); // Devuelve la unidad si se encuentra
        }
        else {
            res.status(404).json({ message: 'unidad no encontrada' }); // Devuelve un error 404 si la unidad no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
exports.default = router; // Exporta el enrutador de unidades por defecto
