"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clasificaciones_1 = __importDefault(require("./routes/clasificaciones"));
const escalas_1 = __importDefault(require("./routes/escalas"));
const operacion_clasificaciones_1 = __importDefault(require("./routes/operacion_clasificaciones"));
const operacion_periodicidades_1 = __importDefault(require("./routes/operacion_periodicidades"));
const operacion_unidades_1 = __importDefault(require("./routes/operacion_unidades"));
const operacion_variables_1 = __importDefault(require("./routes/operacion_variables"));
const operacion_1 = __importDefault(require("./routes/operacion"));
const periodicidades_1 = __importDefault(require("./routes/periodicidades"));
const publicaciones_1 = __importDefault(require("./routes/publicaciones"));
const series_1 = __importDefault(require("./routes/series"));
const tablas_1 = __importDefault(require("./routes/tablas"));
const unidades_1 = __importDefault(require("./routes/unidades"));
const valores_1 = __importDefault(require("./routes/valores"));
const variable_1 = __importDefault(require("./routes/variable"));
const variables_series_1 = __importDefault(require("./routes/variables_series"));
const app = (0, express_1.default)();
const cors = require('cors'); // Importa el middleware cors
//middlewares que transforma la req.body en json
app.use(express_1.default.json());
app.use(cors());
//definimos el puerto
const PORT = 3000;
app.get('/ping', (req, res) => {
    res.send('Hello World');
});
app.use(clasificaciones_1.default);
app.use(escalas_1.default);
app.use(operacion_clasificaciones_1.default);
app.use(operacion_periodicidades_1.default);
app.use(operacion_unidades_1.default);
app.use(operacion_variables_1.default);
app.use(operacion_1.default);
app.use(periodicidades_1.default);
app.use(publicaciones_1.default);
app.use(series_1.default);
app.use(tablas_1.default);
app.use(unidades_1.default);
app.use(valores_1.default);
app.use(variable_1.default);
app.use(variables_series_1.default);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
