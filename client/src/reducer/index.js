import {GET_RAZA, CREATE_RAZA, REMOVE_RAZA, GET_DETAILS} from '../actions/index.js';

const initialState = {
    // razasCreated : [],
    razasLoaded : [],
    // razaDetail : {}
};

function rootReducer(state = initialState, action) {
    switch(action.type){
        case GET_RAZA:
            return {
                ...state,
                razasLoaded: action.payload
            };
        // case CREATE_RAZA:
        //     return {
        //         ...state,
        //         razasCreated: state.razasCreated.concat(action.payload)
        //     };
        // case REMOVE_RAZA:
        //     return {
        //         ...state,
        //         razasCreated: state.razasCreated.filter(raza => raza.id!==action.id)
        //     };
        // case GET_DETAILS:
        //     return {
        //         ...state,
        //         razaDetail: action.payload
        //     };
        default: return state;
    }
};

export default rootReducer;