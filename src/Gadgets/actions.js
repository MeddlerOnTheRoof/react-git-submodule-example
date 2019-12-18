import * as constants from './constants';

export const loadGadgets = gadgets => {
    return {
        type: constants.LOAD_GADGETS,
        payload: gadgets
    };
};

export const loadGadgetCategories = gadgetCategories => {
    return {
        type: constants.LOAD_GADGET_CATEGORIES,
        payload: gadgetCategories
    }
};


export const addGadget = gadget => {
    return {
        type: constants.CREATE_GADGET,
        payload: gadget
    };
};

export const updateGadget = updatedGadget => {
    return {
        type: constants.UPDATE_GADGET,
        payload: updatedGadget
    };
};

export const deleteGadget = id => {
    return {
        type: constants.DELETE_GADGET,
        payload: id
    };
};
