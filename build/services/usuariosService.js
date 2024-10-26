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
exports.userMethods = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs")); // Importa bcryptjs para el hashing de contraseñas
const database_1 = __importDefault(require("./../database/database")); // Importa la función de conexión a la base de datos
/**
 * Función para obtener todos los usuarios
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 */
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query("SELECT * FROM usuarios");
        res.json(result); // Devuelve los usuarios como respuesta
        return result;
    }
    catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' }); // Devuelve un error 500 si falla la consulta
    }
});
/**
 * Función para obtener un usuario por correo electrónico
 * @param {string} email - Correo electrónico del usuario a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const escapedEmail = connection.escape(email);
        const result = yield connection.query('SELECT * FROM usuarios WHERE email = ' + escapedEmail);
        return result;
    }
    catch (error) {
        throw { message: 'Error al obtener el usuario por correo electrónico', status: 500 };
    }
});
/**
 * Función para agregar un nuevo usuario
 * @param {Object} usuario - Datos del nuevo usuario
 * @returns {Promise} - Promesa que resuelve con el resultado de la inserción
 */
const addUser = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const hashedPassword = yield bcryptjs_1.default.hash(usuario.password, 10); // Hashea la contraseña antes de guardarla
        const userToSave = Object.assign(Object.assign({}, usuario), { password: hashedPassword });
        const result = yield connection.query('INSERT INTO usuarios SET ?', userToSave);
        return result;
    }
    catch (error) {
        throw { message: 'Error al agregar el usuario', status: 500 };
    }
});
/**
 * Función para actualizar un usuario existente
 * @param {string} email - Correo electrónico del usuario a actualizar
 * @param {Usuario} user - Datos actualizados del usuario
 * @returns {Promise} - Promesa que resuelve con el resultado de la actualización
 */
const updateUser = (email, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query("UPDATE usuarios SET ? WHERE email = ?", [user, email]);
        return result;
    }
    catch (error) {
        throw { message: 'Error al actualizar el usuario', status: 500 };
    }
});
/**
 * Función para el inicio de sesión
 * @param {string} email - Correo electrónico del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {Promise} - Promesa que resuelve con los datos del usuario si la autenticación es exitosa
 */
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query("SELECT * FROM usuarios WHERE email = ?", email);
        if (result.length === 0) {
            return null; // No se encontró el usuario
        }
        const user = result[0];
        const passwordMatch = yield bcryptjs_1.default.compare(password, user.password); // Compara las contraseñas
        if (!passwordMatch) {
            return null; // La contraseña es incorrecta
        }
        return user;
    }
    catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw { message: 'Error al iniciar sesión', status: 500 };
    }
});
/**
 * Función para eliminar un usuario
 * @param {string} email - Correo electrónico del usuario a eliminar
 * @returns {Promise} - Promesa que resuelve con el resultado de la eliminación
 */
const deleteUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, database_1.default)();
        const result = yield connection.query("DELETE FROM usuarios WHERE email = ?", email);
        return result;
    }
    catch (error) {
        throw { message: 'Error al eliminar el usuario', status: 500 };
    }
});
// Exporta todas las funciones como métodos del usuario
exports.userMethods = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    getUserByEmail,
    login
};
exports.default = exports.userMethods;
