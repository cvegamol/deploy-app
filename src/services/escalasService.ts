import bcrypt from 'bcryptjs'; // Importa bcryptjs para el hashing de contraseñas
import getConnection from "./../database/database";
import axios from 'axios';
/**
 * Función para obtener todas las escalas
 * @param {Object} req - Objeto de solicitud HTTP
 * @param {Object} res - Objeto de respuesta HTTP
 */
const getScales = async (req:any, res:any) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM escalas");
        res.json(result); // Devuelve las escalas como respuesta
        return result;
    } catch (error: any) {
        res.status(500).json({ error: 'Error interno del servidor' }); // Devuelve un error 500 si falla la consulta
    }
}

/**
 * Función para obtener una escala por id
 * @param {number} id - Id de la escala a buscar
 * @returns {Promise} - Promesa que resuelve con el resultado de la consulta
 */

const getScaleById = async (id: number): Promise<any> => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM escalas WHERE id = ' + id) as any[];

        if (Array.isArray(result) && result.every(() => false)) {
            const apiUrl = `https://servicios.ine.es/wstempus/js/ES/Escala/${id}`;
            const response = await axios.get(apiUrl);
            const dataFromAPI = response.data;
            console.log("Datos de la API:", dataFromAPI);

            return dataFromAPI;
        } else {
            return result;
        }
    } catch (error: any) {
        throw { message: 'Error al obtener la escala por id', status: 500 };
    }
};


export const escalasMethods= { getScales, getScaleById }; // Exporta los métodos de escalas
export default escalasMethods; // Exporta los métodos de escalas por defecto