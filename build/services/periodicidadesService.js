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
exports.periodicidadesMethods = void 0;
const database_1 = __importDefault(require("./../database/database")); // Importa la función de conexión a la base de datos
/**
 * Función para obtener todas las periodicidades
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 */
const getPeriodicities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query("SELECT * FROM periodicidades");
        res.json(result); // Devuelve las periodicidades como respuesta
        return result;
    }
    catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' }); // Devuelve un error 500 si falla la consulta
    }
});
/**
 * Función para obtener una periodicidad por id
 * @param {number} id - Id de la periodicidad a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getPeriodicityById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM periodicidades WHERE id = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la periodicidad por id', status: 500 };
    }
});
/**
 * Función para obtener una periodicidad por FK_Operacion
 * @param {number} id - Id de la periodicidad a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getPeriodicityByFkOperation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query('SELECT * FROM periodicidades WHERE FK_Operacion = ' + id);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener la periodicidad por id', status: 500 };
    }
});
exports.periodicidadesMethods = { getPeriodicities, getPeriodicityById, getPeriodicityByFkOperation }; // Exporta los métodos de periodicidades
exports.default = exports.periodicidadesMethods; // Exporta los métodos de periodicidades por defecto
