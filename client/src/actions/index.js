import axios from 'axios';
export const GET_RAZA = 'GET_RAZA';
export const GET_DETAILS = 'GET_DETAILS';
export const CREATE_RAZA = 'CREATE_RAZA';
export const GET_TEMPS = 'GET_TEMPS';
// export const REMOVE_RAZA = 'REMOVE_RAZA';
// export const FILTRAR_X_TEMP = 'FILTRAR_X_TEMP';
// export const FILTRAR_X_RAZA = 'FILTRAR_X_RAZA';
// export const ORDENAR_X_NOMBRE = 'ORDENAR_X_NOMBRE';
// export const ORDENAR_X_PESO = 'ORDENAR_X_PESO';

export function getRaza(nombre) {
    return async (dispatch) => {
        try {
            if(nombre){
                let resultado = await axios.get('http://localhost:3001/dogs?name=' + nombre)
                dispatch({ type:GET_RAZA, payload:resultado.data})
            } else {
                let resultado = await axios.get('http://localhost:3001/dogs')
                dispatch({ type:GET_RAZA, payload:resultado.data})
            }
        } catch (err) {
            console.log(err);
        }
    }
};

export function getDetails(id) {
    return async function (dispatch) {
        let res = await axios.get('http://localhost:3001/dogs/' + id)
                dispatch({ type:GET_DETAILS, payload:res.data})
        }
};

export function createRaza(payload) {
    return async function (dispatch) {
        try {
            let res = await axios.post('http://localhost:3001/dogs/', payload);
            console.log(res.data);           
        } catch (err) {
            console.log(err);
            alert('No se pudo crear la nueva raza');/////////////////////
            throw new Error('No se pudo crear la nueva raza');
        }
    }
};

// export function removeRaza(id) {
//     return { type:REMOVE_RAZA, id }
// };

export function getAllTemperaments() {
    return async function (dispatch) {
        try {
            let res = await axios.get('http://localhost:3001/temperament/')
                dispatch({ type:GET_TEMPS, payload:res.data})
        } catch (err) {
            console.log(err);
        }
    }
};