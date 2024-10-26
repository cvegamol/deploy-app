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
exports.operacionesUnidadesMethods = void 0;
const database_1 = __importDefault(require("./../database/database")); // Importa la función de conexión a la base de datos
/**
 * Función para obtener todas las operacion_unidades
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 */
const getOperationUnits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query("SELECT * FROM operacion_unidad");
        res.json(result); // Devuelve las operacion_unidades como respuesta
        return result;
    }
    catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' }); // Devuelve un error 500 si falla la consulta
    }
});
/**
 * Función para obtener una operacion_unidad por operacionId
 * @param {number} id - Id de la operacion_unidad a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getOperationUnitByOperationId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM operacion_unidades WHERE operacionId = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la operacion_unidad por id', status: 500 };
    }
});
/**
 * Función para obtener una operacion_unidad por unidadId
 * @param {number} id - Id de la operacion_unidad a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getOperationUnitByUnitId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM operacion_unidades WHERE unidadId = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la operacion_unidad por id', status: 500 };
    }
});
exports.operacionesUnidadesMethods = { getOperationUnits, getOperationUnitByOperationId, getOperationUnitByUnitId }; // Exporta los métodos de operacion_unidades
exports.default = exports.operacionesUnidadesMethods; // Exporta los métodos de operacion_unidades por defecto
