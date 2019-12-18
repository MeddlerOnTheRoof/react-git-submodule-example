import * as constants from './constants';

const initialState = {
    initialized: false,
    gadgets: [],
    gadgetCategories: []
};

export default (state = initialState, action) => {
    let index;
    let gadgets;
    switch (action.type) {
        case constants.LOAD_GADGETS:
            return { ...state, gadgets: action.payload, initialized: true };
        case constants.LOAD_GADGET_CATEGORIES:
            return { ...state, gadgetCategories: action.payload };

        case constants.CREATE_GADGET:
            gadgets = state.gadgets.slice();

            action.payload.id = state.gadgets.length + 1;

            gadgets.push(action.payload);

            return { ...state, gadgets: gadgets };
        case constants.UPDATE_GADGET:
            index = state.gadgets.findIndex(w => w.id === action.payload.id);

            gadgets = Object.assign([], state.gadgets, { [index]: action.payload });

            debugger;

            return { ...state, gadgets };
        case constants.DELETE_GADGET:
            index = state.gadgets.findIndex(w => w.id === action.payload);

            // non-destructive remove gadget with matching id from array
            // note that splice does not error if given index out of bounds
            return { ...state, gadgets: [...state.gadgets.slice(index, 1), ...state.gadgets.slice(index + 1)] };
        default:
            return state;
    }
};