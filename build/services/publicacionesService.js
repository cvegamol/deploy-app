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
exports.publicacionesMethods = void 0;
const database_1 = __importDefault(require("./../database/database")); // Importa la función de conexión a la base de datos
/**
 * Función para obtener todas las publicaciones
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 */
const getPublications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query("SELECT * FROM publicaciones");
        res.json(result); // Devuelve las publicaciones como respuesta
        return result;
    }
    catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' }); // Devuelve un error 500 si falla la consulta
    }
});
/**
 * Función para obtener una publicación por id
 * @param {number} id - Id de la publicación a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getPublicationById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM publicaciones WHERE id = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la publicación por id', status: 500 };
    }
});
/**
 * Función para obtener una publicación por FK_Periodicidad
 * @param {number} id - Id de la publicación a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getPublicationByFkPeriodicity = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM publicaciones WHERE FK_Periodicidad = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la publicación por id', status: 500 };
    }
});
/**
 * Función para obtener una publicación por FK_Operacion
 * @param {number} id - Id de la publicación a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getPublicationByFkOperation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM publicaciones WHERE FK_Operacion = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la publicación por id', status: 500 };
    }
});
/**
 * Función para obtener una publicación por FK_PubFechaAct
 * @param {number} id - Id de la publicación a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getPublicationByFkPubDateAct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM publicaciones WHERE FK_PubFechaAct = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la publicación por id', status: 500 };
    }
});
exports.publicacionesMethods = { getPublications, getPublicationById, getPublicationByFkPeriodicity, getPublicationByFkOperation, getPublicationByFkPubDateAct }; // Exporta los métodos de publicaciones
exports.default = exports.publicacionesMethods; // Exporta los métodos de publicaciones por defecto
