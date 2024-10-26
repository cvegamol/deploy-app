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
const tablasService_1 = require("./../services/tablasService");
const express_1 = __importDefault(require("express")); // Importa el módulo express y sus tipos de solicitud y respuesta
const router = express_1.default.Router(); // Crea un enrutador de express
// Ruta para obtener todas las tablas
router.get('/tablas', tablasService_1.tablasMethods.getTables);
// Ruta para obtener una tabla por id
router.get('/tablas/getTableById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tabla = yield tablasService_1.tablasMethods.getTableById(Number(req.params.id)); // Obtiene la tabla por id
        if (tabla) {
            res.json(tabla); // Devuelve la tabla si se encuentra
        }
        else {
            res.status(404).json({ message: 'tabla no encontrada' }); // Devuelve un error 404 si la tabla no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una tabla por FK_Periodicidad
router.get('/tablas/getTableByFkPeriodicity/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tabla = yield tablasService_1.tablasMethods.getTableByFkPeriodicity(Number(req.params.id)); // Obtiene la tabla por FK_Periodicidad
        if (tabla) {
            res.json(tabla); // Devuelve la tabla si se encuentra
        }
        else {
            res.status(404).json({ message: 'tabla no encontrada' }); // Devuelve un error 404 si la tabla no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una tabla por FK_Publicacion
router.get('/tablas/getTableByFkPublication/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tabla = yield tablasService_1.tablasMethods.getTableByFkPublication(Number(req.params.id)); // Obtiene la tabla por FK_Publicacion
        if (tabla) {
            res.json(tabla); // Devuelve la tabla si se encuentra
        }
        else {
            res.status(404).json({ message: 'tabla no encontrada' }); // Devuelve un error 404 si la tabla no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para obtener una tabla por FK_Periodo_ini
router.get('/tablas/getTableByFkPeriodoIni/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tabla = yield tablasService_1.tablasMethods.getTableByFkPeriodIni(Number(req.params.id)); // Obtiene la tabla por FK_Periodo_ini
        if (tabla) {
            res.json(tabla); // Devuelve la tabla si se encuentra
        }
        else {
            res.status(404).json({ message: 'tabla no encontrada' }); // Devuelve un error 404 si la tabla no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Nueva ruta para obtener una tabla por Código y FK_Publicación usando parámetros en la URL
router.get('/tablas/getTableByCodeAndFkPublication/:code/:fk_publicacion', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code, fk_publicacion } = req.params; // Obtiene los parámetros de la URL
        if (!code || !fk_publicacion) {
            return res.status(400).json({ message: 'Faltan parámetros: code y fk_publicacion son requeridos' });
        }
        const tablas = yield tablasService_1.tablasMethods.getTableByCodeAndFkPublication(code, Number(fk_publicacion)); // Llama al método correspondiente en tablasMethods
        if (tablas && tablas.length > 0) {
            res.json(tablas); // Devuelve las tablas si se encuentran
        }
        else {
            res.status(404).json({ message: 'No se encontraron tablas con los criterios proporcionados' }); // Devuelve un error 404 si no se encuentran tablas
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
exports.default = router; // Exporta el enrutador de tablas por defecto
