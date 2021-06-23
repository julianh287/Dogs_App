import {GET_RAZA, CREATE_RAZA, GET_DETAILS, GET_TEMPS, RELOAD_RAZA} from '../actions/index.js';

const initialState = {
    razasCreated : [],
    razasLoaded : [],
    razaDetail : [],
    tempsLoaded : []
};

function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_RAZA:
            return {
                ...state,
                razasLoaded: action.payload
            };
        case CREATE_RAZA:
            return {
                ...state,
                razasCreated: state.razasCreated.concat(action.payload)
            };
        case GET_DETAILS:
            return {
                ...state,
                razaDetail: action.payload
            };
        case GET_TEMPS:
            return {
                ...state,
                tempsLoaded: action.payload
            };
        case RELOAD_RAZA:
            return {
                ...state,
                razasLoaded: action.payload
            }
        default: return state;
    }
};

export default rootReducer;