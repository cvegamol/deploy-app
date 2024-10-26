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
const escalasService_1 = require("./../services/escalasService");
const express_1 = __importDefault(require("express")); // Importa el módulo express y sus tipos de solicitud y respuesta
const router = express_1.default.Router(); // Crea un enrutador de express
// Ruta para obtener todas las escalas
router.get('/escalas', escalasService_1.escalasMethods.getScales);
// Ruta para obtener una escala por id
router.get('/escalas/getScaleById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const escala = yield escalasService_1.escalasMethods.getScaleById(Number(req.params.id)); // Obtiene la escala por id
        if (escala) {
            res.json(escala); // Devuelve la escala si se encuentra
        }
        else {
            res.status(404).json({ message: 'escala no encontrada' }); // Devuelve un error 404 si la escala no se encuentra
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message }); // Devuelve un error 500 si hay algún error en el servidor
    }
}));
exports.default = router; // Exporta el enrutador de express
