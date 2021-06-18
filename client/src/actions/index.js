import axios from 'axios';
export const GET_RAZA = 'GET_RAZA';
export const GET_DETAILS = 'GET_DETAILS';
export const CREATE_RAZA = 'CREATE_RAZA';
export const REMOVE_RAZA = 'REMOVE_RAZA';
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
    return function (dispatch) {
        axios.get('http://localhost:3001/dogs/' + id)
            .then (response => response.json())
            .then (json => {
                dispatch({ type:GET_DETAILS, payload:json})
            })
    }
};

export function createRaza(payload) {
    return { type:CREATE_RAZA, payload }
};

export function removeRaza(id) {
    return { type:REMOVE_RAZA, id }
};