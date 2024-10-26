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
const valoresService_1 = require("./../services/valoresService");
const express_1 = __importDefault(require("express")); // Importa el módulo express y sus tipos de solicitud y respuesta
const router = express_1.default.Router(); // Crea un enrutador de express
// Ruta para obtener todas las valores
router.get('/valores', valoresService_1.valoresMethods.getValores);
// Ruta para obtener una valor por id
router.get('/valores/getValorById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valor = yield valoresService_1.valoresMethods.getValorById(Number(req.params.id)); // Obtiene la valor por id
        if (valor) {
            res.json(valor); // Devuelve la valor si se encuentra
        }
        else {
            res.status(404).json({ message: 'valor no encontrada' }); // Devuelve un error 404 si la valor no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una valor por Fk_Variable
router.get('/valores/getValorByFkVariable/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const valor = yield valoresService_1.valoresMethods.getValorByFkVariable(Number(req.params.id)); // Obtiene la valor por Fk_Variable
        if (valor) {
            res.json(valor); // Devuelve la valor si se encuentra
        }
        else {
            res.status(404).json({ message: 'valor no encontrada' }); // Devuelve un error 404 si la valor no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
exports.default = router; // Exporta el enrutador de valores por defecto
