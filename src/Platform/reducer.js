import * as constants from './constants';

const initialState = {
    initialized: false,
    suppliers: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.LOAD_SUPPLIERS:
            return { ...state, suppliers: action.payload, initialized: true };
        default:
            return state;
    }
};