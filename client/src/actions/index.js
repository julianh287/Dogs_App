import axios from 'axios';
export const GET_RAZA = 'GET_RAZA';
export const GET_DETAILS = 'GET_DETAILS';
export const CREATE_RAZA = 'CREATE_RAZA';
export const GET_TEMPS = 'GET_TEMPS';
export const RELOAD_RAZA = 'RELOAD_RAZA';


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
        try {
            let res = await axios.get('http://localhost:3001/dogs/' + id)
                    dispatch({ type:GET_DETAILS, payload:res.data})    
        } catch (err) {
            console.log(err)
        }
    }
};

export function createRaza(payload) {
    return async function (dispatch) {
        try {
            let res = await axios.post('http://localhost:3001/dogs/', payload);
            console.log(res.data);           
        } catch (err) {
            console.log(err);
            alert('No se pudo crear la nueva raza');
            throw new Error('No se pudo crear la nueva raza');
        }
    }
};

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

export function reloadRaza(payload){
    return {
        type:RELOAD_RAZA,
        payload
    }
};

// export function filterByRaza(payload, value) {
//     if(value==='existente'){
//         payload = payload.filter(el => {
//             if(typeof el.id =='number'){
//                 return el;
//             }
//         })
//     }
//     if(value==='created'){
//         payload = payload.filter(el => {
//             if(typeof el.id !=='number'){//UUID
//                 return el;
//             }
//         })
//     }
//     return {
//         type: FILTRAR_RAZA,
//         payload
//     }
// };