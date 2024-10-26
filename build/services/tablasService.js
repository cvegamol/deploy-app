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
exports.tablasMethods = void 0;
const database_1 = __importDefault(require("./../database/database")); // Importa la función de conexión a la base de datos
/**
 * Función para obtener todas las tablas
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 */
const getTables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query("SELECT * FROM tablas");
        res.json(result); // Devuelve las tablas como respuesta
        return result;
    }
    catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' }); // Devuelve un error 500 si falla la consulta
    }
});
/**
 * Función para obtener una tabla por id
 * @param {number} id - Id de la tabla a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getTableById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM tablas WHERE id = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la tabla por id', status: 500 };
    }
});
/**
 * Función para obtener una tabla por FK_Periodicidad
 * @param {number} id - Id de la tabla a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getTableByFkPeriodicity = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM tablas WHERE FK_Periodicidad = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la tabla por id', status: 500 };
    }
});
/**
 * Función para obtener una tabla por FK_Publicacion
 * @param {number} id - Id de la tabla a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getTableByFkPublication = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM tablas WHERE FK_Publicacion = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la tabla por id', status: 500 };
    }
});
/**
 * Función para obtener una tabla por FK_Periodo_ini
 * @param {number} id - Id de la tabla a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getTableByFkPeriodIni = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM tablas WHERE FK_Periodo_ini = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la tabla por id', status: 500 };
    }
});
/**
 * Función para obtener una tabla por Código y FK_Publicación
 * @param {string} codigo - Código de la tabla a buscar
 * @param {number} fkPublicacion - FK_Publicación de la tabla
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getTableByCodeAndFkPublication = (codigo, fkPublicacion) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const query = 'SELECT * FROM tablas WHERE Codigo LIKE ? AND FK_Publicacion = ? ORDER BY Nombre';
        const result = yield connection.query(query, [`%${codigo}%`, fkPublicacion]);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la tabla por Código y FK_Publicación', status: 500 };
    }
});
exports.tablasMethods = { getTables, getTableById, getTableByFkPeriodicity, getTableByFkPublication, getTableByFkPeriodIni, getTableByCodeAndFkPublication }; // Exporta los métodos de tablas
exports.default = exports.tablasMethods; // Exporta los métodos de tablas por defecto
