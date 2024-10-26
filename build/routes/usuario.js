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
const usuariosService_1 = __importDefault(require("../services/usuariosService")); // Importa el módulo 'usuariosService' que contiene los métodos para manejar usuarios
const router = express_1.default.Router(); // Crea un enrutador de express
// Ruta para obtener todos los usuarios
router.get('/usuarios', usuariosService_1.default.getUsers);
// Ruta para obtener un usuario por correo electrónico
router.get('/usuarios/getUsuario/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield usuariosService_1.default.getUserByEmail(req.params.email); // Obtiene el usuario por correo electrónico
        console.log(usuario);
        if (usuario) {
            res.json(usuario); // Devuelve el usuario si se encuentra
        }
        else {
            res.status(404).json({ message: 'Usuario no encontrado' }); // Devuelve un error 404 si el usuario no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para agregar un nuevo usuario
router.post('/usuarios/addUsuario', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = yield usuariosService_1.default.addUser(req.body); // Agrega un nuevo usuario
        res.status(201).json(usuario); // Devuelve el usuario añadido con un código de estado 201
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para eliminar un usuario por correo electrónico
router.delete('/usuarios/deleteUsuario/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const result = yield usuariosService_1.default.deleteUser(email); // Elimina el usuario por correo electrónico
        res.json(result); // Devuelve el resultado de la eliminación
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
// Ruta para actualizar un usuario por correo electrónico
router.put('/usuarios/updateUsuario/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const { nombre, apellido, telefono, password } = req.body;
        if (!nombre || !apellido || !telefono || !password) {
            res.status(400).json({ message: "Bad Request. Please fill all fields." }); // Devuelve un error 400 si no se proporcionan todos los campos
            return;
        }
        const user = { nombre, apellido, email, telefono, password }; // Crea un objeto de usuario con los datos actualizados
        const result = yield usuariosService_1.default.updateUser(email, user); // Actualiza el usuario
        res.json(result); // Devuelve el resultado de la actualización
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
router.post('/usuarios/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: "Bad Request. Please provide email and password." });
            return;
        }
        const usuario = yield usuariosService_1.default.login(email, password);
        if (!usuario) {
            res.status(400).json({ error: "Invalid email or password." });
            return;
        }
        res.status(200).json({ message: "Login successful.", usuario });
    }
    catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: "Internal Server Error. Please try again later." });
    }
}));
exports.default = router; // Exporta el enrutador
