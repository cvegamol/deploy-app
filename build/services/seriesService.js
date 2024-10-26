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
exports.seriesMethods = void 0;
const database_1 = __importDefault(require("./../database/database")); // Importa la función de conexión a la base de datos
const axios_1 = __importDefault(require("axios"));
/**
 * Función para obtener todas las series
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 */
const getSeries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query("SELECT * FROM series");
        res.json(result); // Devuelve las series como respuesta
        return result;
    }
    catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' }); // Devuelve un error 500 si falla la consulta
    }
});
/**
 * Función para obtener una serie por id
 * @param {number} id - Id de la serie a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getSeriesById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM series WHERE id = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la serie por id', status: 500 };
    }
});
/**
 * Función para obtener una serie por COD
 * @param {number} id - Id de la serie a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getSeriesByCod = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM series WHERE COD = ?', [id]);
        if (Array.isArray(result) && result.every(() => false)) {
            console.log(`No se encontraron resultados para el COD: ${id}. Realizando consulta a la API...`);
            // URL de la API del INE para obtener la serie por COD
            const apiUrl = `https://servicios.ine.es/wstempus/js/ES/SERIE/${id}`;
            // Realizar llamada GET a la API del INE
            const response = yield axios_1.default.get(apiUrl);
            // Obtener los datos de la respuesta de la API
            const dataFromAPI = response.data;
            console.log("Datos de la API:", dataFromAPI);
            // Guardar o procesar los datos obtenidos de la API en tu base de datos, si es necesario
            return dataFromAPI;
        }
        else {
            return result;
        }
    }
    catch (error) {
        throw { message: 'Error al obtener la serie por id', status: 500 };
    }
});
/**
 * Función para obtener una serie por FK_Operacion
 * @param {number} id - Id de la serie a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getSeriesByFkOperation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM series WHERE FK_Operacion = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la serie por id', status: 500 };
    }
});
/**
 * Función para obtener una serie por FK_Periodicidad
 * @param {number} id - Id de la serie a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getSeriesByFkPeriodicity = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM series WHERE FK_Periodicidad = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la serie por id', status: 500 };
    }
});
/**
 * Función para obtener una serie por FK_Pulicacion
 * @param {number} id - Id de la serie a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getSeriesByFkPublication = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM series WHERE FK_Publicacion = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la serie por id', status: 500 };
    }
});
/**
 * Función para obtener una serie por FK_Clasificacion
 * @param {number} id - Id de la serie a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getSeriesByFkClassification = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM series WHERE FK_Clasificacion = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la serie por id', status: 500 };
    }
});
/**
 * Función para obtener una serie por FK_Escala
 * @param {number} id - Id de la serie a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getSeriesByFkScale = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM series WHERE FK_Escala = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la serie por id', status: 500 };
    }
});
/**
 * Función para obtener una serie por FK_Unidad
 * @param {number} id - Id de la serie a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getSeriesByFkUnit = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM series WHERE FK_Unidad = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la serie por id', status: 500 };
    }
});
exports.seriesMethods = { getSeries, getSeriesById, getSeriesByCod, getSeriesByFkOperation, getSeriesByFkPeriodicity, getSeriesByFkPublication, getSeriesByFkClassification, getSeriesByFkScale, getSeriesByFkUnit }; // Exporta los métodos de series
exports.default = exports.seriesMethods; // Exporta los métodos de series por defecto
