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
const variables_seriesService_1 = require("./../services/variables_seriesService");
const express_1 = __importDefault(require("express")); // Importa el módulo express y sus tipos de solicitud y respuesta
const router = express_1.default.Router(); // Crea un enrutador de express
// Ruta para obtener todas las variables_series
router.get('/variables_series', variables_seriesService_1.variables_series.getVariableSeries);
// Ruta para obtener una variable_series por variableId
router.get('/variables_series/getVariableSeriesByVariableId/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const variable_series = yield variables_seriesService_1.variables_series.getVariableSeriesByVariableId(Number(req.params.id)); // Obtiene la variable_series por variableId
        if (variable_series) {
            res.json(variable_series); // Devuelve la variable_series si se encuentra
        }
        else {
            res.status(404).json({ message: 'variable_series no encontrada' }); // Devuelve un error 404 si la variable_series no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una variable_series por serieId
router.get('/variables_series/getVariableSeriesBySerieId/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const variable_series = yield variables_seriesService_1.variables_series.getVariableSeriesBySerieId(Number(req.params.id)); // Obtiene la variable_series por serieId
        if (variable_series) {
            res.json(variable_series); // Devuelve la variable_series si se encuentra
        }
        else {
            res.status(404).json({ message: 'variable_series no encontrada' }); // Devuelve un error 404 si la variable_series no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
exports.default = router; // Exporta el enrutador de variables_series por defecto
