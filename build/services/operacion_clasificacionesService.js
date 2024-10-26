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
exports.operacionClasificacionesMethods = void 0;
const database_1 = __importDefault(require("./../database/database"));
/**
 * Función para obtener todas las operacion_clasificaciones
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 */
const getOperationClassifications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query("SELECT * FROM operacion_clasificacion");
        res.json(result); // Devuelve las operacion_clasificaciones como respuesta
        return result;
    }
    catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' }); // Devuelve un error 500 si falla la consulta
    }
});
/**
 * Función para obtener una operacion_clasificacion por operacion_id
 * @param {number} id - Id de la operacion_clasificacion a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getOperationClassificationByOperationId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM operacion_clasificaciones WHERE operacionId = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la operacion_clasificacion por id', status: 500 };
    }
});
/**
 * Función para obtener una operacion_clasificacion por clasificacion_id
 * @param {number} id - Id de la operacion_clasificacion a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getOperationClassificationByClasificacionId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM operacion_clasificaciones WHERE clasificacionId = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la operacion_clasificacion por id', status: 500 };
    }
});
exports.operacionClasificacionesMethods = { getOperationClassifications, getOperationClassificationByOperationId, getOperationClassificationByClasificacionId }; // Exporta los métodos de operacion_clasificaciones
exports.default = exports.operacionClasificacionesMethods; // Exporta los métodos de operacion_clasificaciones por defecto
