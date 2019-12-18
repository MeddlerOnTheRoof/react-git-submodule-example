import * as constants from './constants';

export const loadSuppliers = suppliers => {
    return {
        type: constants.LOAD_SUPPLIERS,
        payload: suppliers
    };
};