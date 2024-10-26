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
exports.escalasMethods = void 0;
const database_1 = __importDefault(require("./../database/database"));
const axios_1 = __importDefault(require("axios"));
/**
 * Función para obtener todas las escalas
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 */
const getScales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query("SELECT * FROM escalas");
        res.json(result); // Devuelve las escalas como respuesta
        return result;
    }
    catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' }); // Devuelve un error 500 si falla la consulta
    }
});
/**
 * Función para obtener una escala por id
 * @param {number} id - Id de la escala a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getScaleById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM escalas WHERE id = ' + id);
        if (Array.isArray(result) && result.every(() => false)) {
            const apiUrl = `https://servicios.ine.es/wstempus/js/ES/Escala/${id}`;
            const response = yield axios_1.default.get(apiUrl);
            const dataFromAPI = response.data;
            console.log("Datos de la API:", dataFromAPI);
            return dataFromAPI;
        }
        else {
            return result;
        }
    }
    catch (error) {
        throw { message: 'Error al obtener la escala por id', status: 500 };
    }
});
exports.escalasMethods = { getScales, getScaleById }; // Exporta los métodos de escalas
exports.default = exports.escalasMethods; // Exporta los métodos de escalas por defecto
