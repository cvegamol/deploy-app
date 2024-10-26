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
const seriesService_1 = require("./../services/seriesService");
const router = express_1.default.Router(); // Crea un enrutador de express
// Ruta para obtener todas las series
router.get('/series', seriesService_1.seriesMethods.getSeries);
// Ruta para obtener una serie por id
router.get('/series/getSerieById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serie = yield seriesService_1.seriesMethods.getSeriesById(Number(req.params.id)); // Obtiene la serie por id
        if (serie) {
            res.json(serie); // Devuelve la serie si se encuentra
        }
        else {
            res.status(404).json({ message: 'serie no encontrada' }); // Devuelve un error 404 si la serie no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una serie por COD
router.get('/series/getSerieByCod/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serie = yield seriesService_1.seriesMethods.getSeriesByCod(String(req.params.id)); // Obtiene la serie por COD
        if (serie) {
            res.json(serie); // Devuelve la serie si se encuentra
        }
        else {
            res.status(404).json({ message: 'serie no encontrada' }); // Devuelve un error 404 si la serie no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una serie por FK_Operacion
router.get('/series/getSerieByFkOperation/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serie = yield seriesService_1.seriesMethods.getSeriesByFkOperation(Number(req.params.id)); // Obtiene la serie por FK_Operacion
        if (serie) {
            res.json(serie); // Devuelve la serie si se encuentra
        }
        else {
            res.status(404).json({ message: 'serie no encontrada' }); // Devuelve un error 404 si la serie no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una serie por FK_Periodicidad
router.get('/series/getSerieByFkPeriodicidad/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serie = yield seriesService_1.seriesMethods.getSeriesByFkPeriodicity(Number(req.params.id)); // Obtiene la serie por FK_Periodicidad
        if (serie) {
            res.json(serie); // Devuelve la serie si se encuentra
        }
        else {
            res.status(404).json({ message: 'serie no encontrada' }); // Devuelve un error 404 si la serie no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una serie por FK_Publicacion
router.get('/series/getSerieByFkPublicacion/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serie = yield seriesService_1.seriesMethods.getSeriesByFkPublication(Number(req.params.id)); // Obtiene la serie por FK_Publicacion
        if (serie) {
            res.json(serie); // Devuelve la serie si se encuentra
        }
        else {
            res.status(404).json({ message: 'serie no encontrada' }); // Devuelve un error 404 si la serie no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una serie por FK_Clasificacion
router.get('/series/getSerieByFkClasificacion/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serie = yield seriesService_1.seriesMethods.getSeriesByFkClassification(Number(req.params.id)); // Obtiene la serie por FK_Clasificacion
        if (serie) {
            res.json(serie); // Devuelve la serie si se encuentra
        }
        else {
            res.status(404).json({ message: 'serie no encontrada' }); // Devuelve un error 404 si la serie no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una serie por FK_Escala
router.get('/series/getSerieByFkEscala/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serie = yield seriesService_1.seriesMethods.getSeriesByFkScale(Number(req.params.id)); // Obtiene la serie por FK_Escala
        if (serie) {
            res.json(serie); // Devuelve la serie si se encuentra
        }
        else {
            res.status(404).json({ message: 'serie no encontrada' }); // Devuelve un error 404 si la serie no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para una serie por FK_Unidad
router.get('/series/getSerieByFkUnidad/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serie = yield seriesService_1.seriesMethods.getSeriesByFkUnit(Number(req.params.id)); // Obtiene la serie por FK_Unidad
        if (serie) {
            res.json(serie); // Devuelve la serie si se encuentra
        }
        else {
            res.status(404).json({ message: 'serie no encontrada' }); // Devuelve un error 404 si la serie no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
exports.default = router; // Exporta el enrutador de series por defecto
