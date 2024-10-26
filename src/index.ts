import express from 'express';
import clasificacionesRouter from './routes/clasificaciones';
import escalasRouter from './routes/escalas';
import operacion_clasificaciones from './routes/operacion_clasificaciones';
import operacion_periodicidades from './routes/operacion_periodicidades';
import operacion_unidades from './routes/operacion_unidades';
import operacion_variable from './routes/operacion_variables';
import operacion from './routes/operacion';
import periodicidades from './routes/periodicidades';
import publicaciones from './routes/publicaciones';
import series from './routes/series';
import tablas from  './routes/tablas';
import unidades from './routes/unidades';
import valores from './routes/valores';
import variable from './routes/variable';
import variables_series from './routes/variables_series';
const app = express();
const cors = require('cors'); // Importa el middleware cors

//middlewares que transforma la req.body en json
app.use(express.json()); 
app.use(cors());
//definimos el puerto
const PORT = 3000;

app.get('/ping', (req, res) => {
        
    res.send('Hello World');
});
app.use( clasificacionesRouter);
app.use( escalasRouter);
app.use( operacion_clasificaciones);
app.use( operacion_periodicidades);
app.use (operacion_unidades);
app.use( operacion_variable);
app.use( operacion);
app.use( periodicidades);
app.use( publicaciones);
app.use( series);
app.use( tablas);
app.use( unidades);
app.use( valores);
app.use( variable);
app.use( variables_series);


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});



