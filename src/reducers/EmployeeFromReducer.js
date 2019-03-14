import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            const newState= {};
            // newState[action.payload.prop] = action.payload.value;
            // action.payload==={prop:'name', value:'jane'}
            return {...state, [action.payload.prop]:action.payload.value} // key interpolation
        default:
            return state
    }
}