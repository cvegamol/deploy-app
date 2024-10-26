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
const variableService_1 = __importDefault(require("../services/variableService")); // Importa el módulo 'usuariosService' que contiene los métodos para manejar usuarios
const router = express_1.default.Router(); // Crea un enrutador de express
// Ruta para obtener todos las Variables
router.get('/variables', variableService_1.default.getVariables);
// Ruta para obtener una variable por csu id 
router.get('/variables/getVariable/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const variable = yield variableService_1.default.getVariableById(Number(req.params.id)); // Convert the id to a number
        console.log(variable);
        if (variable) {
            res.json(variable); // Devuelve la variable si se encuentra
        }
        else {
            res.status(404).json({ message: 'Variable no encontrada' }); // Devuelve un error 404 si la variable no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
exports.default = router; // Exporta el enrutador de variables por defecto
